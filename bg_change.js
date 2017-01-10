// Used method: http://stackoverflow.com/a/11963008/1613961
// Another cool method but not used: http://stackoverflow.com/a/8894528/1613961
$(document).dblclick(function (e) {
  $(e.target).each(function() {
    this.style.setProperty('background-color', '#CECCB5','important');
  })
});

chrome.runtime.sendMessage({ action: "showIcon" }, function (response) { });