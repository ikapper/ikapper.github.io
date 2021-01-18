# https://github.com/envygeeks/jekyll-docker/blob/master/README.md

# このスクリプトを走らせればビルド可能。

export JEKYLL_VERSION=4
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  --volume="$PWD/vendor/bundle:/usr/local/bundle" \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll build