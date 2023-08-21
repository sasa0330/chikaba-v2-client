import apiClient from "@/lib/apiClient";
import { ServerError } from "@/lib/error";

export const useShopSearch = async (
  lat: number,
  lng: number,
  genre: string
) => {
  try {
    const shopData: [] = await getShopData(lat, lng, genre);
    return shopData;
  } catch (err) {
    //エラーのなんか
    throw ServerError;
  }
};

export const getShopData = async (lat: number, lng: number, genre: string) => {
  const response = await apiClient.get(
    `/shopList?lat=${lat}&lng=${lng}&genre=${genre}`
  );
  return response.data;
};
