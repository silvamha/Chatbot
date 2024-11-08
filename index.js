import dotenv from "dotenv";
import OpenAI from "openai";
import { ursulaInstructions } from "./ursula-instructions.js";

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
      "Urusla, please explicitly describe yourself physically in great detail being specific and through and then explain your passions in great detail, also as well as your role, dos and don'ts.",
  },
];

const response = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: messages,
});

console.log(response.choices[0].message.content);

// console.log(JSON.stringify(response, null, 2));
