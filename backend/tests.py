# -------
# imports
# -------

from io import StringIO
from unittest import main, TestCase
from models import db, Company, Game, Genre
import requests


class TestModels(TestCase):
    # ----
    # read
    # ----

    def test_company1(self):
        temp = db.session.query(Company).filter_by(id=2).one()
        self.assertEqual(temp.id, 2)
        self.assertEqual(str(temp.name), "Valve Software")
        self.assertEqual(str(temp.location), "United States")
        self.assertEqual(temp.num_games, 42)
        self.assertEqual(
            str(temp.img),
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
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
        self.assertEqual(
            str(temp.img),
            "https://images.igdb.com/igdb/image/upload/t_logo_med/bcpeptiqicy9g0gn4nur.png",
        )

    def test_game1(self):
        temp = db.session.query(Game).filter_by(id=1).one()
        self.assertEqual(temp.id, 1)
        self.assertEqual(str(temp.name), "The Witcher 3: Wild Hunt")
        self.assertEqual(str(temp.released), "2015-05-18")
        self.assertEqual(temp.score, 92)

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
        self.assertEqual(temp.num_games, 154515)
        self.assertEqual(
            str(temp.themes),
            "Physical combat, Quick reflexes, Abilities, Obstables and Enemies",
        )

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
