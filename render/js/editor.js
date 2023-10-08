function changeFont() {
  var font = document.getElementById("fontSelect").value;
  var editor = document.getElementById("editor");

  var selection = window.getSelection();
  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var span = document.createElement("span");
    span.style.fontFamily = font;

    // Remove any existing spans
    var existingSpans = editor.querySelectorAll("span[style*='font-family']");
    existingSpans.forEach(function (existingSpan) {
      existingSpan.outerHTML = existingSpan.innerHTML;
    });

    range.surroundContents(span);
  }
}
