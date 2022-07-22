import React, { FC, memo } from "react";

import { HeaderLayout } from "../template/HeaderLayout";

export const Login: FC = memo(() => {
  return (
    <HeaderLayout>
      <p>ログインページです</p>
    </HeaderLayout>
  );
});
