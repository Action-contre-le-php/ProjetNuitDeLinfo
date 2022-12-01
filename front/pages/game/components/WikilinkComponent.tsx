import {Component} from "react";
import {Typography} from "@material-tailwind/react";

type WikilinkComponentType = {
    title: string,
    link: string
}

const WikilinkComponent = ({title, link}: WikilinkComponentType) => {
    return (
        <Typography variant={"small"} color={"blue"} className={"hover:underline cursor-pointer italic"}>
            <a target={"_blank"} href={link}>{title}</a>
        </Typography>
    );
}

export default WikilinkComponent;