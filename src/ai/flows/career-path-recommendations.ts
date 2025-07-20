'use server';
/**
 * @fileOverview Provides personalized career path suggestions based on resume content.
 *
 * - careerPathRecommendations - A function that suggests career paths based on resume content.
 * - CareerPathRecommendationsInput - The input type for the careerPathRecommendations function.
 * - CareerPathRecommendationsOutput - The return type for the careerPathRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerPathRecommendationsInputSchema = z.object({
  resumeContent: z.string().describe('The content of the resume to analyze.'),
});
export type CareerPathRecommendationsInput = z.infer<typeof CareerPathRecommendationsInputSchema>;

const CareerPathRecommendationsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of personalized career path suggestions.'),
  reasoning: z.string().describe('The reasoning behind the career path suggestions.'),
});
export type CareerPathRecommendationsOutput = z.infer<typeof CareerPathRecommendationsOutputSchema>;

export async function careerPathRecommendations(input: CareerPathRecommendationsInput): Promise<CareerPathRecommendationsOutput> {
  return careerPathRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'careerPathRecommendationsPrompt',
  input: {schema: CareerPathRecommendationsInputSchema},
  output: {schema: CareerPathRecommendationsOutputSchema},
  prompt: `You are a career advisor providing personalized career path suggestions based on a resume.

  Analyze the resume content and provide a list of potential career paths that align with the skills, experience, and interests described in the resume.
  Explain the reasoning behind each suggestion.

  Resume Content:
  {{resumeContent}}`,
});

const careerPathRecommendationsFlow = ai.defineFlow(
  {
    name: 'careerPathRecommendationsFlow',
    inputSchema: CareerPathRecommendationsInputSchema,
    outputSchema: CareerPathRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
