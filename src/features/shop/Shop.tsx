import { useShopContext } from "@/hooks/useShop";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { TypeShopList } from "@/types/global";

export const Shop = () => {
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
        <Image
          src={currentShop.photo}
          alt={currentShop.shopName}
          width="200"
          height="200"
        />
      </div>
      <div>このページのIDは{currentShop.itemId}です。</div>
      <div>店舗名：{currentShop.shopName}</div>
      <div>キャッチフレーズ：{currentShop.catch}</div>
      <div>ランチ：{currentShop.lunch}</div>
      <div>喫煙：{currentShop.smoking}</div>
    </>
  );
};
