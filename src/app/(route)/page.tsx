import { About } from "@/components/home/About";
import { Blog } from "@/components/home/Blog";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Services />
      <Blog />
    </main>
  );
}
