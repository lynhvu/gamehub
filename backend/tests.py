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
        self.assertEqual(str(temp.location), "Not Available")
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
            "<p>Team17 Software Ltd. is a British video game developer based in Wakefield, England. The studio developed more than 50 games and is best-known for its Worms franchise and, currently, The Escapist series. It was founded as a result of the merge of 17-bit Software publisher and Team7 development studio. Since its founding and until 1996 the studio was mostly a developer for Amiga systems. In 1991 the company developed the first installment in Alien Breed series of science fiction isometric shooters which were one of the Team17\u2019s main franchises in the 90s. In 1995 the studio\u2019s Worms came out. It was a 2D artillery tactical video game. Being a financial success, it spawned a franchise that keeps getting new entries up to this day with more than 20 games in the main series alone. As for 2017, 70 million copies of the games in the franchise were sold or downloaded worldwide.</p>",
        )
        self.assertEqual(str(temp.location), "Not Available")
        self.assertEqual(str(temp.year), "Not Available")
        # self.assertEqual(temp.num_games, 0)      # Could not find this info from models.py
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
        self.assertEqual(
            str(temp.description),
            "<p>Cooperative survival continues with a different set of characters. New survivors are making their way through 5 campaigns with an added ability to play through the story of the first game as well, using not only expanded arsenal of 20 ranged and 10 melee weapons but improved AI Director. Your surroundings and weather will change; enemy and item placement will differ from map to map, from difficulty to difficulty. New unique special zombies, placed in the unlucky for the player spot, can end your run.<br />\nHigh compatibility with community mods will allow you not only to add user-created maps but player models, enemy models, and even in-game music, which will help any player to create the unique experience on top of solid game mechanics.<br />\nCompetitive multiplayer mods from arena survival to a head-on competition with another team of survivors are addictive and, in addition to the campaign, will provide you with hundreds of hours of game content.</p>",
        )
        self.assertEqual(temp.score, 89)
        self.assertEqual(str(temp.released), "2009-11-17")

    def test_genre1(self):
        temp = db.session.query(Genre).filter_by(id=0).one()
        self.assertEqual(temp.id, 0)
        self.assertEqual(str(temp.name), "Action")
        self.assertEqual(temp.num_games, 154512)
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
            "<p>A shooter is a sub-genre of action video games the gameplay of which is thoroughly centered around shooting targets. Such games can be presented from first and the third perspectives with the latter being mostly twin-stick platforming shooters. Mouse and keyboard are widely regarded as the best controllers for shooters, as the firing demands high precision achieved only with manual aiming. The primary goal of shooters is to defeat enemies by discharging loads of bullets into them. Shooters are the most discussable video game genre when it comes to judging violence in games, as the gunfire process involves realistic scenes of killing quite often. Sub-genre of shooters is also divided by sub-subgenres such as shoot&#39;em ups, tactical shooters, and hero shooters.  The former involves changing a direction of movement and shooting forward while the latter focuses on wiping out tons of enemies by one protagonist. Notable games of the genre are Resogun, Bulletstorm and Call of Duty.</p>",
        )
        self.assertEqual(temp.num_games, 53552)
        self.assertEqual(
            str(temp.themes),
            "Guns, Grenades, Spatial Awareness, Reflexes, Teamwork",
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
