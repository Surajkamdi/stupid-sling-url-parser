class SlingUrl {
  constructor (url) {
    url = url.startsWith("/") ? "h://t.co" + url : url;

    this._url = new URL(url);

    var hasDot = str => str.indexOf(".") > -1;

    var pathname = this._url.pathname;
    var dotIndex = pathname.indexOf(".");
    var pathnameHasDot = dotIndex > -1;
    var slashParts = pathname.split("/");
    var firstDotPart = slashParts.filter(hasDot)[0];

    // resource path
    this.resourcePath = pathnameHasDot
      ? pathname.substring(0, dotIndex)
      : pathname;

    // extension + selectors
    if (firstDotPart) {
      var dotParts = firstDotPart.split(".");
      if (dotParts.length) {
        var lastPart = dotParts[dotParts.length - 1];
        this.extension = lastPart ? lastPart : null;

        var selectors = dotParts.slice(1, dotParts.length - 1); // remove first and last
        this.selectors = selectors.length > 0 ? selectors : null;
      }
    } else {
      this.extension = null;
      this.selectors = null;
    }

    // suffix
    var dotPartIndex = slashParts.findIndex(hasDot);
    var suffix =
      dotPartIndex > -1 ? slashParts.slice(dotPartIndex + 1).join("/") : null;
    this.suffix = suffix ? "/" + suffix : null;
  }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = SlingUrl;
}
else {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return SlingUrl;
    });
  }
  else {
    window.SlingUrl = SlingUrl;
  }
}