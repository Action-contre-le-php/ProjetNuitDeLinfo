import {Dialog} from "./dialog";

export class Answer{
    id : number = 0;
    text : string = '';
    dialogId : number;
    previousAnswer : number[] = [];

    constructor(Id: number  ,Text:string ,previousAnswer: number[], DialogId: number ) {
        this.id = Id;
        this.text = Text;
        this.previousAnswer = previousAnswer;
        this.dialogId = DialogId;
    }
}