import { Editor } from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  handleEditorChange: (arg0: string) => void;
}

const CodeEditor = ({ language, handleEditorChange }: CodeEditorProps) => {
  const handleChange = (value: string | undefined) => {
    handleEditorChange(value || "");
  };

  return (
    <Editor
      height="75vh"
      language={language}
      defaultValue="// Start typing your code here..."
      onChange={handleChange}
      theme="vs-dark"
    />
  );
};

export default CodeEditor;
