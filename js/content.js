var toggleInputFieldPlugins = toggleInputFieldPlugins || [];

let targetElements = [];

window.addEventListener('load', function() {

  let inputs = document.body.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    targetElements.push(inputs[i]);
  }
  let textareas = document.body.getElementsByTagName('textarea');
  for (let i = 0; i < textareas.length; i++) {
    targetElements.push(textareas[i]);
  }
  for (let i = 0; i < toggleInputFieldPlugins.length; i++) {
    toggleInputFieldPlugins[i].filter(targetElements);
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
