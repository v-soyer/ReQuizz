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

  async getOneQuestionFromOpenTdb() {
    const question = await this.httpService.axiosRef.get(
      `https://opentdb.com/api.php?amount=1`,
    );
    return question.data;
  }

  async create(): Promise<any> {
    const res = await this.getOneQuestionFromOpenTdb();
    console.log(res);
    return res;
  }
}
