"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const demos = [
  { name: "Overview (总览)", path: "/demos" },
  { name: "useToggle", path: "/demos/use-toggle" },
  { name: "useCounter", path: "/demos/use-counter" },
  { name: "useHover", path: "/demos/use-hover" },
  { name: "useWindowSize", path: "/demos/use-window-size" },
  { name: "useDebounce", path: "/demos/use-debounce" },
  { name: "useLocalStorage", path: "/demos/use-local-storage" },
  { name: "useOnceEffect", path: "/demos/use-once-effect" },
  { name: "useClipboard", path: "/demos/use-clipboard" },
  { name: "useClickAway", path: "/demos/use-click-away" },
  { name: "useInterval", path: "/demos/use-interval" },
  { name: "useFullscreen", path: "/demos/use-fullscreen" },
  { name: "useNetwork", path: "/demos/use-network" },
  { name: "useMediaQuery", path: "/demos/use-media-query" },
  { name: "useScroll", path: "/demos/use-scroll" },
  { name: "useMouse", path: "/demos/use-mouse" },
  { name: "useIntersectionObserver", path: "/demos/use-intersection-observer" },
  { name: "usePrevious", path: "/demos/use-previous" },
  { name: "gitCommand", path: "/demos/git-command" },
];

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900 font-sans">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } shrink-0 bg-white dark:bg-zinc-800 border-r border-zinc-200 dark:border-zinc-700 transition-all duration-300 flex flex-col fixed h-full z-10`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-200 dark:border-zinc-700">
          {isSidebarOpen && (
            <span className="font-bold text-lg truncate">React Use</span>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-500"
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 space-y-1 px-2">
          {demos.map((demo) => {
            const isActive = pathname === demo.path;
            return (
              <Link
                key={demo.path}
                href={demo.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
                title={!isSidebarOpen ? demo.name : ""}
              >
                {!isSidebarOpen && (
                  <div className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                )}
                {isSidebarOpen && <span>{demo.name}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        } p-8`}
      >
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
