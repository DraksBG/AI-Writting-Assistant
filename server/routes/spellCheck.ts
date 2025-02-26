import { SpellCheckRequest } from "../types";
import express, { Response, Router } from "express";
import openAiService from "../services/open-ai/open-ai-service";
import { PROMPTS } from "../services/open-ai/prompts";

const spellCheckRoute: Router = express.Router();

spellCheckRoute.post("/", async (req: SpellCheckRequest, res: Response) => {
  const { sentence } = req.body;
  try {
    const correctedSentence = await openAiService.getSingleCompletion(
      PROMPTS.SPELL_CHECK,
      sentence
    );
    res.json(correctedSentence);
  } catch (error: unknown) {
    console.log(error);
    res.status(500).json({
      error: `Failed to spell check sentence ${sentence} ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    });
  }
});

export default spellCheckRoute;
