import Dialog from "../models/dialog";
import Answer from "../models/answer";
import User from "../models/user";

let dialogs : Dialog[] = require('../test/dialogs.json')['dialogs'];
let answers : Answer[] = require('../test/anwers.json')['answers'];

function GetDialogs(){
    return dialogs;
}

function GetDialog(id:number) : Dialog | undefined {
    return dialogs.find(d => d.id == id);
}

function GetAnswer(id:number) : Answer | undefined {
    return answers.find(a => a.id == id);
}

function RemoveLastAction(user: User){
    if (user.historyAnswersIds.length > 0) {
        user.lastDialogId = -1;
        user.historyAnswersIds.pop();
    }
}

function GetDialogAnswers(dialogId:number) : Answer[] {
    let ids: number[] = dialogs.find(d => d.id == dialogId)?.answersId || [];
    let result: Answer[] = [];

    for (let i = 0; i < ids.length; i++) {
        let answer = GetAnswer(ids[i]);
        if (answer) {
            result.push(answer);
        }
    }

    return result;
}

function AddDialogToUserHistory(dialogId:number, user:User) {
    if (user.historyAnswersIds === undefined || user.historyAnswersIds.length === 0) {
        user.historyAnswersIds = [dialogId];
        return;
    }
    user.historyAnswersIds.push(dialogId);
}

export default {GetDialog, GetAnswer, GetDialogAnswers, GetDialogs, AddDialogToUserHistory, RemoveLastAction};