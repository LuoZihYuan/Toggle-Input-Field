var toggleInputFieldPlugins = toggleInputFieldPlugins || [];

let targetElements = [];

window.addEventListener('load', function() {

  let inputs = document.body.getElementsByTagName('input');
  for (let input of inputs) {
    targetElements.push(input);
  }

  let textareas = document.body.getElementsByTagName('textarea');
  for (let textarea of textareas) {
    targetElements.push(textarea);
  }

  for (let plugin of toggleInputFieldPlugins) {
    plugin.filter(targetElements);
  }

}, false);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    let command = request.commands[0];

    if (command === 'focus_next') {
      targetElements.push(targetElements.shift());
    } else if (command === 'focus_prev') {
      targetElements.unshift(targetElements.pop());
    }
    
    document.activeElement.blur();
    targetElements[0].focus();
    
  });
