import pymongo
#import flask?
import pandas as pd
from upload_db import *
from request_db import *



client = pymongo.MongoClient("mongodb+srv://sheilen6:951811710@cluster0.ksf9lmz.mongodb.net/?retryWrites=true&w=majority")
db = client.TimeSeries
insert_toCurr_Col(db.Circuit, "chua_circuit.csv")
noTS_request(db.Circuit, './circuit_test.csv', './circuit_training.csv',)
#insert_toNewCol(db, 'EQUAKES_2015', "EARTHQUAKE_OCCURRENCES_IN_2015.csv")
#clean_request(db.EQUAKES_2015,  './equakes_test.csv', './equakes_training.csv')



@app.route('/datasets')
def request():
	cleante
