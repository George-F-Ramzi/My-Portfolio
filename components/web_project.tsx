import React from "react";
import SkillsUsed from "./micro_components/skills_used";
import ProjectActions from "./micro_components/project_actions";
import Metrics from "./micro_components/metrics";

export default function WebProject() {
  return (
    <section className="max-[960px]:flex  gap-x-8  grid grid-cols-[1fr,1fr]">
      <div className="h-fit border border-color max-[700px]:px-6 max-[700px]:py-11 max-[700px]:min-w-[312px] w-full p-11 rounded-2xl bg-Gradient">
        <p className="text-para text-base leading-LH">
          Web Development Project
        </p>
        <h2 className="text-white mb-9 max-[620px]:text-4xl max-[500px]:text-[32px] text-5xl font-bold mt-7 leading-LH">
          Soundly
        </h2>

        <p className="text-para  grow text-base max-w-[500px] leading-LH">
          Soundly is a music-sharing platform aiming to deliver the best user
          experience and libre environment for sharing music with no
          algorithm-based recommendation and an opportunity for everyone to get
          discovered and become famous
        </p>
        <div className="h-[320px] max-[500px]:h-[240px] flex flex-col">
          <SkillsUsed />
          <ProjectActions />
        </div>
      </div>
      <div className="max-[960px]:hidden my-6 mx-8">
        <h2 className="leading-LH max-[1068px]:text-2xl mb-12 font-bold text-para text-[32px]">
          Metrics Taken From
          <br />
          Google PageSpeed Insight
        </h2>
        <Metrics />
      </div>
    </section>
  );
}
