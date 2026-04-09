import { supabaseAdmin } from "@/lib/supabase";
import { Users, Briefcase, BookOpen, FileText } from "lucide-react";

export default async function AdminDashboard() {
  // Fetch some stats
  const [
    { count: careerCount },
    { count: learningCount },
    { count: filesCount },
    { count: messagesCount }
  ] = await Promise.all([
    supabaseAdmin.from("career_journey").select("*", { count: "exact", head: true }),
    supabaseAdmin.from("learning").select("*", { count: "exact", head: true }),
    supabaseAdmin.from("files").select("*", { count: "exact", head: true }),
    supabaseAdmin.from("contacts").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    { name: "Career Stages", value: careerCount || 0, icon: <Briefcase className="text-teal" size={24} /> },
    { name: "Learning Items", value: learningCount || 0, icon: <BookOpen className="text-teal" size={24} /> },
    { name: "Resumes & Files", value: filesCount || 0, icon: <FileText className="text-teal" size={24} /> },
    { name: "Messages", value: messagesCount || 0, icon: <Users className="text-teal" size={24} /> },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-syne text-white">Dashboard Overview</h1>
      <p className="text-gray-400">Welcome to your portfolio admin portal. Start managing your content from the sidebar.</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="p-6 bg-[#111] border border-gray-800 rounded-xl flex items-center space-x-4 shadow">
            <div className="p-3 bg-teal/10 rounded-lg">
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm font-medium text-gray-400">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
