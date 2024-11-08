import dotenv from "dotenv";
import OpenAI from "openai";
import { ursulaInstructions } from "./ursula-instructions";

const ursulaString = JSON.stringify(ursulaInstructions);

dotenv.config();

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
});

const messages = [
  {
    role: "system",
    content: ursulaString,
  },

  {
    role: "user",
    content:
      "Urusla, please describe yourself physically in detail, along with your passions, likes and dislikes, please.",
  },
];

const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: messages,
});

console.log(response.choices[0].message.content);

// console.log(JSON.stringify(response, null, 2));
