import ConfigSteps from "@/components/config-steps";
import { nextJsDarkModeList } from "@/components/data/dark-mode";
import React from "react";

const DarkModePage = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight">
        Dark Mode in Next.js
      </h3>

      <div className="border-l border-dotted ms-2 mt-8 space-y-10">
        <ConfigSteps configSteps={nextJsDarkModeList} />
      </div>
    </>
  );
};

export default DarkModePage;
