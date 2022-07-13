import { Card } from "../components/Card";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";

import { Heading } from "../components/Heading";
import {
  AirplaneTakeoff,
  Check,
  Headphones,
  ShieldCheck,
} from "phosphor-react";
import { PurchaseModal } from "../components/PurchaseModal";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <main className="">
        <Navbar />
        <Heading />
        <Products />
        <Faq />

        <div className="flex flex-col items-center lg:flex-row mb-20 gap-24 mt-24">
          <Card
            icon={<Headphones size={32} weight="bold" color="#fff" />}
            title="Suporte"
            text="Nós da Nixgames oferecemos 24hrs de suporte para resolver quaisquer problema ou dúvidas."
          />
          <Card
            icon={<AirplaneTakeoff size={32} color="#ffffff" weight="bold" />}
            title="Entrega"
            text="Nós fornecemos um Prazo máximo de 48 horas para envio do produto após a aprovação do pagamento."
          />
          <Card
            icon={<ShieldCheck size={32} color="#ffffff" weight="bold" />}
            title="Segurança"
            text="Usamos o Mercado Pago, uma das melhores plataformas do mercado super eficiente e segura."
          />
          <Card
            icon={<Check size={32} color="#ffffff" weight="bold" />}
            title="Garantia"
            text="Caso haja algum problema inesperado, nossa garantia sobre sua compra é de 7 dias."
          />
        </div>
      </main>
      <Footer />

      <PurchaseModal />
    </div>
  );
}
