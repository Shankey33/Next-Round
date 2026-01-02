import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  return (
    <div className="h-full bg-base-300 flex flex-col">
      <div className="flex items-center justify-between px-2 sm:px-4 lg:px-6 py-2 sm:py-3 bg-base-100 border-b border-base-300">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-6 sm:size-8 lg:size-10"
          />
          <select className="select select-xs sm:select-sm lg:select-md font-medium" value={selectedLanguage} onChange={onLanguageChange}>
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary btn-xs sm:btn-sm lg:btn-md gap-1 sm:gap-2" disabled={isRunning} onClick={onRunCode}>
          {isRunning ? (
            <>
              <Loader2Icon className="size-3 sm:size-4 lg:size-5 animate-spin" />
              <span className="hidden sm:inline">Running...</span>
              <span className="sm:hidden">Run</span>
            </>
          ) : (
            <>
              <PlayIcon className="size-3 sm:size-4 lg:size-5" />
              <span className="hidden sm:inline">Run Code</span>
              <span className="sm:hidden">Run</span>
            </>
          )}
        </button>
      </div>

      <div className="flex-1 min-h-0">
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 15,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: true, scale: 0.8 },
            wordWrap: "on",
            padding: { top: 16, bottom: 16 },
            lineHeight: 22,
            renderLineHighlight: "all",
            cursorBlinking: "smooth",
            smoothScrolling: true,
          }}
        />
      </div>
    </div>
  );
}
export default CodeEditorPanel;
