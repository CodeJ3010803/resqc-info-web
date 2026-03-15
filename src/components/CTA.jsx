import { Download, ArrowRight, Shield, Smartphone, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const CTA = () => {
  return (

    <section className="py-16 md:py-24 px-6 text-center bg-[#0F172A] text-white relative overflow-hidden">
      <Reveal>
        {/* Background Decorative Elements - Adjusted for better mobile performance */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(#334155 1px, transparent 1px)`, backgroundSize: '24px 24px' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 md:w-64 md:h-64 bg-red-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Animated Badge */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-red-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Shield className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Heading Polish */}
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-[1.1]">
            Ready to Secure Your <br className="hidden md:block" /> Community?
          </h2>

          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed opacity-80 px-4 md:px-0">
            Join thousands of Quezon City residents and first responders
            bridging the gap in emergency coordination.
          </p>

          {/* Button Refinement */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-5 mb-12 md:mb-16 max-w-sm sm:max-w-none mx-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-rose-600 text-white px-8 md:px-10 py-4 rounded-2xl text-sm md:text-base font-black transition-all duration-300 
            hover:shadow-[0_20px_40px_rgba(239,68,68,0.3)] 
            hover:-translate-y-1 
            active:scale-95 group">
              <Download className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
              Install RESQC Now
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-3 border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm text-white px-8 md:px-10 py-4 rounded-2xl text-sm md:text-base font-black transition-all duration-300 
            hover:bg-slate-800 
            hover:border-slate-500 
            hover:-translate-y-1
            active:scale-95 group">
              Review Docs
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Feature Badges - "Glassmorphism" Style */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4 md:px-0">
            {[
              { icon: Smartphone, label: "Android Available • iOS Coming Soon", color: "text-blue-400" },
              { icon: Shield, label: "Encrypted Data", color: "text-emerald-400" },
              { icon: Zap, label: "Real-time Sync", color: "text-amber-400" }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 md:px-5 md:py-2.5 rounded-2xl text-[9px] md:text-xs font-black uppercase tracking-widest text-slate-300 transition-colors hover:bg-white/10">
                <badge.icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${badge.color}`} />
                {badge.label}
              </div>
            ))}
          </div>

          {/* System Version Footer */}
          <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 opacity-40">
            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-slate-500 px-4">
              ResQC Operational Network • Build 2026.02.15
            </p>
          </div>
        </div>
      </Reveal>
    </section>

  );
};

export default CTA;