import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  // InjectRepository is required as we are using generic type (User) here.
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    /// the purpose of create is to make a new entity instance with the assigned data in this case email and password
    const user = this.repo.create({ email, password });
    /// save is used for actually inserting data into DB.

    // can also do this no need to call create method -> this.repo.save({email,password});
    // but the catch here is if there are hooks that you want to execute after certain operations that hooks won't be executed.
    // similarly there are insert, delete, update methods, in which hooks won't be executed if plain data is passed not entity. They are made for updating plain objects.
    // save and remove are similar methods. They expect an entity and if u pass plain data then hooks won't get executed.
    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  find(email: string) {
    console.log('emailaa', email);
    return this.repo.find({ where: { email } });
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not Found!');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('User not Found!');
    }
    return this.repo.remove(user);
  }
}
