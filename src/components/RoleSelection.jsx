import { useState } from "react";
import {
  Users, Ambulance, ChevronDown, ChevronUp,
  MapPin, Camera, CheckCircle, MessageSquare,
  Bell, ShieldCheck, ChevronRight, Navigation,
  Users as MultiUser, FileText
} from "lucide-react";
import { Reveal } from "./Reveal";

const RoleSelection = () => {
  const [expandedRole, setExpandedRole] = useState(null);

  const citizenFeatures = [
    { icon: MapPin, title: "Automatic GPS Location", desc: "Your precise location is captured instantly and shared with responders" },
    { icon: Camera, title: "Multimedia Evidence", desc: "Attach photos, videos, and voice notes to your emergency report" },
    { icon: CheckCircle, title: "Emergency Type Selection", desc: "Choose from predefined categories for faster routing" },
    { icon: MessageSquare, title: "Live Chat & Call", desc: "Communicate directly with responders in real-time" },
    { icon: Bell, title: "Track Emergency Status", desc: "Monitor your request status with live updates and ETA" },
  ];

  const responderFeatures = [
    { icon: Bell, title: "Instant Push Notifications", desc: "Receive alerts immediately when emergencies match your profile" },
    { icon: Navigation, title: "A-Star Optimized Navigation", desc: "Get the fastest route considering traffic conditions" },
    { icon: MapPin, title: "Real-Time Location Tracking", desc: "See citizen location updates and coordinate with teams" },
    { icon: MultiUser, title: "End-to-End Calls & Chat", desc: "Secure one-to-one end-to-end video calls, voice calls, and live chat" },
    { icon: FileText, title: "Status Updates & Response Log", desc: "Document actions taken and update status in real-time" },
  ];

  const FeatureItem = ({ icon: Icon, title, desc, colorClass }) => (
    <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 border border-slate-50 rounded-2xl bg-white shadow-sm transition-hover hover:shadow-md">
      <div className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-slate-50 ${colorClass.replace('text', 'bg-opacity-10')}`}>
        <Icon className={`w-4 h-4 md:w-5 md:h-5 ${colorClass}`} />
      </div>
      <div className="text-left pt-0.5">
        <h4 className="text-[13px] md:text-sm font-bold text-slate-800 mb-0.5 md:mb-1 leading-tight">{title}</h4>
        <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-[#0B1120]">
      <Reveal>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            {/* Kept text-white here so the section title is actually visible on the dark BG */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Select Your Role</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto px-4">Choose your path to connect with ResQC 5's emergency response network</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">

            {/* CITIZEN CARD - Original White Style */}
            <div 
              onMouseEnter={() => setExpandedRole('citizen')}
              onMouseLeave={() => setExpandedRole(null)}
              className={`transition-all duration-500 rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 bg-white cursor-default hover:shadow-2xl ${expandedRole === 'citizen'
                ? 'ring-2 ring-red-500 shadow-2xl shadow-red-100'
                : 'border border-slate-100 shadow-xl hover:border-red-200'
              }`}
            >
              <div className="p-5 md:p-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 md:space-x-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center shadow-inner flex-shrink-0">
                      <Users className="w-6 h-6 md:w-7 md:h-7 text-red-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800">I am a Citizen</h3>
                      <p className="text-slate-500 text-xs md:text-sm mt-0.5">Request emergency assistance</p>
                    </div>
                  </div>
                  {expandedRole === 'citizen' ? <ChevronUp className="text-red-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> : <ChevronDown className="text-slate-300 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />}
                </div>

                {expandedRole === 'citizen' && (
                  <div className="mt-8 md:mt-10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="grid gap-3">
                      {citizenFeatures.map((f, i) => <FeatureItem key={i} {...f} colorClass="text-red-500" />)}
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
                      <div className="bg-red-50/50 rounded-xl py-3 px-4 flex items-center justify-center space-x-3 text-red-700 text-[11px] md:text-xs font-medium text-center">
                        <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span>Registration required for full access</span>
                      </div>
                      <button className="w-full bg-[#ef4444] text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all shadow-lg shadow-red-200 active:scale-[0.98]">
                        Continue as Citizen <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RESPONDER CARD - Original White Style */}
            <div 
              onMouseEnter={() => setExpandedRole('responder')}
              onMouseLeave={() => setExpandedRole(null)}
              className={`transition-all duration-500 rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 bg-white cursor-default hover:shadow-2xl ${expandedRole === 'responder'
                ? 'ring-2 ring-blue-500 shadow-2xl shadow-blue-100'
                : 'border border-slate-100 shadow-xl hover:border-blue-200'
              }`}
            >
              <div className="p-5 md:p-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4 md:space-x-5">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center shadow-inner flex-shrink-0">
                      <Ambulance className="w-6 h-6 md:w-7 md:h-7 text-blue-500" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-800">I am a Responder</h3>
                      <p className="text-slate-500 text-xs md:text-sm mt-0.5">Receive alerts and manage missions</p>
                    </div>
                  </div>
                  {expandedRole === 'responder' ? <ChevronUp className="text-blue-500 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> : <ChevronDown className="text-slate-300 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />}
                </div>

                {expandedRole === 'responder' && (
                  <div className="mt-8 md:mt-10 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="grid gap-3">
                      {responderFeatures.map((f, i) => <FeatureItem key={i} {...f} colorClass="text-blue-600" />)}
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
                      <div className="bg-blue-50/50 rounded-xl py-3 px-4 flex items-center justify-center space-x-3 text-blue-700 text-[11px] md:text-xs font-medium text-center">
                        <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>Authorized personnel only</span>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-[0.98]">
                        Continue as Responder <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default RoleSelection;