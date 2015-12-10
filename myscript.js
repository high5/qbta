function patch(){
  $('.itemStockButton_button-stock').click(function() {
    subwindow = window.open('http://b.hatena.ne.jp/add?mode=confirm&is_bm=1&title='+escape(document.title)+'&url='+escape(location.href), '_blank', 'width=520,height=600,resizable=1,scrollbars=1');undefined;
  });
}

var script = document.createElement('script');
script.appendChild(document.createTextNode('('+patch+')();'));
document.body.appendChild(script);
