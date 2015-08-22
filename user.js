user_pref('network.http.pipelining.abtest', false);
user_pref('network.http.pipelining.aggressive', true);
user_pref('network.http.pipelining.max-optimistic-requests', 3);
user_pref('network.http.pipelining.maxrequests', 12);
user_pref('network.http.pipelining.maxsize', 300000);
user_pref('network.http.pipelining.read-timeout', 60000);
user_pref('network.http.pipelining.reschedule-on-timeout', true);
user_pref('network.http.pipelining.reschedule-timeout', 15000);
user_pref('network.http.pipelining.ssl', true);
user_pref('network.http.proxy.pipelining', true);

user_pref('network.http.max-connections', 256);
user_pref('network.http.max-persistent-connections-per-proxy', 256);
user_pref('network.http.max-persistent-connections-per-server', 6);

user_pref('network.http.redirection-limit', 20);
user_pref('network.http.fast-fallback-to-IPv4', true);
user_pref('network.dns.disablePrefetch', true);
user_pref('network.prefetch-next', true);

// Enable new cache:
// https://bugzilla.mozilla.org/show_bug.cgi?id=913807
user_pref('browser.cache.use_new_backend', 1);

// ----------------------------------------------------

// SECURITY/PRIVACY

// Disable WebRTC (extremely important for VPN users - WebRTC *will* leak your real IP address):
user_pref('media.peerconnection.enabled', false);
user_pref('media.peerconnection.use_document_iceservers', false);

// Disable DNS proxy bypass:
// http://kb.mozillazine.org/Network.proxy.socks_remote_dns
user_pref('network.proxy.socks_remote_dns', true);

// Enable tracking protection:
user_pref('privacy.donottrackheader.enabled', true);
user_pref('privacy.donottrackheader.value', 1);
user_pref('privacy.trackingprotection.enabled', true);

// Disable WebGL:
// https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern
user_pref('webgl.disabled', false);
// ----------------------------------------------------

// APPEARANCE

// Show full URLs:
user_pref('browser.urlbar.trimURLs', false);

// Revert to old search bar layout:
user_pref('browser.search.showOneOffButtons', false);

// Speed up security delay when installing add-ons:
user_pref('security.dialog_enable_delay', 400);

// Enable eyedropper in dev tools:
user_pref('devtools.command-button-eyedropper.enabled', true);

// ----------------------------------------------------

// BLOATWARE

// Disable 'Pocket':
user_pref('browser.pocket.api', '');
user_pref('browser.pocket.enabled', false);
user_pref('browser.pocket.site', '');

// Disable 'Firefox Hello':
// https://www.mozilla.org/en-US/privacy/firefox-hello/
user_pref('loop.enabled', false);

// Disable 'Social' crap:
user_pref('social.directories', '');
user_pref('social.remote-install.enabled', false);
user_pref('social.shareDirectory', '');
user_pref('social.toast-notifications.enabled', false);
user_pref('social.whitelist', '');