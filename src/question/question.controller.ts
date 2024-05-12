import { Body, Controller, Get, Logger, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { Question } from './question.entity';

@Controller('question')
export class QuestionController {
  private logger = new Logger('Question Controller');
  constructor(private questionService: QuestionService) {}

  /**
   * Create a new Question
   */
  @Get()
  getQuestionFromOpenTDB(): Promise<Question> {
    this.logger.verbose(`[GET]/question route processed`);
    return this.questionService.getOneQuestionFromOpenTDB();
  }

  @Get('/:id')
  @ApiOkResponse({
    type: [Question],
  })
  @ApiNotFoundResponse({ description: 'Question is not found'})
  getQuestionById(@Param('id', ParseUUIDPipe) id: string): Promise<Question> {
    this.logger.verbose(`[GET]/question/${id} route processed`);
    return this.questionService.getById(id);
  }

  @Post()
  createQuestionFromOpenTDB(): Promise<Question> {
    this.logger.verbose(`[POST]/question route processed`);
    return this.questionService.create();
  }
}
