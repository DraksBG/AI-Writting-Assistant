import axios from "axios";
import { OpenAIRequestConfig, OpenAIResponse } from "./types";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export class OpenAIService {
  private baseUrl: string = "https://api.openai.com/v1/chat/completions";

  private getApiKey(): string {
    const apiKey = process.env.OPENAI_API_KEY || "";
    if (!apiKey) {
      console.error("WARNING: OPENAI_API_KEY is not defined in environment variables!");
      throw new Error("OPENAI_API_KEY is not defined");
    }
    return apiKey;
  }

  async makeRequest<T>(config: OpenAIRequestConfig): Promise<T> {
    try {
      const apiKey = this.getApiKey();
      const response = await axios.post<T>(
        this.baseUrl,
        {
          model: config.model || "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: config.systemPrompt,
            },
            {
              role: "user",
              content: config.userInput,
            },
          ],
          max_tokens: config.maxTokens || 150,
          n: config.n || 1,
          stop: config.stop || null,
          temperature: config.temperature || 0.3,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      return response.data as T;
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      throw error;
    }
  }

  async getSingleCompletion(
    systemPrompt: string,
    userInput: string
  ): Promise<string> {
    const response = await this.makeRequest<OpenAIResponse>({
      systemPrompt,
      userInput,
      model: "gpt-4o-mini",
    });

    return response.choices[0].message.content.trim();
  }

  async getMultipleCompletions(
    systemPrompt: string,
    userInput: string,
    n: number
  ): Promise<string[]> {
    const response = await this.makeRequest<OpenAIResponse>({
      systemPrompt,
      userInput,
      model: "gpt-4o-mini",
      n,
    });
    return response.choices.map((choice) => choice.message.content.trim());
  }
}

export const openAiService = new OpenAIService();

export default openAiService;
