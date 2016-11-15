/**
 * Created by seifkamal on 15/11/2016.
 */

var pageUrl = chrome.tabs.getSelected(null, function (tab) {
    return tab.url;
});

chrome.storage.local.get('data', function (result) {
    if (result.data[pageUrl] !== undefined) {
        chrome.tabs.executeScript(
            {
                code: 'document.title="' + result.data[pageUrl] + '"'
            }
        );
    }
});
