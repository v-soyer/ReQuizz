import { Injectable, Logger } from '@nestjs/common';
import { QuestionRepository } from './question.repository';


@Injectable()
export class QuestionService {
  private logger = new Logger('QuestionService');

  constructor(
    private readonly questionRepository: QuestionRepository,
  ) {}
}
