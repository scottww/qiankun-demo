// src/config/menu.js
export const mainMenu = [
  {
    name: "首页",
    path: "/",
  },
  {
    name: "用户管理（user-app）",
    children: [
      { name: "用户首页", path: "/user" },
      { name: "个人资料", path: "/user/profile" },
    ],
  },
  {
    name: "系统管理",
    children: [{ name: "系统设置", path: "/system/settings" }],
  },
];
