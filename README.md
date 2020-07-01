# copen
一个快捷命令，帮助你快速使用 WebStorm 或者 VsCode 打开你的项目或文件

## 描述
在使用 VsCode 的时候我们会使用 code 命令在命令行中快速打开指定项目文件夹或文件，但是 WebStorm 却没有这个选项（虽然也有解决办法，但是自己能实现何乐而不为呢）

这里我写了一个 npm 插件，将 copen 命令集成到命令行里，这样你就可选的使用 WebStorm 或 VsCode打开自己的文件了。

## 备注
1. 目前仅限 Mac （等我搬完砖去研究 Windows）
2. 本来命令想用 cxy (程序员)的，但是已经有仓库了，不得已使用 copen
3. 后续我会添加配置项，让你可修改自己的默认编辑器，当然你也可以 clone 下我的代码自己扩展

## 项目地址
[https://github.com/lovefive5/copen](https://github.com/lovefive5/copen)

## 全局安装
```
npm install -g copen
```

## 使用方式
使用 WebStorm 打开 （默认打开方式）
```
copen my-project 或者 copen my-project w
```

使用 VsCode 打开
```
copen my-project c
```


## 原理（没有原理，借助现有的轮子）

> WebStorm 借用命令 `open -a webstorm` 

> VsCode 借用命令 `code`
