---
title: "xml sitemap basics"
description: "Fundamentals of xml sitemap"
pubDate: 2025-07-28
featured: false
---

Sitemaps XML protocol:
https://www.sitemaps.org/protocol.html

XML standards:
https://www.w3.org/TR/REC-xml/

In a nutshell:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>http://amesl.korea.ac.kr/index.php</loc>
    <lastmod>2022-06-04</lastmod> <!-- Google uses lastmod only if it's consistently and verifiably accurate -->
    <priority>1.0</priority> <!-- Google ignores priority and changefreq -->
  </url>

  <url>
    <loc>http://amesl.korea.ac.kr/about</loc> <!-- Full internal URL names -->
    <priority>0.9</priority>
  </url>

  <url>
    <loc>http://amesl.korea.ac.kr/member/professor&amp;ta</loc> <!-- All tag values must be entity escaped -->
    <priority>0.8</priority>
  </url>

  <url>
    <loc>http://amesl.korea.ac.kr/contact</loc>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>http://amesl.korea.ac.kr/member/members</loc>
    <priority>0.8</priority>
  </url>

</urlset>
```