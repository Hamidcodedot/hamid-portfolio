"use client";

import { FileText, FileDown } from "lucide-react";
import { formatUrl } from "@/lib/utils";

type FileRecord = {
  type: string;
  file_url: string;
  label: string;
};

export default function Resume({ files }: { files?: FileRecord[] }) {
  const getFileUrl = (type: string) => {
    if (!files) return "#";
    const match = files.find(f => f.type === type);
    return match ? formatUrl(match.file_url) : "#";
  };

  const cvUrl = getFileUrl("cv");
  const resumeUrl = getFileUrl("resume");

  return (
    <section id="resume" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-syne mb-4 text-gray-900 dark:text-white">
          Resume & CV.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-16 max-w-2xl leading-relaxed">
          Need a formal document? Grab a copy of my resume or full Curriculum Vitae
          detailing my academic background and professional experience.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* One Page Resume - Dark with Glow */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 p-8 bg-white/40 dark:bg-[#1f1f23]/60 border border-teal-500/50 dark:border-[#00e5c0] rounded-xl flex items-center space-x-6 hover:-translate-y-1 transition-transform group"
            style={{ boxShadow: '0 4px 30px rgba(0,229,192,0.1)', backdropFilter: 'blur(10px)' }}
          >
            <FileText size={40} className="text-teal-600 dark:text-[#00e5c0] opacity-80 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 font-syne">One-Page Resume</h3>
              <p className="text-[10px] text-gray-500 dark:text-gray-300 font-bold tracking-widest uppercase">PDF FORMAT</p>
            </div>
          </a>

          {/* Full CV - Solid Teal */}
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 p-8 bg-[#52d3c9] border border-[#52d3c9] rounded-xl flex items-center space-x-6 hover:-translate-y-1 transition-transform shadow-lg group"
          >
            <FileDown size={40} className="text-black opacity-80 group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-2xl font-bold text-black mb-1 font-syne">Full Extended CV</h3>
              <p className="text-[10px] text-black/70 font-bold tracking-widest uppercase">PDF FORMAT</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
