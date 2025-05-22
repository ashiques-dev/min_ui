import React from "react";
import { CodeBlock, CodeBlockWithComponent, CodeBlockWithTitle } from "../code";
import { cn } from "@/lib/utils";
import { TConfigSteps } from "../type";
import parse from "html-react-parser";
const ConfigSteps = ({
  configSteps,
  className,
}: {
  configSteps: TConfigSteps[];
  className?: string;
}) => {
  return (
    <>
      {configSteps.map(({ tabs, title, component }, index) => (
        <div key={index} className={cn(" relative ps-6 pb-6", className)}>
          <p className="bg-accent size-6 rounded-full inline-flex items-center justify-center absolute -left-3 top-0 border-r-2 border-background border-r-danger ring-4 ring-background z-10 ">
            {index + 1}
          </p>
          <h4 className="text-base mb-4.5 max-w-3xl"> {parse(title)}</h4>
          {component ? (
            <CodeBlockWithComponent tabs={tabs} component={component} />
          ) : tabs.length > 1 ? (
            <CodeBlockWithTitle tabs={tabs} />
          ) : (
            <CodeBlock {...tabs[0]} />
          )}
          <div className="absolute -bottom-[2.5px] -left-[2.5px] rotate-45  size-1 bg-danger z-50"></div>
        </div>
      ))}
    </>
  );
};

export default ConfigSteps;
