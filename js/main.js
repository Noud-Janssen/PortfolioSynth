var navunlock = false;
function unlocknav() {
    setTimeout(() => {
        navunlock = true;
    }, 5000);

    
    if (navigator.requestMIDIAccess) {
        console.log('This browser supports WebMIDI!');
    } else {
        console.log('WebMIDI is not supported in this browser.');
    }
}

var navopen = true;
function usenav() {
    if (navunlock == true) {
        if (navopen == true) {
            document.querySelector('#navbar').style.transform = 'translatey(10vh)'
            document.querySelector('.keyboard').style.transform = 'translatey(150%)'
            document.querySelector('#helplogo').style.transform = 'translatex(20vw)'
            document.querySelector('#pagecontent').style.top = '15vh'
            document.querySelector('#pagecontent').style.height = '80vh'
            document.querySelector('#usenavbut').style.transform = 'translatey(10vh)'
            navopen = false;
            keyunlock = false;
        }
        else {
            document.querySelector('#navbar').style.transform = 'translatey(0)'
            document.querySelector('.keyboard').style.transform = 'translatey(0)'
            document.querySelector('#helplogo').style.transform = 'translatex(0)'
            document.querySelector('#pagecontent').style.top = '5vh'
            document.querySelector('#pagecontent').style.height = 'calc(95vh - var(--heightKeyB))'
            document.querySelector('#usenavbut').style.transform = 'translatey(0)'
            
            navopen = true;
            keyunlock = true;
        }
    }
    


}


var selectpage ="a";
var helpopen = true;
function usehelp() {
    if (navunlock == true) {
        var nohelp = document.querySelectorAll('.nohelp')
        var keywhite = document.querySelectorAll('.keywhite')
        var keyblack = document.querySelectorAll('.keyblack')
        if (helpopen == true) {
            for (i = 0 ; i < nohelp.length ; i++) {
                nohelp[i].style.opacity = '0';
            }
            
            document.querySelector('#helpoverlay').style.top = 'calc(50vh - var(--heightKeyB))';
            document.querySelector('#pagecontent').style.height = '0';
            document.querySelector('.keyboard').style.bottom = 'calc(50vh - var(--heightKeyB) / 2)';
            document.querySelector('#usenavbut').style.left = '-10vw';

            setTimeout(() => {
                document.querySelector('#helpoverlay').style.opacity = '1'; 
                for (i = 0 ; i < keywhite.length ; i++) {
                    keywhite[i].style.fontSize = 'var(--fontsizeKey)'
                }
                for (i = 0 ; i < keyblack.length ; i++) {
                    keyblack[i].style.fontSize = 'var(--fontsizeKey)'
                }               
            }, 1000);
            helpopen = false;
            keyunlock = false;
        }
        else {
            for (i = 0 ; i < keywhite.length ; i++) {
                keywhite[i].style.fontSize = '0px'
            }
            for (i = 0 ; i < keyblack.length ; i++) {
                keyblack[i].style.fontSize = '0px'
            }
            document.querySelector('#helpoverlay').style.opacity = '0';
            setTimeout(() => {
                document.querySelector('#navbar').style.opacity = '1';
                document.querySelector('#usenavbut').style.opacity = '1';
                document.querySelector("." + selectpage).style.opacity = '1';
                document.querySelector('#pagecontent').style.height = 'calc(95vh - var(--heightKeyB))';
                document.querySelector('.keyboard').style.bottom = '0vh';
                document.querySelector('#usenavbut').style.left = '0vw';
                document.querySelector('#helpoverlay').style.top = '-100vh';      
             }, 500);
            helpopen = true;
            keyunlock = true;
        }
    }
}

function keypress(clicked_id) {

    var key = document.querySelector('#' + clicked_id);
    var color;

    var check = document.querySelector('.keyblack#' + clicked_id);
    if (check == null) {
        color = 'var(--pink)';
    }
    else {
        color = 'var(--green)';
    }

    key.style.transitionDuration = '0s';
    key.style.backgroundColor = color;

    setTimeout(() => {
        key.style.transitionDuration = '1s';
        key.style.backgroundColor = 'var(--black)';
    }, 1); 

    if (navunlock == true) {
        setpage(clicked_id) 
    }

}

var keyunlock = true;
document.onkeypress = function(evt) {

    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);

    if (keyunlock == true) {
        keypress(charStr);  
    }
    
};

function setpage(id) {
    if (id == 'a' || id == 's' || id == 'd' || id == 'f' || id == 'g' || id ==  'h' || id == 'j') {
        var element = document.querySelectorAll('.content');
        for (var i = 0 ; i<element.length ; i++) {
            element[i].style.opacity = '0';
            element[i].style.transform = 'translatex(0)'
        }

        var selectid = document.querySelector('.' + id)
        selectid.style.opacity = '1';
        selectid.style.transform = 'translatex(-90vw)';
        selectpage = id;

    }
}