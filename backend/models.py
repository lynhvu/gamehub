from flask import Flask, Response
import json

"""Company Data"""

companyData = [
    {
        "id": 0,
        "name": "Naughty Dog",
        "description": "Established in 1984, Naughty Dog is one of the most successful and prolific game development studios in the world and a flagship first-party studio within PlayStation Studios. From creating the iconic Crash Bandicoot and Jak and Daxter series to modern franchises like Uncharted and The Last of Us, Naughty Dog is responsible for some of the most critically acclaimed and commercially successful games on Sony’s PlayStation platforms. Through its use of cutting-edge technology and evocative, character-driven storytelling, Naughty Dog has received hundreds of industry and media awards, while developing a passionate fan base of millions of players around the globe.",
        "location": "United States",
        "year": "1984",
        "rating": 85,
        "genre": "Adventure",
        "games": [
            "Uncharted 2: Among Thieves - Limited Edition Collector's Box",
            "The Last of Us Remastered",
            "The Last of Us",
            "The Last of Us Part II",
            "Uncharted 4: A Thief's End",
            "Uncharted: Legacy of Thieves Collection",
            "Uncharted: The Nathan Drake Collection - Special Edition",
            "Uncharted 3 Drake's Deception - Game of the Year Edition",
            "Uncharted 2: Among Thieves",
        ],
        "img": "https://images.igdb.com/igdb/image/upload/t_logo_med/bcpeptiqicy9g0gn4nur.png",
    },
    {
        "id": 1,
        "name": "Obsidian Entertainment",
        "description": "Obsidian Entertainment is an American video game developer based in Irvine, California. Former employees of Black Isle Studios founded it. The studio is well-known for their critically acclaimed RPGs such as Pillars of Eternity series, Star Wars Knights of the Old Republic II: The Sith Lords and Fallout New Vegas. Obsidian’s projects often use well-established franchises as a setting. The first two projects developed by the studio were sequels to Star Wars: Knights of the Old Republic and Neverwinter Nights. In 2014 Ubisoft released South Park: The Stick of Truth developed by Obsidian. The game was an RPG based on South Park franchise. It was a commercial success with more than 5 million copies sold worldwide in two years and was well received by critics, players, and fans of the show alike. The developer also created several games using their original IPs: Alpha Protocol, Pillars of Eternity series and Tyranny all of which were either RPGs or included role-playing elements in gameplay.",
        "location": "United States",
        "year": "2003",
        "rating": 79,
        "genre": "Role Playing",
        "games": [
            "Fallout: New Vegas - Ultimate Edition",
            "Star Wars: Knights of the Old Republic II - The Sith Lords",
            "Fallout: New Vegas",
            "Neverwinter Nights 2: Mask of the Betrayer",
            "Neverwinter Nights 2: Platinum",
            "South Park: The Stick of Truth",
            "Tyranny",
            "Neverwinter Nights 2",
            "Fallout: New Vegas - Old World Blues",
        ],
        "img": "https://images.igdb.com/igdb/image/upload/t_logo_med/cl1my.png",
    },
    {
        "id": 2,
        "name": "Valve Corporation",
        "description": "Valve's debut title, Half-Life, was released in 1998. It won more than 50 game of the year awards, and PC Gamer even called it the Best PC Game Ever. Since then, we've released dozens of titles that changed the world. Today, millions of people play our games every day.",
        "location": "United States",
        "year": "1996",
        "rating": 77,
        "genre": "Puzzle",
        "games": [
            "Half-Life: Alyx",
            "Portal 2",
            "Half-Life 2",
            "The Orange Box",
            "Half-Life",
            "Half-Life 2: Episode Two",
            "Portal",
            "Portal: Still Alive",
            "Counter Strike",
        ],
        "img": "https://images.igdb.com/igdb/image/upload/t_logo_med/cl2he.png",
    },
]

"""Game Data"""


gamesData = [
    {
        "id": 0,
        "name": "Portal",
        "score": 90,
        "description": "Silent template for your adventures, Chell, wakes up in a testing facility. She's a subject of experiments on instant travel device, supervised by snarky and hostile GLaDOS. Players will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gun™), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling.",
        "genre": ["Adventure", "Puzzle"],
        "releaseDate": "Oct 9, 2007",
        "developer": "Valve Corporation",
        "platforms": "PC, macOS, Linux, Xbox 360, PlayStation 3, Android",
        "videos": [
            "https://media.rawg.io/media/stories/8a1/8a17d3fc984d01379a83338b2d753c37.mp4"
        ],
        "pictures": [
            "https://media.rawg.io/media/resize/420/-/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg",
            "https://media.rawg.io/media/resize/420/-/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg",
            "https://media.rawg.io/media/resize/420/-/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg",
        ],
    },
    {
        "id": 1,
        "name": "The Last of Us",
        "score": 95,
        "description": "The population of the Earth almost disappeared as a result of a pandemic caused by a mutated fungus. The disease causes irreversible changes in the human body, a person loses his mind and behaves aggressively, like a zombie. Civilization no longer exists, few survivors live in isolation under the protection of the military. Cities outside the zones are dangerous ruins inhabited by infected people and people who have almost lost humanity.",
        "genre": ["Action", "Adventure"],
        "releaseDate": "Jun 14, 2013",
        "developer":"Naughty Dog",
        "platforms": "Playstation 3, Playstation 4",
        "videos": [
            "https://media.rawg.io/media/stories/511/5112442e0722abb31eda4ea97594f4f6.mp4"
        ],
        "pictures": [
            "https://media.rawg.io/media/resize/420/-/screenshots/e58/e5851e0c9b08172369dc1a1814b1c275.jpg",
            "https://media.rawg.io/media/resize/420/-/screenshots/4a8/4a8bc73ffc37e6794fd962736d0a5436.jpg",
            "https://media.rawg.io/media/resize/420/-/screenshots/fd5/fd5e75708c5d123519f5329344d0a376.jpg",
        ],
    },
    {
        "id": 2,
        "name": "Fallout: New Vegas",
        "score": 84,
        "description": "Fallout: New Vegas follows the Courier as he's ambushed by a gang lead by Benny, stealing a Platinum Chip and heavily wounded, practically left for dead. As he wakes up, he minds himself in the company of Doc Mitchell who saved our protagonist and patches him up. This section of the game is given for customising your characters, picking traits and the look of the main hero before embarking on his journey to retrieve Platinum Chip.",
        "genre": ["Action", "Shooter", "Adventure", "RPG"],
        "releaseDate": "Oct 19, 2010",
        "developer": "Obsidian Entertainment",
        "platforms": "Xbox One, Playstation 4, Playstation 3, PC, Xbox 360",
        "videos": [
            "https://media.rawg.io/media/stories/46d/46da17d05563581bfe2387bbb4d32ee6.mp4"
        ],
        "pictures": [
            "https://media.rawg.io/media/resize/420/-/screenshots/5b3/5b39206a3b241688fbd69467d75151b8.jpg",
            "https://media.rawg.io/media/resize/420/-/screenshots/7c5/7c5083ee282a2ea3d6248361592cf8af.jpg",
            "https://media.rawg.io/media/resize/420/-/screenshots/286/2861a20b67d61263b5b790cb1ab5e330.jpg",
        ],
    },
]

"""Genre Data"""

genresData = [
    {
        "id": 0,
        "name": "Action",
        "num": 153616,
        "games": [
            "Elden Ring",
            "Monster Hunter: World",
            "Super Smash Bros.",
            "For Honor",
            "Sekiro: Shadows Die Twice"
        ],
        "companies": [
            "Capcom",
            "Nintendo",
            "Ubisoft",
            "Bandai Namco"
        ],
        "description": "An action game is a video game genre that emphasizes physical challenges, including hand–eye coordination and reaction-time. The genre includes a large variety of sub-genres, such as fighting games, beat 'em ups, shooter games, and platform games. Multiplayer online battle arena and some real-time strategy games are also considered action games.",
        "themes": "physical combats, quick reflexes, abilities and specials, obstables and enemies",
        "icon": "http://www.hectick.net/uploads/1/3/0/5/13050649/1895758_orig.png",
        "pictures": [
            "https://cdn.mos.cms.futurecdn.net/fNyjvMw8evGHzbri3GWGRj-480-80.jpg",
            "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_500/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/screenshot-gallery/screenshot01",
            "https://www.gannett-cdn.com/presto/2019/07/31/PREN/a7150673-4ccd-40d6-bdc4-76fa7cc4bf0f-Quest_Blizzard_Blitz_-_Barioth_Multiplayer1.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp"
        ]
    },
    {
        "id": 1,
        "name": "Adventure",
        "num": "116447",
        "games": [
            "Red Dead Redemption 2",
            "Grand Theft Auto V",
            "The Last of Us",
            "Assassin's Creed: Valhalla",
            "The Legend of Zelda: Breath of the Wild"
        ],
        "companies": [
            "Rockstar Games",
            "Sony Interactive Entertainment",
            "Naughty Dog"
        ],
        "description": "An adventure game is a video game in which the player assumes the role of a protagonist in an interactive story driven by exploration and/or puzzle-solving. The genre's focus on story allows it to draw heavily from other narrative-based media, literature and film, encompassing a wide variety of literary genres.",
        "themes": "exploration, gathering and looting, stories and settings",
        "icon": "http://www.hectick.net/uploads/1/3/0/5/13050649/1638940_orig.png",
        "pictures": [
            "https://www.nme.com/wp-content/uploads/2021/01/Red-Dead-Redemption-Credit-Rockstar-Games-2@2000x1270-696x442.jpg",
            "https://s1.gaming-cdn.com/images/products/2616/616x353/the-legend-of-zelda-breath-of-the-wild-switch-switch-game-nintendo-eshop-europe-cover.jpg?v=1649856929",
            "https://www.playstationlifestyle.net/assets/uploads/2022/06/The-Last-of-Us-Part-1-filesize-and-DualSense-features.png"
        ]
    },
    {
        "id": 2,
        "name": "Puzzle",
        "num": 86556,
        "games": [
            "Portal",
            "Angry Birds",
            "Inside",
            "Little Nightmare",
            "Human Resource Machine"
        ],
        "companies": [
            "Valve Corporation",
            "Playdead",
            "Tomorrow Corporation"
        ],
        "description": "Puzzle video games make up a broad genre of video games that emphasize puzzle solving. The types of puzzles can test problem-solving skills, including logic, pattern recognition, sequence solving, spatial recognition, and word completion.",
        "themes": "problem solving, physics, riddles, hidden objects",
        "icon": "http://www.hectick.net/uploads/1/3/0/5/13050649/8037402_orig.png",
        "pictures": [
            "https://i.guim.co.uk/img/static/sys-images/Technology/Pix/pictures/2011/4/15/1302883732465/Portal-2-007.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=fd0ce746e36694739ec0966ba82f6b79",
            "https://www.gamegrin.com/assets/Uploads/2019/12/17/_resampled/resizedimage640359-EMBumtOUEAAJxVQ.jpg",
            "https://store-images.s-microsoft.com/image/apps.63704.65516361464340384.2b1af344-4937-4a1f-af6f-8e009cbf5afa.ac524205-8ed4-4282-beaa-593d7ad39b94?q=90&w=480&h=270"
        ]
    },
    {
        "id": 3,
        "name": "Role Playing",
        "num": 47013,
        "games": [
            "Cyperpunk 2077",
            "The Witcher 3: Wild Hunt",
            "The Elder Scrolls V: Skyrim",
            "Final Fantasy XV",
            "Fallout: New Vegas"
        ],
        "companies": [
            "CD Projekt",
            "Bethesda Game Studios",
            "Sqaure Enix"
        ],
        "description": "A role-playing game is a game in which players assume the roles of characters in a fictional setting. Players take responsibility for acting out these roles within a narrative, either through literal acting or through a process of structured decision-making regarding character development.",
        "themes": "fiction, narration, decision-making, character development",
        "icon": "http://www.hectick.net/uploads/1/3/0/5/13050649/2096188_orig.png",
        "pictures": [
            "https://www.cyberpunk.net/build/images/media/screenshots/Cyberpunk2077_Love_this_town_RGB-en-bc9e7b03.jpg",
            "https://preview.redd.it/p72tsf53pvk51.png?width=640&crop=smart&auto=webp&s=f025836bfb787ffdb5356c0cd978eacf9fee731e",
            "https://cdn.jwplayer.com/v2/media/pJuRvmCU/poster.jpg?width=720"
        ]
    },
    {
        "id": 4,
        "name": "Shooter",
        "num": "53203",
        "games": [
            "Counter-Strike: Global Offensive",
            "Apex Legends",
            "Tom Clancy's Rainbow Six Siege",
            "Overwatch 2",
            "Call of Duty",
            "Back 4 Blood"
        ],
        "companies": [
            "Respawn Entertainment",
            "Ubisoft",
            "Blizzard Entertainment",
            "Activision"
        ],
        "description": "Shooter video games or shooters are a subgenre of action video games where the focus is almost entirely on the defeat of the character's enemies using the weapons given to the player. Usually these weapons are firearms or some other long-range weapons, and can be used in combination with other tools such as grenades for indirect offense, armor for additional defense, or accessories such as telescopic sights to modify the behavior of the weapons. A common resource found in many shooter games is ammunition, armor or health, or upgrades which augment the player character's weapons.",
        "themes": "guns, grenades, spatial awareness, reflexes, teamwork",
        "icon": "http://www.hectick.net/uploads/1/3/0/5/13050649/5191714_orig.png",
        "pictures": [
            "https://www.nme.com/wp-content/uploads/2020/12/120420-CS-GO-Operation-Broken-Fang-696x442.jpg",
            "https://www.denofgeek.com/wp-content/uploads/2022/04/Overwatch-2-2.jpg?resize=768%2C432",
            "https://store-images.s-microsoft.com/image/apps.27881.14284165171924425.328fdc67-fafc-4929-b10f-b1bc44a36c07.c0b3f5d8-f2b7-41db-9b1b-0c1ddb375729?q=90&w=480&h=270"
        ]
    }
]

# creating our Flask
api = Flask(__name__, static_folder="../build", static_url_path='/')

@api.route('/')
def index():
    """Index function for home page."""
    return "hellooooooo"


@api.route("/compdata/")
def companies():
    """Companies function for transferring company data"""
    data = json.dumps(companyData)
    return Response(data)


@api.route("/gamedata/")
def games():
    """Games function for transferring game data"""
    data = json.dumps(gamesData)
    return Response(data)


@api.route("/genresdata/")
def genres():
    """Genres function for transferring genre data"""
    data = json.dumps(genresData)
    return Response(data)


if __name__ == "__main__":
    api.run()
