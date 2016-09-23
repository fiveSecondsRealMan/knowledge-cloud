/**
  入口文件
**/

// 配置require.js

require.config({
  baseUrl: './dist',
  paths: {
    user: 'models/user'
  }
});

require([ 'user' ], (user) => {
  console.log(user.name);
});
