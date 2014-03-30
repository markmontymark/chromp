
/* 

chrome.runtime events 
http://developer.chrome.com/apps/app_runtime

onLaunched
onRestarted
*/

chrome.app.runtime.onLaunched.addListener(function() {
  console.log("on launched event, arguments " + arguments);
    // chrome.app.window events
	// onBoundsChanged
	// onClosed
	// onFullscreened
	// onMaximized
	// onMinimized
	// onRestored

  chrome.app.window.create('window.html', {
    "id": "thirstyWinId", 
    'bounds': {
      'width': 640,
      'height': 480
    }
  });
});

chrome.app.runtime.onRestarted.addListener(function() {
  console.log("on restarted event, arguments " + arguments);
  console.flush();
});

/* 

chrome.runtime events 
http://developer.chrome.com/extensions/runtime

onStartup
onInstalled
onSuspend
onSuspendCanceled
onUpdateAvailable
onBrowserUpdateAvailable
onConnect
onConnectExternal
onMessage
onMessageExternal
onRestartRequired

*/


chrome.runtime.onStartup.addListener(function() { 
console.log("on start up event, arguments " + arguments);
});

chrome.runtime.onInstalled.addListener(function() { 
// chrome.storage.local.set(object items, function callback);
// from https://developer.chrome.com/apps/storage#property-sync
// chrome.storage.sync
// chrome.storage.local	
// chrome.storage.managed	
console.log("onInstalled event, arguments " + arguments);
});

chrome.runtime.onSuspend.addListener(function() { 
// Do some simple clean-up tasks.
console.log("onSuspend event, arguments " + arguments);
});

chrome.runtime.onSuspendCanceled.addListener(function() { 
console.log("onSuspendCanceled event, arguments " + arguments);
});

chrome.runtime.onUpdateAvailable.addListener(function() { 
console.log("onUpdateAvailable event, arguments " + arguments);
});

chrome.runtime.onBrowserUpdateAvailable.addListener(function() { 
console.log("onBrowserUpdateAvailable event, arguments " + arguments);
});

chrome.runtime.onConnect.addListener(function() { 
console.log("onConnect event, arguments " + arguments);
});

chrome.runtime.onConnectExternal.addListener(function() { 
console.log("onConnectExternal event, arguments " + arguments);
});

chrome.runtime.onMessage.addListener(function() { 
console.log("on Message, arguments " + arguments);
});

chrome.runtime.onMessageExternal.addListener(function() { 
console.log("on MessageExternal event, arguments " + arguments);
});

chrome.runtime.onRestartRequired.addListener(function() { 
console.log("on onRestartRequired event, arguments " + arguments);
});



// storage example
/* Save it using the Chrome extension storage API.
chrome.storage.sync.set({'value': theValue}, function() {
	// Notify that we saved.
	message('Settings saved');
});
*/