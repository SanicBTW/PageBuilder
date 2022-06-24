var addedChilds = 0;

function setBackground(path)
{
    document.body.style.cssText = `background-image: url('${path}')`;
}

function addImage(path, id)
{
    var img = document.createElement("img");
    img.src = path;
    img.id =  `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(img);
}

function addHeader(text, type, id)
{
    var header = document.createElement(type);
    header.innerText = text;
    header.id = `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(header);
}

function addParagraph(text, id)
{
    var paragraph = document.createElement("p");
    paragraph.innerText = text;
    paragraph.id = `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(paragraph);
}

function addAudio(path, showControls, id)
{
    var audio = document.createElement("audio");
    audio.src = path;
    audio.controls = showControls;
    audio.id = `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(audio);
}

function addButton(text, onClick, id)
{
    var button = document.createElement("button");
    button.addEventListener("click", (click) => {
        onClick();
    });
    button.innerText = text;
    button.id = `${id != null ? id : addedChilds}`;
    addedChilds += 1;
    document.body.append(button);
}