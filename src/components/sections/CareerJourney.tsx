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
    <section id="career" className="py-24 bg-transparent border-t border-gray-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-syne mb-16 text-white">
          Career Journey<span className="text-teal">.</span>
        </h2>

        {journeys && journeys.length > 0 ? (
          <div className="max-h-[650px] overflow-y-auto pr-4 custom-scrollbar overflow-x-hidden pt-4 pb-12">
            <div className="relative border-l-2 border-gray-800 ml-[80px] md:ml-[120px] pl-8 md:pl-12 space-y-16">
              {journeys.map((item, idx) => (
                <motion.div 
                  key={item.id} 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Icon */}
                  <div className="absolute -left-[58px] md:-left-[74px] top-0 w-12 h-12 bg-[#050505] rounded-xl border text-[#00e5c0] flex justify-center items-center overflow-hidden" style={{ boxShadow: '0 0 15px rgba(0, 229, 192, 0.2)', borderColor: 'rgba(0, 229, 192, 0.4)' }}>
                    {idx % 2 === 0 ? <Users size={20} /> : <BrainCircuit size={20} />}
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                    <div className="mb-3 md:mb-0 w-[200px] flex-shrink-0 pt-3">
                      <p className="text-teal font-medium uppercase text-sm tracking-wider">{item.date}</p>
                    </div>
                    <div className="flex-grow bg-[#0a0a0a] border border-gray-800/60 p-6 rounded-2xl hover:border-teal/30 transition-colors">
                      <h3 className="font-bold text-white text-xl md:text-2xl font-syne">{item.title}</h3>
                      <h4 className="text-gray-400 font-medium text-lg mt-1 mb-4">{item.company}</h4>
                      <p className="text-base leading-relaxed text-gray-400">
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
