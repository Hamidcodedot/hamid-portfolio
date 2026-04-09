"use client";

import { useEffect } from "react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Admin Error Caught:", error);
  }, [error]);

  const isNetworkError = error.message.includes("fetch failed");

  return (
    <div className="p-8 bg-[#111] border border-red-900 rounded-xl mt-8">
      <h2 className="text-2xl font-bold font-syne text-red-500 mb-4">Something went wrong!</h2>
      
      {isNetworkError ? (
        <div className="space-y-4 text-gray-300">
          <p>
            <strong>Network Error Details:</strong> The database connection failed. This almost always means your Supabase credentials in <code>.env.local</code> are missing or still set to placeholder values.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-400">
            <li>Make sure <code>NEXT_PUBLIC_SUPABASE_URL</code> is exactly the URL from your Supabase dashboard.</li>
            <li>Make sure you do not have typos in the URL.</li>
          </ul>
        </div>
      ) : (
        <p className="text-gray-300">Error details: {error.message}</p>
      )}

      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-2 bg-red-900/30 text-red-400 border border-red-900 rounded-md hover:bg-red-900/50 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
