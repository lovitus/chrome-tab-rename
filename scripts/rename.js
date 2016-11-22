/**
 * Created by seifkamal on 15/11/2016.
 */

//Change page title
function changeTitle(title) {
    chrome.tabs.executeScript({
        code: 'document.title="' + title + '"'
    });
}

//Save current title
function save(title) {
    if (title !== currentTitle) {
        //TODO save correct data (associate title with url?)
        chrome.storage.local.set({title: title}, function () {
            //Custom title saved
            currentTitle = title;
        });
    }
}

//Change title and save
function renamePage() {
    var newTitle = document.getElementById('textBox').value;
    if (newTitle !== '') changeTitle(newTitle);
    window.close();
    save(newTitle);
}

var currentTitle = document.title;
var pageUrl;

//TODO move 'load' to separate script
//Listen for content script message
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    pageUrl = request.url;
    console.log(pageUrl);//
    sendResponse({success: "Url received: " + pageUrl});//
    chrome.storage.local.get('title', function (result) {
        //TODO get title object from storage (using url?)
        if(result.title !== undefined) currentTitle = result.title;
    });
});

chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    //Pre-populate text box with current title
    document.getElementById('textBox').value = tabs[0].title;
});

//Add click and 'enter' key listeners for 'rename' button
document.getElementById('renameBtn').addEventListener('click', renamePage);
document.getElementById('textBox').addEventListener('keypress', function (event) { if (event.keyCode == 13) renamePage(); });
