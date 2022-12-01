import User from "../models/user";
import Dialog from "../models/dialog";
import Answer from "../models/answer";

export default function MoveToNextDialog (user: User, actualDialog: Dialog, answerChoose: Answer, allDialog: Dialog[]): Dialog {
    user.lastDialogId = actualDialog.id;
    user.historyAnswersId.push(answerChoose.id);
    user.currentDialogId = answerChoose.dialogId;
    let result: Dialog | undefined = allDialog.find(t => t.id == answerChoose.dialogId);

    if (result === undefined){
        throw new Error();
    }

    return result;
}