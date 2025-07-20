'use server';
/**
 * @fileOverview Answers a recruiter's question based on resume content.
 *
 * - answerRecruiterQuestion - A function that answers a recruiter's question.
 * - AnswerRecruiterQuestionInput - The input type for the function.
 * - AnswerRecruiterQuestionOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerRecruiterQuestionInputSchema = z.object({
  resumeContent: z
    .string()
    .describe('The full content of the resume to analyze.'),
  question: z.string().describe("The recruiter's question to be answered."),
});
export type AnswerRecruiterQuestionInput = z.infer<
  typeof AnswerRecruiterQuestionInputSchema
>;

const AnswerRecruiterQuestionOutputSchema = z.object({
  answer: z
    .string()
    .describe('A well-crafted, concise answer to the question.'),
});
export type AnswerRecruiterQuestionOutput = z.infer<
  typeof AnswerRecruiterQuestionOutputSchema
>;

export async function answerRecruiterQuestion(
  input: AnswerRecruiterQuestionInput
): Promise<AnswerRecruiterQuestionOutput> {
  return recruiterQnaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recruiterQnaPrompt',
  input: {schema: AnswerRecruiterQuestionInputSchema},
  output: {schema: AnswerRecruiterQuestionOutputSchema},
  prompt: `You are the candidate whose resume is provided below. Your task is to answer the recruiter's question professionally and concisely, drawing only from the information given in the resume. Act as if you are in a real interview.

Resume Content:
{{{resumeContent}}}

Recruiter's Question:
"{{{question}}}"

Based on the resume, provide a direct and professional answer to the recruiter's question.
`,
});

const recruiterQnaFlow = ai.defineFlow(
  {
    name: 'recruiterQnaFlow',
    inputSchema: AnswerRecruiterQuestionInputSchema,
    outputSchema: AnswerRecruiterQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
