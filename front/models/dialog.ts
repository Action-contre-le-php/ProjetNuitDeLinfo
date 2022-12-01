import {Answer} from "./answer";

export class Dialog {
    id: number;
    title: string;
    contents: string;
    answersId: number[];
    link: string[]

    constructor(Id: number, Title: string, Contents: string, AnswersId: number[], Link: string[]) {
        this.id = Id
        this.title = Title;
        this.contents = Contents;
        this.answersId = AnswersId;
        this.link = Link;
    }
}