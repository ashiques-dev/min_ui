import ConfigSteps from "@/components/config-steps";
import { gettingStartedList } from "@/components/data/home";
import React from "react";

const Home = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight">Next.js</h3>
      <p className="mt-2 text-muted">Installation and configure.</p>

      <div className="border-l border-dotted ms-2 mt-8 space-y-10">
        <ConfigSteps configSteps={gettingStartedList} />
      </div>
    </>
  );
};

export default Home;
