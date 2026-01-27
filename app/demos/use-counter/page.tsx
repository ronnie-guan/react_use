"use client";

import { useCounter } from "@reactuses/core";

export default function CounterPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">useCounter</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          管理数值状态的 Hook，提供加减、重置等工具方法。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <CounterDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const [count, { inc, dec, reset }] = useCounter(0);

// 增加
inc();

// 减少
dec();

// 重置
reset();`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function CounterDemo() {
  // useCounter: 管理数值状态
  // current: 当前值
  // inc: 增加 (increment)
  // dec: 减少 (decrement)
  // reset: 重置为初始值 (0)
  const [count, , inc, dec, reset] = useCounter(0);

  return (
    <div className="space-y-4">
      <div className="text-4xl font-mono font-bold text-center py-2 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
        {count}
      </div>
      <div className="flex gap-2 justify-center">
        <Button onClick={() => dec()}>- (减少)</Button>
        <Button onClick={() => reset()}>Reset (重置)</Button>
        <Button onClick={() => inc()}>+ (增加)</Button>
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
