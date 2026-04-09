import { supabaseAdmin } from "@/lib/supabase";
import { updateAbout } from "../actions";
import ClientForm from "@/components/ui/ClientForm";

export default async function AboutAdmin() {
  const { data: aboutItems } = await supabaseAdmin
    .from("about")
    .select("*")
    .limit(1);

  const about = aboutItems?.[0] || {};

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-syne text-white">Manage About Section</h1>

      <div className="p-6 bg-[#111] border border-gray-800 rounded-xl flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-teal">Edit Details</h2>
        <ClientForm action={updateAbout} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" defaultValue={about.name || "Hamid"} placeholder="Your Name" required className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none md:col-span-2" />
            <input name="location" defaultValue={about.location} placeholder="Location (e.g. San Francisco)" className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <input name="focus" defaultValue={about.focus} placeholder="Current Focus (e.g. AI Startups)" className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none" />
            <textarea name="bio" defaultValue={about.bio} placeholder="Full Biography paragraph..." rows={6} className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none md:col-span-2" />
            <input name="photo_url" defaultValue={about.photo_url} placeholder="Photo URL (Optional)" className="px-4 py-2 bg-[#0a0a0a] border border-gray-700 rounded-md text-white focus:border-teal outline-none md:col-span-2" />
          </div>
          <button type="submit" className="px-6 py-2 bg-teal font-semibold text-[#0a0a0a] rounded-md hover:bg-teal-hover transition-colors">Save Changes</button>
        </ClientForm>
      </div>
    </div>
  );
}
