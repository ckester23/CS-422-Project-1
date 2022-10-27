from flask import Flask
from flask_pymongo import PyMongo

# mongoDB connection string 
conStr = "mongodb+srv://sheilen6:951811710@cluster0.ksf9lmz.mongodb.net/TimeSeries?retryWrites=true&w=majority"

# flaskinating mongodb database 
app = Flask(__name__)
app.config["MONGO_URI"] = conStr
mongo = PyMongo(app)