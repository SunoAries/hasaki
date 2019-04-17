#!/usr/bin/env bash
git add .
git commit -m "$*"
git push origin master
echo '果果，保存成功啦'
