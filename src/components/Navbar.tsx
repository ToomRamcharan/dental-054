"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar({ config }: { config: any }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed top-4 left-4 z-50 lg:hidden bg-primary text-white p-2 rounded-lg">
        <Menu className="w-5 h-5" />
      </button>
      <nav className={`"fixed top-0 left-0 h-full z-50 bg-white shadow-xl transition-transform duration-300 w-64 ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0"`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <a href="#home" className="text-lg font-bold font-heading text-primary">Ruby Dental Clinic</a>
            <button onClick={() => setOpen(false)} className="lg:hidden"><X className="w-5 h-5" /></button>
          </div>
          <div className="space-y-4">
            {["Home","About","Services","Doctors","Testimonials","FAQ","Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-foreground/70 hover:text-primary transition-colors font-medium">{l}</a>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t">
            <a href="#contact" className="block w-full text-center bg-primary text-white px-5 py-3 font-medium">Book Appointment</a>
          </div>
        </div>
      </nav>
      {open && <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={() => setOpen(false)} />}
    </>
  )
}
