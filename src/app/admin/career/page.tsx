import { supabaseAdmin } from "@/lib/supabase";
import { addCareer, deleteCareer, updateCareer } from "../actions";
import ClientForm from "@/components/ui/ClientForm";
import Link from "next/link";

export default async function CareerAdmin({ searchParams }: { searchParams: { edit?: string } }) {
  const { data: career } = await supabaseAdmin
    .from("career_journey")
    .select("*")
    .order("id", { ascending: false });

  const editItem = searchParams.edit ? career?.find(c => c.id === searchParams.edit) : null;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-syne text-white">Manage Career Journey</h1>

      {/* Add/Edit Form */}
      <div className="p-6 bg-[#111] border border-gray-800 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-teal">{editItem ? "Edit Career Journey" : "Add Career Journey"}</h2>
        <ClientForm action={editItem ? updateCareer : addCareer} className="space-y-4">
          {editItem && <input type="hidden" name="id" value={editItem.id} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="title" defaultValue={editItem?.title || ""} placeholder="Role Title (e.g. Senior AI Engineer)" required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <input name="company" defaultValue={editItem?.company || ""} placeholder="Company Name" required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <input name="date" defaultValue={editItem?.date || ""} placeholder="Date (e.g. 2024 - Present)" required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <select name="status" defaultValue={editItem?.status || "current"} className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none">
              <option value="current">Current</option>
              <option value="completed">Completed</option>
              <option value="planned">Planned</option>
            </select>
            <textarea name="description" defaultValue={editItem?.description || ""} placeholder="Description" rows={3} className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none md:col-span-2" />
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="px-6 py-2 bg-teal font-semibold text-[#0a0a0a] rounded-md hover:bg-teal-hover transition-colors">
              {editItem ? "Save Changes" : "Add Journey"}
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
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Role</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Company</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Date/Status</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {career?.map((item) => (
              <tr key={item.id} className={editItem?.id === item.id ? "bg-teal/5" : "hover:bg-white/5"}>
                <td className="px-6 py-4 text-white font-medium">{item.title}</td>
                <td className="px-6 py-4 text-gray-400">{item.company}</td>
                <td className="px-6 py-4 text-gray-400">
                  <div className="flex flex-col">
                    <span>{item.date}</span>
                    <span className="text-xs uppercase mt-1">{item.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Link href={`?edit=${item.id}`} className="text-blue-400 hover:text-blue-300 font-medium">Edit</Link>
                    <ClientForm action={deleteCareer.bind(null, item.id)}>
                      <button type="submit" className="text-red-400 hover:text-red-300 font-medium">Delete</button>
                    </ClientForm>
                  </div>
                </td>
              </tr>
            ))}
            {!career?.length && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-gray-500">No journeys found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
