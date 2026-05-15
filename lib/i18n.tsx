"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Lang = "th" | "en";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

const th = {
  nav: {
    home: "หน้าแรก",
    services: "บริการและราคา",
    promotions: "โปรโมชั่น",
    branches: "ค้นหาสาขา",
  },
  // hero: {
  //   title: ["เทคนิคยอดเยี่ยม", "เพื่อสุขภาพฟันที่ดี"],
  //   subtitle:
  //     "วางแผนทุกขั้นตอนด้วยข้อมูลจริง ดูแลโดยทันตแพทย์ผู้มีประสบการณ์ เพื่อรอยยิ้มที่สวยงามและใช้งานได้จริง",
  // },
    hero: {
    title: ["Excellent Techniques For Healthy", "Dental Condition"],
    subtitle:LOREM,
  },
  features: [
    {
      title: "เทคโนโลยี",
      desc: "The Dentistry มีเทคโนโลยี 3D Scanner เทคโนโลยีที่ผ่านการคัดสรร และได้รับความไว้วางใจ ซึ่งควบคุม และอ่านผลโดยทันตแพทย์ผู้มีประสบการณ์ สามารถวิเคราะห์ตรวจสอบฟันได้อย่างละเอียด",
    },
    {
      title: "ทีมแพทย์มากประสบการณ์",
      desc: "ทีมแพทย์ที่มากประสบการณ์ที่จะมาร่วมวางแผนการรักษาด้วย เทคโนโลยี 3D CBCT และ DigitalScanner ที่เห็นชัดเจนบนจอดิจิทัลความละเอียดสูงที่ช่วยให้คุณเห็นภาพโครงสร้างฟัน และเข้าใจแผนการรักษาได้ชัดเจนยิ่งขึ้น",
    },
    {
      title: "รอยยิ้มที่เหมาะกับคุณที่สุด",
      desc: "จากกระบวนการของ The Dentistry จากการประเมินข้อมูลผ่านระบบคอมพิวเตอร์ การวิเคราะห์พฤติกรรม การใช้ชีวิต โครงสร้างของใบหน้า และการวางร่วมกับแพทย์ผู้มากประสบการณ์ จะทำให้คุณได้รอยยิ้มที่เหมาะสมกับคุณที่สุด",
    },
  ],
  about: {
    // eyebrow: "เกี่ยวกับเรา",
    // heading: ["คลินิกทันตกรรม", "เพื่อความงามและสุขภาพ"],
    // desc: "ด้วยเทคโนโลยีที่เชื่อถือได้ ละเอียด แม่นยำ กับทันตแพทย์ผู้มีประสบการณ์ เพื่อร่วมกันสร้างรอยยิ้มที่เหมาะที่สุดสำหรับคุณ",
    // cards: [
    //   {
    //     title: "Humanware & Hardware",
    //     desc: "ผสานการใช้เทคโนโลยีและทันตแพทย์ผู้มากประสบการณ์",
    //   },
    //   {
    //     title: "Detailed treatment",
    //     desc: "ทุกการรักษา เกิดจากความแม่นยำและใส่ใจทุกรายละเอียด",
    //   },
    // ],

    eyebrow: "เกี่ยวกับเรา",
    heading: ["คลินิกทันตกรรม", "เพื่อความงามและสุขภาพ"],
    desc: "ด้วยเทคโนโลยีที่เชื่อถือได้ ละเอียด แม่นยำ กับทันตแพทย์ผู้มีประสบการณ์ เพื่อร่วมกันสร้างรอยยิ้มที่เหมาะที่สุดสำหรับคุณ",
    cards: [
      {
        title: "Humanware & Hardware",
        desc: "ผสานการใช้เทคโนโลยีและทันตแพทย์ผู้มากประสบการณ์",
      },
      {
        title: "Detailed treatment",
        desc: "ทุกการรักษา เกิดจากความแม่นยำและใส่ใจทุกรายละเอียด",
      },
    ],
  },
  services: {
    heading: "บริการของเรา",
    items: [
      {
        title: "ตรวจสุขภาพช่องปาก",
        desc: "วิเคราะห์และวินิจฉัยด้วยเทคโนโลยีภาพ 3 มิติ ร่วมกับความเชี่ยวชาญของทันตแพทย์ ลูกค้ามั่นใจได้ว่าคุณหมอรู้ปัญหาได้อย่างแม่นยำ รักษาได้ถูกจุด",
      },
      {
        title: "วีเนียร์",
        desc: "วีเนียร์ที่ออกแบบอย่างพิถีพิถัน ด้วยฝีมือทันตแพทย์และวัสดุคุณภาพสูง วางแผนเคสอย่างเหมาะสม ใช้เทคนิคที่คงเนื้อฟันมากที่สุด และเลือกวัสดุคุณภาพสูงเพื่อผลลัพธ์ที่สวยงามเป็นธรรมชาติ",
      },
      {
        title: "จัดฟันใส",
        desc: "เทคโนโลยี 3D ทำงานแม่นยำ วัสดุคุณภาพสูง ทันตแพทย์ทำงานร่วมกับระบบวางแผนดิจิทัลอย่างมีประสิทธิภาพ เพื่อฟันเรียงสวยอย่างแม่นยำ",
      },
      {
        title: "รากฟันเทียม",
        desc: "ทดแทนฟันที่สูญเสียด้วยรากฟันเทียมที่วางแผนอย่างแม่นยำ การวินิจฉัยที่ละเอียดด้วยระบบดิจิทัล และรากฟันเทียมคุณภาพสูง เพื่อให้ผลลัพธ์มั่นคงและใช้งานได้ดีในระยะยาว",
      },
      {
        title: "All-on X",
        desc: "ออกแบบรอยยิ้มและฟันทั้งปากก่อนเริ่มการรักษา ด้วยคอมพิวเตอร์ช่วยวางแผน Smile Design และการรักษา เพื่อเพิ่มความแม่นยำทั้งด้านการใช้งานและความสวยงาม",
      },
      {
        title: "ฟอกสีฟัน",
        desc: "ทำความสะอาดฟันแบบไม่ต้องเจ็บ ไม่ต้องขูด ด้วยเทคโนโลยีการพ่นน้ำ อากาศ และผงละเอียดช่วยขจัดคราบ พลัค และแบคทีเรียได้อย่างรวดเร็ว",
      },
    
    ],
    readMore: "อ่านเพิ่มเติม",
  },
  footer: {
    stayConnected: "ติดตามข่าวสารกับ The Dentistry",
    companyDesc:
      "คลินิกทันตกรรมครบวงจร ดูแลโดยทันตแพทย์ผู้มีประสบการณ์ ด้วยเทคโนโลยีที่แม่นยำและใส่ใจทุกรายละเอียด",
    address:
      "สำนักงานใหญ่: 183 อาคารรีเจ้นท์ เฮ้าส์ ชั้นที่ 11 ถนนราชดําริห์ กรุงเทพมหานคร 10330",
    quickLinksTitle: "ลิงก์ด่วน",
    quickLinks: [
      "เกี่ยวกับเรา",
      "ทีมทันตแพทย์",
      "บริการของเรา",
      "ค้นหาสาขา",
      "โปรโมชั่น",
    ],
  },
  floating: {
    line: "LINE",
    messenger: "Messenger",
    call: "โทรหาเรา",
  },
};

type Translations = typeof th;

const en: Translations = {
  nav: {
    home: "Home",
    services: "Services & Pricing",
    promotions: "Promotions",
    branches: "Find a Branch",
  },
  hero: {
    title: ["Excellent Techniques For Healthy", "Dental Condition"],
    subtitle:LOREM
      
  },
  features: [
    // {
    //   title: "Smart Technology",
    //   desc: "Treatment planned on 3D software — see real results before we begin. With CBCT at every branch and iTero in every room: more precise, less pain, results you see before treatment.",
    // },
    // {
    //   title: "All-in-One Specialist Care",
    //   desc: "Every dental specialty in one place. Plan, treat and follow up continuously — no referrals, no starting over.",
    // },
    // {
    //   title: "Results You Can See & Feel",
    //   desc: "Every step planned with real data, delivering beautiful results that truly work.",
    // },
     {
      title: "Smart Technology",
      desc: LOREM
    },
    {
      title: "All-in-One Specialist Care",
      desc: LOREM
    },
    {
      title: "Results You Can See & Feel",
      desc: LOREM
    },
  ],
  about: {
    // eyebrow: "About Us",
    // heading: ["A Dental Clinic", "For Beauty And Health"],
    // desc: "With reliable, detailed and precise technology together with experienced dentists, to create the smile that suits you best.",
    // cards: [
    //   {
    //     title: "Humanware & Hardware",
    //     desc: "Combining advanced technology with highly experienced dentists.",
    //   },
    //   {
    //     title: "Detailed treatment",
    //     desc: "Every treatment is built on precision and attention to every detail.",
    //   },

    eyebrow: "About Us",
    heading: ["A Dental Clinic", "For Beauty And Health"],
    desc: LOREM,
    cards: [
      {
        title: "Humanware & Hardware",
        desc: LOREM,
      },
      {
        title: "Detailed treatment",
        desc: LOREM,
      },

    ],
  },
  services: {
    heading: "Our Services",
    items: [
      // {
      //   title: "Oral Health Check-up",
      //   desc: "Analysis and diagnosis with 3D imaging technology combined with dental expertise, so you can be confident the dentist identifies problems precisely and treats the right spot.",
      // },
      // {
      //   title: "Veneers",
      //   desc: "Meticulously designed veneers crafted by skilled dentists using premium materials. Each case is properly planned with techniques that preserve as much natural tooth as possible for beautiful, natural results.",
      // },
      // {
      //   title: "Clear Aligners",
      //   desc: "Precise 3D technology with premium materials. Dentists work efficiently with digital planning systems for accurately aligned, beautiful teeth.",
      // },
      // {
      //   title: "Dental Implants",
      //   desc: "Replace lost teeth with precisely planned dental implants. Detailed digital diagnosis and high-quality implant systems deliver stable, long-lasting results.",
      // },
      // {
      //   title: "Teeth Cleaning (AirFlow)",
      //   desc: "Pain-free teeth cleaning with no scraping, using water, air and fine powder technology to quickly remove stains, plaque and bacteria.",
      // },
      // {
      //   title: "All-on-X",
      //   desc: "Design your smile and full-arch teeth before treatment begins with computer-aided Smile Design and treatment planning, increasing precision in both function and aesthetics.",
      // },

       {
        title: "Oral Health Check-up",
        desc: LOREM,
      },
      {
        title: "Veneers",
       desc: LOREM,
      },
      {
        title: "Clear Aligners",
        desc: LOREM,
      },
      {
        title: "Dental Implants",
        desc: LOREM,
      },
      {
        title: "Teeth Cleaning (AirFlow)",
        desc: LOREM,
      },
      {
        title: "All-on-X",
        desc: LOREM,
      },

    ],
    readMore: "Read More",
  },
  footer: {
    stayConnected: "Stay Connected with The Dentistry",
    companyDesc:
      "A full-service dental clinic cared for by experienced dentists, with precise technology and attention to every detail.",
    address:
      "Headquarters: - ",
    quickLinksTitle: "Quick Links",
    quickLinks: [
      "About Us",
      "Dental Team",
      "Our Services",
      "Find a Branch",
      "Promotions",
    ],
  },
  floating: {
    line: "LINE",
    messenger: "Messenger",
    call: "Call Us",
  },
};

const translations: Record<Lang, Translations> = { th, en };

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("th");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "th" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === "th" ? "en" : "th")),
      t: translations[lang],
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
