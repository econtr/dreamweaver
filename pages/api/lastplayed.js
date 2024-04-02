import fetch from 'node-fetch';

export default async function (req, res) {
	try {
		const apiKey = process.env.LASTFM_API_KEY; // api key from last.fm
		const username = "airwreck_"; // username of the last.fm account
		const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`);

		// pulls the json data from the response

		const data = await response.json(); // parse the json from the response
		const lastTrackData = data.recenttracks.track[0]; // get the first track from the array of tracks

		const lastTrack = {
			artist: lastTrackData.artist["#text"], // get the artist name
			trackName: lastTrackData.name, // get the track name
			album: lastTrackData.album["#text"], // get the album name
			url: lastTrackData.url,	// get the url of the track
			albumArt: lastTrackData.image[1]["#text"],
		};

		res.status(200).json(lastTrack);
	} catch (error) {
		res.status(500).json({ error: "Something went wrong" });
	}
};