// 1️⃣ Expanded Songs Array (Same songs, but now we control the output properly)
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Highway to Hell", artist: "AC/DC", genre: "Rock" },
    { title: "Superstition", artist: "Stevie Wonder", genre: "R&B" },
    { title: "Don't Stop Believin'", artist: "Journey", genre: "Rock" },
    { title: "Another One Bites the Dust", artist: "Queen", genre: "Rock" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "Starman", artist: "David Bowie", genre: "Rock" },
    { title: "Dancing Queen", artist: "ABBA", genre: "Pop" },
    { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
    { title: "I Heard It Through the Grapevine", artist: "Marvin Gaye", genre: "R&B" }
];

// 2️⃣ Assign Preferences to Guardians
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "Rock",
    "Groot": "R&B"
};

// 3️⃣ Generate Playlists Using `map()` and `.slice()`
function generatePlaylist(guardians, songs) {
    const playlistsDiv = document.getElementById("playlists");
    playlistsDiv.innerHTML = ""; // Clear existing content

    Object.entries(guardians).map(([guardian, genre]) => {
        let songLimit = 8; // Default max songs per playlist

        if (guardian === "Gamora") songLimit = 3; 
        if (guardian === "Groot") songLimit = 2;  

        const filteredSongs = songs.filter(song => song.genre === genre).slice(0, songLimit);

        // 4️⃣ Create Playlist Elements
        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");

        // Guardian's Name
        const title = document.createElement("h2");
        title.textContent = `${guardian}'s Playlist`;
        playlistDiv.appendChild(title);

        // List of Songs
        const songList = document.createElement("ul");
        filteredSongs.map(song => {
            const songItem = document.createElement("li");
            songItem.classList.add("song");

            // Song title with styling class
            const songTitle = document.createElement("span");
            songTitle.classList.add("song-title");
            songTitle.textContent = `${song.title}`;

            songItem.appendChild(songTitle);
            songItem.innerHTML += ` - ${song.artist}`;
            songList.appendChild(songItem);
        });

        playlistDiv.appendChild(songList);
        playlistsDiv.appendChild(playlistDiv);
    });
}

// 5️⃣ Run and Test the Function
generatePlaylist(guardians, songs);
