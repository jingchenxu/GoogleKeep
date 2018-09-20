# GoogleKeep

## Project setup
```
yarn install or yarn
```

### Compiles and hot-reloads for development
```
yarn run serve
yarn run start
```

### Compiles and minifies for production
```
yarn run build
```

### Package for windows
```
yarn run package-win
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Color list

white red yellow teal cyan

---

### 备忘

- electron-builder 打包失败问题

> 正常的打包时没有问题的，只要打包程序能够将将所需的包下载即可，看到一些代码好像时golang写的，但是存在一些问题需要注意，我是用的electron-builder是20.28.4版本的，到目前为止应该是最新的。

- 遇到的第一个问题如下：infinite loop

> github上参见issue：[#3037](https://github.com/electron-userland/electron-builder/issues/3037) 主要的修改方法是修改包中的代码：将AppFileCopierHelper.js文件中的```` platformPackager.info.appDir ````修改为 ````(require('path').relative(process.cwd(), platformPackager.info.appDir))````这里修改完成后需要注意的是，这边的代码还应该是有问题的，但是在打包完成时进行安装时出现了报错，主要时找不到npm依赖，将build配置文件中的asar设置为false,这样不会加密开发的代码，不加密代码则可以看到打包后的代码结构，会发现打包后的代码中npm的包少了，dependency中的包时安装了，但是这些包相关的依赖未能正常安装。



