let start = Date.now();

function date(){
    date = "Pages load " + (Date.now() - start) + " ms";
    window.document.write(date)
}