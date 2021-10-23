import { Evaluate } from "../client/index";
import 'regenerator-runtime/runtime'

test("Send an Async request to the server and see if you recieve an object in return", async () =>
{
    const data = await Evaluate("Hello this is a text! and it was made for testing purposes only!");
    expect(data).toBeDefined();
});