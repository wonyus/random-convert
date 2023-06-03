import { Injectable, NestMiddleware, UseGuards } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';
import * as dotenv from 'dotenv';
import { AuthGuard } from '@nestjs/passport';
import { AccessTokenGuard } from 'src/core/guards/accessToken.guard';
import { DoesUserExist } from 'src/core/guards/doesUserExist.guard';

dotenv.config();
@Injectable()
export class ReverseProxyAuthMiddleware implements NestMiddleware {
  private proxy = createProxyMiddleware({
    target: process.env.AUTH_SERVICE,
    pathRewrite: { '/api/v1/auth-service/': '/' },
    changeOrigin: true,
    secure: true,

    onProxyReq: (proxyReq, req, res) => {
      
      console.log(
        `[NestMiddleware]: Proxying ${req.method} request originally made to '${req.originalUrl}'...`,
        );
      },
      
      onProxyRes: (proxyRes, req, res) => {
        const headers = proxyRes.headers;
        const keys = Object.keys(headers);
        keys.forEach((key) => {
          const header = headers[key];
          res.setHeader(key.trim(), header);
        });
      },
    });
    
    use(req: any, res: any, next: (error?: any) => void) {
      this.proxy(req, res, next);
      console.log(req.headers);
    // if (false) {
    //   this.proxy(req, res, next);
    // } else {
    //   res.status(401).json({ message: 'Unauthorized' });
    // }
  }
}
