export default async function Evaluate(ArticleURL)
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