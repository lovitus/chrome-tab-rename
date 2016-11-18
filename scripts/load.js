/**
 * Created by seifkamal on 15/11/2016.
 */

function setCurrentTitle(title) {
    chrome.runtime.sendMessage({title: title}, function (response) {
        //confirm message received
    });
}

var url = location.href;
chrome.storage.local.get('url', function (result) { //TODO check
    console.log(url);
    if (result.value !== undefined) {
        //setCurrentTitle(result.title);
    }
});
