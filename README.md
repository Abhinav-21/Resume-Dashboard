# Resume Insights Dashboard

This is an interactive, AI-powered resume dashboard built with Next.js, React, ShadCN UI, Tailwind CSS, and Genkit. It showcases professional experience, projects, skills, and uses generative AI to provide career path suggestions.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or later recommended)
- [npm](https://www.npmjs.com/) or another package manager like [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of your project and add your Google AI API key. You can get a key from [Google AI Studio](https://aistudio.google.com/app/apikey).
    ```
    GEMINI_API_KEY="YOUR_API_KEY_HERE"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Deployment on Vercel/Netlify via GitHub

You can easily deploy this Next.js application using platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

1.  **Create a GitHub Repository:**
    If you haven't already, push your local repository to GitHub.
    ```bash
    git remote add origin https://github.com/your-username/your-repository-name.git
    git branch -M main
    git push -u origin main
    ```

2.  **Connect to a Hosting Provider:**
    - Go to your Vercel or Netlify dashboard.
    - Choose to create a "New Project" and select the option to "Import Git Repository".
    - Connect to your GitHub account and select the repository you just created.

3.  **Configure Project Settings:**
    - The platform should automatically detect that you're deploying a Next.js project. The default build settings are usually correct.
    - **Important:** Add your `GEMINI_API_KEY` as an environment variable in the project settings on your hosting provider's dashboard. Do not commit your `.env` file to GitHub.

4.  **Deploy:**
    - Click the "Deploy" button. Your site will be built and deployed. You'll be given a public URL to view your live resume dashboard.
