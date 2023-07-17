import React, { useState } from "react";
import TabList from "@data/tabs.json";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState("1");
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <> 
      <div className="flex justify-content-between">
        {TabList.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
            className="bg-slate-600 border-0 text-white uppercase p-5 w-full transition ease-out delay-150 first-letter
            hover:bg-slate-700 disabled:bg-slate-800 disabled:text-slate-500 disabled:font-bold">
            {tab.tabTitle}
          </button>
        ))}
      </div> 

      <div
        className="px-12 py-20 md:p-12 bg-white font-light leading-8 text-base text-justify"
      >
        {TabList.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <p className="text-black mb-5 text-xl font-semibold " >
                  {tab.title}
                </p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
