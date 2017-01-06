// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
  
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' coffee!');
  
//     chrome.tabs.executeScript({
//     file: 'jquery-1.11.3.js'
//   // code: 'document.body.style.backgroundColor="#CECCB5"'
//   });
  
//   chrome.tabs.executeScript({
//     file: 'bg_change.js'
//   // code: 'document.body.style.backgroundColor="#CECCB5"'
//   });
  

// });

// // Call the above function when the url of a tab changes.
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  
//     // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' coffee!');
  
//     chrome.tabs.executeScript({
//     file: 'jquery-1.11.3.js'
//   // code: 'document.body.style.backgroundColor="#CECCB5"'
//   });
  
//   chrome.tabs.executeScript({
//     file: 'bg_change.js'
//   // code: 'document.body.style.backgroundColor="#CECCB5"'
//   });
  
  
//   chrome.runtime.sendMessage({action: "showIcon"}, function(response) {});
// });


