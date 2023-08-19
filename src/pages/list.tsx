import { Card } from "@/components/Card/Card";
import { useShopContext } from "@/context/shop";
import Link from "next/link";
import router from "next/router";
import React, { useEffect } from "react";

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

function list() {
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
}

export default list;
