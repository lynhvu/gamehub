# -------
# imports
# -------

from io import StringIO
from unittest import main, TestCase
from models import db, Company, Game, Genre
import requests


class TestModels (TestCase):
    # ----
    # read
    # ----

    # def test_index(self):
    #     self.assertEqual()

    # def test_profiles(elf):
    #     self.assertEqual()

    def test_company1(self):
        temp = db.session.query(Company).filter_by(id=2).one()
        self.assertEqual(temp.id, 2)
        self.assertEqual(str(temp.name), "Valve Corporation")
        self.assertEqual(
            str(temp.description),
            "Valve's debut title, Half-Life, was released in 1998. It won more than 50 game of the year awards, and PC Gamer even called it the Best PC Game Ever. Since then, we've released dozens of titles that changed the world. Today, millions of people play our games every day.",
        )
        self.assertEqual(str(temp.location), "United States")
        self.assertEqual(str(temp.year), "1996")
        # self.assertEqual(temp.num_games, 0)      # Could not find this info from models.py
        # TODO: not sure how to check for relationship
        self.assertEqual(
            str(temp.img),
            "https://images.igdb.com/igdb/image/upload/t_logo_med/cl2he.png",
        )
    
    def test_company2(self):
        temp = db.session.query(Company).filter_by(id=0).one()
        self.assertEqual(temp.id, 0)
        self.assertEqual(str(temp.name), "Naughty Dog")
        self.assertEqual(
            str(temp.description),
            "Established in 1984, Naughty Dog is one of the most successful and prolific game development studios in the world and a flagship first-party studio within PlayStation Studios. From creating the iconic Crash Bandicoot and Jak and Daxter series to modern franchises like Uncharted and The Last of Us, Naughty Dog is responsible for some of the most critically acclaimed and commercially successful games on Sony’s PlayStation platforms. Through its use of cutting-edge technology and evocative, character-driven storytelling, Naughty Dog has received hundreds of industry and media awards, while developing a passionate fan base of millions of players around the globe.",
        )
        self.assertEqual(str(temp.location), "United States")
        self.assertEqual(str(temp.year), "1984")
        # self.assertEqual(temp.num_games, 0)      # Could not find this info from models.py
        # TODO: not sure how to check for relationship
        self.assertEqual(
            str(temp.img),
            "https://images.igdb.com/igdb/image/upload/t_logo_med/bcpeptiqicy9g0gn4nur.png",
        )

    def test_game1(self):
        temp = db.session.query(Game).filter_by(id=1).one()
        self.assertEqual(temp.id, 1)
        self.assertEqual(str(temp.name), "The Last of Us")
        self.assertEqual(
            str(temp.description),
            "The population of the Earth almost disappeared as a result of a pandemic caused by a mutated fungus. The disease causes irreversible changes in the human body, a person loses his mind and behaves aggressively, like a zombie. Civilization no longer exists, few survivors live in isolation under the protection of the military. Cities outside the zones are dangerous ruins inhabited by infected people and people who have almost lost humanity.",
        )
        self.assertEqual(temp.score, 95)
        self.assertEqual(str(temp.released), "Jun 14, 2013")
        # self.assertEqual(temp.genre_id, )
        # self.assertEqual(temp.company_id, )
        # TODO: not sure how to check for genre_id, comp_id, pictures and platforms

    def test_game2(self):
        temp = db.session.query(Game).filter_by(id=0).one()
        self.assertEqual(temp.id, 0)
        self.assertEqual(str(temp.name), "Portal")
        self.assertEqual(
            str(temp.description),
            "Silent template for your adventures, Chell, wakes up in a testing facility. She's a subject of experiments on instant travel device, supervised by snarky and hostile GLaDOS. Players will have to complete the tests, room by room, expecting either reward, freedom or more tests. By using the gun, that shoots portals (Portal-Gun™), players will move blocks, travel great distance quickly and learn about your current situation, which is unraveled through environmental storytelling.",
        )
        self.assertEqual(temp.score, 90)
        self.assertEqual(str(temp.released), "Oct 9, 2007")

    def test_genre1(self):
        temp = db.session.query(Genre).filter_by(id=0).one()
        self.assertEqual(temp.id, 0)
        self.assertEqual(str(temp.name), "Action")
        self.assertEqual(
            str(temp.description),
            "An action game is a video game genre that emphasizes physical challenges, including hand–eye coordination and reaction-time. The genre includes a large variety of sub-genres, such as fighting games, beat 'em ups, shooter games, and platform games. Multiplayer online battle arena and some real-time strategy games are also considered action games.",
        )
        self.assertEqual(temp.num_games, 153616)
        self.assertEqual(
            str(temp.themes),
            "physical combats, quick reflexes, abilities and specials, obstables and enemies",
        )
        # TODO: not sure how to check for relationship

    def test_genre2(self):
        temp = db.session.query(Genre).filter_by(id=1).one()
        self.assertEqual(temp.id, 1)
        self.assertEqual(str(temp.name), "Adventire")
        self.assertEqual(
            str(temp.description),
            "An adventure game is a video game in which the player assumes the role of a protagonist in an interactive story driven by exploration and/or puzzle-solving. The genre's focus on story allows it to draw heavily from other narrative-based media, literature and film, encompassing a wide variety of literary genres.",
        )
        self.assertEqual(temp.num_games, 116447)
        self.assertEqual(
            str(temp.themes),
            "exploration, gathering and looting, stories and settings",
        )


# ----
# main
# ----

    # these three tests are to make sure our apis running
    def test_comp_api(self):
        endpoint = "http://gamehubapi.me/companies/"
        r = requests.get(endpoint)
        self.assertEqual(200, r.status_code)
    def test_genres_api(self):
        endpoint = "http://gamehubapi.me/genres/"
        r = requests.get(endpoint)
        self.assertEqual(200, r.status_code)
    def test_games_api(self):
        endpoint = "http://gamehubapi.me/games/"
        r = requests.get(endpoint)
        self.assertEqual(200, r.status_code)
    def test_comp_api_1(self):
        endpoint = "http://gamehubapi.me/companies/id:1"
        r = requests.get(endpoint)
        self.assertEqual(200, r.status_code)
    def test_genres_api_1(self):
        endpoint = "http://gamehubapi.me/genres/id:1"
        r = requests.get(endpoint)
        self.assertEqual(200, r.status_code)
    def test_games_api_1(self):
        endpoint = "http://gamehubapi.me/games/id:1"
        r = requests.get(endpoint)
        self.assertEqual(200, r.status_code)

if __name__ == "__main__":
    main()
