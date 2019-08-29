# https://github.com/envygeeks/jekyll-docker/blob/master/README.md

# jekyllをdockerでやろうとしたが、まだ検討中

export JEKYLL_VERSION=3.8
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll build