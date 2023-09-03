import apiClient from "@/lib/apiClient";
import { ServerError } from "@/lib/error";
import React, { ReactNode, useContext, useState } from "react";
import { useLocation } from "@/hooks/useLocation";
import { TypeShopList } from "@/types/global";

type ShopContextType = {
  shops: any;
  setShops: React.Dispatch<any>;
  setCurrentShop: (genre: any) => void;
};
type ShopProviderProps = {
  children: ReactNode;
};

/**
 * 現在地情報に関するhooks
 * @returns
 */
const shopSearch = async (lat: number, lng: number, genre: string) => {
  try {
    const shopData: [] = await getShopData(lat, lng, genre);
    return shopData;
  } catch (err) {
    //エラーのなんか
    throw ServerError;
  }
};

const getShopData = async (lat: number, lng: number, genre: string) => {
  const response = await apiClient.get(
    `/shopList?lat=${lat}&lng=${lng}&genre=${genre}`
  );
  return response.data;
};

const ShopContext = React.createContext<ShopContextType>({
  shops: [],
  setShops: () => {},
  setCurrentShop: () => {},
});

export const useShopContext = () => {
  return useContext(ShopContext);
};

export const ShopProvider = ({ children }: ShopProviderProps) => {
  const [shops, setShops] = useState<TypeShopList[]>([]);

  const setCurrentShop = async (genre: any) => {
    setShops([]); //初期化
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { getCurrentLocation } = useLocation();
    const currentLocation = await getCurrentLocation();
    if (typeof currentLocation === "string") {
      throw Error(currentLocation);
    }

    setShops(
      // eslint-disable-next-line react-hooks/rules-of-hooks
      await shopSearch(currentLocation.lat, currentLocation.lng, genre)
    );
  };

  const value = {
    shops,
    setShops,
    setCurrentShop,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
