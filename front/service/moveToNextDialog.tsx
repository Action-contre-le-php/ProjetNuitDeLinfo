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
                if(answer && answer.prerequisites[j].answersIds.length > 0){
                    switch (answer.prerequisites[j].allMandatory){
                        case true:{
                            for (let k: number = 0; k < answer.prerequisites[j].answersIds.length; k++){
                                if (user.historyAnswersIds.indexOf(answer.prerequisites[j].answersIds[k]) == -1){
                                    result.answersId = result.answersId.slice(i, 1);
                                }
                            }
                            break
                        }

                        case false:{
                            let count = 0
                            for (let h: number = 0; h < answer.prerequisites[j].answersIds.length; h++){
                                if(user.historyAnswersIds.indexOf(answer.prerequisites[j].answersIds[h]) == -1){
                                    count++
                                }
                            }
                            if (count == answer.prerequisites[j].answersIds.length){
                                result.answersId = result.answersId.slice(i, 1);
                            }
                            break
                        }
                    }
                }
            }
        }
    }

    return result;
}