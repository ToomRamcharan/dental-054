'use client'

import React, { useState, useEffect } from 'react'
import Motion from '../components/Motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Doctors from '../components/Doctors'
import Technology from '../components/Technology'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import GoogleMap from '../components/GoogleMap'
import Footer from '../components/Footer'
import WhatsAppCTA from '../components/WhatsAppCTA'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  const siteConfig = {
    clinicName: "Ruby Dental Clinic",
    phone: "+918702456789",
    email: "",
    address: "H.no 14-4-19, Warangal",
    city: "Warangal",
    pincode: "506002",
    rating: "4.3",
    waLink: "https://wa.me/918702456789",
    designFamily: "Gradient Modern",
    navType: "Sidebar",
    heroType: "Bento Grid",
    servicesType: "Accordion",
    footerType: "Map Footer",
    colors: {"primary": "#EA580C", "primary_light": "#FB923C", "secondary": "#F97316", "secondary_light": "#FDBA74", "accent": "#C2410C", "bg": "#FFF7ED", "bg_dark": "#1C1917", "fg": "#1E293B", "fg_muted": "#78716C", "border": "#FED7AA", "white": "#FFFFFF"},
  }

  return (
    <main id="main-content" className="min-h-screen bg-bg-site text-foreground">
      <Navbar config={siteConfig} />
      <Hero config={siteConfig} />
      <About config={siteConfig} />
      <Services config={siteConfig} />
      <Doctors config={siteConfig} />
      <Technology config={siteConfig} />
      <Testimonials config={siteConfig} />
      <Gallery config={siteConfig} />
      <FAQ config={siteConfig} />
      <Contact config={siteConfig} />
      <GoogleMap config={siteConfig} />
      <Footer config={siteConfig} />
      <WhatsAppCTA config={siteConfig} />
    </main>
  )
}
