#!/bin/bash
# shellcheck disable=SC2155
# shellcheck disable=SC2031
# shellcheck disable=SC2030

function run_process() {
  echo "$(date +%Y\/%m\/%d-%H:%M:%S): Repairing dependencies for angular (Angular/NodeJS)"
  npm i --no-audit --no-fund --loglevel=error -f

  echo "$(date +%Y\/%m\/%d-%H:%M:%S): Building angular frontend for production (Angular/NodeJS)"
  npm run build

  bash -c "mv ./release/dist.zip ./release/dist-$(date +%Y%m%d%H%M%S).zip"
  bash -c "/c/Program\ Files/7-Zip/7z.exe a -tzip ./release/dist.zip ./dist/chat-bot-angular"
  bash -c "cp ./release/dist.zip ../../services/chatfy-bot-svc/dist_angular.zip"
}

run_process
