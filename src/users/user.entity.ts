import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from "class-transformer";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
    // @Exclude() // whenever take an instance of a User and turn them into plain object and then into JSON, then password would be excluded. used with ClassSerializerInterceptor
  password: string;
}
