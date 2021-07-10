import React, { useEffect, useState } from "react";

/*global chrome*/
function Bookmarks() {
  var bookmarksArr = [];
  const [bookmarks, setBookmarks] = useState([]);
  //var items = [{"url":"www.google.com"}, {"url":"www.youtube.com"}];
  useEffect(() => {
    chrome.storage.sync.get(function (items) {
      items.data.map((bookmark) => {
        var bookmarkRow = (
          <div>
            {" "}
            <h1> {bookmark.url}</h1>j
          </div>
        );
        bookmarksArr.push(bookmarkRow);
        // console.log("bookmark in sync" + JSON.stringify(bookmark));
      });
      setBookmarks(bookmarksArr);
    });
  });
  //   console.log("bookmark array after mapping once" + JSON.stringify(bookmarks));
  return (
    // <div className="bookmarks">
    //    {chrome.storage.sync.get(function(items){
    //         items.data.map((bookmark) => {
    //             return (<div><h1>{bookmark.url}</h1></div>);
    //         });
    //     })}
    // </div>
    <div className="bookmarks">
      {
        /* {console.log(bookmarksArr)}
            {bookmarksArr.map((bookmark) => {
                console.log("reached")
                return (<div><h1>{bookmark.url}</h1></div>);
            })} */ bookmarks
      }
    </div>
  );
}

export default Bookmarks;
