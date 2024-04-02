import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const LastFmText = () => {
	const { data: lastTrack, error } = useSWR('/api/lastplayed', fetcher, {refreshInterval: 10000});

	if (error) return <div>Failed to load</div>;
	if (!lastTrack) return <div>Loading...</div>;

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