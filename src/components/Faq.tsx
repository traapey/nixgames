import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import plusIcon from "../assets/Plus.svg";

export function Faq() {
  return (
    <div id="faq" className="flex flex-col items-center justify-center">
      <h1 className="font-medium text-4xl mb-16">PERGUNTAS FREQUENTES</h1>

      <div className="flex flex-col gap-y-9">
        <Disclosure>
          <Disclosure.Button className="dialog">
            <p>Como é entregue?</p>
            <Image src={plusIcon} alt="Abrir caixa de diálogo" />
          </Disclosure.Button>
          <Transition
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className="dialog-text">
              Assim que o pagamento é aprovado o produto é enviado ao e-mail
              colocado na compra.
            </Disclosure.Panel>
          </Transition>
        </Disclosure>

        <Disclosure>
          <Disclosure.Button className="dialog">
            <p>Quais formas de pagamento disponível?</p>
            <Image src={plusIcon} alt="Abrir caixa de diálogo" />
          </Disclosure.Button>
          <Transition
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className="dialog-text">
              Atualmente aceitamos as seguintes formas de pagamento: Pix, Boleto
              e cartão
            </Disclosure.Panel>
          </Transition>
        </Disclosure>

        <Disclosure>
          <Disclosure.Button className="dialog">
            <p>Comprei e ainda não chegou, o que faço?</p>
            <Image src={plusIcon} alt="Abrir caixa de diálogo" />
          </Disclosure.Button>
          <Transition
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className="dialog-text">
              Prezamos muito pela entrega rápida a todos clientes com um prazo
              máximo de 48 horas, mas caso seu produto demore de ser entregue
              entre em contato conosco para agilizar a entrega da sua compra.
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
      </div>
    </div>
  );
}
