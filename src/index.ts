import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { ChatGPT, ChatGPTApi } from "src/entity/ChatGPT.entity";

dotenv.config();

export default class ChatGPTModel {

  async getChatGPTSummery(targetTxt: string): Promise<ChatGPT | undefined> {
    try {
      const configuration = new Configuration({
        apiKey: process.env.CHATGPT_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      const newPrompt = `Prompt: Look at the news headline below and let me know the fundamental score (0~5) and the keyword (pick 1~3)

text: ${targetTxt}

`

      const response: any = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: newPrompt,
        temperature: 0,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      })

      const data: ChatGPTApi = response.data;

      const choices = data.choices[0];
      let result: any = {};

      try {
        result = JSON.parse(choices.text);
      } catch (e) { }

      result.raw = JSON.stringify(data);
      result.prompt = newPrompt;

      return result;
    } catch (e) {
      console.error(e);
    }

    return undefined;
  }

}