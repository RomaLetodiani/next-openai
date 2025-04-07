"use server";

import { env } from "@/env";
import { OpenAI } from "openai";
import { ChatCompletion } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
  baseURL: env.OPENAI_BASE_URL,
});

export const action = async () => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    frequency_penalty: 0,
    messages: [
      {
        role: "system",
        content: "",
      },
      {
        role: "user",
        content: "",
      },
    ],
  });

  return processCompletion(completion);
};

const processCompletion = (completion: ChatCompletion) => {
  try {
    const content = completion.choices[0].message.content;

    const cleanedContent = content?.replace(/```json\n/, "").replace(/\n```/, "") || "";

    const result = JSON.parse(cleanedContent);

    return result;
  } catch (error) {
    throw new Error(`Failed to parse AI response: ${error}`);
  }
};
