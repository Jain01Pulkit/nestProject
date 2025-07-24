import { Module } from '@nestjs/common';
import { ReportsModule } from 'src/reports/reports.module';
import { UsersModule } from 'src/users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // forRoot configure a module one time. This is either for global service or re-used configuration internally.
      type: 'sqlite',
      // sqlite is a file based database, so there is a db.sqlite file generated in the folder. It will store all the database related things here.
      // We can see raw data in that file.
      database: 'db.sqlite',
      entities: [User, Report], /// things that needs to be stored inside our DB.
      synchronize: true, // only use in dev env. This will update the structure of db tables automatically if there is some changes in entity(schema).
      // use migration files in production env.
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
