import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromRequest(request.headers);

    if (token) {
      const claims = this.validateToken(token);

      if (claims) {
        request.user = claims;
        return true;
      }
    }

    return false;
  }

  extractTokenFromRequest(headers): string | null {
    const authorizationHeader = headers['authorization'];
    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
      return authorizationHeader.substring(7); // Remove 'Bearer ' prefix and return the token
    }
    throw new UnauthorizedException();
  }

  validateToken(token: string): any | null {
    try {
      const claims = this.jwtService.verify(token);
      return claims;
    } catch (error) {
      // Handle token validation errors, such as expired or invalid token
      throw new UnauthorizedException();
    }
  }
}
