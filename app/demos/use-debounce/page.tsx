"use client";

import { useDebounce } from "@reactuses/core";
import { useState } from "react";

export default function DebouncePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useDebounce</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          防抖 Hook，用于延迟更新值，常用于搜索输入。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <DebounceDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const [value, setValue] = useState("");
const debouncedValue = useDebounce(value, 500);

return (
  <div>
    <input value={value} onChange={(e) => setValue(e.target.value)} />
    <p>Debounced: {debouncedValue}</p>
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function DebounceDemo() {
  const [value, setValue] = useState("");
  // useDebounce: 只有当 value 在 500ms 内没有变化时，debouncedValue 才会更新
  const debouncedValue = useDebounce(value, 500);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">输入内容 (500ms 延迟):</label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="开始输入..."
        />
      </div>
      <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-md">
        <div className="text-xs text-zinc-500">
          防抖后的值 (Debounced Value):
        </div>
        <div className="font-mono text-blue-600 dark:text-blue-400 min-h-[1.5em]">
          {debouncedValue}
        </div>
      </div>
    </div>
  );
}
