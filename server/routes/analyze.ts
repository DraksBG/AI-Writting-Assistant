import axios from "axios";
import express, { Response, Router } from "express";
import { AnalyzeRequest } from "../types";

const analyzeRoute: Router = express.Router();

analyzeRoute.post("/", async (req: AnalyzeRequest, res: Response) => {
  const { sentence } = req.body;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that analyzes and rephrases sentences. Only return the rephrased sentence, nothing else.",
          },
          {
            role: "user",
            content: `Analyze the following sentence and rephrase it: ${sentence}`,
          },
        ],
        max_tokens: 150,
        n: 3,
        stop: null,
        temperature: 0.3,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    const rephrasedSentences = response.data.choices.map(
      (choice: { message: { content: string } }) => choice.message.content
    );
    res.status(200).json(rephrasedSentences ?? []);
  } catch (error: unknown) {
    console.log(error);
    res.status(500).json({
      error: `Failed to analyze sentence ${sentence} ${error instanceof Error ? error.message : 'Unknown error'}`,
    });
  }
});

export default analyzeRoute;
