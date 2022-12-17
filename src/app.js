import  ffmetadata from "ffmetadata"

// Set path to ffmpeg - optional if in $PATH or $FFMPEG_PATH
ffmetadata.setFfmpegPath("/path/to/ffmpeg");

// Read song.mp3 metadata
ffmetadata.read("song.mp3", function(err, data) {
	if (err) console.error("Error reading metadata", err);
	else console.log(data);
});

// Set the artist for song.mp3
var data = {
  artist: "Me",
};
ffmetadata.write("song.mp3", data, function(err) {
	if (err) console.error("Error writing metadata", err);
	else console.log("Data written");
});