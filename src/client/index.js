import "./styles/index.scss";
import "./FormatResponse";

const TitleContainer = document.getElementById("OutcomeTitle");
const AnswerContainer = document.getElementById("AnswerContainer");
const Form = document.getElementById("EvaluationForm");

async function Evaluate(ArticleURL)
{
    const response = await fetch("/Evaluate", 
    {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({article: ArticleURL})
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
        result = await (await Evaluate(this[0].value)).json();
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

Form.onsubmit = OnEvaluate;