// ==UserScript==
// @name         Blank Twitter Ads
// @namespace    http://www.areyes.biz/
// @version      0.1
// @description  Replace promoted Tweets with nothing at all.
// @author       Alexander Reyes
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function blankAds() {
        let articles = document.getElementsByTagName('article');
        for (let article of articles) {
            if (article.getAttribute('blankadschecked') === 'true') {
                continue; }
            article.setAttribute('blankadschecked', 'true');
            let divs = article.getElementsByTagName('div');
            let lastChildDiv = divs[divs.length - 1];
            if (/^Promoted(.*)?$/.test(lastChildDiv.textContent)) {
                article.setAttribute('style', 'opacity: 0');
            }
        }
    }

    setInterval(blankAds, 200);
})();
