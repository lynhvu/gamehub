# -------
# imports
# -------

from io import StringIO
from unittest import main, TestCase
from models import db, Company, Game, Genre


class TestModels(TestCase):
    # ----
    # read
    # ----

    # def test_index(self):
    #     self.assertEqual()

    # def test_profiles(self):
    #     self.assertEqual()

    def test_companies(self):
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

    def test_games(self):
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

    def test_genres(self):
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


# ----
# main
# ----


if __name__ == "__main__":
    main()
