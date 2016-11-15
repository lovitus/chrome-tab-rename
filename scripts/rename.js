/**
 * Created by seifkamal on 15/11/2016.
 */

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('Renaming');
    chrome.tabs.executeScript({
        code: 'document.title="Renamed"'
    });
});