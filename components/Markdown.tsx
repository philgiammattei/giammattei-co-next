import React from "react";
import ReactMarkdown from "react-markdown";

export const Markdown: React.FC<{ source: string }> = (props) => {
  return (
    <div style={{ width: "100%" }} className="markdown">
      <ReactMarkdown key="content" children={props.source} />
    </div>
  );
};
