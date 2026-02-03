"use client";

import { useNetwork } from "@reactuses/core";

export default function NetworkPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useNetwork</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          追踪网络连接状态的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <NetworkDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const state = useNetwork();

return (
  <div>
    Online: {state.online ? 'Yes' : 'No'}
    Downlink: {state.downlink}
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function NetworkDemo() {
  const state = useNetwork();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-medium">
        <span>当前状态:</span>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            state.online
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          }`}
        >
          {state.online ? "在线 (Online)" : "离线 (Offline)"}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-zinc-500 mb-1">
            Downlink 有效带宽估计（以兆位每秒为单位）
          </div>
          <div className="font-mono">{state.downlink} Mb/s</div>
        </div>
        <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-zinc-500 mb-1">
            Effective Type（有效类型：“slow-2g”、“2g”、“3g”或“4g”之一）
          </div>
          <div className="font-mono">{state.effectiveType || "Unknown"}</div>
        </div>
        <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
          <div className="text-zinc-500 mb-1">
            Rtt（连接的估计有效往返时间）
          </div>
          <div className="font-mono">{state.rtt} ms</div>
        </div>
      </div>
      <p className="text-xs text-zinc-500 italic">
        Try disconnecting your internet to see the state change.
      </p>
    </div>
  );
}
