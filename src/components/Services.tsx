"use client"
import { useState } from "react"
import { ChevronDown, Gem, Stethoscope, Sparkles, Syringe, SmilePlus, Baby } from "lucide-react"
import Motion from "./Motion"
import { fadeUp } from "./Motion"

const ICONS = [Gem, Stethoscope, Sparkles, Syringe, SmilePlus, Baby]
const SERVICES = [
  {title:"General Dentistry",desc:"Comprehensive checkups and preventive care for optimal oral health."},
  {title:"Root Canal Treatment",desc:"Pain-free root canal therapy to save infected teeth."},
  {title:"Teeth Whitening",desc:"Professional whitening for a brighter, more confident smile."},
  {title:"Dental Implants",desc:"Permanent tooth replacement that looks and feels natural."},
  {title:"Orthodontics",desc:"Braces and aligners to straighten teeth and correct bite."},
  {title:"Pediatric Dentistry",desc:"Gentle, kid-friendly dental care for your little ones."},
]

export default function Services({ config }: { config: any }) {
  const [open, setOpen] = useState(0)
  return (
    <section id="services" className="section-padding bg-bg-dark">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3 mb-4">Comprehensive Dental Care</h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">Everything you need for a healthy smile</p>
        </Motion>
        <div className="max-w-3xl mx-auto space-y-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <Motion key={i} variants={fadeUp} delay={i}>
                <div className="border border-border-color rounded-xl overflow-hidden">
                  <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"><Icon className="w-5 h-5 text-primary" /></div>
                      <span className="font-semibold text-foreground">{s.title}</span>
                    </div>
                    <ChevronDown className={`"w-5 h-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}"`} />
                  </button>
                  {open === i && <div className="px-5 pb-5 text-foreground-muted">{s.desc}</div>}
                </div>
              </Motion>
            )
          })}
        </div>
      </div>
    </section>
  )
}
