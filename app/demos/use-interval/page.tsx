"use client";

import { useInterval, useToggle } from "@reactuses/core";
import { useState } from "react";

export default function IntervalPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useInterval</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          处理 setInterval 的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <IntervalDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const [count, setCount] = useState(0);

useInterval(() => {
  setCount(count + 1);
}, 1000);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function IntervalDemo() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState<number | null>(1000);
  const [isRunning, toggle] = useToggle(true);

  // useInterval: 类 setInteval Hook
  // param1: 回调函数
  // param2: 延迟时间 (ms)。如果为 null，则暂停。
  useInterval(
    () => {
      setCount((count) => count + 1);
    },
    isRunning ? delay : null,
  );

  return (
    <div className="space-y-4">
      <div className="text-4xl font-mono font-bold text-center py-2 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
        {count}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-center items-center">
          <span className="text-sm">间隔 (Delay): {delay}ms</span>
          <input
            type="range"
            min="100"
            max="2000"
            step="100"
            value={delay || 0}
            onChange={(e) => setDelay(Number(e.target.value))}
            className="w-32"
          />
        </div>
        <div className="flex gap-2 justify-center">
          <Button onClick={() => toggle()}>
            {isRunning ? "暂停 (Pause)" : "继续 (Resume)"}
          </Button>
          <Button onClick={() => setCount(0)}>重置 (Reset)</Button>
        </div>
      </div>
    </div>
  );
}

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 active:scale-95 transition-all dark:bg-zinc-700 dark:hover:bg-zinc-600"
    >
      {children}
    </button>
  );
}
