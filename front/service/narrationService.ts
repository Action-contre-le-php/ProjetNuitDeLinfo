import Dialog from "../models/dialog";
import Answer from "../models/answer";

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

export default {GetDialog, GetAnswer, GetDialogAnswers, GetDialogs};