function OutputPanel({ output }) {
  return (
    <div className="h-full bg-base-100 flex flex-col">
      <div className="px-4 lg:px-6 py-2 lg:py-3 bg-base-200 border-b border-base-300 flex items-center justify-between">
        <span className="font-semibold text-sm lg:text-base">Output</span>
        {output && (
          <span className={`badge badge-sm ${output.success ? 'badge-success' : 'badge-error'}`}>
            {output.success ? 'Success' : 'Error'}
          </span>
        )}
      </div>
      <div className="flex-1 overflow-auto p-4 lg:p-6">
        {output === null ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-base-content/40 text-sm lg:text-base">Click "Run Code" to see the output here...</p>
          </div>
        ) : output.success ? (
          <pre className="text-sm lg:text-base font-mono text-success whitespace-pre-wrap bg-success/5 p-4 rounded-lg">{output.output}</pre>
        ) : (
          <div className="space-y-3">
            {output.output && (
              <pre className="text-sm lg:text-base font-mono text-base-content whitespace-pre-wrap bg-base-200 p-4 rounded-lg">
                {output.output}
              </pre>
            )}
            <pre className="text-sm lg:text-base font-mono text-error whitespace-pre-wrap bg-error/5 p-4 rounded-lg">{output.error}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
export default OutputPanel;
