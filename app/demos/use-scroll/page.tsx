"use client";

import { useScroll } from "@reactuses/core";
import { useRef } from "react";

export default function ScrollPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useScroll</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          监听元素滚动位置的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <ScrollDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const ref = useRef(null);
const { x, y } = useScroll(ref);

return (
  <div ref={ref} style={{ overflow: 'scroll' }}>
    Scroll content...
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function ScrollDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [x, y] = useScroll(ref);

  return (
    <div className="space-y-4">
      <div className="flex gap-4 font-mono text-sm">
        <div className="bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded">
          X: {x.toFixed(0)}
        </div>
        <div className="bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded">
          Y: {y.toFixed(0)}
        </div>
      </div>

      <div
        ref={ref}
        className="h-64 overflow-auto border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-lg relative"
      >
        <div className="w-[1000px] h-[1000px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] bg-size-[16px_16px] p-4">
          <p className="text-zinc-400">Scroll inside this box...</p>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zinc-300 dark:text-zinc-700 font-bold text-4xl">
            CENTER
          </div>
        </div>
      </div>
    </div>
  );
}
