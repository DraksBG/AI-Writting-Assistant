import axios from "axios";
import express, { Response, Router } from "express";
import { AnalyzeRequest } from "../types";
import openAiService from "../services/open-ai/open-ai-service";
import { ANALYZE_PROMPT } from "../services/open-ai/prompts";

const analyzeRoute: Router = express.Router();

analyzeRoute.post("/", async (req: AnalyzeRequest, res: Response) => {
  const { sentence } = req.body;
  try {
    const correctedSentence = await openAiService.getSingleCompletion(
      ANALYZE_PROMPT,
      sentence
    );
    res.json(correctedSentence);
  } catch (error: unknown) {
    console.error("Error analyzing sentence:", error);
    res.status(500).json({
      error: "Failed to analyze sentence",
    });
  }
});

export default analyzeRoute;
