import { NestFactory } from '@nestjs/core';
// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // NestFactory class creates a Nest app instance

  // Options object can be passed to the create() method to configure the application.
  // {
  // cors: {
  //   origin: 'http://localhost:4200',
  //   methods: 'GET, POST, PUT, DELETE',
  //   allowedHeaders: 'Content-Type, Accept',
  // },
  // httpsOptions: {
  //   key: fs.readFileSync('src/ssl/server.key'),
  //   cert: fs.readFileSync('src/ssl/server.crt'),
  // }
  // logger: ['error', 'warn', 'log']
  //  }

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });

  // Create app with Fastify adapter (HTTP Provider)
  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModule,
  //   new FastifyAdapter({ logger: true }),
  // );

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
