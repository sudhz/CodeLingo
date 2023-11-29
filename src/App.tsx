import { useState, useRef, useEffect } from "react";
import CodeEditor from "./components/CodeEditor";
import { Button } from "flowbite-react";
import Markdown from "react-markdown";
import Header from "./components/Header";
import LanguageDropdown from "./components/LanguageDropdown";
import getResponse from "./services/GetResponse";
import getTranslation from "./services/GetTranslation";

const languagesArr: string[] = [
  "CSP",
  "CPP",
  "Go",
  "Java",
  "JavaScript",
  "PHP",
  "Python",
  "R",
  "SQL",
  "TypeScript",
];

const explanationLanguages = {
  Hindi: "hi",
  Punjabi: "pa",
  Tamil: "ta",
  Telugu: "te",
  Marathi: "mr",
  Bengali: "bn",
  Gujarati: "gu",
  Urdu: "ur",
  English: "en",
};

function App() {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://thirdparty.webraft.in/v1/models"
        );
        if (!response.ok) {
          setServerStatus(false);
        }
      } catch (error) {
        setServerStatus(false);
      }
    })();
  }, []);
  const abortController = useRef(new AbortController());
  const ogExplanation = useRef("");
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState(
    "The explanation will appear here."
  );
  const [codeLang, setCodeLang] = useState("Code Language");
  const [explanationLang, setExplanationLang] = useState(
    "Explanation Language"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [explanationCompleted, setExplanationCompleted] = useState(false);
  const [serverStatus, setServerStatus] = useState(true);
  const handleClick = async () => {
    setIsLoading(true);
    const controller = new AbortController();
    abortController.current = controller;
    try {
      await getResponse(
        code,
        codeLang,
        setExplanation,
        ogExplanation,
        controller.signal
      );
    } finally {
      setIsLoading(false);
      setExplanationCompleted(true);
    }
  };
  const handleStopClick = () => {
    abortController.current.abort();
    setExplanation("Explanation stopped.");
    setIsLoading(false);
    setTimeout(() => setExplanation(""), 3000);
  };
  const handleTranslateClick = async () => {
    try {
      await getTranslation(
        ogExplanation.current,
        explanationLanguages[
          explanationLang as keyof typeof explanationLanguages
        ],
        setExplanation
      );
    } finally {
      setIsLoading(false);
      setExplanationCompleted(true);
    }
  };
  const handleEditorChange = (value: string) => {
    // To ensure maximum length of the code does not exceed 20k characters ~ 5000 tokens.
    if (value.length > 20000) {
      setCode(value.substring(0, 20000));
    } else {
      setCode(value);
    }
  };
  return (
    <>
      <Header serverStatus={serverStatus} />
      <main className="lg:flex">
        <div className="container lg:w-1/2">
          <CodeEditor
            language={codeLang.toLowerCase()}
            handleEditorChange={handleEditorChange}
          />
          <div className="flex lg:space-x-4 lg:p-4 space-x-2 p-2">
            <Button
              gradientDuoTone="purpleToBlue"
              isProcessing={isLoading}
              onClick={handleClick}
              size="lg"
              disabled={!languagesArr.includes(codeLang)}
            >
              Explain
            </Button>
            <Button
              gradientDuoTone="pinkToOrange"
              size="lg"
              onClick={handleStopClick}
              disabled={!isLoading}
            >
              Stop explaining
            </Button>
            <LanguageDropdown
              languages={languagesArr}
              langState={codeLang}
              handleClick={(item) => setCodeLang(item)}
              isDisabled={false}
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <Markdown className="p-4 h-[75vh] overflow-auto text-gray-300">
            {explanation}
          </Markdown>
          <div className="flex lg:space-x-4 space-x-2 p-4">
            <LanguageDropdown
              languages={Object.keys(explanationLanguages)}
              langState={explanationLang}
              handleClick={(item) => setExplanationLang(item)}
              isDisabled={!explanationCompleted || isLoading}
            />
            <Button
              gradientMonochrome="lime"
              size="lg"
              onClick={handleTranslateClick}
              disabled={
                !Object.keys(explanationLanguages).includes(explanationLang) ||
                isLoading
              }
            >
              Translate
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
