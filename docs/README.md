# OakAPI
## Updates
- removed stuff that can be easily done already
- Currently working on adding controller support, I'll add to the main file soon.

## docs
- `alert({title: String, subtext: String, time: Number})`
    - `time`  the framerate at which the alertbox disapears.
- `displayNewGUI({containerStyle: String(CSS), html: String(HTML)})`
    - allows you to display GUI
- `sendKeybind({type: String, send: Number})`
    - `type` what keybind you want to send is:
        - `"forward"`
        - `"left"`
        - `"back"`
        - `"right"`
        - `"inventory"` (not tested)
    - `send` `1` is pressed, `0` is not.
- `key: object` wip, allows for easy accsesing of the LWGL key codes 