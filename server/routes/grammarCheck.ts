import axios from "axios";
import express, { Response, Router } from "express";
import { GrammerCheckRequest } from "../types";
import openAiService from "../services/open-ai/open-ai-service";
import { PROMPTS } from "../services/open-ai/prompts";
const grammarCheckRoute: Router = express.Router();

grammarCheckRoute.post("/", async (req: GrammerCheckRequest, res: Response) => {
  const { sentence } = req.body;
  try {
    const correctedSentence = await openAiService.getMultipleCompletions(
      PROMPTS.GRAMMAR_CHECK,
      sentence,
      3
    );
    res.json(correctedSentence);
  } catch (error: unknown) {
    console.log(error);
    res.status(500).json({
      error: `Failed to analyze sentence ${sentence} ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    });
  }
});

export default grammarCheckRoute;
