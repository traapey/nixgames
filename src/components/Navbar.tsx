import Image from "next/image";

import logoImage from "../assets/Logo.svg";
import { CaretDown } from "phosphor-react";
import { Menu, Transition } from "@headlessui/react";

import instagramLogo from "../assets/Instagram.svg";
import whatsAppLogo from "../assets/WhatsApp.svg";
import discordLogo from "../assets/Discord.svg";
import { useProducts } from "../hooks/useProducts";

export function Navbar() {
  const { products, setIsOpen, setSelectedProduct } = useProducts();

  return (
    <header className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-12">
        <Image
          className="mr-16"
          src={logoImage}
          height={90}
          width={90}
          alt="Logo"
        />

        <ul className="text-white flex flex-row align-center justify-center gap-9">
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5571982189558">
              Contato
            </a>
          </li>
          <li>
            <a href="#">
              <Menu>
                <Menu.Button className="flex flex-row items-center gap-1">
                  Produtos
                  <CaretDown size={12} color="#ffffff" weight="bold" />
                </Menu.Button>
                <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="bg-[#252728] rounded-lg flex flex-col absolute w-80 p-4 text-sm bg-opacity-100">
                    {products.map((product) => (
                      <Menu.Item key={product.id}>
                        <span
                          onClick={() => {
                            if (product.id === 4) {
                              window.open(
                                "https://pay.kiwify.com.br/ESQBDQ3",
                                "_blank"
                              );
                            } else {
                              setSelectedProduct(product);
                              setIsOpen(true);
                            }
                          }}
                          className="mt-2 p-1 rounded-md hover:bg-[#0E0F0F] transition"
                        >
                          {product.title}
                        </span>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex gap-5">
        <a
          href="https://www.instagram.com/nixgamesbr/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src={instagramLogo}
            width={32}
            height={32}
            alt="Instagram logo"
          />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=5571982189558"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src={whatsAppLogo}
            width={32}
            height={32}
            alt="WhatsApp logo"
          />
        </a>

        <a
          href="https://discord.gg/65E3vyYUTz"
          rel="noreferrer"
          target="_blank"
        >
          <Image src={discordLogo} width={32} height={32} alt="Discord logo" />
        </a>
      </div>
    </header>
  );
}
