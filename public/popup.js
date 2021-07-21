// import { findByPlaceholderText } from "@testing-library/react"

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("add").addEventListener("click", onclick, false);
    function onclick() {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        // chrome.tabs.sendMessage(tabs[0].id, tabs[0], getInfo)
        // console.log("tabs[0] " + JSON.stringify(tabs[0]))
        var bookmarksArr = [];
        chrome.storage.sync.get(function (items) {
          items.data.map((bookmark) => {
            bookmarksArr.push(bookmark);
            //console.log("bookmark in sync" + JSON.stringify(bookmark))
          });
        });
        getInfo(tabs[0], bookmarksArr);
      });
    }

    //all bookmarks, should open up a seperate page
    document
      .getElementById("seeAll")
      .addEventListener("click", onclick3, false);
    function onclick3() {
      chrome.tabs.create({ url: "index.html" }); //build/index.html
    }

    //function that get's the link and title, also makes the form
    function getInfo(res, bookmarksArr) {
      //remove the add link button
      document.getElementById("add").remove();

      //url input, should auto fill for them
      const inputUrl = document.createElement("input");
      inputUrl.setAttribute("type", "url");
      inputUrl.setAttribute("id", "urlInput");
      console.log("this is res " + JSON.stringify(res));
      inputUrl.value = `${res.url}`;
      document.body.appendChild(inputUrl);
      const br1 = document.createElement("br");
      document.body.appendChild(br1);

      //title input
      const inputTitle = document.createElement("input");
      inputTitle.setAttribute("type", "text");
      inputTitle.setAttribute("id", "titleInput");
      inputTitle.value = `${res.title}`;

      // folder input field
      const inputFolder = document.createElement("input");
      inputFolder.setAttribute("type", "text");
      inputFolder.setAttribute("id", "folderName");
      document.body.appendChild(inputFolder);

      // select folder button
      const selectFolderButton = document.createElement("button");
      selectFolderButton.setAttribute("id", "selectFolderButton");
      //addFolderButton.setAttribute("onclick", "addFolderOnClick");
      selectFolderButton.innerHTML = "Select Folder";
      document.body.appendChild(selectFolderButton);
      document
        .getElementById("selectFolderButton")
        .addEventListener("click", selectFoldersOnClick, false);


      
    

     
      // add folder button
      const addFolderButton = document.createElement("button");
      addFolderButton.setAttribute("id", "addFolderButton");
      //addFolderButton.setAttribute("onclick", "addFolderOnClick");
      addFolderButton.innerHTML = "Add Folder";
      document.body.appendChild(addFolderButton);
      document
        .getElementById("addFolderButton")
        .addEventListener("click", addFolderOnClick, false);

      //inputTitle.setAttribute("placeholder", `${res.title}`);
      document.body.appendChild(inputTitle);
      const br2 = document.createElement("br");
      document.body.appendChild(br2);

      //tags input
      const inputTags = document.createElement("input");
      inputTags.setAttribute("type", "text");
      inputTags.setAttribute("id", "tagInput");
      inputTags.setAttribute("placeholder", "tags1, tags2, tags3");
      document.body.appendChild(inputTags);
      const br3 = document.createElement("br");
      document.body.appendChild(br3);

      //folder
      var myData = [
        {
          id: 0,
          title: "Item 1 ",
        },
        {
          id: 1,
          title: "Item 2",
          subs: [
            {
              id: 10,
              title: "Item 2-1",
            },
            {
              id: 11,
              title: "Item 2-2",
            },
            {
              id: 12,
              title: "Item 2-3",
            },
          ],
        },
        {
          id: 2,
          title: "Item 3",
        },
        // more data here
      ];

      const folderSelect = document.createElement("input");
      folderSelect.setAttribute("id", "folderSelect");
      folderSelect.setAttribute("type", "text");
      folderSelect.setAttribute("placeholder", "Move to...");

      // const folderSelectDiv = document.createElement("div")
      // folderSelectDiv.appendChild(folderSelect)
      // document.body.appendChild(folderSelectDiv)
      document.body.appendChild(folderSelect);

      var selectedFolder = $("#folderSelect").comboTree({
        source: myData,
        isMultiple: false,
        collapse: true,
      });

      console.log(selectedFolder.getSelectedNames());

      console.log(bookmarksArr);

      //submit button
      const submitButton = document.createElement("button");
      submitButton.setAttribute("id", "submit");
      submitButton.innerHTML = "Submit";
      document.body.appendChild(submitButton);
      document
        .getElementById("submit")
        .addEventListener("click", onclick2, false);
      const br4 = document.createElement("br");
      document.body.appendChild(br4);
      // $("#submit").css("background-color","red");
    }

    function selectFolderOnClick() {

    }

    function addFolderOnClick() {
      var currentTime = new Date();
      var uniqueId = Date.now();
      console.log(document.getElementById("folderSelect").value);
      var bookmarkFolder = {
        name: document.getElementById("folderName").value,
        // key: uniqueId,
        dateAdded: currentTime,
        type: "folder",
        children: []
      };
      //chrome.storage.sync.clear()
      chrome.storage.sync.get(function (items) {
        if (Object.keys(items).length > 0 && items.data) {
          // The data array already exists, add to it the new server and nickname
          
          items.data.push(bookmarkFolder);
        } else {
          // The data array doesn't exist yet, create it
          var bookmarkTree = {
            root: { 
              // dateAdded: currentTime,
              type: "root",
              children: [bookmarkFolder] 
            }
          }
          items.data = [bookmarkTree];
        }
        // Now save the updated items using set
        chrome.storage.sync.set(items, function () {
          console.log("Data successfully saved to the storage!");
        });
      });
      //clear everything but see all bookmarks page
      // add remove for the link?
      document.getElementById("folderName").remove();
      document.getElementById("addFolderButton").remove();
    }

    function onclick2() {
      var currentTime = new Date();
      var tagsList = document.getElementById("tagInput").value.split(",");
      //var timeFormat = currentTime.getMonth() + "/" + currentTime.getDate() + "/" + currentTime.getFullYear();
      var uniqueId = Date.now();
      console.log(document.getElementById("folderSelect").value);
      var bookmark = {
        title: document.getElementById("titleInput").value,
        url: document.getElementById("urlInput").value,
        key: uniqueId,
        timeCreated: currentTime,
        tags: tagsList,
      };
      //chrome.storage.sync.clear()
      chrome.storage.sync.get(function (items) {
        if (Object.keys(items).length > 0 && items.data) {
          // The data array already exists, add to it the new server and nickname
          items.data.push(bookmark);
        } else {
          // The data array doesn't exist yet, create it
          items.data = [bookmark];
        }
        // Now save the updated items using set
        chrome.storage.sync.set(items, function () {
          console.log("Data successfully saved to the storage!");
        });
      });
      //clear everything but see all bookmarks page
      // add remove for the link?
      document.getElementById("submit").remove();
      document.getElementById("titleInput").remove();
      document.getElementById("tagInput").remove();
    }
  },
  false
);
