import React, { useEffect, useState } from 'react';

const LastFmText = () => {
	const [lastTrack, setLastTrack] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const responce = await fetch('/api/lastplayed');
			const text = await responce.text();
			console.log(text);

			try {
				const data = JSON.parse(text);
				setLastTrack(data);
			}
			catch (e) {
				console.error(e);
			}
		};
	
		fetchData();
	}, []);

	if (!lastTrack) {
		return <p>Loading...</p>;
	}

	return (
		<div>
			<img
				id="lastFMImg"
				src={lastTrack.albumArt}
				alt="Album Art"
			/>
			<div>
				<div className='lastFM-title'>Listenting to: {lastTrack.trackName} by {lastTrack.artist}</div>
				<div className="lastFM-link">
					<a id-= "lastFMlink" href={lastTrack.url} target="_blank" rel="noreferrer"> View on Last.fm</a>
				</div>
				<div id="lastFMAlbum">Album: {lastTrack.album}</div>
			</div>
		</div>
	);
};

export default LastFmText;