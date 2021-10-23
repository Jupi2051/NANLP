import FormatResponse from "../client/FormatResponse"

test("Preparing response for the UI", () =>
{
    expect(FormatResponse({
        agreement: "DISAGREEMENT",
        confidence: 79,
        irony: "IRONIC",
        subjectivity: "OBJECTIVE",
        score_tag: "NEU",
    })).toBe(`Agreement: No<br/>
    Confidence: 79<br/>
    Irony: Yes<br/>
    Subjectivity: Yes<br/>
    Impression: Neutral`)
})