import { ImageSourcePropType } from 'react-native';
import { Score } from './TestScenario';

export enum ScoreLevel {
    Excellent,
    Great,
    Normal,
    Bad
}

export interface TestRatingModel {
    scoreLevel: ScoreLevel,
    descriptionText?: string,
    mainText: string,
    image?: ImageSourcePropType,
}

interface TestRatingModelInternal {
    scoreLevel: ScoreLevel,
    text: string,
    image: ImageSourcePropType,
}

const availableRatings: Map<ScoreLevel, TestRatingModelInternal> = new Map<ScoreLevel, TestRatingModelInternal>([
    [
        ScoreLevel.Excellent,
        {
            scoreLevel: ScoreLevel.Excellent,
            text: 'Браво! Ты просто анатомический ниндзя, уровень бог! 🌟 Может, пора преподавать? 😉',
            image: require('../data/images/test_results/test-result-exellent.png') as ImageSourcePropType,
        }
    ],
    [
        ScoreLevel.Great,
        {
            scoreLevel: ScoreLevel.Great,
            text: 'Ух ты! Ты на верном пути к анатомическому Олимпу. 🏆 Еще чуть-чуть и ты там!',
            image: require('../data/images/test_results/test-result-great.png') as ImageSourcePropType,
        }
    ],
    [
        ScoreLevel.Normal,
        {
            scoreLevel: ScoreLevel.Normal,
            text: 'Неплохо! Ты как анатомический детектив, разгадывающий тайны тела. 🕵️‍♂️ Еще немного тренировки и ты станешь мастером!',
            image: require('../data/images/test_results/test-result-normal.png') as ImageSourcePropType,
        }
    ],
    [
        ScoreLevel.Bad,
        {
            scoreLevel: ScoreLevel.Bad,
            text: 'Ой-ой, кажется, анатомия подшутила над тобой! 🤡 Но не сдавайся, ведь каждый великий начинал с малого. Время за книги!',
            image: require('../data/images/test_results/test-result-bad.png') as ImageSourcePropType,
        }
    ]
]);

class TestRatingService {

    public getRatingModel(score: Score): TestRatingModel {

        const correctAnswersPercentage = score.correctAnswersCount * 100 / score.allAnswersCount;
        if (correctAnswersPercentage === 100) {
            return this.prepareModel(ScoreLevel.Excellent, score);
        }

        if (correctAnswersPercentage >= 80) {
            return this.prepareModel(ScoreLevel.Great, score);
        }

        if (correctAnswersPercentage >= 60) {
            return this.prepareModel(ScoreLevel.Normal, score);
        }

        return this.prepareModel(ScoreLevel.Bad, score);
    }

    private prepareModel(scoreLevel: ScoreLevel, score: Score): TestRatingModel {
        const model = availableRatings.get(scoreLevel);
        return {
            scoreLevel: scoreLevel,
            image: model?.image,
            descriptionText: model?.text,
            mainText: `Правильных ответов: ${score.correctAnswersCount}/${score.allAnswersCount}`
        }
    }
}

export const testRatingService = new TestRatingService();
