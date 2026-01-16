'use client';

import Link from "next/link";
import { Music, User, Github } from "lucide-react";
import { useState } from "react";
import DeveloperPanel from "./DeveloperPanel";

export function Navbar() {
  const [showDevPanel, setShowDevPanel] = useState(false);

  return (
    <>
      <nav className="fixed top-[37px] left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-sky-100 z-50 px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/images/cherry-logo.svg" alt="Logo" className="h-10 w-auto transition-transform" />
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors"
          >
            首页
          </Link>
          <button 
            onClick={() => setShowDevPanel(true)}
            className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <User className="w-4 h-4" />
            关于作者
          </button>
          <a 
            href="https://github.com/markcxx" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-800 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>

      <DeveloperPanel open={showDevPanel} onClose={() => setShowDevPanel(false)} />
    </>
  );
}
