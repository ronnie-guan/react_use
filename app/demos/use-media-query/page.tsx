"use client";

import { useMediaQuery } from "@reactuses/core";

export default function MediaQueryPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useMediaQuery</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          CSS 媒体查询 Hook，用于响应式设计。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <MediaQueryDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const isWide = useMediaQuery('(min-width: 1024px)');

return (
  <div>
    {isWide ? 'Wide Screen' : 'Narrow Screen'}
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function MediaQueryDemo() {
  const isSmall = useMediaQuery("(max-width: 640px)");
  const isMedium = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isLarge = useMediaQuery("(min-width: 1025px)");
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          className={`p-4 rounded-lg border-2 text-center transition-colors ${
            isSmall
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
              : "border-gray-200 dark:border-zinc-700 text-gray-400"
          }`}
        >
          Mobile (Small)
        </div>
        <div
          className={`p-4 rounded-lg border-2 text-center transition-colors ${
            isMedium
              ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
              : "border-gray-200 dark:border-zinc-700 text-gray-400"
          }`}
        >
          Tablet (Medium)
        </div>
        <div
          className={`p-4 rounded-lg border-2 text-center transition-colors ${
            isLarge
              ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400"
              : "border-gray-200 dark:border-zinc-700 text-gray-400"
          }`}
        >
          Desktop (Large)
        </div>
      </div>

      <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-between">
        <span className="font-medium">系统深色模式 (Dark Mode):</span>
        <span
          className={`font-mono font-bold ${isDark ? "text-yellow-400" : "text-zinc-600"}`}
        >
          {isDark ? "ON" : "OFF"}
        </span>
      </div>

      <p className="text-sm text-zinc-500 text-center">
        Resize your browser window to see changes.
      </p>
    </div>
  );
}
