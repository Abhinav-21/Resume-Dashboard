'use server';
/**
 * @fileOverview Generates potential recruiter questions and answers based on resume content.
 *
 * - generateRecruiterQuestions - A function that creates Q&A pairs.
 * - GenerateRecruiterQuestionsInput - The input type for the function.
 * - GenerateRecruiterQuestionsOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuestionAnswerPairSchema = z.object({
  question: z.string().describe('A potential question a recruiter might ask.'),
  answer: z
    .string()
    .describe('A well-crafted, concise answer to the question.'),
});

const GenerateRecruiterQuestionsInputSchema = z.object({
  resumeContent: z
    .string()
    .describe('The full content of the resume to analyze.'),
});
export type GenerateRecruiterQuestionsInput = z.infer<
  typeof GenerateRecruiterQuestionsInputSchema
>;

const GenerateRecruiterQuestionsOutputSchema = z.object({
  qna: z
    .array(QuestionAnswerPairSchema)
    .describe('A list of 3-5 question and answer pairs.'),
});
export type GenerateRecruiterQuestionsOutput = z.infer<
  typeof GenerateRecruiterQuestionsOutputSchema
>;

export async function generateRecruiterQuestions(
  input: GenerateRecruiterQuestionsInput
): Promise<GenerateRecruiterQuestionsOutput> {
  return recruiterQnaFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recruiterQnaPrompt',
  input: {schema: GenerateRecruiterQuestionsInputSchema},
  output: {schema: GenerateRecruiterQuestionsOutputSchema},
  prompt: `You are an expert technical recruiter and career coach. Based on the following resume, generate a list of 3-5 insightful questions that a top-tier recruiter would ask this candidate to evaluate their skills, experience, and problem-solving abilities. For each question, provide a strong, concise, and professional answer from the perspective of the candidate.

Focus on questions that dig into the projects, technical skills, and experience listed.

Resume Content:
{{{resumeContent}}}
`,
});

const recruiterQnaFlow = ai.defineFlow(
  {
    name: 'recruiterQnaFlow',
    inputSchema: GenerateRecruiterQuestionsInputSchema,
    outputSchema: GenerateRecruiterQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
