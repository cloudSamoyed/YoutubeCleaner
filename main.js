var a = 0; //variable to track which "video" it's marking.
var cleanerCallbackIdHandle = 0; //buffer variable to keep track of the cleaner code


//Code for the cleaneritself, it repeats every 400s milliseconds to avoid freezing the computer.
cleanerCallbackIdHandle = window.setInterval(function() {

    //This will specifically target all the dropdown buttons next to videos.
    var targets = document.querySelectorAll('yt-icon-button[id="button"][class="dropdown-trigger style-scope ytd-menu-renderer"]');
    var optionsString = "Not interested";// If you desire to change what option to choose, change the text here.

    //We need to go through these dropdowns and manually open them to access the "Not Interested" button, it creates them when we open the dropdown.
    targets[a].children[0].click(); //We have to use the child element, otherwise it'll think we've clicked on the video, updating the targets query will make this cleaner and uneccesary
    a++;

    //Grab all the options
    var selectables = document.getElementsByTagName("ytd-menu-service-item-renderer"); //Not as elegant as grabbing my targets but it works.

    //Go through all our available options
    for (var i = 0; i < selectables.length; i++) {

        //If there is a match in the options string anywhere in the HTML of the option we're currently in, proceed.
        if(selectables[i].innerHTML.includes(optionsString)) { //Not as elegant as I'd like it to be but oh well.
            selectables[i].click(); //Obvious.
            break; //Break the loop once we click our option since the dropdown menu will most likely self-destruct on its own.
        }
    }

    

}, 400);

// /* // Remove the initial 2 slashes to disable this, this will automatically turn off the cleaner after 33600 milliseconds
window.setTimeout(function() {
    clearInterval(cleanerCallbackIdHandle);
}, 33600);

// */ //

//Run this function if the code goes rogue, it'll shutdown the cleaner.
function stopClean() {
    clearInterval(cleanerCallbackIdHandle);
}
