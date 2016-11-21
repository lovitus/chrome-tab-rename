/**
 * Created by seifkamal on 15/11/2016.
 */

debugger;

chrome.runtime.sendMessage({url: location.href}, function (response) {
    //confirm message received
    console.log(response.success);
});
