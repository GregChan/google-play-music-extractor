let request = window.indexedDB.open('music_12127027415922016482').onsuccess = function(event) {
  let db = event.target.result;
  db.transaction('tracks')
    .objectStore('tracks')
    .getAllKeys()
    .onsuccess = function(event) {
      event.target.result.forEach(function(id) {
        db.transaction('tracks')
          .objectStore('tracks')
          .get('' + id)
          .onsuccess = function(event) {
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

              console.log(track);
              console.log(track[1], track[3], track[4]);
            });
          };
      });
    };
};
