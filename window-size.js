window.addEventListener('resize', sidetable);

function sidetable() {
    // Get width and height of browser
    let width = $(window).width();

    // If the browser is big enough show the list of programming languages on the side
    if (width < 625) { document.getElementById("prog-table-side").disabled=true; alert("smol");}
    else { document.getElementById("prog-table-side").disabled=false; }
}