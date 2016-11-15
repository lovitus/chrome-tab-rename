/**
 * Created by seifkamal on 15/11/2016.
 */

function changeTitle() {
    var newTitle = document.getElementById('newTitle').value;
    if(newTitle !== '') {
        chrome.tabs.executeScript(
            {
                code: 'document.title="' + newTitle + '"'
            }
        );
    }
    window.close();
}

document.getElementById('renameTab').addEventListener('click', changeTitle);
