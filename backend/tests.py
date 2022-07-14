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
        temp = db.session.query(Company).filter_by(id=31).one()
        self.assertEqual(temp.id, 31)
        self.assertEqual(str(temp.name), "Team17 Digital")
        self.assertEqual(
            str(temp.description),
            "Team17 Software Ltd. is a British video game developer based in Wakefield, England. The studio developed more than 50 games and is best-known for its Worms franchise and, currently, The Escapist series. It was founded as a result of the merge of 17-bit Software publisher and Team7 development studio. Since its founding and until 1996 the studio was mostly a developer for Amiga systems. In 1991 the company developed the first installment in Alien Breed series of science fiction isometric shooters which were one of the Team17's main franchises in the 90s. In 1995 the studio's Worms came out. It was a 2D artillery tactical video game. Being a financial success, it spawned a franchise that keeps getting new entries up to this day with more than 20 games in the main series alone. As for 2017, 70 million copies of the games in the franchise were sold or downloaded worldwide.",
        )
        self.assertEqual(str(temp.location), "United Kingdom")
        self.assertEqual(str(temp.year), "1990")
        self.assertEqual(temp.num_games, 104)      # Could not find this info from models.py
        # TODO: not sure how to check for relationship
        self.assertEqual(
            str(temp.img),
            "https://media.rawg.io/media/games/213/2138ba3c97d02b581ca0b50805fcd49c.jpg",
        )

    def test_game1(self):
        temp = db.session.query(Game).filter_by(id=1).one()
        self.assertEqual(temp.id, 1)
        self.assertEqual(str(temp.name), "The Witcher 3: Wild Hunt")
        self.assertEqual(str(temp.released), "2015-05-18")
        self.assertEqual(temp.score, 92)

    def test_game2(self):
        temp = db.session.query(Game).filter_by(id=6).one()
        self.assertEqual(temp.id, 6)
        self.assertEqual(str(temp.name), "Left 4 Dead 2")
        self.assertEqual(temp.score, 89)
        self.assertEqual(str(temp.released), "2009-11-17")

    def test_genre1(self):
        temp = db.session.query(Genre).filter_by(id=0).one()
        self.assertEqual(temp.id, 0)
        self.assertEqual(str(temp.name), "Action")
        self.assertEqual(temp.num_games, 155038)
        self.assertEqual(
            str(temp.themes),
            "Physical combat, Quick reflexes, Abilities, Obstables and Enemies",
        )

    def test_genre2(self):
        temp = db.session.query(Genre).filter_by(id=5).one()
        self.assertEqual(temp.id, 5)
        self.assertEqual(str(temp.name), "Shooter")
        self.assertEqual(
            str(temp.description),
            "A shooter is a sub-genre of action video games the gameplay of which is thoroughly centered around shooting targets. Such games can be presented from first and the third perspectives with the latter being mostly twin-stick platforming shooters. Mouse and keyboard are widely regarded as the best controllers for shooters, as the firing demands high precision achieved only with manual aiming. The primary goal of shooters is to defeat enemies by discharging loads of bullets into them. Shooters are the most discussable video game genre when it comes to judging violence in games, as the gunfire process involves realistic scenes of killing quite often. Sub-genre of shooters is also divided by sub-subgenres such as shoot'em ups, tactical shooters, and hero shooters.  The former involves changing a direction of movement and shooting forward while the latter focuses on wiping out tons of enemies by one protagonist. Notable games of the genre are Resogun, Bulletstorm and Call of Duty.",
        )
        self.assertEqual(temp.num_games, 53753)
        self.assertEqual(
            str(temp.themes),
            "Guns, Grenades, Spatial Awareness, Reflexes, Teamwork",
        )

    def test_genre3(self):
        temp = db.session.query(Genre).filter_by(id=6).one()
        self.assertEqual(temp.name, "Casual")
        self.assertEqual(temp.num_games, 39107)
    
    def test_c3(self):
        temp = db.session.query(Game).filter_by(id=118).one()
        self.assertEqual(temp.name, "Far Cry 4")
        self.assertEqual(temp.pictures[0], "https://media.rawg.io/media/screenshots/62c/62c6f076bfb258f12e925ff12e56dad4.jpg")
    

    def test_g3(self):
        temp = db.session.query(Company).filter_by(id=72).one()
        self.assertEqual(temp.name, "4A Games")
        self.assertEqual(temp.num_games, 16)

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
