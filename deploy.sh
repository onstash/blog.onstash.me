#! /bin/bash

publicDir="public"
domain="https://blog.onstash.me"
if [[ -d ${publicDir} ]]; then
    echo "[WARNING] Folder 'public' already exists. Removing..."
    rm -rf ${publicDir}
fi

echo "[INFO] Running build"
yarn build


echo "[DEPLOYING] to ${domain}"
surge --domain ${domain} ${publicDir}
