import Dialog from "./dialog";

export default class Answer {
    id : number = 0;
    text : string = '';
    dialogId : number;
    prerequisites : number[];

    constructor(Id: number  ,Text:string, DialogId: number, Prerequisites: number[]) {
        this.id = Id;
        this.text = Text;
        this.prerequisites = Prerequisites;
        this.dialogId = DialogId;
    }
}