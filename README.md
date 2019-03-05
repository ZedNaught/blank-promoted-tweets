# Blank Promoted Tweets

Add this script to Tampermonkey or a userscript runner of your choice.

The script finds promoted tweets using a regex and sets their opacity to 0. I use this solution instead of removing the tweets (which a regular adblocker can do) because I found that removing the tweets entirely broke twitter's scrolling. By setting the opacity to zero, we don't interfere with where twitter expects things to be.

The frequency with which the script looks for and hides tweets can be adjusted by setting the second arg to the setInterval function call.

It's admittedly not ideal to run the script in this way (on an interval), and I figure there is likely an event or two that could be hooked into to make this run less wastefully. But I'm a very important man who's very busy on very important things ;) – pull requests welcome