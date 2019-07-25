# 资源管理前端 pc web 脚手架

## 实现方式

-   前端：react + react-router + mobx + antd + typescript

## 页面组成

```
├── config                  webpack配置
├── dist                    打包生成的文件
├── public                  html模板
├── scripts                 启动，编译脚本
├── src
│   ├── index.js            入口
│   ├── api                 请求相关
│   │   ├── axios           封装axios请求
│   │   ├── index            所有的api接口
│   ├── assets              公用静态资源
│   │   ├── images              公用图片资源
│   │   ├── style               公用样式
│   ├── constant            全局常量
│   ├── components          公用组件
│   ├── containers          页面集合
│   │   ├── Home                页面（包含私有图片资源、页面组成组件、私有样式等）
│   ├── router              路由相关
│   │   ├── index           router实现
│   │   ├── router.config    按需加载配置路由组件
│   ├── store               mobx 所有的store
│   ├── types               数据类型的声明文件-分模块
│   ├── utils               工具方法

```

## 脚本命令

    - npm start             --启动项目
    - npm run build-test    --打测试环境的包
    - npm run build-prod    --打生产环境的包
    - npm run analyz        --分析生产包体积大小

## 注意事项

    script/build.js  文件头部定义了PUBLIC_URL即打包之后的资源文件server路径
