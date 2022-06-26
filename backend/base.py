from flask import Flask, Response
import json

companyData = [{ "name": "Naughty Dog",
                 "description": "Established in 1984, Naughty Dog is one of the most successful and prolific game development studios in the world and a flagship first-party studio within PlayStation Studios. From creating the iconic Crash Bandicoot and Jak and Daxter series to modern franchises like Uncharted and The Last of Us, Naughty Dog is responsible for some of the most critically acclaimed and commercially successful games on Sony’s PlayStation platforms. Through its use of cutting-edge technology and evocative, character-driven storytelling, Naughty Dog has received hundreds of industry and media awards, while developing a passionate fan base of millions of players around the globe.",
                 "location": "United States",
                 "year": "1984",
                 "genre": "Adventure",
                 "games": ["Uncharted 2: Among Thieves - Limited Edition Collector's Box",
                           "The Last of Us Remastered",
                           "The Last of Us",
                           "The Last of Us Part II",
                           "Uncharted 4: A Thief's End",
                           "Uncharted: Legacy of Thieves Collection",
                           "Uncharted: The Nathan Drake Collection - Special Edition",
                           "Uncharted 3 Drake's Deception - Game of the Year Edition",
                           "Uncharted 2: Among Thieves"],
                 "img": "https://images.igdb.com/igdb/image/upload/t_logo_med/bcpeptiqicy9g0gn4nur.png"},
               { "name": "Obsidian Entertainment",
                 "description": "Obsidian Entertainment is an American video game developer based in Irvine, California. Former employees of Black Isle Studios founded it. The studio is well-known for their critically acclaimed RPGs such as Pillars of Eternity series, Star Wars Knights of the Old Republic II: The Sith Lords and Fallout New Vegas. Obsidian’s projects often use well-established franchises as a setting. The first two projects developed by the studio were sequels to Star Wars: Knights of the Old Republic and Neverwinter Nights. In 2014 Ubisoft released South Park: The Stick of Truth developed by Obsidian. The game was an RPG based on South Park franchise. It was a commercial success with more than 5 million copies sold worldwide in two years and was well received by critics, players, and fans of the show alike. The developer also created several games using their original IPs: Alpha Protocol, Pillars of Eternity series and Tyranny all of which were either RPGs or included role-playing elements in gameplay.",
                 "location": "United States",
                 "year": "2003",
                 "genre": "Role-Playing (RPG)",
                 "games": ["Fallout: New Vegas - Ultimate Edition",
                           "Star Wars: Knights of the Old Republic II - The Sith Lords",
                           "Fallout: New Vegas",
                           "Neverwinter Nights 2: Mask of the Betrayer",
                           "Neverwinter Nights 2: Platinum",
                           "South Park: The Stick of Truth",
                           "Tyranny",
                           "Neverwinter Nights 2",
                           "Fallout: New Vegas - Old World Blues"],
                 "img": "https://images.igdb.com/igdb/image/upload/t_logo_med/cl1my.png"},
               { "name": "Valve Corporation",
                 "description": "Valve's debut title, Half-Life, was released in 1998. It won more than 50 game of the year awards, and PC Gamer even called it the Best PC Game Ever. Since then, we've released dozens of titles that changed the world. Today, millions of people play our games every day.",
                 "location": "United States",
                 "year": "1996",
                 "genre": "Adventure",
                 "games": ["Half-Life: Alyx",
                           "Portal 2",
                           "Half-Life 2",
                           "The Orange Box",
                           "Half-Life",
                           "Half-Life 2: Episode Two",
                           "Portal",
                           "Portal: Still Alive",
                           "Counter Strike"],
                 "img": "https://images.igdb.com/igdb/image/upload/t_logo_med/cl2he.png"}]

membersData = [{ "name": "Linh Vu",
    "year": "Junior",
    "major": "Computer Science & Math",
    "skills": "Project management, Full stack web development",
    "picture": "../StyleAndImg/logo2.png"
},
{
    "name": "1",
    "year": "1",
    "major": "1",
    "skills": "1",
    "picture": "../StyleAndImg/logo2.png"
},
{
    "name": "2",
    "year": "2",
    "major": "2",
    "skills": "2",
    "picture": "../StyleAndImg/logo2.png"
},
{
    "name": "3",
    "year": "3",
    "major": "3",
    "skills": "3",
    "picture": "../StyleAndImg/logo2.png"
},
{
    "name": "4",
    "year": "4",
    "major": "4",
    "skills": "4",
    "picture": "../StyleAndImg/logo2.png"
},
{
    "name": "5",
    "year": "5",
    "major": "5",
    "skills": "5",
    "picture": "../StyleAndImg/logo2.png"
}
]

gamesData = [
    {
        "id": 0,
        "name": "Portal",
        "score": 90,
        "description": "Silent template for your adventures, Chell, wakes up in a testing facility. She's a subject of experiments on instant travel device, supervised by snarky and hostile GLaDOS. Players will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gun™), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling.",
        "genre": "Adventure, Puzzle",
        "releaseDate": "Oct 9, 2007",
        "developer": "Valve Corporation",
        "platforms": "PC, macOS, Linux, Xbox 360, PlayStation 3, Android",
        "videos": ["https://media.rawg.io/media/stories/8a1/8a17d3fc984d01379a83338b2d753c37.mp4"],
        "pictures": ["https://media.rawg.io/media/resize/420/-/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg", "https://media.rawg.io/media/resize/420/-/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg", "https://media.rawg.io/media/resize/420/-/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"]
    },
    {
        "id": 1,
        "name": "The Last of Us",
        "score": 95,
        "description": "The population of the Earth almost disappeared as a result of a pandemic caused by a mutated fungus. The disease causes irreversible changes in the human body, a person loses his mind and behaves aggressively, like a zombie. Civilization no longer exists, few survivors live in isolation under the protection of the military. Cities outside the zones are dangerous ruins inhabited by infected people and people who have almost lost humanity.",
        "genre": "Action, Adventure",
        "releaseDate": "Jun 14, 2013",
        "developer": "Naughty Dog",
        "platforms": "Playstation 3, Playstation 4",
        "videos": ["https://media.rawg.io/media/stories/511/5112442e0722abb31eda4ea97594f4f6.mp4"],
        "pictures": ["https://media.rawg.io/media/resize/420/-/screenshots/e58/e5851e0c9b08172369dc1a1814b1c275.jpg", "https://media.rawg.io/media/resize/420/-/screenshots/4a8/4a8bc73ffc37e6794fd962736d0a5436.jpg", "https://media.rawg.io/media/resize/420/-/screenshots/fd5/fd5e75708c5d123519f5329344d0a376.jpg"]
    },
    {
        "id": 2,
        "name": "Fallout: New Vegas",
        "score": 84,
        "description": "Fallout: New Vegas follows the Courier as he's ambushed by a gang lead by Benny, stealing a Platinum Chip and heavily wounded, practically left for dead. As he wakes up, he minds himself in the company of Doc Mitchell who saved our protagonist and patches him up. This section of the game is given for customising your characters, picking traits and the look of the main hero before embarking on his journey to retrieve Platinum Chip.",
        "genre": "Action, Shooter, Adventure, RPG",
        "releaseDate": "Oct 19, 2010",
        "developer": "Obsidian Entertainment",
        "platforms": "Xbox One, Playstation 4, Playstation 3, PC, Xbox 360",
        "videos": ["https://media.rawg.io/media/stories/46d/46da17d05563581bfe2387bbb4d32ee6.mp4"],
        "pictures": ["https://media.rawg.io/media/resize/420/-/screenshots/5b3/5b39206a3b241688fbd69467d75151b8.jpg", "https://media.rawg.io/media/resize/420/-/screenshots/7c5/7c5083ee282a2ea3d6248361592cf8af.jpg", "https://media.rawg.io/media/resize/420/-/screenshots/286/2861a20b67d61263b5b790cb1ab5e330.jpg"]
    }
]

api = Flask(__name__)

@api.route('/profiles/')
def profiles():
    data = json.dump(membersData)
    return Response(data)

@api.route('/compdata/')
def companies():
    data = json.dumps(companyData)
    return Response(data)   

@api.route('/gamedata/')
def games():
    data = json.dumps(gamesData)
    return Response(data)

if __name__ == "__main__":
	api.run(host = "127.0.0.1", port = 5000)
