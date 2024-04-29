/* 
* OakAPI by stpv22(1). 
* Docs coming soon!
*/
const OakAPI = {
    version: 1.1,
    versionName: "infdev",
    displayVersion: function () {
        ModAPI.drawStringWithShadow({msg: "OakAPI " + OakAPI.version, x: 1, y: 27, color: -1});
    },
    alert: function (opts) {
        // {title: string, subtext: string, timeMod: int} maybe add an icon later.
        var alertContainer = document.createElement("div");
        alertContainer.style = "position: fixed; top: 1rem; left: 1rem; border: 0.2rem solid; border-color: black; padding: 10px; background-color: rgb(60, 60, 60); font-family: Minecraftia, sans-serif; min-width: 100px;";

        var alertTitle = document.createElement("h2");
        alertTitle.style = "box-sizing: border-box; border: none; margin-top: 2px; margin-bottom: 2px; color: yellow;"
        alertTitle.innerHTML = opts.title;

        var alertText = document.createElement("p");
        alertText.style = "color: white;"
        alertText.innerHTML = opts.subtext;

        var alertTimeout = document.createElement("div");
        alertTimeout.style = "box-sizing: border-box; background-color: black; position: absolute; left: 0; bottom: 0; width: 100%; height: 0.5rem;"

        alertContainer.appendChild(alertTitle);
        alertContainer.appendChild(alertText);
        alertContainer.appendChild(alertTimeout);
        document.body.appendChild(alertContainer);

        //make the timeout animation
        var startTime = new Date().getTime();

        var alertTimeout = function (){
            var currTime = new Date().getTime();
            var newWidth = (100 - ((currTime - startTime)/1000) * opts.timeMod);
            timeout.style.width = newWidth + "%";

            if (newWidth >= 0) {
                window.requestAnimationFrame(alertTimeout);
            } else {
                alertContainer.remove();
            }
        }
        alertTimeout();

        //return variables so that if anyone wants to change the alertbox style. I think this works.
        return [alertContainer, alertTitle, alertText, alertTimeout];
    },
    newGUI: function(opts) { },
    sendKeybind: function (opts) { },
    playSoundClient: function (opts) { },
    playSoundExternal: function (opts) { },
    lwglKeys: {},
    screen: {},
};

// document.addEventListener("click", () => {
//     OakAPI.alert({title: "Alertbox is working!", subtext: "This is working!", timeMod: 30});
// })