(() =>{
    //a list of all possible givable items
    var allItems = [0, 
        {Name: "stone", Variants: [0, "{Damage:1}", "{Damage:1}", "{Damage:1}", "{Damage:1}", "{Damage:1}", "{Damage:1}"]}, //granite, 
        {Name: "grass", Variants: null}, 
        {Name: "dirt", Variants: [0, "{Damage: 1}", "{Damage: 2}"]}, //coarse, podzol
        {Name: "cobblestone", Variants: null}];

    var GUIbutton = document.createElement("button");
    GUIbutton.style="position: fixed; top:1rem; left:1rem;";
    GUIbutton.addEventListener("click", () => {
        var GUIContainer = document.createElement("div");

        document.body.appendChild(GUIContainer);
    });

    //todo
    document.body.appendChild(GUIbutton);
})