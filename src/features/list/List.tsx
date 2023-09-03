import { Card } from "@/components/Card/Card";
import { useShopContext } from "@/hooks/useShop";
import { TypeShopList } from "@/types/global";
import Link from "next/link";
import router from "next/router";
import React, { useEffect } from "react";

export const List = () => {
  const { shops } = useShopContext();

  useEffect(() => {
    //店舗情報がない時はトップに戻す
    if (!shops.length) {
      router.push("/");
    }
  }, []);
  console.log("shops");
  console.log(shops);
  return (
    <>
      {shops.map((shop: TypeShopList, index: number) => (
        <Link href={`shop/${shop.itemId}`} key={index}>
          <Card
            imgAttr={{
              src: shop.photo,
              alt: shop.shopName,
            }}
            contents={
              <div>
                <div className="font-bold">{shop.shopName}</div>
                <div>{shop.access}</div>
                <div>{shop.catch}</div>
              </div>
            }
          />
        </Link>
      ))}
    </>
  );
};
