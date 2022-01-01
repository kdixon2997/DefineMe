var h1;
var h2;
var p;

function setup() {
    noCanvas();

    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word.trim();
    console.log(word);


    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
    url += word; //Add word to query
    url = url.replace(/\s+/g, ''); //Remove any white space and repace it with nothing ('') | /g makes the expression global
    loadJSON(url, gotData, badData); //https://p5js.org/reference/#/p5/loadJSON

    function gotData(data) {

        h1 = createElement('h1', "Define Me");
        h1.style('color', '#c3ac6c');

        h2 = createElement('h2', data[0].word).style('text-transform', 'capitalize');
        h2.style('color', 'white');

        p = createP(data[0].meanings[0].definitions[0].definition).style('font-size', '12pt'); //https://p5js.org/reference/#/p5/createP
        p.style('color', 'white');
    }

    function badData() {
        h2 = createElement('h2', '"Define Me" is an extension that looks up the definition of any word you select on your web browser.');
        p = createP('To use it highlight a word and click on this icon again. If you have done that and are still seeing this message your definition could not be found, so try another word.').style('font-size', '12pt');

        p.style('color', 'white');
        h2.style('color', 'white');
    }
}