import Answer from "./answer";
import Link from "./link";

export default class Dialog {
    id: number;
    title: string;
    contents: string;
    answersId: number[];
    links: Link[]

    constructor(Id: number, Title: string, Contents: string, AnswersId: number[], Link: Link[]) {
        this.id = Id
        this.title = Title;
        this.contents = Contents;
        this.answersId = AnswersId;
        this.links = Link;
    }
}