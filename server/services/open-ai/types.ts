export interface OpenAIRequestConfig {
    systemPrompt: string;
    userInput:string;
    model?: string;
    maxTokens?: number;
    n?: number;
    stop?: string[] | null;
    temperature?: number;
}

export interface OpenAIMessage {
    role: string;
    content: string;
}

export interface OpenAIChoice {
    message: OpenAIMessage;
    index: number;
    finish_reason: string;
}

export interface OpenAIResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: OpenAIChoice[];
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
}