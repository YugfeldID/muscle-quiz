import { Muscle } from './Muscle';

export type Answer = {
    text: string,
    isRight: boolean,
}

export type TestModel = {
    question: String,
    muscle: Muscle,
    answers: Answer[],
}
