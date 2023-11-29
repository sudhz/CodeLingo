import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://thirdparty.webraft.in/v1",
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
      model: "gpt-3.5-turbo-16k",
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
    ogExplanation.current = accumulatedExplanation;
  } catch (error) {
    console.error(error);
    alert("Failed to get a response. Please try again later.");
  }
}
