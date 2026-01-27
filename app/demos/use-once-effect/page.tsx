"use client";

import { useOnceEffect } from "@reactuses/core";
import { useState } from "react";

export default function OnceEffectPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useOnceEffect</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          只在组件挂载时运行一次副作用的 Hook（类似 componentDidMount）。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <EffectOnceDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`useOnceEffect(() => {
  console.log('Component mounted!');
  
  // Optional cleanup
  return () => {
    console.log('Component unmounted!');
  };
});`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function EffectOnceDemo() {
  const [logs, setLogs] = useState<string[]>([]);

  // useOnceEffect: 保证回调函数只执行一次，相当于 useEffect(..., [])
  useOnceEffect(() => {
    setLogs((prev) => [
      ...prev,
      `Effect ran at ${new Date().toLocaleTimeString()} (只运行一次)`,
    ]);
  });

  return (
    <div className="space-y-2">
      <p className="text-sm text-zinc-500">
        这个 Effect 只在组件挂载时运行一次，类似 componentDidMount。
      </p>
      <button
        onClick={() =>
          setLogs((prev) => [
            ...prev,
            `Manual update at ${new Date().toLocaleTimeString()}`,
          ])
        }
        className="text-sm text-blue-500 hover:underline"
      >
        触发重渲染 (Effect 不会再次运行)
      </button>
      <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-md font-mono text-xs space-y-1 h-32 overflow-y-auto">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  );
}
