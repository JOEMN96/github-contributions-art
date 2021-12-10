let ip = document.querySelector('#GITARTname');
let form = document.querySelector('form');
let err = document.querySelector('p');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (ip.value && !/\d/.test(ip.value)) {
    sendTextToContentScript(ip.value);
  } else {
    err.style.display = 'block';
    return setTimeout(() => {
      err.style.display = 'none';
      ip.value = '';
    }, 2000);
  }
});

function sendTextToContentScript(textToDraw) {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    let activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { command: 'Draw', data: textToDraw });
    console.log('Done');
  });
}
