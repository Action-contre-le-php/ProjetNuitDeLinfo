export class Answer{

    constructor(Id: number  ,Text:string ,previousAnswer: number[] ) {
        this.id = Id
        this.text = Text
        this.previousAnswer = previousAnswer
    }

    id : number = 0
    text : string = ''
    previousAnswer : number[] = [];
}