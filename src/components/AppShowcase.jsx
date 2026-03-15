import { Download, Shield, Smartphone, CheckCircle2, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const AppShowcase = () => {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <Reveal>
                {/* Subtle Background Decoration */}
                <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -mr-64 -mt-64 z-0" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    {/* Header Section */}
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
                            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">v5.0 Now Live</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                            Get ResQC Mobile
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-light px-2">
                            Deploy the power of a command center directly to your pocket. Available for all Quezon City residents.
                        </p>
                    </div>

                    {/* Main App Card */}
                    <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-slate-200/60 border border-slate-100 mb-12 md:mb-20 group">

                        {/* Left Panel: Visual/Brand */}
                        <div className="lg:w-[45%] p-8 md:p-12 relative flex flex-col items-center justify-center text-center text-white bg-[#1e293b] overflow-hidden">
                            {/* Animated Gradient Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

                            {/* Actual App Image Container */}
                            <div className="relative z-10 w-48 md:w-56 mb-6 group-hover:-translate-y-2 transition-transform duration-500">
                                <img 
                                    src="/assets/resqc onboarding final.png" 
                                    alt="ResQC Mobile App Interface" 
                                    className="w-full h-auto drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] rounded-[2.5rem]"
                                />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2">ResQC for Android</h3>
                                <div className="flex items-center justify-center gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} className="w-3 h-3 text-amber-400 fill-amber-400" />
                                    ))}
                                    <span className="text-[10px] font-bold ml-1 opacity-70 italic text-slate-300">4.9/5 Rating</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: Download/Features */}
                        <div className="lg:w-[55%] bg-white p-8 md:p-12 flex flex-col justify-center">
                            <div className="mb-8">
                                <h4 className="text-[10px] md:text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Core Capabilities</h4>
                                <ul className="space-y-4 md:space-y-5">
                                    {[
                                        "Automatic GPS location sharing",
                                        "Multimedia evidence uploads (photo, video, voice)",
                                        "Instant push notifications for emergency alerts",
                                        "A-Star optimized navigation for responders",
                                        "End-to-end calls and live chat"
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" strokeWidth={2.5} />
                                            <span className="font-bold text-slate-700 text-sm md:text-base tracking-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-6 border-t border-slate-50 pt-8">
                                <button className="bg-black hover:bg-slate-800 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-4 transition-all active:scale-95 shadow-lg shadow-slate-200 group w-full sm:w-auto">
                                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.523 15.3414L20.355 13.7024L17.523 12.0634V15.3414ZM3.65503 3.31036C3.54103 3.44736 3.47503 3.63336 3.47503 3.84736V20.1524C3.47503 20.3664 3.54103 20.5524 3.65503 20.6894L12.164 12.1804L3.65503 3.31036ZM13.164 11.1804L16.523 9.24136L4.17203 2.14436C4.17203 2.14436 4.17103 2.14336 4.17003 2.14336C3.99903 2.05336 3.82403 2.01636 3.66503 2.03136L13.164 11.1804ZM13.164 13.1804L3.66503 22.3294C3.82403 22.3444 3.99903 22.3074 4.17003 22.2174C4.17103 22.2174 4.17203 22.2164 4.17203 22.2164L16.523 15.1194L13.164 13.1804Z" />
                                        </svg>
                                    </div>
                                    <div className="text-left leading-none">
                                        <div className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-1">Get it on</div>
                                        <div className="text-xl font-black tracking-tight">Google Play</div>
                                    </div>
                                </button>

                                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                    <div className="flex items-center gap-2 text-slate-400 mb-1">
                                        <Smartphone className="w-4 h-4" />
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Android Build</span>
                                    </div>
                                    <p className="text-[11px] font-medium text-slate-400">Ver 5.0.12 • Feb 2026</p>
                                    <p className="text-[11px] font-medium text-slate-400">iOS version coming soon</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { icon: Shield, title: "Military Grade", desc: "Enterprise encryption protecting all incident data and citizen privacy." },
                            { icon: Download, title: "Community First", desc: "Completely free for public use as part of our safety initiative." },
                            { icon: Smartphone, title: "Zero Lag", desc: "Optimized 12MB footprint for reliable use on all mobile hardware." }
                        ].map((item, i) => (
                            <div key={i} className="group bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                    <item.icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium opacity-80">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </section>
    );
};

export default AppShowcase;