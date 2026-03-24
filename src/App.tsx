import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Instagram, 
  Camera, 
  Sparkles, 
  Smartphone, 
  Zap, 
  X, 
  ChevronDown,
  Clock,
  Users,
  ShieldCheck
} from 'lucide-react';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-medium text-lg"
      >
        <span>{question}</span>
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-neutral-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-neutral-900">
      {/* Sticky Header / Promo Bar */}
      <div className="sticky top-0 z-50 bg-neutral-900 text-white py-2 px-4 text-center text-sm font-medium">
        <span className="animate-pulse text-brand-gold">FLASH SALE:</span> Nur noch {formatTime(timeLeft)} Min. für 70% Rabatt!
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-serif font-bold tracking-tighter">
          EMILY <span className="text-brand-gold italic">DIENER</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          <a href="#problem" className="hover:text-brand-gold transition-colors">Problem</a>
          <a href="#method" className="hover:text-brand-gold transition-colors">Methode</a>
          <a href="#gallery" className="hover:text-brand-gold transition-colors">Ergebnisse</a>
          <a href="#offer" className="hover:text-brand-gold transition-colors">Angebot</a>
        </div>
        <a href="#offer" className="bg-neutral-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-neutral-800 transition-all shadow-lg">
          Jetzt Glow-Up
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-accent/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-neutral-800 mb-6">
              <Sparkles className="w-3 h-3 text-brand-gold" />
              <span>Die Nr. 1 Selfie-Expertin</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
              Verwandle jedes <span className="italic text-brand-gold">peinliche</span> Selfie in dein bestes Profilbild aller Zeiten
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-lg leading-relaxed">
              Ohne teure Kameras. Ohne Photoshop-Skills. Nur mit meinen bewährten Tricks, die dich wie ein Model aussehen lassen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#offer" className="bg-neutral-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl">
                Jetzt Glow-Up starten <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 opacity-70">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">50.000+ Nutzerinnen</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm font-medium">100% Zufriedenheit</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800" 
                alt="Emily Diener Selfie" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px] animate-bounce-slow">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="text-sm font-bold italic">"Mein Gesicht sieht plötzlich so symmetrisch aus!"</p>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-12">Kennst du das?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="w-8 h-8 text-brand-gold" />,
                text: "Deine Selfies sehen nie so gut aus wie bei anderen Influencern."
              },
              {
                icon: <Smartphone className="w-8 h-8 text-brand-gold" />,
                text: "Du fühlst dich unwohl, dein Profilbild auf Instagram oder Tinder zu posten."
              },
              {
                icon: <Zap className="w-8 h-8 text-brand-gold" />,
                text: "Du bekommst weniger Likes und Matches, als du eigentlich verdient hättest."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-brand-beige/50 border border-brand-accent/20"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <p className="font-medium leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Methodology */}
      <section id="method" className="py-24 px-6 bg-brand-skin">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
              alt="Emily Diener Portrait" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl mb-6">Hi, ich bin Emily.</h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Früher habe ich hunderte Fotos gemacht und keines war gut genug. Ich fühlte mich unsicher und habe mich hinter Filtern versteckt, die mich unnatürlich aussehen ließen. 
              <br /><br />
              Dann habe ich die Geheimnisse der Profis entdeckt. Es geht nicht um Photoshop – es geht um die 4 Säulen der Selfie-Perfektion.
            </p>
            <div className="space-y-4">
              {[
                { title: "Licht", desc: "Wie du Tageslicht nutzt, um deine Haut makellos wirken zu lassen." },
                { title: "Winkel", desc: "Finde deine Schokoladenseite und verstecke kleine Makel sofort." },
                { title: "Mimik", desc: "Der 'Model-Blick' – lerne, wie du Selbstbewusstsein ausstrahlst." },
                { title: "Bearbeitung", desc: "Meine geheimen Apps und Einstellungen für den Glow-Up-Look." }
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{step.title}</h4>
                    <p className="text-neutral-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Echte Transformationen</h2>
            <p className="text-neutral-500">Zieh den Slider, um den Unterschied zu sehen.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800"
              afterImage="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800"
            />
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
              afterImage="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
            />
            <div className="hidden lg:block">
              <BeforeAfterSlider 
                beforeImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                afterImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offer / Product Section */}
      <section id="offer" className="py-24 px-6 bg-brand-beige relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-[40px] p-8 md:p-16 shadow-2xl relative z-10 border-2 border-brand-gold/20">
            <div className="absolute top-0 right-12 transform -translate-y-1/2 bg-brand-gold text-white px-6 py-2 rounded-full font-bold shadow-lg">
              BESTSELLER
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl mb-6">Catfish Selfie <span className="text-brand-gold">Mastery</span></h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Das komplette System, um von "unfotogen" zu "atemberaubend" zu wechseln. Inklusive meiner persönlichen Presets.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Schritt-für-Schritt Videoanleitungen",
                    "Meine Top 5 Glow-Up Presets",
                    "Geheime Tricks für Face-App & Lightroom",
                    "Bonus: Die 10 schlimmsten Selfie-Fehler",
                    "Exklusiver Zugang zur Community"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-soft text-center border border-neutral-100">
                <div className="text-neutral-400 line-through text-xl mb-1">Statt 99,00 €</div>
                <div className="text-6xl font-serif font-bold mb-2">29,00 €</div>
                <p className="text-brand-gold font-bold text-sm mb-8">Einmalzahlung. Lebenslanger Zugriff.</p>
                
                <button className="w-full bg-neutral-900 text-white py-5 rounded-2xl text-xl font-bold hover:bg-neutral-800 transition-all shadow-xl mb-4 group">
                  Jetzt Zugang sichern
                  <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 font-medium">
                  <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> Angebot endet bald</div>
                  <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> 14 Tage Geld-zurück</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-16">Was meine Mädels sagen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah L.",
                text: "Ich bekomme plötzlich doppelt so viele Matches auf Tinder! Emily's Tipps haben mein Dating-Leben komplett verändert.",
                rating: 5
              },
              {
                name: "Jessica M.",
                text: "Ich erkenne mich selbst kaum wieder – im positiven Sinne. Meine Fotos sehen jetzt so professionell aus, als hätte ich einen Fotografen.",
                rating: 5
              },
              {
                name: "Laura K.",
                text: "Die Presets sind der Wahnsinn. Endlich ein einheitlicher Feed auf Instagram ohne stundenlanges Bearbeiten.",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="p-8 rounded-3xl bg-brand-beige/30 border border-neutral-100 italic">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
                </div>
                <p className="text-neutral-700 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="font-bold not-italic">— {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-brand-skin">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Häufig gestellte Fragen</h2>
          <div className="space-y-2">
            <FAQItem 
              question="Brauche ich spezielle Apps?" 
              answer="Nein, wir nutzen hauptsächlich kostenlose Apps wie Lightroom Mobile und Snapseed. Ich zeige dir genau, welche Einstellungen du brauchst." 
            />
            <FAQItem 
              question="Funktioniert das auch ohne Erfahrung?" 
              answer="Absolut! Der Kurs ist für komplette Anfängerinnen konzipiert. Ich erkläre alles Schritt-für-Schritt." 
            />
            <FAQItem 
              question="Wie schnell sehe ich Ergebnisse?" 
              answer="Sofort! Sobald du das Modul über Licht und Winkel gesehen hast, wird dein nächstes Selfie bereits 10x besser aussehen." 
            />
            <FAQItem 
              question="Ist das nur für Influencer?" 
              answer="Überhaupt nicht. Jede Frau, die sich auf Fotos wohler fühlen und attraktiver wirken möchte, profitiert von der Mastery." 
            />
            <FAQItem 
              question="Was ist, wenn ich nicht zufrieden bin?" 
              answer="Ich biete eine 14-Tage Geld-zurück-Garantie an. Wenn du keine Verbesserung siehst, bekommst du dein Geld ohne Fragen zurück." 
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-neutral-900 text-white text-center overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="text-5xl md:text-6xl mb-8">Bereit für dein <span className="text-brand-gold italic">Glow-Up</span>?</h2>
          <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
            Hör auf, dich für deine Fotos zu schämen. Starte heute und werde zur attraktivsten Version deiner selbst.
          </p>
          <a href="#offer" className="inline-block bg-brand-gold text-neutral-900 px-12 py-5 rounded-2xl text-2xl font-bold hover:scale-105 transition-transform shadow-2xl">
            Jetzt Catfish Mastery sichern
          </a>
          <p className="mt-8 text-sm text-neutral-500">Nur noch für kurze Zeit zum Sonderpreis von 29€ verfügbar.</p>
        </motion.div>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border border-brand-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 border border-brand-gold rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-neutral-100 text-center">
        <div className="text-xl font-serif font-bold tracking-tighter mb-6">
          EMILY <span className="text-brand-gold italic">DIENER</span>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-neutral-400 hover:text-brand-gold transition-colors"><Instagram /></a>
          <a href="#" className="text-neutral-400 hover:text-brand-gold transition-colors"><Camera /></a>
        </div>
        <p className="text-neutral-400 text-sm">
          &copy; 2026 Emily Diener. Alle Rechte vorbehalten. <br />
          <span className="inline-block mt-2">Impressum | Datenschutz | AGB</span>
        </p>
      </footer>
    </div>
  );
}
