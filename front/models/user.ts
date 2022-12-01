import {Answer} from "./answer";
import {Dialog} from "./dialog";

export class User{

    constructor(Name : string, History : Answer[], CurrentDialog: Dialog, LastDialog: Dialog) {
        this.name = Name
        this.historyAnswer = History
        this.currentDialog = CurrentDialog
        this.lastDialog = LastDialog
    }

    name : string
    historyAnswer : Answer []
    currentDialog: Dialog
    lastDialog : Dialog

}