import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionRepository {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async getById(id: string): Promise<Question> {
    return await this.questionRepository.findOneBy({
      id: id,
    });
  }

  async create(question: Question): Promise<Question> {
    try {
      await this.questionRepository.save(question);
    } catch (error) {
      // 23505 is error code for duplicate
      if (error.code === '23505') {
        throw new ConflictException('This question already exists in database');
      }
      throw new InternalServerErrorException();
    }
    return question;
  }
}
