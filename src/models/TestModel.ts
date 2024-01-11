export type Answer = {
    text: string,
    isRight: boolean,
}

export type TestModel = {
    question: String,
    answers: Answer[],
}
