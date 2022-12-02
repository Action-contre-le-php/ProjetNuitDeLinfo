export default class Prerequisite {
    answersIds: number[];
    allMandatory: boolean;

    constructor(AnswersIds: number[], AllMandatory: boolean) {
        this.answersIds = AnswersIds;
        this.allMandatory = AllMandatory;
    }
}