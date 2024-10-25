const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
var present = true
chrome.action.onClicked.addListener(()=>{
    chrome.tabs.create(
        {
            url:"http://186.186.0.1/login"
        }
    )
})
chrome.storage.session.set({"close":true})
chrome.tabs.onCreated.addListener(function(tab1) {
    chrome.tabs.onUpdated.addListener(async function(tabId, changeInfo, tab) {
            await wait(100)
            let data = await chrome.storage.session.get("close")
            if(tab.url.includes("wi-mesh.com")&&data.close&&present) {
                data.close=false;
                present = false
                console.log("new ss")
                chrome.tabs.remove(tab.id,async ()=>{
                    chrome.storage.session.set({"close":false})
                for (let index = 0; index < 15; index++) {
                    console.log((index)+" Phút")
                    await wait(60001)
                }
                console.log("15 Phút")
                chrome.tabs.create(
                    {
                        url:"http://186.186.0.1/login"
                    },()=>{present = true
                        chrome.storage.session.set({"close":true})}
                )
                });
                

                
            }
            
    });
});
// navigator.connection.onchange = ()=>{
//     console.log("wifi?")
// }