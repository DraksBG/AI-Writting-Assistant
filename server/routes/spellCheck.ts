import axios from "axios";
import { SpellCheckRequest } from "../types";
import express, { Response, Router } from "express";

const spellCheckRoute: Router = express.Router();

spellCheckRoute.post("/", async (req: SpellCheckRequest, res: Response) => {
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
							"You are a helpful assistant that checks and corrects the grammar and spelling of a sentence. Only return the corrected sentence and nothing else.",
					},
					{
						role: "user",
						content: sentence,
					},
				],
				max_tokens: 150,
				n: 1,
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
		const correctedSentence = response.data.choices[0].message.content.trim();
		res.json(correctedSentence);
	} catch (error: unknown) {
		console.log(error);
		res
			.status(500)
			.json({
				error: `Failed to spell check sentence ${sentence} ${error instanceof Error ? error.message : 'Unknown error'}`,
			});
	}
});

export default spellCheckRoute;
