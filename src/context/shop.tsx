//Contextで共有したいもの
//ショップデータ保持するuseState
//ショップデータを取得するget関数

import apiClient from "@/lib/apiClient";
import React, { ReactNode, useContext, useState } from "react";
import { useCurrentLocation } from "@/hooks/location";
import { useShopSearch } from "@/hooks/shop";

/**
 * 店舗リストの型
 */
export type TypeShopList = {
  // 店舗ID
  itemId: string;
  // メイン画像
  photo: string;
  // 店名
  shopName: string;
  //ランチがあるか
  lunch: string;
  //検索用ディナー予算
  budgetName: string;
  //住所
  address: string;
  //アクセス情報
  access: string;
  //喫煙情報
  smoking: string;
  //キャッチコピー
  catch: string;
  //総席数（例：300）
  capacity?: number;
  //飲み放題（例：あり）
  freeDrink?: string;
};

interface ShopContextType {
  shops: any;
  setShops: React.Dispatch<any>;
  setCurrentShop: (genre: any) => void;
}
interface ShopProviderProps {
  children: ReactNode;
}

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
    const location = await useCurrentLocation();
    if (typeof location === "string") {
      throw Error(location);
    }
    setShops(await useShopSearch(location.lat, location.lng, genre));
  };

  const value = {
    shops,
    setShops,
    setCurrentShop,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
