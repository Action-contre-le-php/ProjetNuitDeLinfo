import {Dialog} from "./dialog";

export class Answer{

    constructor(Id: number  ,Text:string ,previousAnswer: number[], Dialog: Dialog ) {
        this.id = Id
        this.text = Text
        this.previousAnswer = previousAnswer
        this.dialog = Dialog
    }

    id : number = 0
    text : string = ''
    dialog : Dialog
    previousAnswer : number[] = [];
}