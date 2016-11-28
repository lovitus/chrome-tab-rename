#Chrome Tab Rename
A simple Google Chrome extension that allows the user to change
the browser tab titles.

##Installation
* Download the extension
* From Chrome, navigate to `chrome://extensions`
* Make sure `Developer mode` on the top right is checked
* Click on `Load unpacked extensions...`
* Select the `chrome-tab-rename` directory

You will now have the extension installed and should see the icon
on the browser bar (top right).

##Usage
Simple click the extension icon, enter a new title for the tab
and click `Rename Tab`! :)

Alternatively, use the keyboard shortcut `Alt+R` to directly
open the rename popup. This shortcut can also be changed from the 
manifest:
```json
{
  "commands": {
    "_execute_browser_action": {
      "suggested_key": {
        "default": "Alt+R"
      }
    }
  }
}
```
