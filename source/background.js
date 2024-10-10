const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
chrome.action.onClicked.addListener(()=>{
    chrome.tabs.create(
        {
            url:"http://186.186.0.1/login"
        }
    )
})
chrome.tabs.onCreated.addListener(function(tab) {
    let close = true
    chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
            await wait(100)
            if(tab.url.includes("wi-mesh.com")&&close) {
                close=false
                chrome.tabs.remove(tab.id);
                for (let index = 0; index < 15; index++) {
                    await wait(60001)
                    console.log((index+1)/15*100)
                }
                chrome.tabs.create(
                    {
                        url:"http://186.186.0.1/login"
                    }
                )
                
            }
            
    });
});
// navigator.connection.onchange = ()=>{
//     console.log("wifi?")
// }