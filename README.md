# copen
一个快捷命令，帮助你快速使用 WebStorm 或者 VsCode 打开你的项目或文件

!!! 目前仅限 Mac （等我搬完砖去研究 Windows）

> 本来命令想用cxy(程序员)的，但是已经有仓库了，不得已使用 copen 

## 安装
```
npm install -g copen
```

## 使用方式
使用 WebStorm 打开
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
