"use client";

import { useWindowSize } from "@reactuses/core";

export default function WindowSizePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useWindowSize</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          实时追踪浏览器窗口尺寸的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <WindowSizeDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const { width, height } = useWindowSize();

return (
  <div>
    Width: {width}, Height: {height}
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function WindowSizeDemo() {
  // useWindowSize: 获取当前窗口的宽度和高度
  const { width, height } = useWindowSize();

  return (
    <div className="grid grid-cols-2 gap-4 text-center">
      <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
        <div className="text-xs text-zinc-500 uppercase font-semibold tracking-wider">
          宽度 (Width)
        </div>
        <div className="text-2xl font-mono">{width}px</div>
      </div>
      <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
        <div className="text-xs text-zinc-500 uppercase font-semibold tracking-wider">
          高度 (Height)
        </div>
        <div className="text-2xl font-mono">{height}px</div>
      </div>
    </div>
  );
}
