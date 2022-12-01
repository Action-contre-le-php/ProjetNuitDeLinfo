import {Card, CardBody, Typography} from "@material-tailwind/react";
import {Answer} from "../../../models/answer";

type AnswerComponentType = {
    answer: Answer,
    onClick?: any
}

const AnswerComponent = ({answer, onClick}:AnswerComponentType) => {

    return (
        <Card className={"w-full md:w-[35rem] select-none cursor-pointer md:ml-5 mb-5 min-h-[10rem]"}>
            <CardBody>
                <Typography>
                    {answer.text}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default AnswerComponent;