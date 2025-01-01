function jsonp(url, jsonpCallback, success) {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.url = url;

  window[jsonpCallback] = function (data) {
    return success && success(data);
  };

  document.appendChild(script);
}

jsonp(
  "http://xxxxxxx.com?jsonpCallback=jsonpCallback",
  "jsonpCallback",
  (data) => {
    console.log(data);
  }
);
