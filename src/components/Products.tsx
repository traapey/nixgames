import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Category, Product, useProducts } from "../hooks/useProducts";

import bestSellerIcon from "../assets/BestSeller.svg";

export function Products() {
  const { products, setIsOpen, setSelectedProduct } = useProducts();
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("minecraft");

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="flex flex-col items-center justify-center mb-12 mt-12">
      <ul className="self-start mb-10 flex flex-row gap-8">
        <li>
          <button onClick={() => setSelectedCategory("minecraft")}>
            Minecraft
            {selectedCategory === "minecraft" && (
              <span className="purple-badge" />
            )}
          </button>
        </li>
        <li>
          <button onClick={() => setSelectedCategory("pvp")}>
            Curso PvP{" "}
            {selectedCategory === "pvp" && <span className="purple-badge" />}
          </button>
        </li>
      </ul>

      <div className="flex flex-col md:flex-row gap-12">
        {products
          .filter((product) => product.category === selectedCategory)
          .map(
            ({
              id,
              title,
              pictureUrl,
              features,
              price,
              newPrice,
              bestSeller,
              paymentLinks,
              category,
            }) => (
              <div
                className={`flex flex-col rounded-[24px] w-[420px] px-9 py-6 ${
                  bestSeller ? "bg-[#7000FF] bg-opacity-10" : "bg-[#1F2123]"
                }`}
                key={id}
              >
                <div className="flex items-center justify-center">
                  <span
                    className="bg-[#373638] absolute inline-block w-56 h-56 bg-opacity-30 rounded-full"
                    style={{ zIndex: "-1" }}
                  />
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${pictureUrl})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "280px",
                      objectFit: "cover",
                      overflow: "hidden",
                    }}
                  />
                  {bestSeller && (
                    <span
                      className="absolute mb-56 ml-80"
                      style={{ zIndex: "1" }}
                    >
                      <Image
                        src={bestSellerIcon}
                        width={64}
                        height={64}
                        alt="Produto mais vendido"
                      />
                    </span>
                  )}
                </div>
                <div className="flex flex-col items-center justify-center mt-6 text-center font-semibold text-2xl">
                  <strong>{title}</strong>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-sm line-through text-neutral-500">
                      {formatter.format(price)}
                    </span>{" "}
                    <span className="font-bold text-2xl">
                      {formatter.format(newPrice)}
                    </span>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col gap-2">
                  {features.map((feature, index) => (
                    <p
                      className="flex flex-row gap-2 items-start justify-start"
                      key={index}
                    >
                      {" "}
                      <span>
                        <Check
                          className="-mb-2"
                          size={24}
                          weight="bold"
                          color={bestSeller ? "#6100FF" : "#fff"}
                        />{" "}
                      </span>
                      {feature.trim()}
                    </p>
                  ))}
                </div>
                {id === 4 ? (
                  <a
                    className="bg-[#7000FF] mt-8 justify-center shadow-md px-9 py-4 flex flex-row items-center font-semibold gap-2 rounded-lg hover:bg-opacity-80 transition"
                    target="_blank"
                    href="https://pay.kiwify.com.br/ESQBDQ3"
                    rel="noreferrer"
                  >
                    <ShoppingCart size={24} color="#ffffff" weight="bold" />
                    COMPRAR
                  </a>
                ) : (
                  <button
                    className="bg-[#7000FF] mt-8 justify-center shadow-md px-9 py-4 flex flex-row items-center font-semibold gap-2 rounded-lg hover:bg-opacity-80 transition"
                    onClick={() => {
                      if (id != 4) {
                        setSelectedProduct({
                          id,
                          bestSeller,
                          category,
                          features,
                          newPrice,
                          paymentLinks,
                          pictureUrl,
                          price,
                          title,
                        });
                        setIsOpen(true);
                      }
                    }}
                  >
                    <ShoppingCart size={24} color="#ffffff" weight="bold" />
                    COMPRAR
                  </button>
                )}
              </div>
            )
          )}
      </div>

      <button
        className="shadow-md px-6 mt-12 py-5 rounded-lg bg-[#252728] flex flex-row items-center justify-center gap-4"
        onClick={() =>
          setSelectedCategory(selectedCategory == "pvp" ? "minecraft" : "pvp")
        }
      >
        {selectedCategory === "pvp" ? "Voltar" : "Avançar"}{" "}
        {selectedCategory === "pvp" ? (
          <ArrowLeft size={16} color="#828282" weight="bold" />
        ) : (
          <ArrowRight size={16} color="#828282" weight="bold" />
        )}
      </button>
    </div>
  );
}
