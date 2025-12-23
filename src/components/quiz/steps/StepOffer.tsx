import { useState, useEffect } from "react";
import { QuizButton } from "@/components/quiz/QuizButton";
import { QuizData } from "@/data/quizData";
import { Check } from "lucide-react";
import offerBefore from "@/assets/quiz/offer-before.png";
import offerAfter from "@/assets/quiz/offer-after.png";
import bonusGifts from "@/assets/quiz/bonus-gifts.jpg";
import trustBadges from "@/assets/quiz/trust-badges.png";
import offerCarousel1 from "@/assets/quiz/offer-carousel-1.jpg";
import offerCarousel2 from "@/assets/quiz/offer-carousel-2.jpg";
import offerCarousel3 from "@/assets/quiz/offer-carousel-3.jpg";
import offerCarousel4 from "@/assets/quiz/offer-carousel-4.jpg";
import offerCarousel5 from "@/assets/quiz/offer-carousel-5.jpg";
import beforeAfter1 from "@/assets/quiz/before-after-1.png";
import beforeAfter2 from "@/assets/quiz/before-after-2.jpg";
import guarantee from "@/assets/quiz/guarantee.png";
import testimonial1 from "@/assets/quiz/testimonial-1.jpg";
import testimonial2 from "@/assets/quiz/testimonial-2.jpg";
import testimonial3 from "@/assets/quiz/testimonial-3.jpg";
import testimonial4 from "@/assets/quiz/testimonial-4.jpg";

interface StepOfferProps {
  data: QuizData;
}

const carouselImages = [offerCarousel1, offerCarousel2, offerCarousel3, offerCarousel4, offerCarousel5];
const testimonialImages = [testimonial1, testimonial2, testimonial3, testimonial4];

export const StepOffer = ({ data }: StepOfferProps) => {
  const [currentCarousel, setCurrentCarousel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarousel(prev => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-2 text-center">
        <span className="text-primary-foreground text-sm font-medium">
          🔒 Compra 100% segura
        </span>
      </header>
      
      <div className="max-w-xl mx-auto px-4 py-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍵</span>
            <span className="font-extrabold text-lg text-primary">
              MOUNJARO<span className="text-foreground text-sm align-super">DE</span>POBRE
            </span>
          </div>
        </div>
        
        {/* Hero */}
        <div className="text-center mb-6 animate-fade-in">
          <h1 className="text-xl font-extrabold text-foreground mb-2">
            {data.name || "Você"}, está pronta para transformar seu corpo e sua saúde?
          </h1>
          
          {/* Before/After */}
          <div className="flex justify-center gap-4 my-6">
            <div className="text-center">
              <span className="text-xs font-bold text-muted-foreground">ANTES</span>
              <div className="w-32 h-40 rounded-lg overflow-hidden mt-1">
                <img src={offerBefore} alt="Antes" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-muted-foreground">DEPOIS</span>
              <div className="w-32 h-40 rounded-lg overflow-hidden mt-1">
                <img src={offerAfter} alt="Depois" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          {/* Checkmarks */}
          <div className="flex justify-center gap-6 text-xs text-muted-foreground mb-6">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-primary" /> 3 milhões de clientes satisfeitos
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-primary" /> Ingredientes 100% naturais
            </span>
          </div>
        </div>
        
        {/* Como funciona */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6 animate-slide-up">
          <div className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground mb-1">Como funciona o Plano?</h3>
              <p className="text-sm text-muted-foreground">
                O protocolo <span className="text-primary font-bold">Mounjaro de Pobre</span> funciona estimulando o emagrecimento a partir da queima de gordura. Seus ingredientes agem diretamente no local de acúmulo de gordura, acelerando a queima de gordura em seu organismo, através de uma redução do desejo de comer. Você pode perder em média 1Kg por semana!
              </p>
            </div>
          </div>
        </div>
        
        {/* Bonuses */}
        <div className="mb-6">
          <h3 className="text-center font-bold text-sm mb-2">
            Ao Garantir Seu Mounjaro de Pobre Hoje, <span className="text-primary">Você Recebe Todos os Bônus de Presente:</span>
          </h3>
          
          <div className="rounded-xl overflow-hidden">
            <img src={bonusGifts} alt="Bônus presentes" className="w-full h-auto" />
          </div>
        </div>
        
        {/* CTA Button */}
        <QuizButton className="animate-pulse-slow mb-4">
          Quero Começar Hoje! 🔥
        </QuizButton>
        
        {/* Trust badges */}
        <div className="mb-6">
          <img src={trustBadges} alt="Compra segura" className="w-full h-auto" />
        </div>
        
        {/* Social proof carousel */}
        <div className="mb-6">
          <h3 className="text-center font-bold text-sm mb-4">
            Quem Usa <span className="text-primary">Tem Resultado</span> 💚✨
          </h3>
          
          <div className="rounded-xl overflow-hidden mb-4">
            <img 
              src={carouselImages[currentCarousel]} 
              alt="Depoimento" 
              className="w-full h-auto transition-opacity duration-500"
            />
          </div>
          
          {/* Carousel dots */}
          <div className="flex justify-center gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCarousel(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentCarousel === index ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Before/After images */}
        <div className="space-y-4 mb-6">
          <div className="rounded-xl overflow-hidden">
            <img src={beforeAfter1} alt="Antes e Depois" className="w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={beforeAfter2} alt="Antes e Depois" className="w-full h-auto" />
          </div>
        </div>
        
        {/* Price */}
        <div className="bg-card border-2 border-primary rounded-xl p-4 mb-6 text-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍵</span>
              <span className="font-bold">Mounjaro de Pobre</span>
            </div>
            <span className="text-2xl font-black text-primary">R$ 47,90</span>
          </div>
        </div>
        
        {/* Final CTA */}
        <QuizButton className="animate-pulse-slow mb-4">
          Quero Começar Hoje! 🔥
        </QuizButton>
        
        {/* Trust badges again */}
        <div className="mb-6">
          <img src={trustBadges} alt="Compra segura" className="w-full h-auto" />
        </div>
        
        {/* Guarantee */}
        <div className="text-center mb-6">
          <h3 className="font-bold mb-4">Garantia de reembolso</h3>
          <div className="flex justify-center mb-4">
            <img src={guarantee} alt="Garantia 30 dias" className="w-40 h-auto" />
          </div>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            A confiança dessa empresa é tanta para você. Então, se em até 30 dias após sua compra você não experimentar os resultados esperados, basta entrar em contato que iremos devolver todo valor investido com seu pedido.
          </p>
        </div>
        
        {/* Testimonials list */}
        <div className="space-y-4 mb-6">
          {testimonialImages.map((image, index) => (
            <div key={index} className="rounded-xl overflow-hidden">
              <img src={image} alt={`Depoimento ${index + 1}`} className="w-full h-auto" />
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <QuizButton className="animate-pulse-slow">
          Quero Começar Hoje! 🔥
        </QuizButton>
      </div>
    </div>
  );
};
