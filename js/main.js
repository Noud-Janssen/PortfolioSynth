var navunlock = false;
var selectpage ="a";
function start() {
        document.querySelector('#landingpage').style.opacity = '0';
        document.querySelector('#pagecontent').style.display = 'inline';
        document.querySelector('#usenavbut').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('#usenavbut').style.transform = 'translateY(0)';
        document.querySelector('#pagecontent').style.opacity = '1';
        document.querySelector('#landingpage').style.display = 'none';
        document.querySelector('.whitekeys').classList.add('flyin');
        document.querySelector('.blackkeys').classList.add('flyin');
        document.querySelector('.keyboard').style.display = 'inline';
        navunlock = true; 
    }, 500);
    
}

var navopen = true;
function usenav() {
    if (navunlock == true) {
        if (navopen == true) {
            document.querySelector('#navbar').style.transform = 'var(--translateNavBar)'
            document.querySelector('.keyboard').style.transform = 'translatey(250%)'
            document.querySelector('#pagecontent').style.top = 'var(--topPageContentNav)'
            document.querySelector('#pagecontent').style.height = 'var(--heightPageContentNav)'
            document.querySelector('#usenavbut').style.transform = 'var(--translateNavBar)'
            document.querySelector('#usenavbut').style.width = 'var(--widthUseNavBut)'
            document.querySelector('#usenavbutsvg').style.transform = 'rotate(180deg)'
            navopen = false;
            keyunlock = false;
            let w = window.innerWidth;
            console.log(w)

            if (w <= 600) {
            }
        }
        else {
            document.querySelector('#navbar').style.transform = 'translatey(0)'
            document.querySelector('.keyboard').style.transform = 'translatey(0)'
            document.querySelector('#pagecontent').style.top = 'var(--topPageContent)'
            document.querySelector('#pagecontent').style.height = 'var(--heightPageContent)'
            document.querySelector('#usenavbut').style.transform = 'translatey(0)'
            document.querySelector('#usenavbut').style.width = '20vh'
            document.querySelector('#usenavbutsvg').style.transform = 'rotate(0deg)'


            
            navopen = true;
            keyunlock = true;
        }
    }
    


}

function clickNavBut(page, id) {
    console.log("1")
    setButtonCss(id);
    console.log("2")
    setpage(page)
    let w = window.innerWidth;
    console.log(w)
    if (w <= 600) {
        usenav()
    }
}

function setButtonCss(id) {
    elements = document.getElementsByClassName("navbut")
    for (i = 0 ; i < elements.length ; i++) {
        elements[i].classList.remove("navbutSelected");
    }
    document.querySelector('#' + id).classList.add("navbutSelected");
}

function keypress(clicked_id) {

    var key = document.querySelector('#' + clicked_id);
    var color;

    var check = document.querySelector('.keyblack#' + clicked_id);
    if (check == null) {
        color = 'var(--white)';
    }
    else {
        color = 'var(--accent)';
    }

    key.style.transitionDuration = '0s';
    key.style.backgroundColor = color;

    setTimeout(() => {
        key.style.transitionDuration = '1s';
        key.style.backgroundColor = 'var(--black)';
    }, 1); 

    if (navunlock == true && navopen == true) {
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
}

var selectedproject = "p1";
var selectedprojectmusic = "pm1"
function setpage(id) {
    if (id == 'a' || id == 's' || id == 'd' || id == 'f' || id == 'g' || id ==  'h' || id == 'j') {
        var element = document.querySelectorAll('.content');
        for (var i = 0 ; i < element.length ; i++) {
            element[i].style.opacity = '0';
            element[i].style.transform = 'translatex(0)'
        
            
            }
            switch (id) {
                case 'a':
                    setButtonCss('navbut1');
                    
                break;
                case 's':
                    setButtonCss('navbut2')
                break;
                case 'd':
                    setButtonCss('navbut3')
                    document.querySelectorAll('.col-20')[0].style.transform = 'translatex(0)'
                break;
                case 'f':
                    setButtonCss('navbut4')
                    document.querySelectorAll('.col-20')[1].style.transform = 'translatex(0)'
                break;
                case 'g':
                    setButtonCss('navbut5')
                break;
                default:
                    elements = document.getElementsByClassName("navbut")
                    for (i = 0 ; i < elements.length ; i++) {
                        elements[i].style.borderBottom = "none";
                    }
                break;
        }
    

        var selectid = document.querySelector('.' + id)
        selectid.style.opacity = '1';
        selectid.style.transform = 'translateX(var(--leftContent))';
        selectpage = id;

    }
    if (id == 't') {
        if (selectpage == "d") {
            selectedproject = selectedproject.split('p').pop();
            if (selectedproject > 1) {
            selectedproject--;
            selectedproject = "p" + selectedproject;
            setproject(selectedproject);
            }
            
        }
        else if (selectpage == "f") {
            selectedprojectmusic = selectedprojectmusic.split('m').pop();
            if (selectedprojectmusic > 1) {
            selectedprojectmusic--;
            selectedprojectmusic = "m" + selectedprojectmusic;
            setmusic(selectedprojectmusic);
            }
            
        }
    }
    else if (id == "u") {
        if (selectpage == "d") {
            selectedproject = selectedproject.split('p').pop();
            if (selectedproject < 3) {
            selectedproject++;
            }
            selectedproject = "p" + selectedproject;
            setproject(selectedproject);
        }
        else if (selectpage == "f") {
            selectedprojectmusic = selectedprojectmusic.split('m').pop();
            if (selectedprojectmusic < 4) {
            selectedprojectmusic++;
            }
            selectedprojectmusic = "m" + selectedprojectmusic;
            setmusic(selectedprojectmusic);
        }
    }
}

const projectTitle = [
    "<span class='naamColor'>Noud</span> als software developer:",
    "Mastermind",
    "Mini consoles",
    "Project 4",
    "Project 5",
    "Project 6"
]
const projectPara = [
    "Ik ben een eerste jaars software developer student, op mbo roc Nijmegen, met ervaring in <span class='html langTitle'>HTML</span>, <span class='css langTitle'>CSS</span>, <span class='js langTitle'>JavaScript</span> en <span class='java langTitle'><span class='javaJ'>J</span>ava</span>. <br> <br> Ook ben ik buiten mijn opleiding <span class='lua langTitle'>Lua</span> aan het leren.",
    "Het eerste project, Mastermind, kwam van een school opdracht: <br> Het namaken van mastermind in java. <br> <br> ",
    "Project 3",
    "Project 4",
    "Project 5",
    "Projct 6"
]

const projectTitleMusic = [
    "<span class='naamColor'>Noud</span> als Muziekant:",
    "Les geven",
    "Slagwerker 1ste divisie",
    "Project 4",
    "Project 5",
    "Project 6"
]
const projectParaMusic = [
    "Mastermind",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Projct 6"
]

function setproject(id) {
    document.querySelector('.projectselected').classList.remove('projectselected');
    document.querySelector('#' + id).classList.add('projectselected');

    selectedproject = id;
    projectIndex = selectedproject.split('p').pop() - 1;

    document.querySelector('#projectParagraph').innerHTML = projectPara[projectIndex];
    document.querySelector('#projectTitle').innerHTML = projectTitle[projectIndex];
}

function setmusic(id) {
    document.querySelector('.projectselectedmusic').classList.remove('projectselectedmusic');
    document.querySelector('#' + id).classList.add('projectselectedmusic');

    selectedprojectmusic = id;
    projectIndexMusic = selectedprojectmusic.split('m').pop() - 1;

    document.querySelector('#projectParagraphMusic').innerHTML = projectParaMusic[projectIndexMusic];
    document.querySelector('#projectTitleMusic').innerHTML = projectTitleMusic[projectIndexMusic];
}