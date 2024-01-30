import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import "./appEditor.css";

const AppEditor = () => {
  const [html, setHtml] = useState("<h1>Hello There!</h1>");
  const [css, setCss] = useState("body{color:red}");
  const [javascript, setJavascript] = useState("Start Coding ...");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `<html>
          <body>${html}</body>
          <style>${css} </style>
          <script>${javascript}</script>
          </html>`
      );
    }, 500);

    return () => clearTimeout(timeOut);
  }, [html, css, javascript]);

  return (
    <>
      <div className="pane pane-top">
        <Editor
          editorName={"HTML"}
          value={html}
          language={"xml"}
          onChange={setHtml}
        />
        <Editor
          editorName={"CSS"}
          value={css}
          language={"css"}
          onChange={setCss}
        />
        <Editor
          editorName={"JavaScript"}
          value={javascript}
          language={"javascript"}
          onChange={setJavascript}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
};

export default AppEditor;
