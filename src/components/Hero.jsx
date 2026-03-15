import { MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion"; // Ensure motion is imported

const Hero = () => {
    return (
        <section className="pt-24 md:pt-40 pb-16 md:pb-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    {/* Left Side: Content */}
                    <div className="flex-1 text-left">
                        <Reveal>
                            <h1 className="text-6xl md:text-8xl font-black text-[#1e293b] tracking-tighter leading-none">
                                RES<span className="text-[#ef4444]">QC</span>
                            </h1>

                            <p className="mt-4 text-xl md:text-2xl font-bold text-[#475569] tracking-tight">
                                Smart Emergency Response Ecosystem
                            </p>

                            <p className="mt-6 max-w-lg text-lg text-slate-500 leading-relaxed font-normal">
                                Connecting citizens with emergency responders through <br className="hidden md:block" />
                                <span className="text-slate-700">intelligent routing</span> and <span className="text-slate-700">real-time coordination</span>.
                            </p>

                            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/30 text-[#2563eb] text-xs font-bold tracking-wider uppercase">
                                <MapPin className="w-4 h-4" />
                                Quezon City, Philippines
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-12 flex flex-wrap items-center gap-4">
                                <button className="bg-black text-white px-6 py-3 rounded-[20px] flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
                                    <svg viewBox="0 0 512 512" className="w-7 h-7" fill="currentColor">
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 58.9-34.1c18-10.3 18-28.7 0-38.8zm-146.9 52.1L104.6 499l280.8-161.2-60.1-60.1z" />
                                    </svg>
                                    <div className="text-left leading-tight">
                                        <p className="text-[10px] uppercase font-medium tracking-wider text-gray-300">Get it on</p>
                                        <p className="text-xl font-semibold -mt-0.5">Google Play</p>
                                    </div>
                                </button>

                                <button
                                    className="bg-slate-100 text-slate-500 border border-slate-200 px-6 py-3 rounded-[20px] flex items-center gap-3 cursor-not-allowed opacity-80"
                                    disabled
                                    aria-label="App Store download coming soon"
                                >
                                    <svg viewBox="0 0 384 512" className="w-7 h-7" fill="currentColor" aria-hidden="true">
                                        <path d="M318.7 268.7c-.2-49.2 40.2-72.8 42-73.9-23-33.7-58.8-38.3-71.5-38.8-30.4-3.1-59.5 18-74.9 18-15.4 0-39.1-17.6-64.3-17.1-33 .5-63.5 19.2-80.5 48.8-34.4 59.6-8.8 147.9 24.7 196.3 16.4 23.6 35.9 50.1 61.6 49.2 24.7-1 34-15.9 63.8-15.9 29.8 0 38.2 15.9 64.4 15.4 26.6-.5 43.4-24.1 59.7-47.8 18.8-27.4 26.6-53.8 27-55.2-.6-.2-51.8-19.9-52-78.9zM269.1 123.9c13.6-16.5 22.7-39.4 20.2-62.3-19.6.8-43.2 13-57.2 29.5-12.5 14.5-23.5 37.7-20.6 59.8 21.8 1.7 43.9-11.1 57.6-27z" />
                                    </svg>
                                    <div className="text-left leading-tight">
                                        <p className="text-[10px] uppercase font-medium tracking-wider text-slate-400">App Store</p>
                                        <p className="text-xl font-semibold -mt-0.5">Coming Soon</p>
                                    </div>
                                </button>

                                <button className="bg-white text-[#1e293b] border border-slate-200 px-8 py-4 rounded-[20px] text-lg font-bold transition-all hover:bg-slate-50 active:scale-95 shadow-sm">
                                    Watch Demo
                                </button>
                            </div>

                            <p className="mt-4 text-sm text-slate-500 font-medium">Android available now. iOS coming soon.</p>
                        </Reveal>
                    </div>

                    {/* Right Side: Small Image with Subtle Animation */}
                    <div className="flex-1 relative flex justify-center md:justify-end">
                        <Reveal>
                            <motion.div 
                                className="relative"
                                animate={{ y: [0, -15, 0] }} // Gentle floating effect
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity, 
                                    ease: "easeInOut" 
                                }}
                            >
                                {/* Glow effect background */}
                                <div className="absolute -inset-6 bg-blue-100/40 rounded-full blur-3xl z-0" />
                                
                                <img 
                                    src="/assets/resqc-mobile-app.png" 
                                    alt="ResQC Mobile App" 
                                    className="relative z-10 w-[240px] md:w-[380px] h-auto drop-shadow-xl"
                                />
                            </motion.div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;