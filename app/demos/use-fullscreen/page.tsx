"use client";

import { useFullscreen } from "@reactuses/core";
import { useRef } from "react";

export default function FullscreenPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useFullscreen</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          管理全屏状态的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <FullscreenDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const ref = useRef(null);
const [isFullscreen, { toggleFullscreen }] = useFullscreen(ref);

return (
  <div ref={ref}>
    <button onClick={toggleFullscreen}>
      Toggle Fullscreen
    </button>
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function FullscreenDemo() {
  const ref = useRef<HTMLDivElement>(null);
  // useFullscreen: 管理全屏 Hook
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(ref);

  return (
    <div
      ref={ref}
      className={`rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all ${isFullscreen ? "bg-white dark:bg-zinc-800" : "bg-zinc-50 dark:bg-zinc-900"} `}
    >
      <div className="text-center space-y-2">
        <div className="font-medium text-lg">
          {isFullscreen
            ? "全屏模式 (Fullscreen ON)"
            : "普通模式 (Fullscreen OFF)"}
        </div>
        <div className="text-sm text-zinc-500">
          {isFullscreen ? "按 ESC 退出全屏" : "点击下方按钮进入全屏"}
        </div>
      </div>
      <Button onClick={toggleFullscreen}>
        {isFullscreen ? "退出全屏 (Exit)" : "进入全屏 (Enter)"}
      </Button>
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
