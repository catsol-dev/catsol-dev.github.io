let subpages = document.getElementsByClassName("subpage");
let subpageIndex = 0;
function nextSubpage() {
    for (var i = 0; i < subpages.length; i++) {
        subpages[i].style.display = "none";
    }
    subpages[subpageIndex].style.display = "flex";
    subpageIndex += 1;
    if (subpageIndex == 4) {
        document.getElementById("nextPage").style.display = "none";
    }
}

let locations = document.getElementsByClassName("location");
let locationIndex = 0;
function nextLoc() {
    for (var i = 0; i < locations.length; i++) {
        locations[i].style.display = "none";
    }
    locations[locationIndex].style.display = "flex";
    locationIndex += 1;

    if (locationIndex == 5) {
        document.getElementById("locationbutton").style.display = "none";
    }
}
nextLoc();

nextSubpage();
