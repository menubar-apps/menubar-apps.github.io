## Development

To run on macos:

```shell
docker run -t -i --rm \
  --volume="$PWD:/srv/jekyll:Z" \
  --publish 4000:4000 \
  jekyll/jekyll \
  jekyll serve
```