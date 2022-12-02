import Prerequisite from "./Prerequisite";

export default class Answer {
    id : number = 0;
    text : string = '';
    dialogId : number;
    prerequisites : Prerequisite[];

    constructor(Id: number  ,Text:string, DialogId: number, Prerequisites: Prerequisite[]) {
        this.id = Id;
        this.text = Text;
        this.prerequisites = Prerequisites;
        this.dialogId = DialogId;
    }
}