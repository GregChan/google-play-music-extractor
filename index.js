let listSongs = function(dbName) {
  let thing = "";
  let request = (window.indexedDB.open(dbName).onsuccess = function(event) {
    let db = event.target.result;
    const body = document.body;
    body.innerHTML = "";
    body.style.cssText = "overflow: scroll;";
    db
      .transaction("tracks")
      .objectStore("tracks")
      .getAllKeys().onsuccess = function(event) {
      event.target.result.forEach(function(id) {
        db
          .transaction("tracks")
          .objectStore("tracks")
          .get("" + id).onsuccess = function(event) {
          if (!event.target.result) {
            return;
          }

          const tracks = JSON.parse(event.target.result);

          const ids = Object.keys(tracks);

          ids.forEach(function(id) {
            const track = tracks[id];
            if (track[29] !== 7) {
              return;
            }

            const row = track[1] + "|" + track[3] + "|" + track[4];
            const paragraph = document.createElement("p");
            const node = document.createTextNode(row);
            paragraph.appendChild(node);

            body.appendChild(paragraph);
          });
        };
      });
    };
  });
};

listSongs("music_12127027415922016482");
