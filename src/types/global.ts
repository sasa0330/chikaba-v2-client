/**
 * 店舗リストの型
 */
export type TypeShopList = {
  itemId: string; //店舗ID
  photo: string; //メイン画像
  shopName: string; //店名
  lunch: string; //ランチがあるか
  budgetName: string; //検索用ディナー予算
  address: string; //住所
  access: string; //アクセス情報
  smoking: string; //喫煙情報
  catch: string; //キャッチコピー
  capacity?: number; //総席数
  freeDrink?: string; //飲み放題（例：あり）
};

/**
 * 現在地の型
 */
export type currentPosition = {
  lat: number; //緯度
  lng: number; //経度
};
export type locationError = string;
