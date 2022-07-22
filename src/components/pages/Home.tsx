import React, { FC, memo } from "react";

import { HeaderLayout } from "../template/HeaderLayout";

export const Home: FC = memo(() => {
  return (
    <HeaderLayout>
      <p>HOMe</p>
    </HeaderLayout>
  );
});
