import { supabaseAdmin } from "@/lib/supabase";
import { addLearning, deleteLearning, updateLearning } from "../actions";
import ClientForm from "@/components/ui/ClientForm";
import Link from "next/link";

export default async function LearningAdmin({ searchParams }: { searchParams: { edit?: string } }) {
  const { data: learning } = await supabaseAdmin
    .from("learning")
    .select("*")
    .order("created_at", { ascending: false });

  const editItem = searchParams.edit ? learning?.find(l => l.id === searchParams.edit) : null;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-syne text-white">Manage Learning</h1>

      {/* Add/Edit Form */}
      <div className="p-6 bg-[#111] border border-gray-800 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-teal">{editItem ? "Edit Learning Item" : "Add Learning Item"}</h2>
        <ClientForm action={editItem ? updateLearning : addLearning} className="space-y-4">
          {editItem && <input type="hidden" name="id" value={editItem.id} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="title" defaultValue={editItem?.title || ""} placeholder="Title (e.g. Advanced AI Course)" required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <input name="category" defaultValue={editItem?.category || ""} placeholder="Category (e.g. Course, Book)" required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <select name="status" defaultValue={editItem?.status || "current"} className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none">
              <option value="current">Current</option>
              <option value="completed">Completed</option>
            </select>
            <input name="progress_percent" defaultValue={editItem?.progress_percent ?? ""} type="number" min="0" max="100" placeholder="Progress % (e.g. 50)" required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <input name="resource_url" defaultValue={editItem?.resource_url || ""} placeholder="Resource Link (URL)" className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none md:col-span-2" />
            <textarea name="description" defaultValue={editItem?.description || ""} placeholder="Methodology / Where are you learning this from?" rows={2} className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none md:col-span-2" />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="px-6 py-2 bg-teal font-semibold text-[#0a0a0a] rounded-md hover:bg-teal-hover transition-colors">
              {editItem ? "Save Changes" : "Add Item"}
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
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Category</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Status</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {learning?.map((item) => (
              <tr key={item.id} className={editItem?.id === item.id ? "bg-teal/5" : "hover:bg-white/5"}>
                <td className="px-6 py-4 text-white font-medium">{item.title}</td>
                <td className="px-6 py-4 text-gray-400">{item.category}</td>
                <td className="px-6 py-4 text-gray-400 capitalize">{item.status} ({item.progress_percent}%)</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Link href={`?edit=${item.id}`} className="text-blue-400 hover:text-blue-300 font-medium">Edit</Link>
                    <ClientForm action={deleteLearning.bind(null, item.id)}>
                      <button type="submit" className="text-red-400 hover:text-red-300 font-medium">Delete</button>
                    </ClientForm>
                  </div>
                </td>
              </tr>
            ))}
            {!learning?.length && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">No items found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
