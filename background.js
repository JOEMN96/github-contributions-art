// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

var port = chrome.runtime.connect();

window.addEventListener(
  'message',
  (event) => {
    // We only accept messages from ourselves
    if (event.source != window) {
      return;
    }

    if (event.data.type && event.data.type == 'FROM_PAGE') {
      console.log('Content script received: ' + event.data.text);
      port.postMessage(event.data.text);
    }
  },
  false
);
