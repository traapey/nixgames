import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useProducts } from "../hooks/useProducts";

import boletoIcon from "../assets/Boleto.svg";
import cardIcon from "../assets/Card.svg";
import picPayIcon from "../assets/PicPay.svg";
import pixIcon from "../assets/PIX.svg";
import closeIcon from "../assets/Close.svg";

export function PurchaseModal() {
  const { isOpen, setIsOpen, selectedProduct } = useProducts();

  return (
    <div style={{ zIndex: "2" }}>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 flex items-center justify-center p-8 bg-clip-padding bg-[#161819] backdrop-filter backdrop-blur-sm bg-opacity-10 transition">
          <Dialog.Panel className="rounded-[62px] bg-[#161819] pt-6 pb-20 shadow-lg">
            <div className="flex flex-col items-center justify-center relative">
              <span
                className="top-3 right-8 absolute cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {" "}
                <Image
                  src={closeIcon}
                  width={32}
                  height={32}
                  alt="Fechar caixa de diálogo"
                />
              </span>
              <h1 className="font-medium text-3xl">Como deseja pagar?</h1>
              <hr className="min-w-[350px]" />
            </div>
            <div className="flex flex-row items-center justify-center gap-3 mx-24">
              {selectedProduct && (
                <>
                  <a
                    className="payment-button"
                    href={selectedProduct.paymentLinks.pix}
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={pixIcon} width={32} height={32} alt="PIX" />
                    PIX
                  </a>
                  <a
                    className="payment-button"
                    href={selectedProduct.paymentLinks.cartao}
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image src={cardIcon} width={32} height={32} alt="Cartão" />
                    Cartão
                  </a>
                  <a
                    className="payment-button"
                    href={selectedProduct.paymentLinks.boleto}
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={boletoIcon}
                      width={32}
                      height={32}
                      alt="Boleto"
                    />
                    Boleto
                  </a>
                  <a
                    className="payment-button"
                    href={selectedProduct.paymentLinks.picpay}
                    onClick={() => setIsOpen(false)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={picPayIcon}
                      width={32}
                      height={32}
                      alt="PicPay"
                    />
                    PicPay
                  </a>
                </>
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
