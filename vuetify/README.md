Using ~100 sass files from [Vuetify](https://github.com/vuetifyjs/vuetify) (See [`./src/scss/index.js`](./src/scss/index.js))

```sh
$ pnpm dlx envinfo --system
  System:
    OS: Linux 6.9 Arch Linux
    CPU: (16) x64 12th Gen Intel(R) Core(TM) i7-12650H
    Memory: 21.39 GB / 31.06 GB
    Container: Yes
    Shell: 5.2.26 - /usr/bin/bash
```

| (sass/sass-embedded) | (modern-compiler/modern/legacy)    | pnpm build time |
|----------------------|------------------------------------|-----------------|
| sass-embedded        | modern-compiler                    | 441ms           |
| sass-embedded        | modern                             | 575ms           |
| sass-embedded        | legacy                             | 1.38s           |
| sass                 | modern-compiler                    | 2.78s           |
| sass                 | modern                             | 2.75s           |
| sass                 | legacy                             | 3.42s           |
|                      | (baseline without vuetify imports) | (53ms)          |

## baseline without `./src/scss/index.js`

```sh
$ pnpm build
vite v5.3.4 building for production...
✓ 5 modules transformed.
dist/index.html                 0.46 kB │ gzip: 0.29 kB
dist/assets/index-Cz4zGhbH.css  1.21 kB │ gzip: 0.62 kB
dist/assets/index-CfRIQD8M.js   1.14 kB │ gzip: 0.61 kB
✓ built in 53ms
```

## sass-embedded x modern-compiler

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

## sass-embedded x modern

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

## sass-embedded x legacy

```sh
$ VITE_SASS_API=legacy pnpm build

... after a huge wall of warnings...

dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-DvNmfJmG.css  202.36 kB │ gzip: 28.26 kB
dist/assets/index-DhVCjTjy.js     1.14 kB │ gzip:  0.61 kB
✓ built in 1.38s
```

## sass x modern-compiler

```sh
$ pnpm build

> vite-project@0.0.0 build /home/hiroshi/code/tmp/test-vite-sass/vuetify
> vite build

vite v5.3.4 building for production...
✓ 100 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-DvNmfJmG.css  202.36 kB │ gzip: 28.26 kB
dist/assets/index-DhVCjTjy.js     1.14 kB │ gzip:  0.61 kB
✓ built in 2.78s
```

## sass x modern

```sh
$ VITE_SASS_API=modern pnpm build

> vite-project@0.0.0 build /home/hiroshi/code/tmp/test-vite-sass/vuetify
> vite build

vite v5.3.4 building for production...
✓ 100 modules transformed.
dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-DvNmfJmG.css  202.36 kB │ gzip: 28.26 kB
dist/assets/index-DhVCjTjy.js     1.14 kB │ gzip:  0.61 kB
✓ built in 2.75s
```

## sass x legacy

```sh
$ VITE_SASS_API=legacy pnpm build

... after a huge wall of warnings...

dist/index.html                   0.46 kB │ gzip:  0.29 kB
dist/assets/index-DvNmfJmG.css  202.36 kB │ gzip: 28.26 kB
dist/assets/index-DhVCjTjy.js     1.14 kB │ gzip:  0.61 kB
✓ built in 3.42s
```
