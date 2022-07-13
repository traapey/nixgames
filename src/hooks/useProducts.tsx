import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import productsFile from "../products.json";

export type Category = "minecraft" | "pvp";

interface PaymentLinks {
  pix: string;
  boleto: string;
  cartao: string;
  picpay: string;
}

export interface Product {
  id: number;
  title: string;
  pictureUrl: string;
  price: number;
  newPrice: number;
  bestSeller: boolean;
  category: Category;
  features: string[];
  paymentLinks: PaymentLinks;
}

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextData {
  products: Product[];
  selectedProduct: Product;
  setSelectedProduct: (product: Product) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProducts(productsFile as Product[]);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
