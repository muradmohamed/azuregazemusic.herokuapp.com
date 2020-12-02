const mongoose = require("mongoose");
const Album = require("../models/album");

mongoose.connect("mongodb://localhost:27017/AzureGazeMusic", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedAlbum = [
    {
        name: "cold-morning",
        album_type: "EP",
        tracks: [
            {
                title: "walking through the cool morning breeze",
                track_number: 1,
            },
            {
                title: "met her at the station",
                track_number: 2,
            },
        ],
    },
    {
        name: "waterfall",
        album_type: "Single",
        tracks: [
            {
                title: "waterfall",
                track_number: 1,
            },
        ],
    },
    {
        name: "city-night-walk",
        album_type: "EP",
        tracks: [
            {
                title: "city night walk",
                track_number: 1,
            },
            {
                title: "on the way home",
                track_number: 2,
            },
            {
                title: "suddenly sleepy",
                track_number: 3,
            },
        ],
    },
    {
        name: "springtime",
        album_type: "Single",
        tracks: [
            {
                title: "springtime",
                track_number: 1,
            },
        ],
    },
    {
        name: "wander",
        album_type: "EP",
        tracks: [
            {
                title: "wander",
                track_number: 1,
            },
            {
                title: "pluie de la ville",
                track_number: 2,
            },
        ],
    },
    {
        name: "sleep-deprived",
        album_type: "EP",
        tracks: [
            {
                title: "sleep deprived",
                track_number: 1,
            },
        ],
    },
];

const seedDB = async () => {
    await Album.deleteMany({});
    for (let album of seedAlbum) {
        const music = new Album({
            name: album.name,
            album_type: album.album_type,
            tracks: album.tracks,
        });
        await music.save();
    }
};

seedDB().then(() => mongoose.connection.close());