'use server';
/**
 * @fileOverview Generates a concise summary for a project.
 *
 * - summarizeProject - A function that summarizes a project.
 * - SummarizeProjectInput - The input type for the summarizeProject function.
 * - SummarizeProjectOutput - The return type for the summarizeProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProjectInputSchema = z.object({
  title: z.string().describe("The project's title."),
  description: z.string().describe("The project's detailed description."),
  technologies: z.array(z.string()).describe('Technologies used in the project.'),
  points: z.array(z.string()).describe('Key achievements or bullet points.'),
});
export type SummarizeProjectInput = z.infer<typeof SummarizeProjectInputSchema>;

const SummarizeProjectOutputSchema = z.object({
  summary: z.string().describe('A concise, one-paragraph summary of the project.'),
});
export type SummarizeProjectOutput = z.infer<
  typeof SummarizeProjectOutputSchema
>;

export async function summarizeProject(
  input: SummarizeProjectInput
): Promise<SummarizeProjectOutput> {
  return summarizeProjectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProjectPrompt',
  input: {schema: SummarizeProjectInputSchema},
  output: {schema: SummarizeProjectOutputSchema},
  prompt: `You are a technical project manager. Based on the following project details, write a concise, one-paragraph summary suitable for a resume. Focus on the project's goal and the key outcomes or achievements.

Project Title: {{{title}}}
Description: {{{description}}}
Technologies: {{#each technologies}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Key Points:
{{#each points}}
- {{{this}}}
{{/each}}
`,
});

const summarizeProjectFlow = ai.defineFlow(
  {
    name: 'summarizeProjectFlow',
    inputSchema: SummarizeProjectInputSchema,
    outputSchema: SummarizeProjectOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
