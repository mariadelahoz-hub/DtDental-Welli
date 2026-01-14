import { useEffect } from "react";

declare global {
  interface Window {
    hbspt?: any;
  }
}

const WHATSAPP_URL = "https://wa.me/573123195667";

const HunterForm = () => {
  useEffect(() => {
    const container = document.getElementById("hubspot-hunter-form");
    if (!container || container.childElementCount > 0) return;

    const loadForm = () => {
      if (!window.hbspt) return;

      window.hbspt.forms.create({
        region: "na1",
        portalId: "50421361",
        formId: "00cedec6-1f58-45ac-806c-f49c628b4d9a",
        target: "#hubspot-hunter-form",

        // 🔥 CLAVE: flujo correcto
        onFormSubmitted: () => {
          // Delay pequeño para asegurar que HubSpot guarde todo
          setTimeout(() => {
            window.location.href = WHATSAPP_URL;
          }, 500);
        },
      });
    };

    // Script loader (solo una vez)
    if (!window.hbspt) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = loadForm;
      document.body.appendChild(script);
    } else {
      loadForm();
    }
  }, []);

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-4 text-center">
        Déjanos tus datos y un Hunter te contactará de inmediato
      </p>

      <div
        id="hubspot-hunter-form"
        className="min-h-[200px]"
      />
    </div>
  );
};

export default HunterForm;
