"use client"
import { motion } from "framer-motion"
import { Calendar, Star, Shield, Zap, Heart, Smile } from "lucide-react"

export default function Hero({ config }: { config: any }) {
  const items = [
    {icon: Shield, text: "COVID Safe", color: "from-emerald-400 to-emerald-600"},
    {icon: Zap, text: "Painless", color: "from-amber-400 to-amber-600"},
    {icon: Heart, text: "Caring Team", color: "from-rose-400 to-rose-600"},
    {icon: Smile, text: "Amazing Results", color: "from-blue-400 to-blue-600"},
  ]
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight mb-6">
              Your <span className="text-secondary">Perfect Smile</span><br />Starts Here
            </h1>
            <p className="text-lg text-gray-300 mb-8">{config.clinicName} in {config.city}</p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-accent text-white px-8 py-3.5 font-semibold hover:shadow-xl transition-all">
              <Calendar className="w-5 h-5" /> Book Now
            </a>
          </motion.div>
          <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.6,delay:0.2}} className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">{"â­".repeat(5)}</div>
              <p className="text-white font-bold text-xl">{config.clinicName}</p>
              <p className="text-gray-400 text-sm">{config.address}</p>
              <div className="mt-3 text-4xl font-bold text-white">{config.rating} <span className="text-lg text-gray-400">/ 5.0</span></div>
            </div>
            {items.map((item,i) => (
              <div key={i} className={`"bg-gradient-to-br ${item.color} p-4 rounded-xl flex flex-col items-center justify-center text-center"`}>
                <item.icon className="w-8 h-8 text-white mb-2" />
                <span className="text-white font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
