// mozilla firefox privacy preferences 
// Autor: Michael D. aka tw1x
// copy it into yor firefox profile directory
// 
// Windows: %APPDATA%\Mozilla\Firefox\Profiles\{random}.default\
// Linux: $HOME/.mozilla/firefox/.default/
// MacOS: "I really don't know..."

// disable geoIP-specific default search engine
user_pref("browser.search.countryCode", "DE");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.reset.enabled", false);
user_pref("browser.search.reset.status", "");
user_pref("browser.search.reset.whitelist", "");
user_pref("browser.search.update", false);

// allow only first party cookies
user_pref("network.cookie.cookieBehavior", 1);

// disable storage for extra session data
user_pref("browser.sessionstore.privacy_level", 2);

// disable crash reporting
user_pref("browser.tabs.crashReporting.sendReport", false);

// URL bar settings
user_pref("browser.urlbar.filter.javascript", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.trimURLs", false);

// clear browser data on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.history.custom", true);

// disable signon autofill
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.prefillForms", false);
user_pref("signon.rememberSignons", false);

// disable reader view
user_pref("reader.parse-on-load.enabled", false);

// disable offline apps
user_pref("network.manage-offline-status", false);
user_pref("offline-apps.allow_by_default", false);
user_pref("offline-apps.quota.warn", 0);

// disable places history
user_pref("places.history.enabled", false);

// enable surf containers
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.firstparty.isolate.restrict_opener_access", false);

// enable user context for surf containers
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);

// disable dom push options
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");

// don't load and display "favicons" residing in the current site's root directory
user_pref("browser.chrome.favicons", false);

// disable keywords
user_pref("keyword.enabled", false);

// disable WebAssembly
user_pref("javascript.options.wasm" false);

// some settings to protect against tracking via fonts
user_pref("browser.display.use_document_fonts", 0);
user_pref("layout.css.font-loading-api.enabled", false);
user_pref("gfx.downloadable_fonts.enabled", true);
user_pref("font.blacklist.underline_offset", "");
user_pref("gfx.font_rendering.opentype_svg.enabled", false);

// disable storage of screenshots of visited websites
user_pref("browser.pagethumbnails.capturing_disabled", true);

// disable home snippets
user_pref("browser.aboutHomeSnippets.updateUrl", "");

// disable mozilla's advertising after an update
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", "");

// disable Mozillas welcome page
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");

// disable activity-stream and new tab settings
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.enabled", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);

// protection against history sniffing
user_pref("layout.css.visited_links_enabled", false);
user_pref("browser.sessionhistory.max_entries", 2);

// disable onboarding tour
user_pref("browser.onboarding.enabled", false);

// disable autoset of www., .com, etc.
user_pref("browser.fixup.alternate.enabled", false);

// force all new windows opened into tabs
user_pref("browser.link.open_newwindow.restriction", 0);

// disable capturing of thumbnails
user_pref("browser.pagethumbnails.capturing_disabled", true);

// disable disk cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.compression_level", 1);
user_pref("media.cache_size", 0);

// modify referer
user_pref("network.http.referer.XOriginPolicy", 2);
user_pref("network.http.sendRefererHeader", 0);

// disable altsvc
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);

// disable prefetch
user_pref("network.prefetch-next", false);
user_pref("network.http.speculative-parallel-limit", 0);

// show punycode
user_pref("network.IDN_show_punycode", true);

// modify plugin behavior
user_pref("plugin.default.state", 0);
user_pref("plugin.scan.plid.all", false);
user_pref("plugins.click_to_play", true);
user_pref("plugins.enumerable_names", "");
user_pref("plugins.hideMissingPluginsNotification", true);

// disable media autoplay
user_pref("media.autoplay.enabled", false);

// disable H.264 plug-in from Cisco
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-provider.enabled", false);

// disable content with DRM copy protection
user_pref("media.eme.enabled", false);
user_pref("media.eme.apiVisible", false);

// harden OCSP
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);
user_pref("security.OCSP.GET.enabled", false);
user_pref("security.ssl.enable_ocsp_stapling", true);
user_pref("security.ssl.enable_ocsp_must_staple", true);

// recommended settings for SSL / TLS configuration
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_active_content", true);

// set fixed browser window size
user_pref("privacy.resistFingerprinting", true);

// disable device sensors
user_pref("device.sensors.enabled", false);

// disable message channel
user_pref("dom.messageChannel.enabled", false);

// disable clipboard events
user_pref("dom.event.clipboardevents.enabled", false);

// disable web notifications
user_pref("dom.webnotifications.enabled", false);

// disable MediaDevices API
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);

// disable AudioContext API
user_pref("dom.webaudio.enabled", false);

// disable idle observer API
user_pref("dom.idle-observers-api.enabled", false);

// disable camera API
user_pref("camera.control.face_detection.enabled", false);
user_pref("camera.control.autofocus_moving_callback.enabled", false);

// disable gamepad API
user_pref("dom.gamepad.enabled", false);

// disable Pocket API
user_pref("extensions.pocket.enabled", false);

// disable geolocation API
user_pref("geo.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("browser.search.geoip.timeout", 1);

// disable timing API
user_pref("dom.enable_resource_timing", false);
user_pref("dom.enable_user_timing", false);
user_pref("dom.enable_performance", false);
user_pref("dom.min_timeout_value", 400);
user_pref("dom.enable_performance_navigation_timing", false);

// disable speech synthesis API
user_pref("media.webspeech.synth.enabled", false);

// disable WebGL
user_pref("webgl.disable-extensions", true);
user_pref("webgl.min_capability_mode", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.enable-debug-renderer-info",false);
user_pref("webgl.disabled",true);
user_pref("webgl.enable-webgl2", false);

// disable WebRTC
user_pref("media.peerconnection.enabled", false);

// disable WebIDE
user_pref("devtools.webide.enabled", false);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);

// disable screenshot extension
user_pref("extensions.screenshots.disabled", true);

// disable video hardware acceleration
user_pref("gfx.direct2d.disabled", true);
user_pref("layers.acceleration.disabled", true);
user_pref("media.hardware-video-decoding.enabled", false);

// disable transmission of statistics when playing videos
user_pref("media.video_stats.enabled", false);

// disable experimental features
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("network.allow-experiments", false);

// do not save data when filling in forms
user_pref("browser.formfill.enable", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// disable clipboard events
user_pref("dom.event.clipboardevents.enabled", false);

// disable speculative loading of web pages
user_pref("network.http.speculative-parallel-limit", 0);

// disable speculative dns resolution
user_pref("network.dns.disablePrefetch", true);

// disable "kill-switch" for addons
user_pref("extensions.blocklist.enabled", false);

// disable update of metadata for add-ons
user_pref("extensions.getAddons.cache.enabled", false);

// disable html5 beacon
user_pref("beacon.enabled", false);

// disable safebrowsing
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

// disable health report and telemetry data for Mozilla
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// disable heartbeat user rating
user_pref("browser.selfsupport.url", "");

// disable Wi-Fi hotspot portal detection
user_pref("network.captive-portal-service.enabled", false);

// disable microsoft family safety
user_pref("security.family_safety.mode", 0);

// disable browser slow startup notifications
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);

// opt-out studies
user_pref("app.shield.optoutstudies.enabled", false);
