import Answer from "./answer";
import Dialog from "./dialog";

export default class User{
    name : string;
    historyAnswersIds : number[];
    currentDialogId: number;
    lastDialogId : number;

    constructor(Name : string, CurrentDialogId: number, LastDialogId: number) {
        this.name = Name;
        this.historyAnswersIds = [];
        this.currentDialogId = CurrentDialogId;
        this.lastDialogId = LastDialogId;
    }
}