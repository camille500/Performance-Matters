# Audit

Regular 2G (300ms, 250kb/s, 50kb/s)

## First Audit

- **Requests:** 18
- **Transfered:** 1.2MB
- **DOMContentLoaded:** 19.50s
- **Load:** 41.60s
![First Audit](https://github.com/camille500/performance-matters/blob/master/screenshots/1.%20Initial.png)

## Added Gzip and defer

Added Gzip compression and defer to script tags, moved script tags to head

- **Requests:** 17
- **Transfered:** 978KB
- **DOMContentLoaded:** 5.68s
- **Load:** 32.26s
![Gzip Compression Audit](https://github.com/camille500/performance-matters/blob/master/screenshots/2.%20Gzip.png)

## Optimized Images

Added the picture tag with srcset and media attributes. Compressed images to smaller filesize and added Google webp images.
- **Requests:** 17
- **Transfered:** 482KB
- **DOMContentLoaded:** 5.78s
- **Load:** 16.44s
![Gzip Compression Audit](https://github.com/camille500/performance-matters/blob/master/screenshots/3.%20Optimized%20images.png)

## CDN For Bootstrap CSS and JS + jQuery CDN

Used CDN's instead of the local files for some of the JS and CSS
- **Requests:** 14
- **Transfered:** 307KB
- **DOMContentLoaded:** 3.14s
- **Load:** 10.85s
![Gzip Compression Audit](https://github.com/camille500/performance-matters/blob/master/screenshots/5.%20CDN.png)

## Minified CSS

Minify the docs.css with gulp-clean-css
- **Requests:** 14
- **Transfered:** 304KB
- **DOMContentLoaded:** 3.02s
- **Load:** 10.73s
![Gzip Compression Audit](https://github.com/camille500/performance-matters/blob/master/screenshots/6.%20MiniCss.png)
