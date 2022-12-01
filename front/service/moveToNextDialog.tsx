import {User} from "../models/user";
import {Dialog} from "../models/dialog";
import {Answer} from "../models/answer";

export function MoveToNextDialog (user: User, actualDialog: Dialog, answerChoose: Answer, allDialog: Dialog[]) {
    user.lastDialogId = actualDialog.id;
    user.historyAnswersId.push(answerChoose.id);
    user.currentDialogId = answerChoose.dialogId;
    return allDialog.find(t => t.id == answerChoose.dialogId)
}