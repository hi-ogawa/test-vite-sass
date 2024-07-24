## sass-embedded : modern-compiler

```sh
$ pnpm build

> vite-project@0.0.0 build /home/hiroshi/code/tmp/test-vite-sass/vuetify
> vite build

vite v5.3.4 building for production...
✓ 100 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-DvNmfJmG.css  202.36 kB │ gzip: 28.26 kB
dist/assets/index-DhVCjTjy.js     1.14 kB │ gzip:  0.61 kB
✓ built in 441ms
```

## sass-embedded : modern

```sh
$ VITE_SASS_API=modern pnpm build

> vite-project@0.0.0 build /home/hiroshi/code/tmp/test-vite-sass/vuetify
> vite build

vite v5.3.4 building for production...
✓ 100 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-DvNmfJmG.css  202.36 kB │ gzip: 28.26 kB
dist/assets/index-DhVCjTjy.js     1.14 kB │ gzip:  0.61 kB
✓ built in 575ms
```

## sass-embedded : legacy

```sh
$ VITE_SASS_API=legacy pnpm build

... after a huge wall of warnings...

dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-DvNmfJmG.css  202.36 kB │ gzip: 28.26 kB
dist/assets/index-DhVCjTjy.js     1.14 kB │ gzip:  0.61 kB
✓ built in 1.38s
```
