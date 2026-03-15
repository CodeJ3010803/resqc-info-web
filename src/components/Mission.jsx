import React from 'react';
import { Heart, Scale, Radio, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const MissionCard = ({ icon: Icon, title, description, iconColor, iconBg, hoverBorder }) => (
  <div className={`group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm 
    hover:shadow-xl hover:-translate-y-1 hover:border-${hoverBorder} 
    transition-all duration-300 flex flex-col items-start text-left cursor-default`}>
    
    <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center mb-6 
      group-hover:scale-110 transition-transform duration-300`}>
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>
    
    <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-slate-900 transition-colors">
      {title}
    </h3>
    
    <p className="text-slate-500 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const OurMission = () => {
  const missions = [
    {
      icon: Heart,
      title: "Community First",
      description: "Every feature we build starts with the safety and well-being of Quezon City residents.",
      iconColor: "text-red-500",
      iconBg: "bg-red-50",
      hoverBorder: "red-200"
    },
    {
      icon: Scale,
      title: "Unwavering Integrity",
      description: "Our systems are built on transparency and accountability, ensuring trust in every interaction.",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
      hoverBorder: "blue-200"
    },
    {
      icon: Radio,
      title: "Rapid Response",
      description: "In emergencies, seconds matter. We optimize every digital pathway to save precious time.",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-50",
      hoverBorder: "orange-200"
    },
    {
      icon: Users,
      title: "Unified Coordination",
      description: "Bridging the gap between citizens and responders for a seamless, cooperative safety network.",
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-50",
      hoverBorder: "emerald-200"
    }
  ];

  return (
    <section className="py-24 bg-white" id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Matched exactly to image */}
          <div className="text-left">
            <Reveal>
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#475569]">Our Core Mission</span>
              </div>
              
              {/* Heading */}
              <h2 className="text-[34px] md:text-[50px] font-bold text-[#0F172A] leading-[1.05] mb-8 tracking-[-0.02em]">
                Redefining <br />
                <span className="text-[#FF0D29]">Emergency Response</span> <br />
                for the Digital Age.
              </h2>
              
              {/* Description */}
              <p className="text-lg md:text-[20px] text-[#64748B] leading-relaxed max-w-[540px] mb-12 font-medium opacity-90">
                RESQC is more than just an app—it's a commitment to creating a safer, 
                more responsive city where technology empowers every citizen to act 
                and every responder to succeed.
              </p>
              
              {/* Link with Hover Underline */}
              <div className="relative inline-block">
                   {/* The manifesto link has been removed */}
              </div>
            </Reveal>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missions.map((item, index) => (
              <Reveal key={index}>
                <MissionCard {...item} />
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurMission;