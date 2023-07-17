import React, { useState } from "react";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-slate-600">
      <div
        className="p-5 bg-slate-400 hover:bg-slate-300 flex justify-between w-full border-b-2 border-slate-900"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="font-bold">{title}</div>
        <div className="font-bold text-2xl">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="p-10 bg-slate-300">{content}</div>
      )}
    </div>
  );
}
