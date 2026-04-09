import { supabaseAdmin } from "@/lib/supabase";
import { deleteContact } from "../actions";

export default async function ContactsAdmin() {
  const { data: contacts } = await supabaseAdmin
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-syne text-white">Inbox & Messages</h1>

      <div className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden">
        {contacts && contacts.length > 0 ? (
          <div className="divide-y divide-gray-800">
            {contacts.map((msg) => (
              <div key={msg.id} className="p-6 hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{msg.name}</h3>
                    <a href={`mailto:${msg.email}`} className="text-teal text-sm hover:underline">{msg.email}</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-gray-500">{new Date(msg.created_at).toLocaleString()}</span>
                    <form action={deleteContact.bind(null, msg.id)}>
                      <button type="submit" className="text-red-400 hover:text-red-300 text-sm font-medium">Delete</button>
                    </form>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] p-4 rounded-md border border-gray-800">
                  <p className="text-gray-300 whitespace-pre-wrap">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500 font-medium">
             No messages in your inbox.
          </div>
        )}
      </div>
    </div>
  );
}
