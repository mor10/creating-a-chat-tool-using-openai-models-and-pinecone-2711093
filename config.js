import OpenAI from "openai";

// Choose between GitHub Models or OpenAI API. Default "github"
export const MODEL_PROVIDER = "github"; // "github" or "openai"

const token = import.meta.env.VITE_GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
console.log(token)
// OpenAI config
export const openai = new OpenAI({
  ...(MODEL_PROVIDER === "github" ? { baseURL: endpoint } : {}),
  apiKey: MODEL_PROVIDER === "github" ? token : "OPENAI_API_KEY",
  dangerouslyAllowBrowser: true,
});
