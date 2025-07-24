'use server';
/**
 * @fileOverview Generates a concise summary for a work experience entry.
 *
 * - summarizeExperience - A function that summarizes a work experience.
 * - SummarizeExperienceInput - The input type for the summarizeExperience function.
 * - SummarizeExperienceOutput - The return type for the summarizeExperience function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeExperienceInputSchema = z.object({
  company: z.string().describe("The company's name."),
  role: z.string().describe("The role or title."),
  points: z.array(z.string()).describe('Key responsibilities or achievements.'),
});
export type SummarizeExperienceInput = z.infer<typeof SummarizeExperienceInputSchema>;

const SummarizeExperienceOutputSchema = z.object({
  summary: z.string().describe('A concise, one-paragraph summary of the work experience.'),
});
export type SummarizeExperienceOutput = z.infer<
  typeof SummarizeExperienceOutputSchema
>;

export async function summarizeExperience(
  input: SummarizeExperienceInput
): Promise<SummarizeExperienceOutput> {
  return summarizeExperienceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeExperiencePrompt',
  input: {schema: SummarizeExperienceInputSchema},
  output: {schema: SummarizeExperienceOutputSchema},
  prompt: `You are a professional resume writer. Based on the following work experience details, write a concise, one-paragraph summary suitable for a resume. Focus on the key responsibilities and measurable outcomes.

Company: {{{company}}}
Role: {{{role}}}
Key Points:
{{#each points}}
- {{{this}}}
{{/each}}
`,
});

const summarizeExperienceFlow = ai.defineFlow(
  {
    name: 'summarizeExperienceFlow',
    inputSchema: SummarizeExperienceInputSchema,
    outputSchema: SummarizeExperienceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
