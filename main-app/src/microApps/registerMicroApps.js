// src/microapps/registerMicroApps.js
import { registerMicroApps, start } from 'qiankun';

export function setupQiankunApps() {
  registerMicroApps([
    {
      name: 'user-app',
      entry: '//localhost:7101',
      container: '#subapp-viewport',
      activeRule: location => location.pathname.startsWith('/user'),
    },
    // 注册更多子应用
    // {
    //   name: 'system-app',
    //   entry: '//localhost:7102',
    //   container: '#subapp-viewport',
    //   activeRule: '/system',
    // },
  ]);

  start(); // 启动 qiankun
}
