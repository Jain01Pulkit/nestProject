import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  // Repository is a file in which whole database query related work is done.
  // forFeature makes use of configuration from forRoot for a specific provider. This usually creates and injection token.
  imports: [TypeOrmModule.forFeature([User])], //// This step creates a repository for us bts.
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
