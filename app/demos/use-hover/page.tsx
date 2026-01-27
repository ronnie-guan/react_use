"use client";

import { useHover } from "@reactuses/core";
import { useRef } from "react";

export default function HoverPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useHover</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          检测元素是否被鼠标悬停的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <HoverDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const elementRef = useRef(null);
const isHovered = useHover(elementRef);

return (
  <div ref={elementRef}>
    {isHovered ? 'Hovered!' : 'Hover me'}
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function HoverDemo() {
  const elementRef = useRef<HTMLDivElement>(null);
  // useHover: 传入 ref，返回布尔值表示是否悬停
  const isHovered = useHover(elementRef);

  return (
    <div
      ref={elementRef}
      className={`h-32 rounded-xl flex items-center justify-center transition-all duration-300 ${
        isHovered
          ? "bg-blue-500 text-white shadow-lg scale-105"
          : "bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400"
      }`}
    >
      <span className="font-medium text-lg">
        {isHovered ? "已悬停! (Hovered)" : "请悬停 (Hover me)"}
      </span>
    </div>
  );
}
