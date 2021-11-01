#!/usr/bin/env bash
# MIT © Sindre Sorhus - sindresorhus.com
# 当 git pull 的时候发现以来有更新的话，npm i 一下，参考链接：
# https://gist.github.com/sindresorhus/7996717
# https://gist.github.com/GianlucaGuarini/8001627

# git hook to run a command after `git pull` if a specified file was changed
# Run `chmod +x post-merge` to make it executable then put it into `.git/hooks/`.

changed_files="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"

check_run() {
	echo "$changed_files" | grep -E --quiet "$1" && eval "$2"
}

# Example usage
# In this example it's used to run `npm install` if package.json changed
check_run "package.json|package-lock.json" "npm install"
