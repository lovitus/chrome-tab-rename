/**
 * Created by seifkamal on 15/11/2016.
 */

//Listen for content script message
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

});

//Change page title using the value from the textbox
function changeTitle() {
    var newTitle = document.getElementById('newTitle').value;
    if (newTitle !== '') {
        chrome.tabs.executeScript(
            {
                code: 'document.title="' + newTitle + '"'
            }
        );
        save(newTitle);
    }
    window.close();
}

//Save current title
function save(title) {
    chrome.storage.onChanged.addListener(function (changes, local) {

    });
    chrome.storage.local.set({title: title}, function () {
        alert("Title saved");
    });
}

//Pre-populate text box with current title
chrome.tabs.query({active: true, currentWindow:true}, function (tabs) {
    document.getElementById('newTitle').value = tabs[0].title;
});

//Add click and 'enter' key listeners for 'rename' button
document.getElementById('renameTab').addEventListener('click', changeTitle);
document.getElementById('newTitle').addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
        changeTitle();
    }
});
