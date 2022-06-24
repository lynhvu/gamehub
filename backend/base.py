from flask import Flask

api = Flask(__name__)

@api.route('/profile/')
def my_profile():
    response_body = {
        "name": "Nagato"
    }

    return response_body

if __name__ == "__main__":
	api.run(host = "127.0.0.1", port = 5000)
