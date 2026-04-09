"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { LayoutDashboard, BookOpen, Briefcase, FileText, LogOut, Home, Code, User, MessageSquare } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "About", href: "/admin/about", icon: <User size={20} /> },
    { name: "Projects", href: "/admin/projects", icon: <Code size={20} /> },
    { name: "Career", href: "/admin/career", icon: <Briefcase size={20} /> },
    { name: "Learning", href: "/admin/learning", icon: <BookOpen size={20} /> },
    { name: "Resume", href: "/admin/resume", icon: <FileText size={20} /> },
    { name: "Contacts", href: "/admin/contacts", icon: <MessageSquare size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111] border-r border-[#222] flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold font-syne text-teal">Admin Portal</h2>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-teal text-[#0a0a0a] font-medium" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="p-4 border-t border-[#222] space-y-2">
          <Link
             href="/"
             className="flex items-center justify-center space-x-2 w-full px-4 py-2 text-sm text-gray-400 border border-gray-700 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          >
             <Home size={16} />
             <span>View Site</span>
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center justify-center space-x-2 w-full px-4 py-2 text-sm text-red-400 border border-red-900/50 bg-red-900/10 rounded-md hover:bg-red-900/30 transition-colors"
          >
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
