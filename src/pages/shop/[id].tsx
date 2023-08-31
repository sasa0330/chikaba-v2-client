import { useShopContext } from "@/context/shop";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
type TypeShopList = {
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

const StatusPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { shops } = useShopContext();

  const currentShop: TypeShopList = shops.find(
    (shop: TypeShopList) => shop.itemId === id
  );
  if (!currentShop) {
    return (
      <>
        <div>ショップが存在しません</div>
        <Link href="/list">戻る</Link>
      </>
    );
  }
  return (
    <>
      <div>
        <Image src={currentShop.photo} alt="" />
      </div>
      <div>このページのIDは{currentShop.itemId}です。</div>
      <div>店舗名：{currentShop.shopName}</div>
      <div>キャッチフレーズ：{currentShop.catch}</div>
      <div>ランチ：{currentShop.lunch}</div>
      <div>喫煙：{currentShop.smoking}</div>
    </>
  );
};

export default StatusPage;
