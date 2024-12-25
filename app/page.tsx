"use client";

import { Activity } from "./components/Activity/Activity";

export default function Home() {
  const activityValue = window.localStorage.getItem("Activity") || "";
  return (
    <div className="flex items-center justify-center flex-col mx-auto max-w-sm ">
      <h1>To Do List</h1>
      <Activity activities={activityValue} />
    </div>
  );
}
