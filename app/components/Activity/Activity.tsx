"use client";

import { useState } from "react";
import "../../globals.css";

export function Activity({ activities }: { activities: string }) {
  let [inserted, setInserted] = useState<string>("");
  return (
    <div className="flex flex-col">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          window.localStorage.setItem("Activity", inserted);
        }}
      >
        <input
          type="text"
          name="insert"
          id="insert"
          placeholder="Insert your activity"
          className="border-2"
          onChange={(evt) => {
            setInserted(evt.target.value);
          }}
        />
      </form>
      <div className="flex flex-row gap-x-20">
        <h2>{activities}</h2>
        <input type="checkbox" name="checkbox" id="checkbox" />
      </div>
    </div>
  );
}
