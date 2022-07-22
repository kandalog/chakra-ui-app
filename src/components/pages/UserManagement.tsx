import React, { FC, memo } from "react";
import { HeaderLayout } from "../template/HeaderLayout";

export const UserManagement: FC = memo(() => {
  return (
    <HeaderLayout>
      <p>ユーザー管理ページです</p>
    </HeaderLayout>
  );
});
