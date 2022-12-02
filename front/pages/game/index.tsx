import {NextPage} from "next";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Dialog,
    DialogBody,
    DialogFooter, DialogHeader,
    Typography
} from "@material-tailwind/react";
import WikilinkComponent from "./components/WikilinkComponent";
import AnswerComponent from "./components/AnswerComponent";
import Answer from "../../models/answer";
import {useEffect, useState, Fragment} from "react";
import DialogClass from "../../models/dialog";
import {getCookie} from "cookies-next";
import User from "../../models/user";
import MoveToNextDialog from "../../service/moveToNextDialog";
import narrationService from "../../service/narrationService";

const GamePage : NextPage = () => {

    let [currentUser, setCurrentUser] = useState<User>();
    let [currentDialog, setCurrentDialog] = useState<DialogClass>();
    let [answers, setAnswers] = useState<Answer[]>([]);
    let [canGoBack, setCanGoBack] = useState<boolean>(false);
    let [deadEndPopup, setDeadEndPopup] = useState<Answer>();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    function AnswerClick(answer: Answer) {
        setCanGoBack(true);
        if (answer.deadend == false){
            narrationService.AddDialogToUserHistory(answer.id, currentUser!);
            setCurrentDialog(MoveToNextDialog(currentUser!, currentDialog!, answer, narrationService.GetDialogs(), narrationService.GetAnswers()));
        } else {
            handleOpen()
            setDeadEndPopup(answer);
        }
    }

    function GoBack() {
        if (canGoBack && currentUser) {
            setCanGoBack(false);
            setCurrentDialog(narrationService.GetDialog(currentUser?.lastDialogId));
            narrationService.RemoveLastAction(currentUser!);
            setDeadEndPopup(undefined);
        }
    }

    useEffect(() => {
        let firstDialog : DialogClass|undefined = narrationService.GetDialog(0);

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
                <CardHeader className={"w-full"}>
                    <div className={"w-full p-5 flex space-x-5 justify-center"}>
                        {canGoBack ?
                            (<Button size={"sm"} onClick={() => GoBack()}>
                            Back
                        </Button>) : (<div></div>)}

                        {currentUser ? <div>Vous êtes : {currentUser!.name}</div> : ""}
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
            {deadEndPopup === undefined?
                <div className={"flex flex-col md:flex-row md:overflow-hidden md:flex-wrap md:justify-center"}>
                    {answers.map((answer, index) => {
                        return <AnswerComponent answer={answer} key={index} onClick={()=>AnswerClick(answer)} />
                    })}
                </div> :
                <Fragment>
                    <Dialog open={open} handler={handleOpen}>
                            <DialogHeader>{deadEndPopup.deadend}</DialogHeader>
                            <DialogBody divider>
                                {deadEndPopup.deadend}
                            </DialogBody>
                    </Dialog>
                </Fragment>
            }

        </div>
    );
}

export default GamePage;