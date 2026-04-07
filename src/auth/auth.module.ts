import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from 'src/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
      JwtModule.register({
        secret: 'your_jwt_secret_key', // Use a secure key in production
        signOptions: { expiresIn: '1h' },
      }),],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
