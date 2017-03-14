# Audit

Regular 2G (300ms, 250kb/s, 50kb/s)

## First Audit

- **Requests:** 18
- **Transfered:** 1.2MB
- **DOMContentLoaded:** 19.50s
- **Load:** 41.60s
![Alt Text](https://github.com/camille500/performance-matters/tree/master/screenshots)

## Added Gzip and defer

Added Gzip compression and defer to script tags, moved script tags to head

- **Requests:** 17
- **Transfered:** 978KB (-222KB t.o.v. Audit 1)
- **DOMContentLoaded:** 5.68s (-13.28s t.o.v. Audit 1)
- **Load:** 32.26s (-9.34 t.o.v. Audit 1)
[Gzip Compression Audit](screenshots/2. Gzip.png "Gzip Compression Audit")

## Optimized Images

Added the picture tag with srcset and media attributes. Compressed images to smaller filesize and added Google webp images.
- **Requests:** 17
- **Transfered:** 482KB (-496KB t.o.v. Audit 2 / - 718 t.o.v. Audit 1)
- **DOMContentLoaded:** 5.78s (+ 0.1s t.o.v. Audit 2 / -13.18s t.o.v. Audit 1)
- **Load:** 16.44s (-15.82s t.o.v. Audit 2 / -25.16 t.o.v. Audit 1)
[Optimized images Audit](screenshots/3. Optimized images.png "Gzip Compression Audit")
