export const createErrorObject = (statusCode: string, errorMessage: string) => {
  return {
    statusCode: statusCode,
    errorMassage: errorMessage,
  };
};

export const ServerError = createErrorObject("500", "サーバーエラーです。");
export const NotFoundError = createErrorObject(
  "402",
  "ページが見つかりません。"
);
