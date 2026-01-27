"use client";

import { useIntersectionObserver } from "@reactuses/core";
import { useRef, useState } from "react";

export default function IntersectionObserverPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          useIntersectionObserver
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          检测元素是否进入视口的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <IntersectionObserverDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const ref = useRef(null);
const [visible, setVisible] = useState(false);

useIntersectionObserver(
  ref,
  ([{ isIntersecting }]) => {
    setVisible(isIntersecting);
  },
  { threshold: 0.5 }
);

return (
  <div ref={ref}>
    {visible ? 'Visible' : 'Hidden'}
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function IntersectionObserverDemo() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useIntersectionObserver(ref, ([{ isIntersecting }]) => {
    setIsIntersecting(isIntersecting);
  });

  return (
    <div className="space-y-4">
      <div className="h-64 overflow-y-auto border-2 border-dashed border-zinc-200 dark:border-zinc-700 rounded-lg p-4 relative">
        <p className="text-zinc-500 mb-4">Scroll down to see the element...</p>
        <div className="h-[400px]"></div>
        <div
          ref={ref}
          className={`h-32 rounded-lg flex items-center justify-center transition-all ${
            isIntersecting
              ? "bg-green-500 text-white"
              : "bg-zinc-200 dark:bg-zinc-700 text-zinc-500"
          }`}
        >
          {isIntersecting ? "在这个视口内! (Visible)" : "在这个视口外 (Hidden)"}
        </div>
        <div className="h-[400px]"></div>
      </div>
      <div className="text-sm text-zinc-500">
        {isIntersecting ? "在视口内" : "在视口外"}
      </div>
    </div>
  );
}
