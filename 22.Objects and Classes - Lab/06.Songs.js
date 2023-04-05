function songs(arr) {
    let numSongs = parseInt(arr[0]);
    let typeList = arr.pop();
    
    for (let i = 1; i <= numSongs; i++) {
      let [type, name] = arr[i].split('_');
      if (typeList === 'all' || type === typeList) {
        console.log(name);
      }
    }
}
 

function songs(input) {
class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let n = input.shift();
  let type = input.pop();
  
  let songs = input.map((songString) => {
    let [typeList, name, time] = songString.split('_');
    return new Song(typeList, name, time);
  });
  for (let song of songs) {
    if (type === 'all' || song.typeList === type) {
      console.log(song.name);
    }
  }
}
 
 
function songs(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = arr.shift();
    let typeOfList = arr.pop();
    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (typeOfList === 'all') {
        songs.forEach(x => console.log(x.name));
    } else {
        let filtered = songs.filter(x => x.type === typeOfList);
        filtered.forEach(x => console.log(x.name));
    }
}

songs([3,

  'favourite_DownTown_3:14',
  
  'favourite_Kiss_4:16',
  
  'favourite_Smooth Criminal_4:01',
  
  'favourite'])

songs([4,

  'favourite_DownTown_3:14',
  
  'listenLater_Andalouse_3:24',
  
  'favourite_In To The Night_3:58',
  
  'favourite_Live It Up_3:48',
  
  'listenLater'])

songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])