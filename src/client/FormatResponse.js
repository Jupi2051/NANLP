export default function FormatResponse(result)
{
    let PostivityValues = [];
        PostivityValues["P+"] = "Very positive",
        PostivityValues["P"] = "Positive",
        PostivityValues["NEU"] = "Neutral",
        PostivityValues["N"] = "Negative",
        PostivityValues["N+"] = "Very Negative",
        PostivityValues["NONE"] = "No impressions";
    return `Agreement: ${result.agreement === "AGREEMENT" ? "Yes" : "No"}<br/>
    Confidence: ${result.confidence}<br/>
    Irony: ${result.irony === "IRONIC" ? "Yes" : "No"}<br/>
    Subjectivity: ${result.subjectivity === "OBJECTIVE" ? "Yes" : "No"}<br/>
    Impression: ${PostivityValues[result.score_tag]}`;
}

module.exports = FormatResponse;