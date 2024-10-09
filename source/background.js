chrome.action.onClicked.addListener(()=>{
    chrome.tabs.create(
        {
            url:"http://186.186.0.1/login"
        }
    )
})
chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
            if(tab.url.includes("https://wi-mesh.com/")) {
                chrome.tabs.remove(tab.id);
            }
    });
});