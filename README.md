# Bulk set your Facebook posts to private
**If the script stops working please report on github!!!**  
An automation tool that sets posts in facebook's activity log to private for the new 2020 design.  
This script attempts to resolve the need to set to private your entire posts history.
Previously this was easily doable with a simple for loop but since the new 2020 design it is not.  
## Features:
1) Make all your posts and photos private in 1 click (*and some waiting*)  
2) Make only a range of your posts and photos private.  
3) Continue where you left off! if you something happened and the progressed stopped just get back to your activity log apply the filter you had and continue as nothing happened! (Press `Open Range`)  
4) Aware of posts/photos audience settings! skips already privated ones.  
![image](https://user-images.githubusercontent.com/50873841/93251406-ce84f400-f79c-11ea-873a-a0f548bfc284.png)
## Possible Improvements:
1) Make it work in the background without user interaction.
2) Failure state handling and logging
3) Filter by currently logged user. if activity log is unfiltered this script will attempt comment activities too thus taking longer. (possible issues: How does tagging work?)
4) Fix issues that require refresh related to "single page web apps" and Tampermonkey/Greasemonkey
5) Handling detection of dynamically created objects better than wait-n-try method
## Installation
1) download [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)/[GreaseMonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)(untested) for chrome or firefox respectively 
2) install the script by [clicking here](https://raw.githubusercontent.com/YoraiLevi/SetFacebookPostsPrivate/master/GreaseMonkeySetFacebookPrivate.user.js) or from [greasyfork](https://greasyfork.org/en/scripts/411305-facebook-set-posts-to-private)
## Usage
### How to use: (read notes)
1) At facebook, while using the 2020 new design go to your activity log.  
   * Search for activity log in facebook's search (usually first result)  

2) Filter by posts/other criteria  
3) Click ___ Open  
   1)  to bulk set the privacy of everything to private use `Open All`  
   2)  to set only a range of posts to private type numerical values and click `Open Range`  

4)  Enjoy all the tabs opening and closing
### Notes: 
* If the injected gui isn't shown please *refresh* the page
* If the process is stuck on a post or an image setting the post manually to private and closing the tab might resolve the issue.
* Make sure to let it do its thing without interruptions, using the computer while the job is running may cause it to fail or get stuck.

## Support and Feature requests: [open an issue at github](https://github.com/YoraiLevi/SetFacebookPostsPrivate/issues)
License: w/e idc
