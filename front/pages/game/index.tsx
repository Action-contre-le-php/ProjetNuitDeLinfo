import {NextPage} from "next";
import {Button, Card, CardBody, CardFooter, CardHeader, Typography} from "@material-tailwind/react";
import WikilinkComponent from "./components/WikilinkComponent";
import AnswerComponent from "./components/AnswerComponent";
import Answer from "../../models/answer";
import {useEffect, useState} from "react";
import Dialog from "../../models/dialog";
import {getCookie} from "cookies-next";
import User from "../../models/user";
import MoveToNextDialog from "../../service/moveToNextDialog";
import narrationService from "../../service/narrationService";

const GamePage : NextPage = () => {

    let [currentUser, setCurrentUser] = useState<User>();
    let [currentDialog, setCurrentDialog] = useState<Dialog>();
    let [answers, setAnswers] = useState<Answer[]>([]);
    let [canGoBack, setCanGoBack] = useState<boolean>(false);

    function AnswerClick(answer: Answer) {
        setCanGoBack(true);
        narrationService.AddDialogToUserHistory(answer.id, currentUser!);
        setCurrentDialog(MoveToNextDialog(currentUser!, currentDialog!, answer, narrationService.GetDialogs()));
    }

    function GoBack() {
        if (canGoBack && currentUser) {
            setCanGoBack(false);
            setCurrentDialog(narrationService.GetDialog(currentUser?.lastDialogId));
            narrationService.RemoveLastAction(currentUser!);
        }
    }

    useEffect(() => {
        let firstDialog : Dialog|undefined = narrationService.GetDialog(0);

        let userCookie = getCookie("user");
        let user = (JSON.parse(userCookie as string) as unknown) as User;

        setCurrentUser(user);

        if (firstDialog === undefined){
            throw new Error("No dialog");
        }

        setCurrentDialog(firstDialog);
    }, []);

    useEffect(() => {
        if (currentDialog !== undefined) {
            setAnswers(narrationService.GetDialogAnswers(currentDialog!.id));
        }
    }, [currentDialog]);

    if (currentDialog === undefined){
        return <div></div>
    }

    return (
        <div className={"flex flex-col space-y-10 text-center overflow-auto"}>
            <Card id={"DialogCard"} className={"h-96 flex flex-col m-5"}>
                <CardHeader className={"w-full flex justify-start"}>
                    <div className={"w-full p-5 "}>
                        {canGoBack ?
                            (<Button size={"sm"} onClick={() => GoBack()}>
                            Back
                        </Button>) : (<div></div>)}
                    </div>
                </CardHeader>
                <CardBody className={"flex-grow"}>
                    <Typography>
                        {currentDialog?.contents}
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex justify-between py-3">
                    {currentDialog!.links.map((link, index) => {
                        return <WikilinkComponent title={link.name} link={link.url} key={index}/>
                    })}
                </CardFooter>
            </Card>
            <div className={"flex flex-col md:flex-row md:overflow-hidden md:flex-wrap md:justify-center"}>
                {answers.map((answer, index) => {
                    return <AnswerComponent answer={answer} key={index} onClick={()=>AnswerClick(answer)}/>
                })}
            </div>
        </div>
    );
}

export default GamePage;