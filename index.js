window.load = function () {

}

window.addEventListener('resize', (event) => {

    var java = document.getElementById("java");
    java.style.width = "0px";
    var htmlcss = document.getElementById("htmlcss");
    htmlcss.style.width = "0px";
    var php = document.getElementById("php");
    php.style.width = "0px";
    var javascript = document.getElementById("javascript");
    javascript.style.width = "0px"


    if(!JavaScriptEventOn){
        graphAnimationJava(java);
    }

    if (!HTMLCSSEventOn) {
        graphAnimationHtmlCss(htmlcss);
    }

    if (!PHPEventOn) {
        graphAnimationPhp(php);
    }

    if (!JavaScriptEventOn) {
        graphAnimationJavaScript(javascript);
    }

})

var JavaEventOn = false;
var HTMLCSSEventOn = false;
var PHPEventOn = false;
var JavaScriptEventOn = false;

window.addEventListener('scroll', (event) => {

    var java = document.getElementById("java");
    var htmlcss = document.getElementById("htmlcss");
    var php = document.getElementById("php");
    var javascript = document.getElementById("javascript");


    if(!JavaEventOn){
        graphAnimationJava(java);
    }

    if (!HTMLCSSEventOn) {
        graphAnimationHtmlCss(htmlcss);
    }

    if (!PHPEventOn) {
        graphAnimationPhp(php);
    }

    if (!JavaScriptEventOn) {
        graphAnimationJavaScript(javascript);
    }

});


var JavaElementVisible = 0;

function graphAnimationJava(element) {
    JavaEventOn = true;
    var graph = document.getElementById("graph");

    var size = 0;
    var Interval;

    if (isInViewport(element)) {
        JavaElementVisible = 1;

        if (JavaElementVisible >= 1) {

            Interval = setInterval(async () => {
                if (element.getBoundingClientRect().width <= graph.getBoundingClientRect().width) {
                    size += 3;
                    element.style.width = size + "px";
                    return;
                }
                clearInterval(Interval);
                JavaEventOn = false;
                JavaElementVisible = 0;
            }, 2);
        }

    } else if (!isInViewport(element)) {

        if (Interval != null) {
            clearInterval(Interval);
        }

        JavaEventOn = false;

        size = 0;
        JavaElementVisible = 0;
        element.style.width = "0px";

    }
}

var HtmlCssElementVisible = 0;

function graphAnimationHtmlCss(element) {

    HTMLCSSEventOn = true;
    var graph = document.getElementById("graph");

    var size = 0;
    var Interval;

    var graphSize = graph.getBoundingClientRect().width;
    var elementSize = (graphSize * 80) / 100;

    if (isInViewport(element)) {
        HtmlCssElementVisible += 1;

        if (HtmlCssElementVisible >= 1) {
            Interval = setInterval(async () => {
                if (element.getBoundingClientRect().width <= elementSize) {
                    size += 3;
                    element.style.width = size + "px";
                    return;
                }
                clearInterval(Interval);
                HTMLCSSEventOn = false;
                HtmlCssElementVisible = 0;
            }, 2);
        }

    } else if (!isInViewport(element)) {

        if (Interval != null) {
            clearInterval(Interval);
        }
        HTMLCSSEventOn = false;

        size = 0;
        HtmlCssElementVisible = 0;
        element.style.width = "0px";

    }
}

var phpElementVisible = 0;

function graphAnimationPhp(element) {

    PHPEventOn = true;
    var graph = document.getElementById("graph");

    var size = 0;
    var Interval;

    var graphSize = graph.getBoundingClientRect().width;
    var elementSize = (graphSize * 30) / 100;

    if (isInViewport(element)) {
        phpElementVisible += 1;

        if (phpElementVisible >= 1) {
            Interval = setInterval(async () => {
                if (element.getBoundingClientRect().width <= elementSize) {
                    size += 1;
                    element.style.width = size + "px";
                    return;
                }
                clearInterval(Interval);
                PHPEventOn = false;
                phpElementVisible = 0;
            }, 2);
        }

    } else if (!isInViewport(element)) {

        if (Interval != null) {
            clearInterval(Interval);
        }
        PHPEventOn = false;

        size = 0;
        phpElementVisible = 0;
        element.style.width = "0px";

    }
}

var javaScriptElementVisible = 0;

function graphAnimationJavaScript(element) {

    JavaScriptEventOn = true;
    var graph = document.getElementById("graph");

    var size = 0;
    var Interval;

    var graphSize = graph.getBoundingClientRect().width;
    var elementSize = (graphSize * 60) / 100;

    if (isInViewport(element)) {
        javaScriptElementVisible += 1;

        if (javaScriptElementVisible >= 1) {
            Interval = setInterval(async () => {
                if (element.getBoundingClientRect().width <= elementSize) {
                    size += 1;
                    element.style.width = size + "px";
                    return;
                }
                clearInterval(Interval);
                JavaScriptEventOn = false;
                javaScriptElementVisible = 0;
            }, 2);
        }

    } else if (!isInViewport(element)) {

        if (Interval != null) {
            clearInterval(Interval);
        }
        JavaScriptEventOn = false;

        size = 0;
        javaScriptElementVisible = 0;
        element.style.width = "0px";

    }
}


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}