import Link from "next/link";

const demos = [
  {
    name: "useToggle",
    path: "/demos/use-toggle",
    description: "用于管理布尔值状态（True/False）的 Hook。",
  },
  {
    name: "useCounter",
    path: "/demos/use-counter",
    description: "管理数值状态的 Hook，提供加减、重置等工具方法。",
  },
  {
    name: "useHover",
    path: "/demos/use-hover",
    description: "检测元素是否被鼠标悬停的 Hook。",
  },
  {
    name: "useWindowSize",
    path: "/demos/use-window-size",
    description: "实时追踪浏览器窗口尺寸的 Hook。",
  },
  {
    name: "useDebounce",
    path: "/demos/use-debounce",
    description: "防抖 Hook，用于延迟更新值，常用于搜索输入。",
  },
  {
    name: "useLocalStorage",
    path: "/demos/use-local-storage",
    description: "管理 localStorage 数据的 Hook，支持响应式更新。",
  },
  {
    name: "useOnceEffect",
    path: "/demos/use-once-effect",
    description:
      "只在组件挂载时运行一次副作用的 Hook（类似 componentDidMount）。",
  },
  {
    name: "useClipboard",
    path: "/demos/use-clipboard",
    description: "复制文本到剪贴板的 Hook。",
  },
  {
    name: "useClickAway",
    path: "/demos/use-click-away",
    description: "监听目标元素外部点击事件的 Hook（常用于关闭弹窗）。",
  },
  {
    name: "useInterval",
    path: "/demos/use-interval",
    description: "处理 setInterval 的 Hook。",
  },
  {
    name: "useFullscreen",
    path: "/demos/use-fullscreen",
    description: "管理全屏状态的 Hook。",
  },
  {
    name: "useNetwork",
    path: "/demos/use-network",
    description: "追踪网络连接状态的 Hook。",
  },
  {
    name: "useMediaQuery",
    path: "/demos/use-media-query",
    description: "CSS 媒体查询 Hook，用于响应式设计。",
  },
  {
    name: "useScroll",
    path: "/demos/use-scroll",
    description: "监听元素滚动位置的 Hook。",
  },
  {
    name: "useMouse",
    path: "/demos/use-mouse",
    description: "监听鼠标位置的 Hook。",
  },
  {
    name: "useIntersectionObserver",
    path: "/demos/use-intersection-observer",
    description: "检测元素是否进入视口的 Hook。",
  },
  {
    name: "usePrevious",
    path: "/demos/use-previous",
    description: "记录上一次渲染时状态值的 Hook。",
  },
  {
    name: "gitCommand",
    path: "/demos/git-command",
    description: "git神奇的妙妙小命令",
  },
];

export default function DemosPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">总览 (Overview)</h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          reactuse地址：
          <a
            href="https://reactuse.com/zh-Hans/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://reactuse.com/zh-Hans/
          </a>
          （总有一款适合你）
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((demo) => (
          <Link
            key={demo.path}
            href={demo.path}
            className="block p-6 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all group"
          >
            <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {demo.name}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {demo.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
