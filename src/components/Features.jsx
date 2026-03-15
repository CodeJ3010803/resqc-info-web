import { useState } from "react";
import {
  MapPin, Route, Bell, ChevronDown, ChevronUp,
  Target, Satellite, Zap, Shield, Activity, Info
} from "lucide-react";
import { Reveal } from "./Reveal";

const FeatureCard = ({ icon: Icon, title, subtitle, iconBg, iconColor, isOpen, onMouseEnter, onMouseLeave, onToggle, details }) => {
  return (
    <div 
      className="flex flex-col gap-3 transition-all duration-500"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        onClick={onToggle}
        className={`w-full bg-white border rounded-[2rem] p-5 md:p-6 text-center transition-all duration-300 flex flex-col items-center select-none relative overflow-hidden cursor-default ${isOpen
            ? `border-transparent ring-2 ${iconColor === 'text-blue-500' ? 'ring-blue-400' : 'ring-red-400'} shadow-2xl`
            : 'border-slate-100 shadow-sm'
          }`}
      >
        {isOpen && <div className={`absolute inset-0 opacity-5 bg-gradient-to-b from-current to-transparent ${iconColor}`} />}

        <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl mb-3 md:mb-4 flex items-center justify-center shadow-sm transition-transform duration-500 ${iconBg} ${isOpen ? 'scale-110' : ''}`}>
          <Icon className={`w-6 h-6 md:w-7 md:h-7 ${iconColor}`} strokeWidth={1.5} />
        </div>

        <h3 className="relative z-10 text-base md:text-base font-bold text-slate-800 tracking-tight mb-2">{title}</h3>
        <p className="relative z-10 text-slate-500 text-[11px] md:text-xs leading-relaxed mb-4 px-1 line-clamp-2">{subtitle}</p>

        <div className="mt-auto">
          {isOpen ? (
            <ChevronUp className={`w-5 h-5 ${iconColor}`} />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-300" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="bg-white border border-slate-100 rounded-[2rem] p-5 shadow-xl animate-in fade-in zoom-in-95 slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-center mb-5">
            <span className={`px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider ${iconBg} ${iconColor}`}>
              {details.tag}
            </span>
          </div>

          <div className="space-y-4 mb-6">
            {details.items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`mt-0.5 p-1.5 rounded-lg flex-shrink-0 ${iconBg}`}>
                  <item.icon className={`w-3.5 h-3.5 ${iconColor}`} />
                </div>
                <p className="text-[12px] text-slate-600 leading-snug font-medium text-left">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-5 border-t border-slate-50">
            {details.stats.map((stat, idx) => (
              <div key={idx} className={`rounded-2xl p-2.5 md:p-3 text-center transition-colors ${iconBg}`}>
                <p className={`text-sm md:text-sm font-black ${iconColor}`}>{stat.value}</p>
                <p className="text-[9px] md:text-[9px] text-slate-500 font-bold uppercase tracking-tighter">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Features = () => {
  // CHANGED: Set to null so no card is open by default
  const [activeFeature, setActiveFeature] = useState(null);

  const featureData = [
    {
      id: "gps",
      icon: MapPin,
      title: "Mapbox Live Maps",
      subtitle: "Real-time location tracking powered by Mapbox",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      details: {
        tag: "Mapbox Mapping Engine",
        items: [
          { icon: Target, text: "Mapbox map matching improves incident pinpointing" },
          { icon: Satellite, text: "Mapbox tiles and geocoding keep location context accurate" },
          { icon: Zap, text: "Live location updates synced to dispatch in real time" }
        ],
        stats: [
          { label: "Accuracy", value: "±5-10m" },
          { label: "Refresh", value: "1.5s" }
        ]
      }
    },
    {
      id: "routing",
      icon: Route,
      title: "Smart Routing",
      subtitle: "AI-powered route optimization and traffic data",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      details: {
        tag: "A-Star Pathfinding",
        items: [
          { icon: Activity, text: "Live traffic and road closure analysis" },
          { icon: Zap, text: "Reduces response time by up to 40%" },
          { icon: Shield, text: "Automated rerouting for obstructions" }
        ],
        stats: [
          { label: "Avg. Savings", value: "32%" },
          { label: "Daily Routes", value: "1.2k+" }
        ]
      }
    },
    {
      id: "alerts",
      icon: Bell,
      title: "Firebase Alerts",
      subtitle: "Cloud-backed notifications and incident updates",
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      details: {
        tag: "Firebase Cloud Database",
        items: [
          { icon: Bell, text: "Incident records and status updates are stored in Firebase" },
          { icon: Target, text: "Cloud sync keeps citizen and responder views aligned" },
          { icon: Info, text: "Low-latency updates support real-time emergency workflows" }
        ],
        stats: [
          { label: "Latency", value: "< 2.5s" },
          { label: "Reliability", value: "99.9%" }
        ]
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <Reveal>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 px-2">Core Features</h2>
            <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-light px-6">
              Cutting-edge technology powering the next generation of emergency response.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto">
            {featureData.map((feature) => (
              <FeatureCard
                key={feature.id}
                {...feature}
                isOpen={activeFeature === feature.id}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
                onToggle={() => setActiveFeature((prev) => (prev === feature.id ? null : feature.id))}
              />
            ))}
          </div>

          <div className="mt-12 md:mt-16 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-widest">System Status: Active</span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm italic font-light">
               Hover a feature to view technical specifications
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Features;