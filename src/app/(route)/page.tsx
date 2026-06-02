import { About } from "@/components/home/About";
import { Blog } from "@/components/home/Blog";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { getSiteSettings } from "@/sanity/lib/queries";

export default async function Home() {
  const site = await getSiteSettings();

  return (
    <main>
      <Hero banners={site?.heroBanner} />
      <Features />
      <About />
      <Services />
      <Blog />
    </main>
  );
}
