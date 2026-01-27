"use client";

import { useToggle } from "@reactuses/core";

export default function TogglePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useToggle</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          用于管理布尔值状态（True/False）的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <ToggleDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const [on, toggle] = useToggle(false);

// 切换状态
toggle();

// 强制设为 true
toggle(true);

// 强制设为 false
toggle(false);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function ToggleDemo() {
  // useToggle: 第一个参数是状态值，第二个参数是切换状态的函数
  // 默认值为 false
  const [on, toggle] = useToggle(false);
  console.log("🚀 ~ ToggleDemo ~ on:", on);

  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
          on ? "bg-blue-500" : "bg-zinc-300 dark:bg-zinc-600"
        }`}
        onClick={() => toggle()}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            on ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
      <span className="font-medium">{on ? "开启 (ON)" : "关闭 (OFF)"}</span>
      <button
        onClick={() => toggle()}
        className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-700 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-600 transition"
      >
        切换 (Toggle)
      </button>
    </div>
  );
}
