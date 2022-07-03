import json
from models import api, db, Company, Game, Genre


# NOTE: this is literally just copied an pasted from the example, edits are needed

# ------------
# load_json
# save data in a json file after scraping it from the APIs
# ------------
def load_json(filename):
    """
    return a python dict jsn
    filename a json file
    """
    with open(filename) as file:
        jsn = json.load(file)
        file.close()

    return jsn

# ------------
# create_companies
# ------------
def create_companies():
    """
    populate company table
    """
    # before this we should call the API to get the info
    company = load_json('companies.json')

    for oneCompany in company['Companies']:
        id = company['id']
        name = company[]
        description = company[]
        location = company[]
        year = company[]
        rating = company[]
        games = company[]
		
        newCompany = Company(id = id, name = name, description = description, location = location, year = year, rating = rating, games = games)
        
        db.session.add(newCompany)
        db.session.commit()
        
#db.drop_all()
#db.create_all()

create_companies()

