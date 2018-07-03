# MFCA

MFCA Make Firefox Cool Again

## Description

MFCA is a collection of settings and tips for Mozillas Firefox to enhance your privacy and security.
You should keep in mind that **some websites do not work as usual**, but I have not noticed any major 
limitations so far, but that always depends on the needs and behavior of the user.

## Prerequisites

Nothing, but a clean install of Mozillas Firefox 60+ would be better.

## How to use

Just copy the user.js file to your Firefox profile directory and install the addons described below.

The path is :

* Windows: "C:\Users\%username%\AppData\Roaming\Mozilla\Firefox\Profiles\xxxxxxxx.default\"

* Linux: "$HOME/.mozilla/firefox/xxxxxxxx.default/"

* MacOS "I really don't know..."

## Addons

For maximum privacy and security you should install some addons.

* NoScript Double

[NoScript](https://noscript.net/getit)

With NoScript Double you can manage permissions for Javascript and other content like Java 
and Flash objects or WebGL. It also comes with XSS (cross site scripting) protection, which 
is good, because unlike Internet Explorer (please don't use it) and Webkit-based browsers 
like Google Chrome, Firefox does not have inbuilt protection against XSS attacks.

* HTTPS Everywhere

[HTTPS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/)

HTTPS Everywhere is a Firefox extension, that enables TLS encryption automatically on sites 
that are known to support it, even when you type URLs whitout the https prefix.

* CanvasBlocker

[CanvasBlocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/)

CanvasBlocker is an Firefox extension, that blocks or fakes the Javascript API, to resist
tracking via Canvas, also known as html webbugs.

* uBlock Origin

[uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)

uBlock Origin is an efficient and easy-to-install ad blocking engine for Firefox. If you also 
want to block CSP reports with uBlock Origin, you must add the following rule under My Rules.

```
no-csp-reports: noscript-csp.invalid false
```

* Decentraleyes

[Decentraleyes](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/)

Decentraleyes can minimize the risk of security and privacy while surfing, which involves the inclusion 
of external JavaScript resources via CDNs (Content Delivery Networks) by providing JavaScript resources 
locally.

* Skip Redirect

[Skip Redirect](https://addons.mozilla.org/en-US/firefox/addon/skip-redirect/)

Skip Redirect removes redirects in the URL. These redirects are used to track the clicks on links 
to external domains. For WiFi Hotspot Logins you have to disable the add-on.

> Skip Redirect changes this example

**https://www.HereIComeFrom.com/track.php?u=**https//www.HereIGo.com/something/something

> to this

https//www.HereIGo.com/something/something

* Neat URL

[Neat URL](https://addons.mozilla.org/en-US/firefox/addon/neat-url/)

The add-on Neat URL removes known tracking parameters from Google, Facebook, Youtube and other 
trackers from the URL.

> Neat URL changes this Example

www.SomeSite.com/scan.php?page=someitem&px=noprivacyhere**&utm-source=twitter&utm-medium=tweet**

> to this

www.SomeSite.com/scan.php?page=someitem&px=noprivacyhere

## Author

* Michael D. aka tw1x
