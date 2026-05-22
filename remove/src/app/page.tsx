'use client'
import { About } from "@/src/components/About";
import { BestTechnology } from "@/src/components/BestTechnology";
import { Blog } from "@/src/components/Blog";
import { Features } from "@/src/components/Features";
import { FloatingContact } from "@/src/components/FloatingContact";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/Hero";
import { Services } from "@/src/components/Services";
import { Specialists } from "@/src/components/Specialists";
import { Testimonial } from "@/src/components/Testimonial";

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
