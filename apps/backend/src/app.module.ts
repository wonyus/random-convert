import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';
import { MinifierModule } from './modules/minifier/minifier.module';
import { AccessTokenGuard } from 'src/core/guards/accessToken.guard';
import { JwtModule } from '@nestjs/jwt';
import { ConvertsModule } from './modules/converts/converts.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HistoryModule } from './modules/history/history.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
@Module({
  imports: [
    PrometheusModule.register(),
    ClientsModule.register([
      { name: 'HISTORY_SERVICE', transport: Transport.TCP },
    ]),
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_SECRET,
      verifyOptions: { algorithms: ['HS256'] },
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    PostsModule,
    MinifierModule,
    ConvertsModule,
    HistoryModule,
  ],
  controllers: [AppController],
  providers: [AccessTokenGuard, AppService],
})
export class AppModule {}
