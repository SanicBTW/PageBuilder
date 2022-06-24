define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addHeader = exports.addImage = exports.setBackground = void 0;
    var addedChilds = 0;
    function setBackground(path) {
        document.body.style.cssText = `background-image: url('${path}')`;
    }
    exports.setBackground = setBackground;
    function addImage(path) {
        var img = document.createElement("img");
        img.src = path;
        img.id = `${addedChilds}`;
        addedChilds += 1;
        document.body.append(img);
    }
    exports.addImage = addImage;
    function addHeader(text, type) {
        var header = document.createElement(type);
        header.innerText = text;
        header.id = `${addedChilds}`;
        addedChilds += 1;
        document.body.append(header);
    }
    exports.addHeader = addHeader;
});
