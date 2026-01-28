"use client";
import vscodepng from "../../../public/savecode.png";
import cc from "../../../public/储藏.png";
import ccyy from "../../../public/储藏应用.png";
import Image from "next/image";
export default function WindowSizePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">git-command</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          git神奇的妙妙小命令。
        </p>
      </header>

      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <p>git cherry-pick（可以把同项目不同分支的某个提交加入，可加入多个）</p>
        <p>用法：</p>
        <p>git cherry-pick commit-hash</p>
        <p>git push --force</p>
      </div>
      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <p>git commit --amend（用于修正最近一次的提交）</p>
        <p>用法：</p>
        <p>
          git commit --amend 或 git commit --amend -m
          <span style={{ color: "red" }}> &quot;修正后的提交消息&quot;</span>
        </p>
        <p>git push --force</p>
      </div>
      <div className="p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-200 dark:border-zinc-700">
        <p>存储：可临时保存代码</p>
        <Image src={vscodepng} alt="" className="mt-2" />
        <Image src={cc} alt="" className="mt-2" />
        <Image src={ccyy} alt="" className="mt-2" />
      </div>
    </div>
  );
}
