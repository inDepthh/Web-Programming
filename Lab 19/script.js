var answer;
var iphone;
var android;
var bern;
var hil;
var don;
var none;
var pc;
var console;
var rap;
var elsee;
var cat;
var dog;
var soft;
var net;

function waitForLoad() {
    if (answer) {
        Continue();
    } else if (answer === false) {
        Restart();
    }
}

setTimeout(waitForLoad, 100);

function Continue() {
    if (iphone) {
        console.log(7)
        var iphone_element = document.getElementById("newlink_iphone");
        var iphone_text = document.createTextNode("Yes. iphone is the best");
        iphone_element.appendChild(iphone_text);
        iphone_element.onclick = function () {
            window.location.replace("./path2.html");
        };
    } // end if

    if (none) {
        var none_element = document.getElementById("newlink_none");
        var none_text = document.createTextNode("Good, maybe we will have some serious options for 2020.");
        none_element.appendChild(none_text);
        none_element.onclick = function () {
            window.location.replace("./path3.html");
        };
    }// end if

    if (console === true) {
        var console_element = document.getElementById("newlink_console");
        var console_text = document.createTextNode("Despite your PC hardware stats, console is always better by definition");
        console_element.appendChild(console_text);
        console_element.onclick = function () {
            window.location.replace("./path4.html");
        };
    }// end if

    if (rap) {
        var rap_element = document.getElementById("newlink_rap");
        var rap_text = document.createTextNode("Our elders will never understand. Click here");
        rap_element.appendChild(rap_text);
        rap_element.onclick = function () {
            window.location.replace("./path5.html");
        };
    }// end if

    if (dog) {
        var dog_element = document.getElementById("newlink_dog");
        var dog_text = document.createTextNode("Dogs are apart of the family. We should be able to claim them as dependants for taxes");
        dog_element.appendChild(dog_text);
        dog_element.onclick = function () {
            window.location.replace("./path6.html");
        };
    }// end if

    if (soft) {
        var soft_element = document.getElementById("newlink_soft");
        var soft_text = document.createTextNode("Congratulations, you have passed the test. If you would like a cookie for your accomplishment, click here.");
        soft_element.appendChild(soft_text);
        soft_element.onclick = function () {
            window.location.replace("./img/cookie.jpg");
        };
    }// end if
}// end function

function Restart() {
    if (android === true) {
        console.log(10);
        var android_element = document.getElementById("newlink_android");
        var android_text = document.createTextNode("My internship requries me to develop for it... but it will not get special treatment because of that. Click here.");
        android_element.appendChild(android_text);
        android_element.onclick = function () {
            window.location.replace("./index.html");
        };
    } // end if

    if (hil) {
        console.log(4);
        var hil_element = document.getElementById("newlink_hillary");
        var hil_text = document.createTextNode("See that face? SHES EVIL! CLICK HERE.");
        hil_element.appendChild(hil_text);
        hil_element.onclick = function () {
            window.location.replace("./index.html");
        };
    }// end if

    if (don) {
        var don_element = document.getElementById("newlink_don");
        var don_text = document.createTextNode("Well its certainly not donald the duck. Click here");
        don_element.appendChild(don_text);
        don_element.onclick = function () {
            window.location.replace("./index.html");
        };
    }// end if

    if (bern) {
        var bern_element = document.getElementById("newlink_bern");
        var bern_text = document.createTextNode("Bernie is a great person, but the establishment will not allow him to be elected, so you are wrong.");
        bern_element.appendChild(bern_text);
        bern_element.onclick = function () {
            window.location.replace("./index.html");
        };
    } // end if

    if (pc) {
        var pc_element = document.getElementById("newlink_pc");
        var pc_text = document.createTextNode("pc is not bad. But games belong on console. Click here");
        pc_element.appendChild(pc_text);
        pc_element.onclick = function () {
            window.location.replace("./path3.html");
        };
    } // end if

    if (elsee) {
        var else_element = document.getElementById("newlink_else");
        var else_text = document.createTextNode("All other music is objectively bad.");
        else_element.appendChild(else_text);
        else_element.onclick = function () {
            window.location.replace("./path3.html");
        };
    } // end if

    if (cat) {
        var cat_element = document.getElementById("newlink_cat");
        var cat_text = document.createTextNode("All animals are equal. However, it does not make cats a good choice");
        cat_element.appendChild(cat_text);
        cat_element.onclick = function () {
            window.location.replace("./path3.html");
        };
    } // end if

    if (net) {
        var net_element = document.getElementById("newlink_net");
        var net_text = document.createTextNode("How could you get this one wrong??");
        net_element.appendChild(net_text);
        net_element.onclick = function () {
            window.location.replace("./path3.html");
        };
    } // end if
} // end function

function Correct_dialog() {
    alert("Congradulations, you picked the right one!");
    answer = true;
}

function Wrong_dialog() {
    alert("NOPE, you picked the wrong one.");
    answer = false;
}
