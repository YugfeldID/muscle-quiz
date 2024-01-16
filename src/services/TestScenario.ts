import { Muscle, MusclePropertyValue } from '../models/Muscle';
import { Answer, TestModel } from '../models/TestModel';
import { beginTestGenerator } from './test_generators/BeginTestGenerator';
import { endTestGenerator } from './test_generators/EndTestGenerator';
import { functionsTestGenerator } from './test_generators/FunctionsTestGenerator';
import { nameTestGenerator } from './test_generators/NameTestGenerator';
import { TestGenerator } from './test_generators/TestGenerator';
import { TestSettings } from './TestSettings';
import { getRandomElement } from './utils/ArrayUtils';

export type Score = {
    allAnswersCount: number;
    correctAnswersCount: number;
}

export class TestScenario {
    private testGenerators: TestGenerator<MusclePropertyValue>[] = [
        beginTestGenerator,
        endTestGenerator,
        functionsTestGenerator,
        nameTestGenerator,
    ];

    private tests: TestModel[] = [];
    private correctAnswersCount = 0;
    private muscles: Muscle[] = [];

    private allAnswersCount = TestSettings.DEFAULT_TESTS_COUNT;

    public start(muscles: Muscle[]): void {
        this.tests = [];
        this.correctAnswersCount = 0;
        this.muscles = muscles;

        const testCount = this.allAnswersCount;
        while (this.tests.length < testCount) {
            const test = getRandomElement(this.testGenerators)?.generateTest(muscles);
            if (test && this.tests.every((t) => t.question !== test.question)) {
                this.tests.push(test);
            }
        }
    }

    public repeat(): void {
        this.start(this.muscles);
    }

    public getTest(): TestModel | undefined {
        return this.tests.pop();
    }

    public commitAnswer(answer: Answer): boolean {
        if (answer.isRight) {
            this.correctAnswersCount++;
        }
        return answer.isRight;
    }

    public getScore(): Score {
        return {
            allAnswersCount: this.allAnswersCount,
            correctAnswersCount: this.correctAnswersCount
        };
    }
}

export const testScenario = new TestScenario();
