# このスクリプを走らせればサーブ可能

export JEKYLL_VERSION=4
docker run --rm \
  -p "8080:4000" -p "35729:35729" \
  --volume="$PWD:/srv/jekyll" \
  --volume="$PWD/vendor/bundle:/usr/local/bundle" \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll serve --livereload --watch --force_polling