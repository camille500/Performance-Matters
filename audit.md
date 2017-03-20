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
- **DOMContentLoaded:** 3.41s
- **Load:** 10.48s
![Gzip Compression Audit](https://github.com/camille500/performance-matters/blob/master/screenshots/6.%20MiniCss.png)

## Better Image Optimization

Better image optimization
- **Requests:** 14
- **Transfered:** 223KB
- **DOMContentLoaded:** 3.02s
- **Load:** 8.15s

![Gzip Compression Audit](https://github.com/camille500/performance-matters/blob/master/screenshots/7.%20BetterImage.png)

## Font Face Defer

FontFaceObserver.js now also defer (last audit, it wasn't there somehow. So now 1 extra request but same load time)
- **Requests:** 15
- **Transfered:** 304KB
- **DOMContentLoaded:** 5.17s
- **Load:** 8.15s

![Gzip Compression Audit](https://github.com/camille500/performance-matters/blob/master/screenshots/9.%20Final.png)

## Final Google Pagespeed Insight

![Gzip Compression Audit](https://github.com/camille500/performance-matters/blob/master/screenshots/8.%20Font.png)

## Results

- **Requests:** -3 requests t.o.v. first test
- **Transfered:** -896KB since first test
- **DOMContentLoaded:** -14.33s since first test
- **Load:** -33.45s since first test

### Site is now 5.10 times faster
