new ClipboardJS('.btn');

function md2html() {
    var md = $("#md > textarea");
    var html = $("#html > textarea");
    var dirty = marked(md.val());
    var purifyCB = document.getElementById("toPurify");
    if (purifyCB.checked) {
        html.val(DOMPurify.sanitize(dirty));
    } else {
        html.val(dirty);
    }
}

$(document).on("keyup", "#md > textarea", md2html);
$(document).on("change", "#toPurify", md2html);

function downloadFile(name, contents, mime_type) {
    mime_type = mime_type || "text/plain";
    var blob = new Blob([contents], { type: mime_type });
    var dlink = document.createElement('a');
    dlink.download = name;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function (e) {
        // revokeObjectURL needs a delay to work properly
        var that = this;
        setTimeout(function () {
            window.URL.revokeObjectURL(that.href);
        }, 1500);
    };
    document.body.appendChild(dlink);
    dlink.click();
    document.body.removeChild(dlink);
    dlink.remove();
}

$(document).on("click", "#dl-md", function () {
    var md = $("#md > textarea");
    downloadFile("a.md", md.val(), "text/markdown");
});

$(document).on("click", "#dl-html", function () {
    var md = $("#html > textarea");
    downloadFile("a.html", md.val(), "text/html");
});

function saveText() {
    const text = $("#md > textarea").val();
    localStorage.setItem("text", text);
    showPopup("Saved!", "#007bff");
}

$(document).on("click", "#save-btn", saveText);

function loadText() {
    const loaded = localStorage.getItem("text");
    if (loaded !== null) {
        $("#md > textarea").val(loaded);
        md2html();
        showPopup("Loaded!", "#17a2b8");
    } else {
        showPopup("No text to load!", "#6c757d");
    }
}

$(document).on("click", "#load-btn", loadText);

function showPopup(msg, color) {
    const elm = $("#popup-msg");
    elm.css("background", color);
    $("#popup-msg > p").html(msg);
    elm.fadeIn();
    setTimeout(() => {
        elm.fadeOut();
    }, 2000);
}
