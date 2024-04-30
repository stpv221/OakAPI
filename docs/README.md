# OakAPI

- `alert({title: String, subtext: String, time: Number})`
    - `time`  the framerate at which the alertbox disapears.
    - `return [alertContainer, alertTitle, alertText, alertTimeout]` added at the end of the function so you can change the way the alertbox behaves.
- `displayNewGUI({containerStyle: String(CSS), html: String(HTML)})`
- `sendKeybind({type: String, send: Number})`
    - `type` what keybind you want to send is:
        - `"forward"`
        - `"left"`
        - `"back"`
        - `"right"`
        - `"inventory"` (not tested)
    - `send` `1` is pressed, `0` is not.
- `playSoundPlayer({name: String, volume: Number, pitch: Number})`
    - is just ModAPI.player.playSound, (requires "player" to work)
- `playSoundExternal({src: String})`
    - plays audio from `new Audio()`
- `key: object` wip, allows for easy accsesing of the LWGL key codes 