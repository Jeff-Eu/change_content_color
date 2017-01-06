              
      $(document).dblclick(function (e) {      
        $(e.target).css('background-color', '#CECCB5');        
      });
      
chrome.runtime.sendMessage({action: "showIcon"}, function(response) {});