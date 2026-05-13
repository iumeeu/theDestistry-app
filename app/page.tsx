'use client'
import { About } from "@/components/About";
import { BestTechnology } from "@/components/BestTechnology";
import { Blog } from "@/components/Blog";
import { Features } from "@/components/Features";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Specialists } from "@/components/Specialists";
import { Testimonial } from "@/components/Testimonial";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        {/* <BestTechnology />
        <Testimonial />
        <Blog />
        <Specialists /> */}
        
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
