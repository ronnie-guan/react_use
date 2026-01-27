"use client";

import { useClipboard } from "@reactuses/core";
import { useState } from "react";

export default function ClipboardPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useClipboard</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          复制文本到剪贴板的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <ClipboardDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const [copiedText, copy] = useClipboard();

return (
  <div>
    <button onClick={() => copy("Hello!")}>
      Copy "Hello!"
    </button>
    <p>Copied: {copiedText}</p>
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function ClipboardDemo() {
  const [text, setText] = useState("");
  // 注意：剪贴板操作需要用户交互，且部分浏览器限制只能在 HTTPS 下使用
  //      复制需要浏览器授权
  //      从别处复制的内容再次进入页面，copy 会自动更新
  const [copiedText, copy] = useClipboard(); // useClipboard: 返回 [text, copy]

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-transparent"
          placeholder="输入要复制的文本..."
        />
        <Button onClick={() => copy(text)}>复制 (Copy)</Button>
      </div>
      <div className="text-sm text-zinc-500">
        剪贴板当前内容 (Copied text):{" "}
        <span className="font-mono text-blue-600">{copiedText}</span>
      </div>
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
