import { Module } from '@nestjs/common';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';
import { QuestionService } from './question.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), HttpModule],
  controllers: [QuestionController],
  providers: [QuestionRepository, QuestionService],
  exports: [QuestionService],
})
export class QuestionModule {}
