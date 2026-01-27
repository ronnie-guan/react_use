"use client";

import { useClickAway } from "@reactuses/core";
import { useRef, useState } from "react";

export default function ClickAwayPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useClickAway</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          监听目标元素外部点击事件的 Hook（常用于关闭弹窗）。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <ClickAwayDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const ref = useRef(null);

useClickAway(ref, () => {
  console.log('Clicked outside!');
});

return (
  <div ref={ref}>
    Click outside me
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function ClickAwayDemo() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // useClickAway: 当点击目标元素外部时触发回调
  useClickAway(ref, () => {
    setCount((s) => s + 1);
  });

  return (
    <div className="space-y-4">
      <div
        ref={ref}
        className="w-full h-32 bg-blue-500 rounded-xl flex items-center justify-center text-white font-medium cursor-pointer shadow-lg hover:bg-blue-600 transition"
      >
        点击我外部区域 (Click outside me)
      </div>
      <div className="text-center text-sm font-medium">
        外部点击次数 (Outside Clicks):{" "}
        <span className="text-xl font-mono ml-2">{count}</span>
      </div>
    </div>
  );
}
