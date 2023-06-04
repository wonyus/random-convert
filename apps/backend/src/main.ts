import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Random and Convert')
    .setDescription('Random and Convert API')
    .setVersion('1.0')
    .addTag('Random and Convert')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // handle all user input validation globally
  app.useGlobalPipes(new ValidateInputPipe());

  app.enableCors({
    origin: [
      'http://localhost:3000',
      process.env.FRONTEND_URL,
    ],
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
    credentials: true,
  });

  // Proxy Auth
  app.use(
    '/api/v1/auth-service',
    createProxyMiddleware({
      target: process.env.AUTH_SERVICE,
      pathRewrite: { '/api/v1/auth-service/': '/' },
      changeOrigin: true,
      secure: true,
    }),
  );

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
