import React, { FC, memo } from "react";

import { HeaderLayout } from "../template/HeaderLayout";

export const Page404: FC = memo(() => {
  return (
    <HeaderLayout>
      <p>404エラーページ</p>
    </HeaderLayout>
  );
});
