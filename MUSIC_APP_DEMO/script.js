document.addEventListener("DOMContentLoaded", () => {
    const musicData = {
        "tracks": {
            "items": [
                {
                    "album": {
                        "images": [
                            {
                                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
                            }
                        ],
                        "name": "Album Name"
                    },
                    "artists": [
                        {
                            "name": "Artist Name"
                        }
                    ],
                    "name": "Track Name",
                    "preview_url": "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17"
                }
            ]
        }
    };

    const trackList = document.getElementById('track-list');
    const audio = document.getElementById('audio');
    const trackTitle = document.getElementById('track-title');
    const audioSource = document.getElementById('audio-source');
    const albumArt = document.getElementById('album-art');

    const tracks = musicData.tracks.items;

    tracks.forEach(track => {
        const li = document.createElement('li');
        li.textContent = `${track.artists[0].name} - ${track.name}`;
        li.addEventListener('click', () => {
            trackTitle.textContent = `${track.artists[0].name} - ${track.name}`;
            audioSource.src = track.preview_url;
            albumArt.src = track.album.images[0].url;
            audio.load();
            audio.play();
        });
        trackList.appendChild(li);
    });
});

