import {
  CodeBlock,
  CodeBlockWithComponent,
  CodeBlockWithTitle,
} from "@/components/code";
import { nextJsDarkModeList } from "@/components/data/home";
import React from "react";

const DarkModePage = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight">
        Dark Mode in Next.js
      </h3>

      <div className="border-l border-dotted ms-2 mt-8 space-y-10">
        {nextJsDarkModeList.map(({ tabs, title, component }, index) => (
          <div key={index} className=" relative ps-6 pb-6">
            <p className="bg-accent size-6 rounded-full inline-flex items-center justify-center absolute -left-3 -top-0.5 border-r-2 border-background border-r-danger ring-4 ring-background z-10 ">
              {index + 1}
            </p>
            <h4 className="font-medium text-base mb-4 ">{title}</h4>
            {component ? (
              <CodeBlockWithComponent tabs={tabs} component={component} />
            ) : tabs.length > 1 ? (
              <CodeBlockWithTitle tabs={tabs} />
            ) : (
              <CodeBlock {...tabs[0]} />
            )}
            <div className="absolute -bottom-1.5 -left-[2.5px] rotate-45  size-1 bg-danger z-50"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DarkModePage;
