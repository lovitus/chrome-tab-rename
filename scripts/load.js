/**
 * Created by seifkamal on 15/11/2016.
 */

delete window.alert;

function setCurrentTitle(title) {
    chrome.runtime.sendMessage({title: title}, function (response) {
        //confirm message received
    });
}

chrome.storage.local.get('title', function (result) {
    if (result.title !== undefined) {
        setCurrentTitle(result.title);
    }
});
