// app/page.tsx
import ContactCTASection from '@/components/ContactCTASection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HolisticHealingSection from '@/components/HolisticHealingSection';
import RetreatSection from '@/components/RetreatSection';
import WellnessPrograms from '@/components/WellnessPrograms';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WellnessPrograms />
      <HolisticHealingSection />
      <RetreatSection />
      <ContactCTASection />
      <Footer />
    </div>
  );
}