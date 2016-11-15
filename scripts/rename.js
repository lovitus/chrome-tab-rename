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
        //save(newTitle);
    }
    window.close();
}

function save(title) {
    var pageUrl = chrome.tabs.getSelected(null, function (tab) {
        return tab.url;
    });
    var data = {};
    data[pageUrl] = title;
    chrome.storage.local.set({'data': data});
}

chrome.tabs.getSelected(null, function (tab) {
    document.getElementById('newTitle').value = tab.title;
});

document.getElementById('renameTab').addEventListener('click', changeTitle);
document.getElementById('newTitle').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        changeTitle();
    }
});
