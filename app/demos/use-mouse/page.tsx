"use client";

import { useMouse } from "@reactuses/core";
import { useRef } from "react";

export default function MousePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useMouse</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          监听鼠标位置的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <MouseDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const ref = useRef(null);
const { x, y, elementX, elementY } = useMouse(ref);

return (
  <div ref={ref}>
    Mouse is at ({x}, {y})
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function MouseDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const { pageX, pageY } = useMouse(ref);

  return (
    <div className="space-y-6">
      <div
        ref={ref}
        className="h-64 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 flex items-center justify-center cursor-crosshair relative overflow-hidden group"
      >
        <div className="absolute top-2 left-2 text-xs text-zinc-400">
          Target Area
        </div>

        <div className="text-center pointer-events-none">
          <p className="text-zinc-500">Hover me</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-sm font-mono">
        <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded">
          <div className="text-zinc-500 text-xs mb-1">Page X/Y</div>
          <div>
            {pageX}, {pageY}
          </div>
        </div>
      </div>
    </div>
  );
}
