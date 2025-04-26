# zshrc
## 工作环境

```
# .bashrc

# User specific aliases and functions

alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'

# Source global definitions
if [ -f /etc/bashrc ]; then
    . /etc/bashrc
fi

if [ ! -d $HOME/workspace ]; then
    mkdir -p $HOME/workspace
fi

# User specific environment
# Basic envs
export LANG="en_US.UTF-8" # 设置系统语言为 en_US.UTF-8，避免终端出现中文乱码
export PS1='[\u@dev \W]$ ' # 默认的 PS1 设置会展示全部的路径，为了防止过长，这里只展示："用户名@dev 最后的目录名"
export WORKSPACE="$HOME/workspace" # 设置工作目录
export PATH=$HOME/bin:$PATH # 将 $HOME/bin 目录加入到 PATH 变量中

# Default entry folder
cd $WORKSPACE # 登录系统，默认进入 workspace 目录

# User specific aliases and functions

```

用户特定的别名和功能

**`alias`** 是用来创建命令别名的：

- **`rm='rm -i'`**：将 `rm` 命令变成交互式删除（提示确认删除）以防止误删文件。
- **`cp='cp -i'`**：将 `cp` 命令变成交互式复制（提示确认覆盖）。
- **`mv='mv -i'`**：将 `mv` 命令变成交互式移动（提示确认覆盖）。

如果/etc/bashrc 文件存在，则加载它
如果工作目录不存在，则创建它

- **`export`**：将变量导出到环境中，使其对子进程可用。
- **`LANG="en_US.UTF-8"`**：设置系统的语言环境为 `en_US.UTF-8`（美式英语，UTF-8 编码），避免终端中出现中文乱码。


- 设置命令行提示符的样式（`PS1` 是 Prompt String 1 的缩写）。
- **`[\u@dev \W]$`** 的含义：
    - **`\u`**：当前用户的用户名。
    - **`@dev`**：显示固定的字符串 `@dev`，这里可能是一个自定义的标识。
    - **`\W`**：当前工作目录的最后一个路径名（而不是全路径）。
    - **`$`**：提示符，区分普通用户（`$`）和超级用户（`#`）。
示例提示符效果
```
[user@dev workspace]$
```


## go环境

```
$ tee -a $HOME/.bashrc <<'EOF'
# Go envs
export GOVERSION=go1.19.4 # Go 版本设置
export GO_INSTALL_DIR=$HOME/go # Go 安装目录
export GOROOT=$GO_INSTALL_DIR/$GOVERSION # GOROOT 设置
export GOPATH=$WORKSPACE/golang # GOPATH 设置
export PATH=$GOROOT/bin:$GOPATH/bin:$PATH # 将 Go 语言自带的和通过 go install 安装的二进制文件加入到 PATH 路径中
export GO111MODULE="on" # 开启 Go moudles 特性
export GOPROXY=https://goproxy.cn,direct # 安装 Go 模块时，代理服务器设置
export GOPRIVATE=
export GOSUMDB=off # 关闭校验 Go 依赖包的哈希值
EOF

```

```
$ mkdir -p $GOPATH && cd $GOPATH
$ go work init
$ go env GOWORK # 执行此命令，查看 go.work 工作区文件路径
/home/goer/workspace/golang/go.work

```


### protoc











