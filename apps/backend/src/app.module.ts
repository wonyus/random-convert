import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { MinifierModule } from './modules/minifier/minifier.module';
import { ReverseProxyAuthMiddleware } from './middleware/proxy-auth.middleware';
import { AccessTokenGuard } from 'src/core/guards/accessToken.guard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
      verifyOptions: { algorithms: ['HS256'], },
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    PostsModule,
    MinifierModule,
  ],
  controllers: [AppController],
  providers: [AccessTokenGuard, AppService],
})
export class AppModule {}
