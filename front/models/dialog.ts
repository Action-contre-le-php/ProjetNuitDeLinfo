import {Answer} from "./answer";

export class Dialog {
    id: number;
    title: string;
    contents: string;
    answers: Answer[];
    link: string[]

    constructor(Id: number, Title: string, Contents: string, Answers: Answer[], Link: string[]) {
        this.id = Id
        this.title = Title;
        this.contents = Contents;
        this.answers = Answers;
        this.link = Link;
    }
}