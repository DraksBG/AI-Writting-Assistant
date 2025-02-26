import { Request } from "express";

interface RequestBody {
    sentence: string;
}

interface ApiRequest extends Request {
    body: RequestBody;
}

export interface AnalyzeRequest extends ApiRequest {}

export interface GrammerCheckRequest extends ApiRequest {}

export interface SpellCheckRequest extends ApiRequest {}