window.addEventListener('resize', sidetable);
window.addEventListener('load', sidetable);

function sidetable() {
    // Get width and height of browser
    let width = $(window).width();

    // If the browser is big enough show the list of programming languages on the side
<<<<<<< HEAD
    if (width < 625) { document.getElementById("prog-table-side").disabled=true; document.getElementById("no-prog-table-side").disabled=false; }
    else { document.getElementById("prog-table-side").disabled=false; document.getElementById("no-prog-table-side").disabled=true; }
=======
    if (width < 625) { document.getElementById("prog-table-side").disabled=true; alert("smol");}
    else { document.getElementById("prog-table-side").disabled=false; }
>>>>>>> parent of bb51364 (Cleaned up the fix)
}