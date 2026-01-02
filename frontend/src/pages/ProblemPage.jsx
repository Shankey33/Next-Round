import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { PROBLEMS } from "../data/problems";
import Navbar from "../components/Navbar";

import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ProblemDescription";
import OutputPanel from "../components/OutputPanel";
import CodeEditorPanel from "../components/CodeEditorPanel";
import { executeCode } from "../lib/piston";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";

function ProblemPage() {
  const { id } = useParams();

  const [currentProblemId, setCurrentProblemId] = useState(id);
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(PROBLEMS[currentProblemId].starterCode.javascript);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(PROBLEMS[currentProblemId]);
  const [activeTab, setActiveTab] = useState("problem"); // For mobile tabs

  
  // update problem when URL param changes
  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
      setCurrentProblem(PROBLEMS[id]);
    }
  }, [id, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });

    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    // normalize output for comparison (trim whitespace, handle different spacing)
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual == normalizedExpected;
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(selectedLanguage, code);

    setOutput(result);
    setIsRunning(false);

    if (result.success) {
      const expectedOutput = currentProblem.expectedOutput[selectedLanguage];
      const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

      if (testsPassed) {
        triggerConfetti();
        toast.success("All tests passed! Great job!");

      } else {
        toast.error("Tests failed. Check your output!");
      }
    } else {
      toast.error("Code execution failed!");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />

      {/* Mobile Tab Navigation */}
      <div className="lg:hidden flex border-b border-base-300 bg-base-200">
        <button
          onClick={() => setActiveTab("problem")}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === "problem" 
              ? "text-primary border-b-2 border-primary bg-base-100" 
              : "text-base-content/60"
          }`}
        >
          Problem
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === "code" 
              ? "text-primary border-b-2 border-primary bg-base-100" 
              : "text-base-content/60"
          }`}
        >
          Code
        </button>
        <button
          onClick={() => setActiveTab("output")}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            activeTab === "output" 
              ? "text-primary border-b-2 border-primary bg-base-100" 
              : "text-base-content/60"
          }`}
        >
          Output
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="flex-1 lg:hidden overflow-hidden">
        {activeTab === "problem" && (
          <div className="h-full overflow-y-auto">
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
            />
          </div>
        )}
        {activeTab === "code" && (
          <div className="h-full">
            <CodeEditorPanel
              selectedLanguage={selectedLanguage}
              code={code}
              isRunning={isRunning}
              onLanguageChange={handleLanguageChange}
              onCodeChange={setCode}
              onRunCode={handleRunCode}
            />
          </div>
        )}
        {activeTab === "output" && (
          <div className="h-full">
            <OutputPanel output={output} />
          </div>
        )}
      </div>

      {/* Desktop Layout with Panels */}
      <div className="flex-1 hidden lg:flex overflow-hidden">
        <PanelGroup direction="horizontal" className="h-full">
          {/* left panel- problem desc */}
          <Panel defaultSize={35} minSize={25}>
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
            />
          </Panel>

          <PanelResizeHandle className="w-1.5 bg-base-300 hover:bg-primary transition-colors cursor-col-resize flex items-center justify-center group">
            <div className="w-0.5 h-8 bg-base-content/20 rounded-full group-hover:bg-primary-content/50 transition-colors" />
          </PanelResizeHandle>

          {/* right panel- code editor & output */}
          <Panel defaultSize={65} minSize={40}>
            <PanelGroup direction="vertical" className="h-full">
              {/* Top panel - Code editor */}
              <Panel defaultSize={65} minSize={30}>
                <CodeEditorPanel
                  selectedLanguage={selectedLanguage}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handleLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                />
              </Panel>

              <PanelResizeHandle className="h-1.5 bg-base-300 hover:bg-primary transition-colors cursor-row-resize flex items-center justify-center group">
                <div className="h-0.5 w-4 bg-base-content/20 rounded-full group-hover:bg-primary-content/50 transition-colors" />
              </PanelResizeHandle>

              {/* Bottom panel - Output Panel*/}
              <Panel defaultSize={35} minSize={15}>
                <OutputPanel output={output} />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default ProblemPage;
