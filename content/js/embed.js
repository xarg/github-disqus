window.onload = function () {
    var readme = document.querySelector('#readme');
    if (readme) {
        var readmeParent = readme.parentElement;
        var disqusContainer = document.createElement("div");
        disqusContainer.setAttribute("id", "disqus_thread");
        readmeParent.appendChild(disqusContainer);

        /* * * CONFIGURATION VARIABLES * * */
        var disqus_shortname = 'githubdisqus';

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function () {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            var reset = function () {
                if (typeof DISQUS !== 'undefined') {
                    DISQUS.reset({
                        reload: true,
                        config: function () {
                            this.page.identifier = "Comments for " + document.querySelector('head title').innerText;
                            this.page.url = window.location.toString();
                        }
                    });
                } else {
                    window.setTimeout(reset, 100);
                }
            };
        })();
    }
};

