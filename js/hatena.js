var addComment = false;

function patch(){
  var url   = location.href;
  parameters    = url.split("?");
  params   = parameters[1].split("&");
  var paramsArray = [];
  for ( i = 0; i < params.length; i++ ) {
      neet = params[i].split("=");
      paramsArray.push(neet[0]);
      paramsArray[neet[0]] = neet[1];
  }
  var tagsStr = paramsArray["tags"];
  if (typeof(tagsStr) != 'undefined' && tagsStr.length > 0) {
    var tagsStr = decodeURI(tagsStr);
    var tags = tagsStr.split(',');
    var commentStr = '';
    for (var i=0; i < tags.length; i++) {
      commentStr += '[' + tags[i] + ']';
    var comment = document.getElementById("comment")
    }
    comment.value = commentStr;
    addComment = true;
  }
}

function patch2(){
  if (addComment) {
    document.getElementById('submit-button').click();
  }
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+patch+')();'));
document.body.appendChild(script);

chrome.storage.sync.get({
  automatic: true
}, function(items) {
  if (items.automatic) {
    var script2 = document.createElement('script');
    script2.appendChild(document.createTextNode('('+patch2+')();'));
    document.body.appendChild(script2);
  }
});
