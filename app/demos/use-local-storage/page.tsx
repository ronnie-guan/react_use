"use client";

import { useLocalStorage } from "@reactuses/core";

export default function LocalStoragePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useLocalStorage</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          管理 localStorage 数据的 Hook，支持响应式更新。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <LocalStorageDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const [value, setValue] = useLocalStorage("my-key", "default value");

return (
  <input
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function LocalStorageDemo() {
  // useLocalStorage: 类似 useState，但数据会自动同步到 localStorage
  // 参数1: key, 参数2: 默认值
  const [value, setValue] = useLocalStorage(
    "demo-local-storage-key",
    "Initial Value",
  );

  return (
    <div className="space-y-4">
      <p className="text-sm text-zinc-500">
        刷新页面后数据依然存在。你可以在浏览器的 Application tab 中查看。
      </p>
      <input
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <div className="text-xs text-zinc-400 truncate">
        Device Storage Key:{" "}
        <span className="font-mono">demo-local-storage-key</span>
      </div>
    </div>
  );
}
