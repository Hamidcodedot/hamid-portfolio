import { supabaseAdmin } from "@/lib/supabase";
import { addFile, deleteFile, updateFile } from "../actions";
import ClientForm from "@/components/ui/ClientForm";
import Link from "next/link";

export default async function ResumeAdmin({ searchParams }: { searchParams: { edit?: string } }) {
  const { data: files } = await supabaseAdmin
    .from("files")
    .select("*")
    .order("created_at", { ascending: false });

  const editItem = searchParams.edit ? files?.find(f => f.id === searchParams.edit) : null;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-syne text-white">Manage Files</h1>

      {/* Add/Edit Form */}
      <div className="p-6 bg-[#111] border border-gray-800 rounded-xl flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-teal">{editItem ? "Edit File Link" : "Upload File Link"}</h2>
        <ClientForm action={editItem ? updateFile : addFile} className="space-y-4">
          {editItem && <input type="hidden" name="id" value={editItem.id} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="type" defaultValue={editItem?.type || "cv"} className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none">
              <option value="cv">Full CV</option>
              <option value="resume">One-Page Resume</option>
              <option value="other">Other Document</option>
            </select>
            <input name="label" defaultValue={editItem?.label || ""} placeholder="Label (e.g. 2026 Tech CV)" required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <input name="file_url" defaultValue={editItem?.file_url || ""} placeholder="File URL (e.g. uploaded somewhere else)" required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none md:col-span-2" />
          </div>
          <div className="flex items-center gap-4">
             <button type="submit" className="px-6 py-2 bg-teal font-semibold text-[#0a0a0a] rounded-md hover:bg-teal-hover transition-colors">
               {editItem ? "Save Changes" : "Add Link"}
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
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Type</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Label</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Link</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {files?.map((item) => (
              <tr key={item.id} className={editItem?.id === item.id ? "bg-teal/5" : "hover:bg-white/5"}>
                <td className="px-6 py-4 text-white font-medium uppercase">{item.type}</td>
                <td className="px-6 py-4 text-gray-400">{item.label}</td>
                <td className="px-6 py-4">
                   <a href={item.file_url} target="_blank" rel="noreferrer" className="text-teal hover:underline max-w-[200px] truncate block">
                     {item.file_url}
                   </a>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Link href={`?edit=${item.id}`} className="text-blue-400 hover:text-blue-300 font-medium">Edit</Link>
                    <ClientForm action={deleteFile.bind(null, item.id)}>
                      <button type="submit" className="text-red-400 hover:text-red-300 font-medium">Delete</button>
                    </ClientForm>
                  </div>
                </td>
              </tr>
            ))}
            {!files?.length && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">No files found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
