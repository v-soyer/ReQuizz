import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { Question } from './question.entity';

@Controller('question')
export class QuestionController {
  private logger = new Logger('Question Controller');
  constructor(private questionService: QuestionService) {}

  /**
   * Create a new Question
   */
  @Get()
  @ApiBadRequestResponse({ description: 'incorrect body' })
  createBusinessRule(): Promise<any> {
    this.logger.verbose(`[POST]/question route processed`);
    return this.questionService.create();
  }
}
