import { supabaseAdmin } from "@/lib/supabase";
import { addProject, deleteProject, updateProject } from "../actions";
import ClientForm from "@/components/ui/ClientForm";
import Link from "next/link";

export default async function ProjectsAdmin({ searchParams }: { searchParams: { edit?: string } }) {
  const { data: projects } = await supabaseAdmin
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  const editItem = searchParams.edit ? projects?.find(p => p.id === searchParams.edit) : null;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-syne text-white">Manage Projects</h1>

      {/* Add/Edit Form */}
      <div className="p-6 bg-[#111] border border-gray-800 rounded-xl flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-teal">{editItem ? "Edit Project" : "Add A Project"}</h2>
        <ClientForm action={editItem ? updateProject : addProject} className="space-y-4">
          {editItem && <input type="hidden" name="id" value={editItem.id} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="title" defaultValue={editItem?.title || ""} placeholder="Project Title" required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <input name="image_url" defaultValue={editItem?.image_url || ""} placeholder="Image URL" className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <textarea name="description" defaultValue={editItem?.description || ""} placeholder="Description" rows={3} required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none md:col-span-2" />
            <input name="demo_url" defaultValue={editItem?.demo_url || ""} placeholder="Demo URL" className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <input name="repo_url" defaultValue={editItem?.repo_url || ""} placeholder="GitHub URL" className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <input name="tech_stack" defaultValue={editItem?.tech_stack?.join(", ") || ""} placeholder="Tech Stack (comma separated)" className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none md:col-span-2" />
            <textarea name="review_text" defaultValue={editItem?.review_text || ""} placeholder="Review Quote (optional)" rows={2} className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <input name="review_author" defaultValue={editItem?.review_author || ""} placeholder="Review Author" className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="px-6 py-2 bg-teal font-semibold text-[#0a0a0a] rounded-md hover:bg-teal-hover transition-colors">
              {editItem ? "Save Changes" : "Add Project"}
            </button>
            {editItem && (
               <Link href="?" className="px-6 py-2 bg-gray-800 font-semibold text-white rounded-md hover:bg-gray-700 transition-colors">Cancel</Link>
            )}
          </div>
        </ClientForm>
      </div>

      {/* List */}
      <div className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#1a1a1a]">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Title</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Links</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {projects?.map((item) => (
              <tr key={item.id} className={editItem?.id === item.id ? "bg-teal/5" : "hover:bg-white/5"}>
                <td className="px-6 py-4 text-white font-medium">{item.title}</td>
                <td className="px-6 py-4 text-gray-400 text-sm">
                  {item.demo_url && <a href={item.demo_url} target="_blank" rel="noreferrer" className="text-teal hover:underline block truncate max-w-[200px]">{item.demo_url}</a>}
                  {item.repo_url && <a href={item.repo_url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white block truncate max-w-[200px]">{item.repo_url}</a>}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                     <Link href={`?edit=${item.id}`} className="text-blue-400 hover:text-blue-300 font-medium">Edit</Link>
                     <ClientForm action={deleteProject.bind(null, item.id)}>
                       <button type="submit" className="text-red-400 hover:text-red-300 font-medium">Delete</button>
                     </ClientForm>
                  </div>
                </td>
              </tr>
            ))}
            {!projects?.length && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">No projects found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
