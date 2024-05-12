import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Question {
  /**
   * The id of the question
   * @example '1f7282e4-3183-42bf-b151-c98d80afc41e'
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * The type of the question
   * @example 'multiple'
   */
  @Column()
  type: string;

  /**
   * The difficulty of the question
   * @example 'medium'
   */
  @Column()
  difficulty: string;

  /**
   * The category of the question
   * @example 'Entertainment'
   */
  @Column()
  category: string;

  /**
   * The question
   * @example 'The French word to travel is "Travail"'
   */
  @Column()
  question: string;

  /**
   * The correct_answer of the question
   * @example 'False'
   */
  @Column()
  correct_answer: string;

  /**
   * The bad answer index 0 of the question
   * @example 'True'
   */
  @Column()
  bad_answer_0: string;

  /**
   * The bad answer index 1 of the question
   * @example 'Benjamin Gates'
   */
  @Column()
  bad_answer_1: string;

  /**
   * The bad answer index 2 of the question
   * @example 'Bill Murray'
   */
  @Column()
  bad_answer_2: string;

  constructor(question?: any) {
    if (question) {
      this.type = question.type;
      this.difficulty = question.difficulty;
      this.category = question.category;
      this.question = question.question;
      this.correct_answer = question.correct_answer;
      this.bad_answer_0 = question.incorrect_answers[0];
      this.bad_answer_1 = question.incorrect_answers[1];
      this.bad_answer_2 = question.incorrect_answers[2];
    }
  }
}
