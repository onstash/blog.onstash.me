#! /bin/bash

publicDir="public"
cacheDir=".cache"
domain="https://blog.onstash.me"

function removeDir {
  if [[ -d $1 ]]; then
    echo "[WARNING] Folder '$1' already exists. Removing..."
    rm -rf $1
  fi
}

removeDir ${publicDir}
removeDir ${cacheDir}

echo "[INFO] Running build"
npm run build

if [[ $? == 0 ]]; then
    echo "[INFO] Deploying to ${domain}"
    surge --domain ${domain} ${publicDir}
else
    echo "[ERROR] Deploying failed"
fi
