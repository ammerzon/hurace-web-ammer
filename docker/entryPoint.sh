#!/bin/sh
MAIN_JS_FILE=$(find . -type f -iname "main.*.js" | head -n 1)
envsubst '${API_BASE_URL}' < "$MAIN_JS_FILE" > "$MAIN_JS_FILE.tmp"
mv "$MAIN_JS_FILE.tmp" "$MAIN_JS_FILE"
nginx -g 'daemon off;'
