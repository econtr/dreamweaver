import useSWR from 'swr';
import { useEffect, useState } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json());

const LastFmText = () => {
	const { data: lastTrack, error } = useSWR('/api/lastplayed', fetcher, {refreshInterval: 10000});
	const [loadingEllipsis, setLoadingEllipsis] = useState('.');

	useEffect(() => {
		const interval = setInterval(() => {
			setLoadingEllipsis(prev => (prev.length < 3 ? prev + '.' : '.'));
		}, 500);

		return () => clearInterval(interval);
	}, []);

	if (error) return <div>Failed to load</div>;
	if (!lastTrack) return <div>Loading{loadingEllipsis}</div>;

	return (
		<div>
			<img
				id="lastFMImg"
				src={lastTrack.albumArt}
				alt="Album Art"
			/>
			<div>
				<div className='lastFM-title'>Listenting to: {lastTrack.trackName} by {lastTrack.artist}</div>
				<div id="lastFMAlbum">Album: {lastTrack.album}</div>
				<div className="lastFM-link">
					<a id-= "lastFMlink" href={lastTrack.url} target="_blank" rel="noreferrer"> View on Last.fm</a>
				</div>
			</div>
		</div>
	);
};

export default LastFmText;