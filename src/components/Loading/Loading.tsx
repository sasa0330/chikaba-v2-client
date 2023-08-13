import React from "react";

export const Loading = () => {
  return (
    <>
      <div className="flex justify-center" aria-label="検索中">
        <div className="animate-ping h-10 w-10 bg-blue-600 rounded-full">
          検索中
        </div>
      </div>
    </>
  );
};
