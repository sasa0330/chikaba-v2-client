import { currentPosition, locationError } from "@/types/global";

/**
 * 現在地情報に関するhooks
 * @returns
 */
export const useLocation = () => {
  /**
   * 現在地情報(lat,lng)を取得する
   * @returns Promise<currentPosition | locationError>
   */
  const getCurrentLocation: () => Promise<
    currentPosition | locationError
  > = async () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        // Geolocation APIに対応していない場合
        const errorMssage: locationError =
          "この端末は現在地取得に対応していません";
        reject(errorMssage);
      }
      //現在地取得API
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // handle success
          const currentPosition: currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          resolve(currentPosition);
        },
        (geolocationError) => {
          // handle error
          const geolocationErrorCode = String(geolocationError.code);
          let errorMssage: locationError = "";
          switch (geolocationErrorCode) {
            // 位置情報が取得できない場合
            case "1":
              errorMssage = "位置情報の取得ができませんでした。";
              break;
            // Geolocationの使用が許可されない場合
            case "2":
              errorMssage = "位置情報取得の使用許可がされませんでした。";
              break;
            // タイムアウトした場合
            case "3":
              errorMssage = "位置情報取得中にタイムアウトしました。";
              break;
          }
          reject(errorMssage);
        },
        {
          //enableHighAccuracy: true, // より高精度な位置
        }
      );
    });
  };

  return { getCurrentLocation };
};
