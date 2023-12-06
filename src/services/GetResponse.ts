import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.deepinfra.com/v1/openai",
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default async function getResponse(
  code: string,
  language: string,
  setExplanation: React.Dispatch<React.SetStateAction<string>>,
  ogExplanation: React.MutableRefObject<string>,
  signal: AbortSignal
): Promise<void> {
  let accumulatedExplanation = "";
  try {
    const completion = await openai.chat.completions.create({
      model: "codellama/CodeLlama-34b-Instruct-hf",
      messages: [
        {
          role: "system",
          content:
            "Your primary role is to act as a code explainer. Analyze and explain given code snippets in a clear, concise, and beginner-friendly manner. Break down complex code structures, highlight the main functionality, and use analogies if needed to make the explanation relatable. Break down the code step-by-step, explaining each line or section's purpose. Aim to make even someone with no prior coding experience understand the essence of the provided code. Return an error if the prompt is not code.",
        },
        { role: "user", content: `language: ${language}\n$code:\n${code}` },
      ],
      stream: true,
    });
    setExplanation("");
    for await (const chunk of completion) {
      if (signal.aborted) {
        return;
      }
      if (chunk.choices[0].delta.content) {
        accumulatedExplanation += chunk.choices[0].delta.content;
        setExplanation(
          (explanation: string) => explanation + chunk.choices[0].delta.content
        );
      }
    }
    ogExplanation.current = accumulatedExplanation.slice(0,-5);
    setExplanation(
      ogExplanation.current 
    );
  } catch (error) {
    console.error(error);
    alert("Failed to get a response. Please try again later.");
  }
}
