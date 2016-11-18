/**
 * Created by seifkamal on 15/11/2016.
 */

var currentTitle;
//Listen for content script message
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if(request.title !== undefined) {
        chrome.tabs.executeScript({
            code: 'document.title="' + request.title + '"'
        });
        currentTitle = request.title;
        //sendResponse({success: "Title received"});
    } else {
        //currentTitle = document.title;
    }
});
console.log(currentTitle);

//Pre-populate text box with current title
var url;
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    document.getElementById('textBox').value = tabs[0].title;
    url = tabs[0].url;
});

//Change page title using the value from the textbox
function changeTitle() {
    var newTitle = document.getElementById('textBox').value;
    if(newTitle !== '') {
        chrome.tabs.executeScript({
            code: 'document.title="' + newTitle + '"'
        });
    }
    window.close();
    return newTitle;
}

//Save current title
function save(title) {
    if(title !== currentTitle) {
        data[url] = title;
        chrome.storage.local.set(data, function () {
            //Title saved
        });
        currentTitle = title;
    }
}

function renamePage() {
    var newTitle = changeTitle();
    save(newTitle);
}


//Add click and 'enter' key listeners for 'rename' button
document.getElementById('renameBtn').addEventListener('click', renamePage);
document.getElementById('textBox').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        renamePage();
    }
});
