// Puts each project's title in the top-right corner of every printed page after the first.
(function () {
  var title = document.querySelector('.page-title');
  if (!title) return;
  var text = title.textContent.trim().replace(/["\\]/g, '\\$&');
  var style = document.createElement('style');
  style.textContent = '@page { @top-right { content: "' + text + '"; } }' +
    ' @page :first { @top-right { content: none; } }';
  document.head.appendChild(style);
})();
