import React, { useEffect, useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, code, theme }) => {
  const [value, setValue] = useState(code || "");
  console.log(value);

  useEffect(() => {
    setValue(code);
  }, [code]);

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="70vh"
        width={`100%`}
        language={"javascript"}
        value={value}
        theme={theme}
        defaultValue="// Write your code here"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;
