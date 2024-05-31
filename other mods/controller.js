var controllerIndex = OakAPI.gamepad.index;

var gamepadForward = false;
var gamepadBack = false;
var gamepadLeft = false;
var gamepadRight = false;

window.addEventListener("gamepadconnected", (ev) =>{
    OakAPI.gamepad.index = ev.gamepad.index;
    OakAPI.alert({title: "Gamepad Connected!", subtext: "", time: 30});
});
window.addEventListener("gamepaddisconnected", (ev) =>{
    OakAPI.gamepad.index = null;
});

function controllerInput(){
    if (controllerIndex !== null) {
        const gamepad = navigator.getGamepads()[controllerIndex];
        const buttons = gamepad.buttons;
        gamepadForward = buttons[12].pressed;
        gamepadBack = buttons[13].pressed;
        gamepadLeft = buttons[14].pressed;
        gamepadRight = buttons[15].pressed;
    }
}

function movePlayer() {
    if (gamepadForward) {
        OakAPI.sendKeybind({type: "forward", send: 1})
    } else OakAPI.sendKeybind({type: "forward", send: 0});

    if (gamepadBack) {
        OakAPI.sendKeybind({type: "back", send: 1})
    } else OakAPI.sendKeybind({type: "back", send: 0});
}

controllerInput();