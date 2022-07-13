import { MagnifyingGlass } from "phosphor-react";

export function Heading() {
  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-5xl">Hello gamer</h1>
        <p className="opacity-50 font-medium">
          Preparado para começar o game com qualidade,
        </p>
        <p className="opacity-50 font-medium">segurança e economia?</p>
      </div>

      <label className="mt-4 w-[720px] relative text-white block shadow-md">
        <MagnifyingGlass
          className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3"
          size={32}
          color="#ffffff"
          weight="bold"
        />
        <input
          type="text"
          placeholder="O que você está procurando hoje?"
          className="form-input w-full rounded-lg text-center text-opacity-50 bg-[#252728] border-transparent py-4 pl-4 pr-8 appearance-none block focus:outline-none"
        />
      </label>
    </div>
  );
}
