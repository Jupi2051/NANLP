import "./styles/index.scss";
import Evaluate from "./Evaluator";

const TitleContainer = document.getElementById("OutcomeTitle");
const AnswerContainer = document.getElementById("AnswerContainer");
const Form = document.getElementById("EvaluationForm");

async function OnEvaluate(event)
{
    TitleContainer.textContent = "Loading...";
    AnswerContainer.innerHTML = "";
    event.preventDefault();
    let result;
    try {
        result = await (await Evaluate(this[0].value)).json();
    } catch {
        TitleContainer.textContent = "Error while trying to request data.";
        AnswerContainer.innerHTML = "";
        return;
    }
    if (result.status.msg === "OK")
    {
        TitleContainer.textContent = "Results:";
        AnswerContainer.innerHTML = FormatData(result)
    }
    else
    {
        TitleContainer.textContent = "An Error has Occured";
        AnswerContainer.innerHTML = "Error Contents.";
    }
}

export default function FormatData(result)
{
    let PostivityValues = [];
    PostivityValues["P+"] = "Very positive",
    PostivityValues["P"] = "Positive",
    PostivityValues["NEU"] = "Neutral",
    PostivityValues["N"] = "Negative",
    PostivityValues["N+"] = "Very Negative",
    PostivityValues["NONE"] = "No impressions"
    return `Agreement: ${result.agreement === "AGREEMENT"? "Yes" : "No"}<br/>
    Confidence: ${result.confidence}<br/>
    Irony: ${result.irony === "IRONIC"? "Yes" : "No"}<br/>
    Subjectivity: ${result.subjectivity === "OBJECTIVE"? "Yes" : "No"}<br/>
    Impression: ${PostivityValues[result.score_tag]}`;
}

Form.onsubmit = OnEvaluate;