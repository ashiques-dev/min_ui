"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { zTouch } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  TCodeBlock,
  TCodeBlockWithComponent,
  TCodeBlockWithTitle,
  TCopyButton,
} from "../type";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CodeIcon, CopiedIcon, CopyIcon, EyeIcon } from "../svg";

export const CopyButton = ({ copied, onClick, className }: TCopyButton) => {
  return (
    <Button
      size={copied ? "default" : "copy"}
      onClick={onClick}
      className={cn("absolute right-6 top-4 z-10", className)}
    >
      {copied ? (
        <>
          copied <CopiedIcon />
        </>
      ) : (
        <CopyIcon />
      )}
    </Button>
  );
};

export const CodeBlock = ({
  code,
  language,
  highlightLines,
  showLineNumbers,
  className,
}: TCodeBlock) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className={cn("relative border rounded-md overflow-hidden bg-accent shadow-md", className)}>
      <CopyButton copied={copied} onClick={copyToClipboard} />
      <div className="max-h-96 overflow-auto">
        <SyntaxHighlighter
          style={zTouch}
          language={language}
          wrapLines={true}
          showLineNumbers={showLineNumbers !== false}
          PreTag="div"
          customStyle={{
            margin: 0,
            background: "transparent",
            mixBlendMode: "difference",
            scrollbarWidth: "none",
          }}
          lineProps={(lineNumber) => ({
            style: {
              backgroundColor: highlightLines?.includes(lineNumber)
                ? "rgba(255,255,255,0.1)"
                : "transparent",
              display: "block",
              width: "100%",
              marginTop: lineNumber > 1 ? "0.5rem" : 0,
            },
          })}
        >
          {String(code)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const CodeBlockWithTitle = ({
  tabs,
  className,
  codeBlockClassName,
}: TCodeBlockWithTitle) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className={cn("border rounded-md overflow-hidden bg-accent shadow-md", className)}
    >
      <div className="border-b">
        <div
          className={cn(
            "flex divide-x overflow-x-auto ",
            tabs.length > 1 &&
              "ps-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          )}
        >
          {tabs.map((tab, index) => (
            <Button
              key={index}
              onClick={() => {
                setActiveTab(index);
              }}
              variant={"link"}
              className="rounded-none py-6"
              disabled={activeTab === index}
            >
              {tab.name ? tab.name : "-"}
            </Button>
          ))}
        </div>
      </div>
      <CodeBlock
        name={tabs[activeTab].name}
        code={tabs[activeTab].code}
        language={tabs[activeTab].language}
        highlightLines={tabs[activeTab].highlightLines}
        showLineNumbers={tabs[activeTab].showLineNumbers}
        className={cn("border-0 rounded-none shadow-none", codeBlockClassName)}
      />
    </div>
  );
};

export const CodeBlockWithComponent = ({
  tabs,
  component,
  className,
  codeBlockClassName,
  codeBlockWithTitleClassName,
}: TCodeBlockWithComponent) => {
  const [preview, setPreview] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const combinedCode = tabs
      .map(({ code, name }) => `// ${name || "untitled"}\n${code}`)
      .join("\n\n");
    await navigator.clipboard.writeText(combinedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <div className={cn("", className)}>
        <div className="mb-6 flex gap-2 items-center">
          <Button
            onClick={() => {
              setPreview(true);
            }}
            disabled={preview}
            variant={"secondary"}
          >
            <EyeIcon /> preview
          </Button>
          <Button
            onClick={() => {
              setPreview(false);
            }}
            disabled={preview === false}
            variant={"secondary"}
          >
            <CodeIcon /> code
          </Button>
        </div>
        {preview ? (
          <div className="min-h-96 border flex items-center justify-center rounded-md relative">
            <CopyButton copied={copied} onClick={copyToClipboard} />
            {component}
          </div>
        ) : tabs.length > 1 ? (
          <CodeBlockWithTitle
            tabs={tabs}
            className={codeBlockWithTitleClassName}
            codeBlockClassName={codeBlockClassName}
          />
        ) : (
          <CodeBlock {...tabs[0]} className={className} />
        )}
      </div>
    </>
  );
};
