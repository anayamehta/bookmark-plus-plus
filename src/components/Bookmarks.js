import React, { createElement, useState } from 'react';

    /*global chrome*/
function Bookmarks() {
    var bookmarksArr = [];
    // const [bookmarks, setBookmarks] = useState(bookmarksArr)
    //var items = [{"url":"www.google.com"}, {"url":"www.youtube.com"}];
    chrome.storage.sync.get(function(items){
        items.data.map((bookmark) => {
            bookmarksArr.push(bookmark);
            console.log("bookmark in sync" + JSON.stringify(bookmark))
        });
    })
    console.log("bookmark array after mapping once" + JSON.stringify(bookmarksArr))
    return (
        // <div className="bookmarks">
        //    {chrome.storage.sync.get(function(items){
        //         items.data.map((bookmark) => {
        //             return (<div><h1>{bookmark.url}</h1></div>);
        //         });
        //     })}
        // </div>
        <div className="bookmarks">
            {console.log(bookmarksArr)}
            {bookmarksArr.map((bookmark) => {
                console.log("reached")
                return (<div><h1>{bookmark.url}</h1></div>);
            })}
        </div>
    )
}



export default Bookmarks;