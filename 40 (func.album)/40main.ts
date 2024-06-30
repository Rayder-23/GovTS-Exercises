
//songs? -> ? makes it optional
function makeAlbum(artistName:string, albumName:string, songs?:number){
    let album: {artist:string, title:string, tracks?:number} = {        //object
        artist: artistName, 
        title: albumName,
    };
    
    if (songs !== undefined) {
        album.tracks = songs;
    }
    return album;
}


let alb1 = makeAlbum("Talha", "Two Tone", 14)
console.log(alb1)

let alb2 = makeAlbum("Ali", "Ali's Album")
console.log(alb2)


