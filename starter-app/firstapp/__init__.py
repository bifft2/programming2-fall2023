import random

from flask import Flask, render_template

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    # a simple page that says hello
    @app.route('/encouragement')
    def hello():
        encouragements = ["You're incredible!", "You got this.", "Sending good vibes your way :)", "You can do it!"]
        encouragement = random.choice(encouragements)
        return render_template('index.html', encouragement=encouragement)

    return app