import {genkit} from 'genkit';
import {config} from 'dotenv';
import {ollama} from '@genkit-ai/ollama';

config(); // Load environment variables from .env file

const ollamaModel = process.env.OLLAMA_MODEL || 'llama3';

export const ai = genkit({
  plugins: [
    ollama({
      host: process.env.OLLAMA_HOST,
    }),
  ],
  model: `ollama/${ollamaModel}`,
});
