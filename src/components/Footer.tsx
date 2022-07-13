import Image from "next/image";

import logoImage from "../assets/Logo.svg";

export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-[#0E0F0F] pt-12 pb-12">
      <Image src={logoImage} width={85} height={94} alt="Logo" />

      <p className="text-xl leading-[30px]">
        © Copyright nixgames.com.br 2022, todos os direitos reservados.
      </p>
      <p>
        MINECRAFT É UMA MARCA DE AUTORIDADE DA MOJANG AB E NÃO VINCULADA A ESTE
        SITE.
      </p>
    </footer>
  );
}
