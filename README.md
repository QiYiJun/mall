# 一. 计算属性
## 1.1. 计算属性的本质
- ```javascript
  fullname: { set(), get() }
  ```
## 1.2计算属性和methods的对比
- 计算属性在多次使用时, 只会调用一次, 它是有缓存的
- 而methods使用多少次就会执行多少次, 性能不高
# 二. 事件监听
## 2.1. 事件监听基本使用
- v-on或者语法糖@
## 2.2. 参数问题
- 如果不需要传参数, 可以省略`()`
  - 例如: `btnClick`
  - 这种情况下默认吧event传进来了, 即: `btnClick(event)`
- 如果需要传递参数, 且需要event对象
  - 可以这样写: `btnClick(abc, event)`
  - 在传递参数的时候使用: `$event` 即可获得event对象
## 2.3. v-on的修饰符
|  修饰符  |       完整写法       |       简写       |         作用         |
| :------: | :------------------: | :--------------: | :------------------: |
|  .stop   |  v-on:click.stop=''  |  @click.stop=''  |     阻止事件冒泡     |
| .prevent |  v-on:click.prevent  |  @click.prevent  |     阻止默认事件     |
|  .enter  | v-on:keyup.enter=''  | @keyup.enter=''  | enter为监听的某按键  |
|  .once   |  v-on:click.once=''  |  @click.once=''  |    事件只执行一次    |
| .native  | v-on:click.native='' | @click.native='' | 监听根元素的原生事件 |
# 三. 条件判断
## 3.1. v-if / v-else-if / v-else
## 3.2. 登录小案例
- 避免元素复用, 需要绑定唯一`key`值
## 3.3. v-show
- `v-show`和`v-if`的区别

    `v-show`在真实DOM中存在元素, 改变的只是`display: true/false`

    `v-if`如果为`false`, 则在真实DOM中不存在元素

    在Vue2中, `v-for`的优先级比`v-if`高, 而Vue3反之
# 循环遍历
## 4.1. v-for 遍历数组
- `value` `value, index`
- Tips: 位置固定
## 4.2. v-for 遍历对象
- `value` `value, key` `value, key, index`
- Tips: 位置固定
## 4.3. 改变数组元素那些方法是响应式的
- 响应式:

  |  方法   |            作用            |
  | :-----: | :------------------------: |
  |  push   |    在数组最后面添加元素    |
  |   pop   |   删除数组中最后一个元素   |
  |  shift  |    删除数组中第一个元素    |
  | unshift |    在数组最前面添加元素    |
  | splice  | 删除元素/插入元素/替换元素 |
  |  sort   |            排序            |
  | reverse |            倒转            |
- 通过索引值修改元素不是响应式的, 例如: `this.letters[i] = ''`
# 五. 书籍案例
- 展示书籍相关数据, `v-for`遍历书籍数据
- 使用过滤器对书籍价格添加`¥`符号
- 书籍数量加减按钮功能的实现
- 使用计算属性对书籍价格汇总
- 移除书籍按钮的实现
- 没有书籍时显示购物车为空
# 六. v-model的使用
## 6.1. v-model的基本使用
- `v-model`等效于两个指令
  - `v-band`绑定`value` + `v-on`监听`input`事件
## 6.2. v-model和radio/checkbox/select
## 6.3. v-model的修饰符
- `lazy` 失去焦点或按下`enter`时更新数据
- `number` 使得输入的数据类型保持为number, `<input type='number' v-model.number=''>`
- `trim` 将数据两边多余的的空格去除
# 七. 组件化开发
## 7.1. 认识组件化
## 7.2. 组件的基本使用过程
## 7.3. 全局组件与局部组件的注册
## 7.4. 父组件与子组件
## 7.5. 组件注册的语法糖
## 7.6. 模板的分离写法
- `<script type="text/x-template" id=''></script>`
- `<template></template>`
## 7.7. 组件中的数据存放
- 子组件不能直接访问父组件的数据
- 子组件中有自己的data, 并且必须是一个函数
- 为什么必须是一个函数:
  - 因为函数在调用的时候返回的是一个个新的数据, 而不是同一个数据, 由此组件在使用数据时不会相互作用, 自己有自己的数据
## 7.8. 父子组件之间的通信
- 父传子: `props`
- 子传父: `$emit`
## 7.9. Vue项目
- `npm install`
- `npm run serve`

# 八. webpack
## 8.1. webpack的安装
- nvm 与 node
  - [nvm Github](https://github.com/coreybutler/nvm-windows/releases)
  - `nvm list available` : 显示node可下载的版本的部分列表
  - `nvm install <version>` : 安装 `<version>` 版本的node
  - `nvm ls/list` : 显示已安装的node版本
  - `nvm use <version>` : 切换使用 `<version>` 版本的node
- 安装 webpack
  - `npm install webpack` : 安装webpack
  - `webpack --version/-v` : 查看当前安装的webpack版本
## 8.2. webpack的使用
- `js` (含CommonJS, CMD, AMD, ES6语法)
  - 配置 `webpack.config.js` 文件, 配置入口出口

    ```javascript
    const path = require('path')

    module.exports = {
      entry: './src/main.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      }
    }
    ```
    `main.js` 为入口, `bundle.js` 为出口. 在配置出口时, 使用了`path`, 动态获取配置文件路径下的`dist`文件夹, `index.html`文件在引用JavaScript文件时选择打包好的`bundle.js`文件

    - 不配置入口出口: `webpack .../.../入口.js .../.../出口.js`
    - 已配置入口出口: `webpack`
  - 安装局部 `webpack` 环境

    在终端中打开项目根目录, 运行 `npm install webpack@<version> --save-dev`
    - `@<version>` 安装指定版本
    - `--save-dev` 只在开发测试环境中
  - 使用 `npm run build` 运行webpack

    编辑 `package.json` 文件
    ```javascript
    {
      //.....
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"  //添加 "build": "webpack"
      }
      //.....
    }
    ```
    终端运行 `npm run build` 就可以进行打包, 特点: 优先使用局部环境, 若局部环境不存在, 则使用全局环境
- `css` 样式
  - 在 `main.js` 中引入样式代码文件 (包含 `***.css` `***.less`)

    ```javascript
    //ES6语法, 也可使用CommonJS AMD CMD 语法
    import './css/***.css'
    import './css/***.less'
    ```
  - `***.css` 文件

    需要使用 `css-loader` 解析 `.css` 文件, 使用 `style-loader` 让样式生效
    - `npm install css-loader@<version> --save-dev` 安装 `css-loader`

    - `npm install style-loader@<version> --save-dev` 安装 `style-loader`
    
    配置 `webpack.config.js` 文件
    ```javascript
    module: {
      rules: [
        {
          test: /\.css$/,
          // 使用多个loader时, 从右向左都, 所以先使用css-loader, 后使用style-loader
          use: ['style-loader', 'css-loader']
        }
      ]
    }
    ```
    
    如果需要配置loader的其他属性, 使用对象写法
    ```javascript
    use: [
      {loader: '***-loader', options: { } },
      {loader: '***-loader', options: { } }
    ]
    ```
    注意: **使用多个loader时, 从右向左都, 所以先使用css-loader, 后使用style-loader**
  - `***.less` 文件

    需要使用 `less-loader` 与 `less`
    - `npm install css-loader@<version> less@<version> --save-dev` 安装 `css-loader` 和 `less`

    配置 `webpack.config.js` 文件
    ```javascript
    module: {
      rules: [
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        }
      ]
    }
    ```
- 图片 ( `***.png`, `***.jpg`, `***.jpeg`, `***.gif` )
  - `npm install url-loader@<version> --save-dev` 安装 `url-loader`
  
  配置 `webpack.config.js` 文件
  ```javascript
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 当图片大小小于limit设置值时(单位: b)通过base64编码
            // 当图片大小大于limit设置值时(单位: b)打包图片并以哈希值自动命名生成文件至dist文件夹中
            limit: 8192
          }
        }]
      }
    ]
  }
  ```
  同时需要配置出口中的 `publicPath` 否则无法读取到打包后的图片
  ```javascript
  module.exports = {
    //......
    output: {
      //......
      publicPath: 'dist/'  // 自动追加图片路径 dist/
    }
    //......
  }
  ```
- ES6 语法处理
  - `npm install babel-core@<version> babel-loader@<version> babel-preset-es2015@<version> --save-dev`

    安装`babel-core` `babel-loader` `babel-preset-es2015`

  配置 `webpack.config.js` 文件
  ```javascript
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
  ```

    将ES6语法转成ES5语法
- Vue
  - `npm install vue --save` vue不仅仅是作为开发依赖, 所以不用 `-dev`
  
  配置 `webpack.config.js` 文件
  ```javascript
  module.exports = {
    //......
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
  ```
  如果不配置上诉内容, 有关vue的部分无法运行, 原因如下:

  - `runtime-only` : 代码中不可以有任何的template (报错中可知)

  - `runtime-compiler` 代码中可以有template, 应为有compiler可以用于编译template, 通过配置指定使用的 `vue.js`

# 九. Vue CLI
## 9.1. CLI 是什么意思?
- CLI 是 **Command-Line Interface**, 翻译为命令行界面. 但是俗称 **脚手架**
- Vue CLI 是一个官方发布的 `vue.js` 项目脚手架
- 使用`vue-cli`可以快速搭建 Vue 开发环境以及对应的`webpack`配置.
- Vue CLI 使用前提
  - Node
  - webpack
