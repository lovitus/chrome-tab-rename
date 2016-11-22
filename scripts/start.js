/**
 * Created by seifkamal on 15/11/2016.
 */

debugger;

//Send page URL to rename.js on page load
chrome.runtime.sendMessage({url: location.href}, function (response) {
    //Confirm message received
    console.log(response.success);
});
