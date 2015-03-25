chrome.webRequest.onHeadersReceived.addListener(function (details)
    {
        for (i = 0; i < details.responseHeaders.length; i++) {
            if (details.responseHeaders[i].name.toUpperCase() === "CONTENT-SECURITY-POLICY") {
                details.responseHeaders[i].value = "default-src *; script-src *.disqus.com *.disquscdn.com assets-cdn.github.com collector-cdn.github.com; object-src assets-cdn.github.com; style-src 'self' 'unsafe-inline' 'unsafe-eval' assets-cdn.github.com *.disquscdn.com; img-src 'self' data: assets-cdn.github.com identicons.github.com www.google-analytics.com collector.githubapp.com *.githubusercontent.com *.gravatar.com *.wp.com *.disqus.com *.disquscdn.com; media-src 'none'; frame-src 'self' render.githubusercontent.com gist.github.com www.youtube.com player.vimeo.com checkout.paypal.com *.disqus.com; font-src assets-cdn.github.com; connect-src 'self' live.github.com wss://live.github.com uploads.github.com www.google-analytics.com s3.amazonaws.com";
            }
        }
        return {
            responseHeaders : details.responseHeaders
        };
    }, {
        urls : ["*://github.com/*"],
        types : ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking", "responseHeaders"]
);
