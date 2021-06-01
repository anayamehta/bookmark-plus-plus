chrome.runtime.onMessage.addListener(function (request, sender, sendResponse){
    let url = ""
    //alert(request)
    // chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs){
    //     url = tabs[0].url;
    // })
    console.log(request)
    sendResponse({
        link: request.url,
        title: request.title
    })
})

