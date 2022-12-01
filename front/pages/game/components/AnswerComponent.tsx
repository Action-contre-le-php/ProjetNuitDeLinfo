import {Card, CardBody, Typography} from "@material-tailwind/react";
import {Answer} from "../../../models/answer";

type AnswerComponentType = {
    answer: Answer,
    onClick?: any
}

const AnswerComponent = ({answer, onClick}:AnswerComponentType) => {

    return (
        <Card className={"w-full md:min-w-[20rem] select-none cursor-pointer"}>
            <CardBody>
                <Typography>
                    {answer.text}
                </Typography>
            </CardBody>
        </Card>
    );
}

export default AnswerComponent;