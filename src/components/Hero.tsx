import { MessageCircle, ExternalLink, CheckCircle, Zap } from "lucide-react";
import welliLogo from "@/assets/welli-logo.webp";
import dtDentalLogo from "@/assets/dt-dental-logo.png";
import dentalImage from "@/assets/dental.jpg";

const WHATSAPP_URL = "https://wa.me/573123195667";
const WELLI_URL = "https://www.welli.com.co";

const Hero = () => {
  return (
      <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-welli-turquoise/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-welli-turquoise/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Zap className="w-4 h-4 text-welli-turquoise" />
            <span className="text-sm font-medium text-gray/90">Alianza exclusiva para clínicas odontológicas</span>
          </div>

          {/* Headline */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 animate-slide-up mb-14 md:mb-20">
  
  {/* Imagen izquierda */}
  <div className="flex justify-center md:justify-start">
    <img
      src={dentalImage}
      alt="Crecimiento para clínicas odontológicas"
      className="w-full max-w-md rounded-2xl shadow-2xl"
    />
  </div>

  {/* Texto derecha */}
  <div className="text-center md:text-left">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray leading-tight mb-6">
      Únete a las +1,000 clínicas que ya eliminaron los presupuestos rechazados.
    </h1>

    <p className="text-lg md:text-xl text-gray/80 mb-8">
      Integra el financiamiento de <strong className="text-gray">Welli</strong> directamente en{" "}
      <strong className="text-gray">Dt Dental</strong> y convierte más presupuestos en tratamientos.
    </p>
  </div>

</div>



          {/* Subheadline */}
          <div> 

          </div>
          {/* CTAs */}
          <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta !text-gray-800"
          >
            <MessageCircle className="w-5 h-5 !text-gray-800" />
            Contactar a un Hunter
          </a>

          <a
            href={WELLI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-hero !text-gray-700 border border-gray-500"
          >
            Conocer Welli
            <ExternalLink className="w-4 h-4 !text-gray-700" />
          </a>
        </div>


          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-gray/70 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-welli-turquoise" />
              <span>Sin riesgo de cartera</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-welli-turquoise" />
              <span>100% digital</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-welli-turquoise" />
              <span>Desembolso en ≤72h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 35.8C384 39 480 54 576 59.2C672 64.3 768 59.7 864 50C960 40.3 1056 25.7 1152 22.5C1248 19.3 1344 27.7 1392 31.8L1440 36V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
