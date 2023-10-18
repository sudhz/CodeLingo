import {
    TranslateClient,
    TranslateTextCommand,
  } from "@aws-sdk/client-translate";
  const client = new TranslateClient({
    region: "us-east-1",
    credentials: {
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
    },
  });
  
  export default async function getTranslation(
    explanation: string,
    explanationLang: string,
    setExplanation: React.Dispatch<React.SetStateAction<string>>
  ) {
    const params = {
      SourceLanguageCode: "en",
      TargetLanguageCode: explanationLang,
      Text: explanation,
    };
  
    const command = new TranslateTextCommand(params);
  
    try {
      setExplanation("Loading translation...");
      const data = await client.send(command);
      setExplanation(data.TranslatedText || "");
    } catch (err) {
      console.error(err);
      alert("Failed to get translation. Please try again later.");
    }
  }
  