var elements = new ElementsHandler();
var styles = new StylesHandler();
var basicDebugger = new Debugger(true);
basicDebugger.log("[INFO] Wassup")
var sameKeyPressTimes = 0;

var easterEggComb = {
    times: 2, key: "a"
};

var pressedKeys = {
    times: 0, key: "none"
};

styles.setBackground("./assets/images/mean.jpeg", "repeat", "auto");
styles.setFavicon('./assets/images/smiley2.png');

styles.setBodyStyle("font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;");

if(platform == "Desktop")
{
    styles.setClassStyle("outer", `width: 100%; height: 98vh; display: flex; justify-content: center; align-items: center;`);
}
else
{
    styles.setClassStyle("outer", `width: 100%; height: 90vh; display: flex; justify-content: center; align-items: center; `);
}

elements.addDiv("first");
elements.addDiv("mainDiv");
elements.setClass("first", "outer");

elements.addHeader("Everyone is so mean to me", "h1", "why");
elements.addBreakline("break");
styles.setStyle("why", "text-align: center; background-color: white;");

elements.addAnchor("https://discord.com", "discord", "centerHeader");
elements.addAnchor("https://discord.com", "aka 'SanicBTW', 'Sanic', 'Saniczoned'", "alsoKnownAs");
elements.setAttribute(["centerHeader", "alsoKnownAs"],"target", "_blank");
elements.addParagraph("and idk what else", "lol");

styles.setStyle(["centerHeader", "alsoKnownAs", "lol"], "font-family: 'Courier New', Courier, monospace; text-align: left;");

elements.appendTo("mainDiv", "first");

elements.appendTo(["why", "centerHeader", "alsoKnownAs", "lol"], "mainDiv");

elements.onKeydown(function(key) {
    var lastKey = "";

    lastKey = pressedKeys.key;
    pressedKeys.key = key.key;

    if(key.key == lastKey)
    { 
        ++sameKeyPressTimes;
    }
    else
    {
        sameKeyPressTimes = 0;
    }
    pressedKeys.times = sameKeyPressTimes;

    if(pressedKeys.key == easterEggComb.key && pressedKeys.times == easterEggComb.times - 1)
    {
        elements.changeText("why", "AYO HOLD UP DONT PRESS AGAINN");
    }

    if(pressedKeys.key == easterEggComb.key && pressedKeys.times == easterEggComb.times)
    {
        elements.changeText("why", "warned you");
        window.location.assign("./src/iHateYou.html");
    }
})