import {Answer} from "./answer";
import {Dialog} from "./dialog";

export class User{
    name : string;
    historyAnswersId : number[];
    currentDialogId: number;
    lastDialogId : number;

    constructor(Name : string, HistoryAnswersId : number[], CurrentDialogId: number, LastDialogId: number) {
        this.name = Name;
        this.historyAnswersId = HistoryAnswersId;
        this.currentDialogId = CurrentDialogId;
        this.lastDialogId = LastDialogId;
    }
}