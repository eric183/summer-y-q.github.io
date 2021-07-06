# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh
# export PS1="%10F%m%f:%11F%1~%f \$ "
# export ZSH=/Users/erickuang/.oh-my-zsh/oh-my-zsh.sh
# source /Users/erickuang/.oh-my-zsh/oh-my-zsh.sh
# source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
ZSH_THEME="powerlevel10k/powerlevel10k"

export ZSH=$HOME/.oh-my-zsh
source $ZSH/oh-my-zsh.sh

# Zsh Theme

work="/Users/erickuang/WorkSpace/miyuan-front-projects"

gowork() {
  cd $work
}
# source quickcut
soo() {
  source ~/.zshrc
}

vimzsh() {
  vim ~/.zshrc
}

linkHK() {
  ssh root@103.117.101.84
}

fixSudo() {
  sudo chown -R $(whoami) $1
}

fixvscode() {
  sudo chown -R $(whoami) /Users/$(whoami)/.vscode
}

cpzshrc() {
  cp ~/.zshrc $work/eric183.github.io/static
}

# where proxy
proxyon() {
  export http_proxy="http://127.0.0.1:58591"
  export https_proxy="http://127.0.0.1:58591"
  git config --global http.proxy socks5://127.0.0.1:51837
  git config --global https.proxy socks5://127.0.0.1:51837
  npm config set proxy http://127.0.0.1:58591
  npm config set https-proxy http://127.0.0.1:58591
  echo "HTTP Proxy on"
}

noproxy() {
  unset http_proxy
  unset https_proxy
  git config --global --unset http.proxy 
  git config --global --unset https.proxy 
  npm config rm proxy
  npm config rm https-proxy
  echo "HTTP Proxy off"
}

# release test
ddt() {
  if [ "$1" = "oms" ]; 
  then
     npm run release mj-oms-extsys test
  elif [ "$1" = "ecmiddle" ]; 
  then
     npm run release mj-ecmiddle-sys test
  else
     npm run release $1 test
  fi
}

# run 
ys() {
  if [ "$1" = "oms" ];
  then
     yarn start mj-oms-extsys
  elif [ "$1" = "ecmiddle" ];
  then
     yarn start mj-ecmiddle-sys
  else
     yarn start $1
  fi
}

gch() {
  git checkout $1
}

# pull
gp() {
  git pull
}

# merge
gm() {
  git merge $1
}

# git status
gs() {
  git status
}

# fetch
gf() {
  git fetch
}

# commit 
gc() {
  git add .
  git commit -am $1
}

# push
gp() {
  git push
}

# branch
gb() {
  git branch
}

# log
gl() {
  git log
}



# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
# [[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
