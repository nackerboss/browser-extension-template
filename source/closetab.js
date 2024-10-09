chrome.tabs.getCurrent((tabs)=>{
    chrome.tabs.remove(tabs.id)
})