import "./styles/index.scss";
import Evaluate from "./Evaluator";

const TitleContainer = document.getElementById("OutcomeTitle");
const AnswerContainer = document.getElementById("AnswerContainer");
const Form = document.getElementById("EvaluationForm");

async function OnEvaluate(event)
{
    event.preventDefault();
    const result = await (await Evaluate(this[0].value)).json();
    console.log(result);
}

Form.onsubmit = OnEvaluate;