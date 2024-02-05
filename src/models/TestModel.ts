import { Muscle } from './Muscle';

export type Answer = {
    id: string,
    text: string,
    isRight: boolean,
}

type TestModelParams = {
    question: String;
    muscle: Muscle;
    answers: Answer[];
}
export class TestModel {
    question: String;
    muscle: Muscle;
    answers: Answer[];

    constructor({ question, muscle, answers}: TestModelParams) {
        this.question = question;
        this.muscle = muscle;
        this.answers = answers;
    }

    isEqual(model: TestModel) {
        return this.muscle.isEqual(model.muscle) && this.question === model.question;
    }
}
