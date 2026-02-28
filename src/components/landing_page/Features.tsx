"use client";

import {
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Mic,
  MoonStar,
} from "lucide-react";
import { useEffect, useState } from "react";

const features = [
  {
    id: 1,
    title: "Conversational AI",
    desc: "Chat naturally with an AI trained on health-related queries to get instant, reliable answers for common symptoms and medical concerns.",
    icon: <Stethoscope className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: "Emergency Assistance",
    desc: "Quickly access nearby hospital guidance, emergency numbers, and first-aid tips when time matters most.",
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: "Symptom Checker",
    desc: "Describe your symptoms and get possible condition suggestions, empowering you with actionable health insights.",
    icon: <Sparkles className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    title: "Voice Input",
    desc: "Speak directly to Med Genie using built-in speech recognition for quick, hands-free health assistance.",
    icon: <Mic className="h-10 w-10 text-primary" />,
  },
  {
    id: 5,
    title: "Theme Toggle",
    desc: "Switch between dark and light modes for a comfortable experience in any environment.",
    icon: <MoonStar className="h-10 w-10 text-primary" />,
  },
  {
    id: 6,
    title: "Privacy-First",
    desc: "No data storage or tracking — your health queries remain private and secure.",
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
  },
];

export default function FeatureSection() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    features.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes((prev) => [...prev, i]);
      }, i * 150);
    });
  }, []);

  return (
    <section className="w-full px-[6%] py-[75px] max-md:py-[70px]">

      {/* Modern Medical Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          How Med Genie Helps You
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Smart, secure, and instant medical guidance — designed to empower your health decisions.
        </p>
      </div>

      {/* Feature Timeline */}
      <div className="flex flex-col gap-24">

        {features.map((f, index) => (
          <div
            key={f.id}
            className={`flex items-center gap-12 max-lg:flex-col transition-all duration-700 ${
              visibleIndexes.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            } ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >

            {/* Step Indicator */}
            <div className="flex flex-col items-center min-w-[60px]">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg">
                {f.id}
              </div>
              {index !== features.length - 1 && (
                <div className="w-[2px] h-24 bg-primary/40 max-lg:hidden mt-2" />
              )}
            </div>

            {/* Glass Card */}
            <div
              className="
                bg-card/70
                backdrop-blur-xl
                border border-border
                rounded-2xl
                p-8
                max-w-[600px]
                shadow-lg
                transition-all duration-300
                hover:shadow-2xl
                hover:scale-[1.02]
              "
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {f.title}
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base">
                {f.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}