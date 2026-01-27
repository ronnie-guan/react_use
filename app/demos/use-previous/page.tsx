"use client";

import { usePrevious, useCounter } from "@reactuses/core";

export default function PreviousPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">usePrevious</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          记录上一次渲染时状态值的 Hook。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <PreviousDemo />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">使用说明 (Usage)</h2>
        <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm font-mono text-zinc-700 dark:text-zinc-300">
            {`const [count, setCount] = useState(0);
const prevCount = usePrevious(count);

return (
  <div>
    <p>Now: {count}, before: {prevCount}</p>
    <button onClick={() => setCount(count + 1)}>+</button>
  </div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

function PreviousDemo() {
  const [count, , inc, dec] = useCounter(0);
  const prevCount = usePrevious(count);

  return (
    <div className="space-y-4">
      <div className="flex gap-8 justify-center text-center">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl min-w-[120px]">
          <div className="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wider font-semibold mb-1">
            Current
          </div>
          <div className="text-4xl font-mono font-bold text-blue-700 dark:text-blue-300">
            {count}
          </div>
        </div>
        <div className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl min-w-[120px]">
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">
            Previous
          </div>
          <div className="text-4xl font-mono font-bold text-zinc-400">
            {prevCount !== undefined ? prevCount : "-"}
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        <Button onClick={() => dec()}>Decrease (-)</Button>
        <Button onClick={() => inc()}>Increase (+)</Button>
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
