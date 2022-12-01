import {NextPage} from "next";
import {Card, CardBody, CardFooter, Typography} from "@material-tailwind/react";
import WikilinkComponent from "./components/WikilinkComponent";
import AnswerComponent from "./components/AnswerComponent";
import {Answer} from "../../models/answer";

const GamePage : NextPage = () => {

    const testAnswer : Answer = new Answer(0, "Test answer", [0], 0);

    return (
        <div className={"flex flex-col space-y-10 text-center overflow-auto"}>
            <Card id={"DialogCard"} className={"h-96 flex flex-col m-5"}>
                <CardBody className={"flex-grow"}>
                    <Typography>
                        Dialog Text Here
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex justify-between py-3">
                    <WikilinkComponent title={"Test"} link={"test"}/>
                </CardFooter>
            </Card>

            <div className={"flex flex-col md:flex-row md:overflow-hidden md:flex-wrap md:justify-center"}>
                <AnswerComponent answer={testAnswer}/>
                <AnswerComponent answer={testAnswer}/>
                <AnswerComponent answer={testAnswer}/>
                <AnswerComponent answer={testAnswer}/>
                <AnswerComponent answer={testAnswer}/>
                <AnswerComponent answer={testAnswer}/>
                <AnswerComponent answer={testAnswer}/>
                <AnswerComponent answer={testAnswer}/>
            </div>
        </div>
    )
}

export default GamePage;