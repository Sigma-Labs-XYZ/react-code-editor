import ReactMarkdown from "https://esm.sh/react-markdown@7";
import React from "react";

const Instructions = (props) => {
  return (
    <>
      <h1 className="font-bold text-xl w-full bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        {props.challenge.title}
      </h1>
      <ReactMarkdown className="prose">
        {props.challenge.instructions}
      </ReactMarkdown>
    </>
  );
};

export default Instructions;
