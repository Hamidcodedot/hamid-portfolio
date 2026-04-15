"use client";

import { Users, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

type Journey = {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
  alignment: string;
};

export default function CareerJourney({ journeys }: { journeys: Journey[] }) {

  return (
    <section id="career" className="py-16 md:py-24 bg-transparent border-t border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-syne mb-10 md:mb-16 text-gray-900 dark:text-white">
          Career Journey<span className="text-teal-500">.</span>
        </h2>

        {journeys && journeys.length > 0 ? (
          <div className="max-h-[650px] overflow-y-auto pr-2 sm:pr-4 custom-scrollbar overflow-x-hidden pt-4 pb-12">
            <div className="relative border-l-2 border-black/10 dark:border-gray-800 ml-[52px] sm:ml-[80px] md:ml-[120px] pl-5 sm:pl-8 md:pl-12 space-y-12 md:space-y-16">
              {journeys.map((item, idx) => (
                <motion.div 
                  key={item.id} 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Icon */}
                  <div className="absolute -left-[42px] sm:-left-[58px] md:-left-[74px] top-0 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/60 dark:bg-black/60 backdrop-blur-md rounded-xl border text-teal-600 dark:text-[#00e5c0] flex justify-center items-center overflow-hidden" style={{ boxShadow: '0 0 15px rgba(0, 229, 192, 0.1)', borderColor: 'rgba(0, 229, 192, 0.3)' }}>
                    {idx % 2 === 0 ? <Users size={16} className="sm:hidden" /> : <BrainCircuit size={16} className="sm:hidden" />}
                    {idx % 2 === 0 ? <Users size={20} className="hidden sm:block" /> : <BrainCircuit size={20} className="hidden sm:block" />}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                    <div className="mb-2 md:mb-0 md:w-[200px] flex-shrink-0 md:pt-3">
                      <p className="text-teal-600 dark:text-teal-500 font-medium uppercase text-xs sm:text-sm tracking-wider">{item.date}</p>
                    </div>
                    <div className="flex-grow bg-white/40 dark:bg-black/40 backdrop-blur-md border border-black/5 dark:border-white/10 p-4 sm:p-6 rounded-2xl hover:border-teal-500/30 transition-colors shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg sm:text-xl md:text-2xl font-syne">{item.title}</h3>
                      <h4 className="text-gray-600 dark:text-gray-400 font-medium text-base sm:text-lg mt-1 mb-3 md:mb-4">{item.company}</h4>
                      <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-start py-10 text-gray-500 font-syne">
             [Career timeline data missing]
          </div>
        )}
      </div>
    </section>
  );
}
