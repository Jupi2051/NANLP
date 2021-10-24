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
    event.preventDefault();
    let Article = TextContainer.value;
    let Regex = /\S/
    let SpacesAtStart = Article.indexOf(Article.trim())
    console.log(SpacesAtStart);
    if (Regex.test(Article))
    {
        if (SpacesAtStart < 4)
        {
            TitleContainer.textContent = "Loading...";
            AnswerContainer.innerHTML = "";
            let result;
            try {
                result = await (await Evaluate(Article)).json();
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
                TitleContainer.textContent = "Error:";
                AnswerContainer.innerHTML = result.status.msg;
            }
        }
        else
        {
            TitleContainer.textContent = "Error:";
            AnswerContainer.innerHTML = "Please make sure your text is well formatted and remove space at the beginning.";            
        }
    }
    else
    {
        TitleContainer.textContent = "Error:";
        AnswerContainer.innerHTML = "Please write in a paragraph to be evaluated.";
    }
}

export {
    Evaluate,
    OnEvaluate,
}