import { useState, useEffect } from "react";
import { QuizButton } from "@/components/quiz/QuizButton";
import { QuizData } from "@/data/quizData";
import { Check, ChevronLeft, ChevronRight, Star, ChevronDown } from "lucide-react";
import logo from "@/assets/quiz/logo.png";
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

const testimonials = [
  {
    name: "Rafaela Nascimento",
    location: "Cianorte, PR",
    text: "Muito bom! Recomendo, meu apetite diminuiu muito e já perdi 5 kg nos últimos 11 dias.",
    avatar: testimonial1,
    rating: 5
  },
  {
    name: "Luana Dias",
    location: "Betim, MG",
    text: "Recomendo muito. estou usando tem 2 semanas e estou com muito menos vontade de comer besteiras, perdi peso e desinchei bastante! obrigada!! 🥰🥰",
    avatar: testimonial2,
    rating: 5
  },
  {
    name: "Andressa Soares",
    location: "Piracaia, SP",
    text: "Oiii, estou tomando a 5 dias e os resultados já estão aparecendo, meu marido até me perguntou o que eu estou fazendo, simplesmente MARAVILHOSOOOOO 😍😍",
    avatar: testimonial3,
    rating: 5
  },
  {
    name: "Beatriz Mattos",
    location: "São Paulo, SP",
    text: "Muito bomm! baratinho e funciona!",
    avatar: testimonial4,
    rating: 5
  }
];

const faqs = [
  {
    question: "O que é o Mounjaro de Pobre?",
    answer: "É um protocolo 100% natural e acessível focado em estimular a queima de gordura e reduzir o apetite de forma estratégica, sem os efeitos colaterais de remédios caros."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "A maioria das nossas clientes relata mudanças visíveis já na primeira semana. O protocolo é feito para você perder em média 1kg por semana de forma saudável."
  },
  {
    question: "Como vou receber o acesso?",
    answer: "Imediatamente! Após a confirmação do pagamento, você receberá o acesso ao protocolo completo diretamente no seu e-mail cadastrado."
  },
  {
    question: "Preciso fazer dietas malucas?",
    answer: "Não! O plano é personalizado para se adaptar à sua rotina e ao que você gosta de comer. O foco é emagrecer com prazer e saúde."
  },
  {
    question: "E se eu não gostar?",
    answer: "Fique tranquila! Você tem 30 dias de garantia incondicional. Se não ficar satisfeita, devolvemos 100% do seu dinheiro via suporte."
  }
];

export const StepOffer = ({ data }: StepOfferProps) => {
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const [beforeProgress, setBeforeProgress] = useState(0);
  const [afterProgress, setAfterProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentCarousel(prev => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentCarousel(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const steps = 100;
    const intervalTime = duration / steps;

    const timer = setTimeout(() => {
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setBeforeProgress((currentStep / steps) * 15);
        setAfterProgress((currentStep / steps) * 95);

        if (currentStep >= steps) clearInterval(interval);
      }, intervalTime);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handlePurchase = () => {
    window.location.href = "https://www.ggcheckout.com/checkout/v2/RCTGLs4hp3Qiq1bwETG7";
  };

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
        <div className="flex justify-center mb-10">
          <img
            src={logo}
            alt="Mounjaro de Pobre"
            className="h-24 w-auto object-contain"
          />
        </div>

        {/* Hero title */}
        <div className="text-center mb-8 px-2">
          <h1 className="text-xl font-black text-foreground leading-tight">
            {data.name || "Você"}, está pronta para permitir a transformação no seu corpo e na sua saúde?
          </h1>
        </div>

        {/* Before/After Images */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="text-center">
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Antes</span>
            <div className="w-52 h-64 rounded-2xl overflow-hidden mt-1.5 shadow-xl border border-gray-100">
              <img src={offerBefore} alt="Antes" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-center">
            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Depois</span>
            <div className="w-52 h-64 rounded-2xl overflow-hidden mt-1.5 shadow-xl border-2 border-primary/20">
              <img src={offerAfter} alt="Depois" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Before/After Columns matching reference */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          {/* Antes */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center">
            <h3 className="text-[15px] font-bold text-center leading-tight mb-4 min-h-[40px]">
              Esta é você <span className="text-red-500">antes</span> do Mounjaro de Pobre
            </h3>

            <div className="relative h-3 w-full bg-gray-100 rounded-full mb-8 mt-2">
              <div
                className="absolute left-0 top-0 h-full bg-orange-500 rounded-full transition-all duration-200 ease-linear"
                style={{ width: `${beforeProgress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-orange-500 rounded-full border-[3px] border-white shadow-md transition-all duration-200 ease-linear"
                style={{ left: `${beforeProgress}%` }}
              />
            </div>

            <div className="mt-auto bg-[#F1F3F5] rounded-xl p-3 flex gap-2 items-start w-full">
              <div className="w-5 h-5 rounded-full border border-black/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-black" strokeWidth={3} />
              </div>
              <p className="text-[12px] font-bold leading-tight text-gray-800">
                Seu metabolismo está lento, fazendo você se sentir cansada.
              </p>
            </div>
          </div>

          {/* Depois */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center">
            <h3 className="text-[15px] font-bold text-center leading-tight mb-4 min-h-[40px]">
              E esta é <span className="text-primary font-bold">você depois</span> da nossa solução.
            </h3>

            <div className="relative h-3 w-full bg-gray-100 rounded-full mb-8 mt-2">
              <div
                className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-200 ease-linear"
                style={{ width: `${afterProgress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-primary rounded-full border-[3px] border-white shadow-md transition-all duration-200 ease-linear"
                style={{ left: `${afterProgress}%` }}
              />
            </div>

            <div className="mt-auto bg-[#E6F4EA] rounded-xl p-3 flex gap-2 items-start w-full">
              <div className="w-5 h-5 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
              </div>
              <p className="text-[12px] font-bold leading-tight text-gray-800">
                Aqui, seu metabolismo estará funcionando de forma otimizada.
              </p>
            </div>
          </div>
        </div>

        {/* Como funciona o Plano? - Green Border Card */}
        <div className="bg-white border-2 border-[#10B981] rounded-3xl p-6 mb-8 relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-7 rounded-full border-2 border-black/10 flex items-center justify-center shadow-sm">
              <Check className="w-4 h-4 text-black" strokeWidth={3} />
            </div>
            <h3 className="text-xl font-black text-foreground">Como funciona o Plano?</h3>
          </div>
          <div className="text-[15px] leading-relaxed text-gray-800 space-y-4">
            <p>
              <span className="text-primary font-bold">Com base nas suas informações pessoais e objetivos, criamos um plano 100% personalizado para você usar o Mounjaro de Pobre.</span> Nossa abordagem estratégica foi feita para que você consiga potencializar sua perda de peso em 4 semanas, respeitando seu estilo de vida, sua rotina e o que você gosta de comer.
            </p>
          </div>
        </div>

        {/* Seu plano inclui - Green Border Card */}
        <div className="bg-white border-2 border-[#10B981] rounded-3xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Check className="w-5 h-5 text-black" strokeWidth={3} />
            <h3 className="text-xl font-black text-foreground">Seu plano inclui:</h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="font-black text-[15px] mb-1">Como usar o Mounjaro do Jeito Certo:</h4>
              <p className="text-[14px] text-gray-600 leading-snug">
                Baseado nas pesquisas mais recentes de universidades famosas como Havard, desenvolvemos o Protocolo Mounjaro de Pobre, a forma mais eficaz e segura de usar o Mounjaro de Pobre para perder peso sem que você perca músculos ou sinta muita fome.
              </p>
            </div>

            <div>
              <h4 className="font-black text-[15px] mb-1">Definição de metas diárias:</h4>
              <p className="text-[14px] text-gray-600">para você se manter no caminho certo</p>
            </div>

            <div>
              <h4 className="font-black text-[15px] mb-1">Planilha de acompanhamento:</h4>
              <p className="text-[14px] text-gray-600">Saiba exatamente quanto você está evoluindo.</p>
            </div>

            <p className="text-primary font-black text-[15px]">
              3 Bônus Exclusivos + um Mega <span className="uppercase">presente surpresa</span>
            </p>
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
        <QuizButton onClick={handlePurchase} className="animate-pulse-slow mb-4">
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

          <div className="relative group rounded-xl overflow-hidden mb-4 shadow-xl border-2 border-primary/10">
            <img
              src={carouselImages[currentCarousel]}
              alt="Depoimento"
              className="w-full h-auto transition-all duration-700"
            />

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-transform hover:scale-110 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-transform hover:scale-110 z-10"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-2 right-4 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              {currentCarousel + 1} / {carouselImages.length}
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCarousel(index)}
                className={`w-2 h-2 rounded-full transition-colors ${currentCarousel === index ? 'bg-primary' : 'bg-muted'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* New Before/After Social Proof Images */}
        <div className="space-y-4 mb-10 pt-4">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img src={beforeAfter1} alt="Resultado comprovado 1" className="w-full h-auto" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img src={beforeAfter2} alt="Resultado comprovado 2" className="w-full h-auto" />
          </div>
        </div>

        {/* Testimonials section - Moved for better flow */}
        <div className="space-y-4 mb-10 pt-4 border-t border-gray-100">
          <h3 className="text-center font-black text-lg mb-6 leading-tight">
            Veja o que nossas clientes <span className="text-primary">estão falando:</span>
          </h3>
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/5">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[15px] text-foreground leading-tight">{t.name}</h4>
                  <p className="text-[12px] text-muted-foreground font-medium">{t.location}</p>
                </div>
              </div>

              <p className="text-[14px] text-gray-700 leading-relaxed font-medium mb-4">
                {t.text}
              </p>

              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="bg-card border-2 border-primary rounded-xl p-4 mb-6 text-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍵</span>
              <span className="font-bold">Mounjaro de Pobre</span>
            </div>
            <span className="text-2xl font-black text-primary">R$ 37,90</span>
          </div>
        </div>

        {/* Final CTA */}
        <QuizButton onClick={handlePurchase} className="animate-pulse-slow mb-4">
          Quero Começar Hoje! 🔥
        </QuizButton>

        {/* Trust badges again */}
        <div className="mb-6">
          <img src={trustBadges} alt="Compra segura" className="w-full h-auto" />
        </div>

        {/* Guarantee */}
        <div className="text-center px-4 mb-10">
          <h3 className="font-bold text-lg mb-6">Garantia de reembolso</h3>
          <div className="flex justify-center mb-8">
            <img
              src={guarantee}
              alt="Garantia 30 dias"
              className="w-72 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6 max-w-sm mx-auto text-[15px] leading-snug">
            <p className="text-gray-800 font-medium">
              A compra deste material é totalmente sem risco para você.
            </p>
            <p className="text-gray-800 font-medium">
              Se ele não atender às suas expectativas nos primeiros 30 dias após a compra, nós reembolsaremos todo o valor que você pagou, sem fazer perguntas.
            </p>
            <p className="text-primary font-bold">
              Basta enviar um e-mail para o suporte em arkanintelligence@gmail.com
            </p>
          </div>
        </div>


        {/* FAQ Section */}
        <div className="mb-12">
          <h3 className="text-center font-black text-xl mb-8 leading-tight">
            Dúvidas <span className="text-primary text-2xl uppercase italic">Frequentes</span>
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span className="font-extrabold text-[15px] text-gray-800 leading-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                >
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <QuizButton onClick={handlePurchase} className="animate-pulse-slow">
          Quero Começar Hoje! 🔥
        </QuizButton>
      </div>
    </div>
  );
};
