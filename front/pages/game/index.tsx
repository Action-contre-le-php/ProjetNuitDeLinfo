import {NextPage} from "next";
import {Card, CardBody, CardFooter, Typography} from "@material-tailwind/react";
import WikilinkComponent from "./components/WikilinkComponent";
import AnswerComponent from "./components/AnswerComponent";
import Answer from "../../models/answer";
import {useEffect, useState} from "react";
import Dialog from "../../models/dialog";
import narrationService from "../../service/narrationService";

const GamePage : NextPage = () => {

    let [currentDialog, setCurrentDialog] = useState<Dialog>();
    let [answers, setAnswers] = useState<Answer[]>([]);

    useEffect(() => {
        let firstDialog : Dialog|undefined = narrationService.GetDialog(0);

        if (firstDialog === undefined){
            throw new Error("No dialog with id 0");
        }

        setCurrentDialog(firstDialog);
        setAnswers(narrationService.GetDialogAnswers(firstDialog.id));
    }, []);

    if (currentDialog === undefined){
        return <div></div>
    }

    return (
        <div className={"flex flex-col space-y-10 text-center overflow-auto"}>
            <Card id={"DialogCard"} className={"h-96 flex flex-col m-5"}>
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
                    return <AnswerComponent answer={answer} key={index}/>
                })}
            </div>
        </div>
    );
}

export default GamePage;