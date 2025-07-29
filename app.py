from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Vercel Python app is working!"
