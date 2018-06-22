# Chrome Tab Rename
A simple Google Chrome extension that allows a user to change tab titles.

## Installation
* `git clone git@github.com:safe-k/chrome-tab-rename.git`
* From Chrome, navigate to `chrome://extensions`
* Make sure `Developer mode` on the top right is checked
* Click on `Load unpacked extensions...`
* Select the `chrome-tab-rename` directory

You will now have the extension installed and should see the icon on the top right.

## Usage
Click on the extension icon, enter a new title for the tab
and click `Rename Tab`.

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

