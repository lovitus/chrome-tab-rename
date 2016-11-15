/**
 * Created by seifkamal on 15/11/2016.
 */

function changeTitle() {
    var newTitle = document.getElementById('newTitle').value;
    if (newTitle !== '') {
        chrome.tabs.executeScript(
            {
                code: 'document.title="' + newTitle + '"'
            }
        );
    }
    //save(newTitle);
    window.close();
}

var pageUrl;
chrome.tabs.getSelected(null, function (tab) {
    document.getElementById('newTitle').value = tab.title;
    pageUrl = tab.url;
});

function save(title) {
    var data = {};
    data[pageUrl] = title;
    chrome.storage.local.set({'currentTitle': data}, function () {
        //Settings saved
    });
}

// chrome.storage.local.get(data, function(result){
// });

document.getElementById('renameTab').addEventListener('click', changeTitle);
document.getElementById('newTitle').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        changeTitle();
    }
});
