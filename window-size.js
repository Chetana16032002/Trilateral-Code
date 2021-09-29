window.addEventListener('resize', sidetable);
window.addEventListener('load', sidetable);

function sidetable() {
    // Get width and height of browser
    let width = $(window).width();
    let height = $(window).height();

    // If the browser is big enough show the list of programming languages on the side
    if (width < 1050 || height < 450) { document.getElementById("prog-table-side").disabled=true;} //MINIMUM WIDTH 625
    else { document.getElementById("prog-table-side").disabled=false; }
}
//comment