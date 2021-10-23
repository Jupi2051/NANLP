import "./styles/index.scss";
import FormatResponse from "./FormatResponse";

const TitleContainer = document.getElementById("OutcomeTitle");
const AnswerContainer = document.getElementById("AnswerContainer");
const Form = document.getElementById("EvaluationForm");
const TextContainer = document.getElementById("ArticleContainer");

async function Evaluate(ArticleData)
{
    const response = await fetch("/Evaluate", 
    {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({article: ArticleData})
    });
    return response;
}

async function OnEvaluate(event)
{
    TitleContainer.textContent = "Loading...";
    AnswerContainer.innerHTML = "";
    event.preventDefault();
    let result;
    try {
        result = await (await Evaluate(TextContainer.value)).json();
    } catch {
        TitleContainer.textContent = "Error while trying to request data.";
        AnswerContainer.innerHTML = "";
        return;
    }
    if (result.status.msg === "OK")
    {
        TitleContainer.textContent = "Results:";
        AnswerContainer.innerHTML = FormatResponse(result)
    }
    else
    {
        TitleContainer.textContent = "An Error has Occured";
        AnswerContainer.innerHTML = "Error Contents.";
    }
}

export {
    Evaluate,
    OnEvaluate,
}