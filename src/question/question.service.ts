import { Injectable, Logger } from '@nestjs/common';
import { QuestionRepository } from './question.repository';
import { Question } from './question.entity';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class QuestionService {
  private logger = new Logger('QuestionService');

  constructor(
    private readonly questionRepository: QuestionRepository,
    private readonly httpService: HttpService,
  ) {}

  async getOneQuestionFromOpenTDB(): Promise<Question> {
    const question = await this.httpService.axiosRef.get(
      `https://opentdb.com/api.php?amount=1`,
    );
    return new Question(question.data.results[0]);
  }

  async getById(id: string): Promise<Question> {
    return await this.questionRepository.getById(id)
  }

  async create(): Promise<Question> {
    const question = await this.getOneQuestionFromOpenTDB();
    return await this.questionRepository.create(question);
  }
}
