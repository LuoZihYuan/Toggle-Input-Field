chrome.commands.onCommand.addListener(function(command) {
  
  let tabQueryInfo = {
    currentWindow: true,
    active: true,
    status: 'complete'
  };
  chrome.tabs.query(tabQueryInfo, function(tabs){
    if (tabs.length > 0) {
      sendCommand(tabs[0].id, command);
    }
  });

});

function sendCommand(tabID, command) {
  
  let message = {
    commands: [command]
  };
  chrome.tabs.sendMessage(tabID, message, function(response) {
    return undefined;
  });
}
