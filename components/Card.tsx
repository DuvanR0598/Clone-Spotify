import { Button } from "./Button";

interface CardProps{
    tittle: string;
    description: string;
    buttonText: string;
}

const Card = ({buttonText, tittle, description}: CardProps) => {
    return(
        <div className="bg-dark-gray rounded-lg p-5 flex flex-col items-start gap-4">
            <span className="font-bold text-md"> {tittle} </span>
            <span className="text-sm font-semibold"> {description} </span>
            <Button text={buttonText} type='secundary'/>
        </div>
    );
};
 
export { Card };