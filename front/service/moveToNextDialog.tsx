import User from "../models/user";
import Dialog from "../models/dialog";
import Answer from "../models/answer";

export default function MoveToNextDialog (user: User, actualDialog: Dialog, answerChoose: Answer, allDialogs: Dialog[], allAnswers: Answer[]): Dialog {
    user.lastDialogId = actualDialog.id;
    user.historyAnswersIds.push(answerChoose.id);
    user.currentDialogId = answerChoose.dialogId;
    let result: Dialog | undefined = allDialogs.find(dialog => dialog.id == answerChoose.dialogId);

    if (result === undefined){
        throw new Error();
    }

    for(let i: number = 0; i < result.answersId.length; i++){
        let answer: Answer | undefined = allAnswers.find(answer => answer.id == result!.answersId[i]);
        if (answer !== undefined && answer.prerequisites.length > 0){
            for (let j: number = 0; j < answer.prerequisites.length; j++) {
                if(user.historyAnswersId.indexOf(answer.prerequisites[j]) == -1){
                    result.answersId.slice(i, 1);
                }
            }
        }
    }

    return result;
}