"use client";

import { motion } from "framer-motion";

export default function About({ data }: { data: any }) {
  if (!data) return null;

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-syne text-gray-900 dark:text-white sticky top-24">
              Overview<span className="text-teal-500">.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            <div className="bg-white/40 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
              {data?.bio ? (
                <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                  {data.bio}
                </p>
              ) : (
                <p className="text-gray-500 italic">No bio written yet.</p>
              )}

              <div className="grid grid-cols-2 gap-8 mt-12 py-8 border-t border-black/5 dark:border-white/10">
                 <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Location</h3>
                    <p className="text-gray-900 dark:text-white font-medium text-lg">{data?.location || "Remote"}</p>
                 </div>
                 <div>
                    <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Current Focus</h3>
                    <p className="text-gray-900 dark:text-white font-medium text-lg">{data?.focus || "Machine Learning"}</p>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
