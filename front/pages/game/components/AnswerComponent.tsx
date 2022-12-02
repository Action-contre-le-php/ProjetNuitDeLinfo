import {Card, CardBody, Typography} from "@material-tailwind/react";
import Answer from "../../../models/answer";

type AnswerComponentType = {
    answer: Answer,
    onClick?: any
}

const AnswerComponent = ({answer, onClick}:AnswerComponentType) => {

    return (
        <Card onClick={()=>onClick()} className={"w-full md:w-[35rem] md:min-h-[7rem] select-none cursor-pointer md:ml-5 mb-5 hover:scale-105 transition-all duration-100"}>
            <CardBody>
                <Typography>
                    {answer ? answer.text : ""}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default AnswerComponent;