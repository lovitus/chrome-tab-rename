/**
 * Created by seifkamal on 15/11/2016.
 */

function changeTitle() {
    chrome.tabs.executeScript(
        {
            code: 'document.title="Renamed"'
        }
    );
}

document.getElementById('renameTab').addEventListener('click', changeTitle);
