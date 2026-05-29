import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductMatrix from '../components/ProductMatrix';
import IndustrySolutions from '../components/IndustrySolutions';
import Statistics from '../components/Statistics';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Hero />
          <ScrollReveal immediate>
            <ProductMatrix />
          </ScrollReveal>
          <ScrollReveal>
            <IndustrySolutions />
          </ScrollReveal>
          <ScrollReveal>
            <Statistics />
          </ScrollReveal>
          <ScrollReveal>
            <CTA />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
