"""
Description: this module contains all of the functions for interacting with the mongoDB database via pymongo
Contributors/Authors: Scott, Sam, Austin
"""
from flaskApp import app, mongo
from flask_cors import CORS
import pandas as pd 
from preproc import *
import math

def db_requestTraining(col, file: str, train_Set_path: str = None):
	"""
	Description: this method retrieves the training set of a given dataset (housed in a given)
	collection and returns the training data as a .csv at the given filepath (train_Set_path)
	
	Usage: db_requestTraining(db.Circuits, 'chua_circuit', './chua_circuit_training.csv')
	"""
	filter = {'meta_data': {'name': str(file)}}
	df1 = pd.DataFrame(col.find_one(filter))
	rows = df1.T.shape[0]
	training_size = math.ceil(rows*.8)
	if(len(df1.T.columns) < 2):
		#If the dataframe only has one column, manually set the index as monotonically increasing
		#integers, and label that column 'timeStamp' and the column of data 'data'
		train_df = df1.T.head(training_size)
		train_df.index = pd.RangeIndex(stop = training_size)
		train_df.to_csv(train_Set_path, index_label = ('timeStamp'))
	else:
		#if the dataframe has at least 2 columns, just return into a csv
		df1.T.head(training_size).to_csv(train_Set_path)

def db_requestTest(col, file: str, testSet_path: str = None):
	"""
	Description: this method retrieves the test set of a given dataset (housed in a given)
	collection and returns the training data as a .csv at the given filepath (testSet_path)
	
	Usage: db_requestTest(db.Circuits, 'chua_circuit', './chua_circuit_training.csv')
	"""
	filter = {'meta_data': {'name': str(file)}}
	df1 = pd.DataFrame(col.find_one(filter))
	rows = df1.T.shape[0]
	training_size = math.ceil(rows*.8)
	test_size = math.floor(rows*.2)
	if(len(df1.T.columns) < 2):
		#If the dataframe only has one column, manually set the index as monotonically increasing
		#integers, and label that column 'timeStamp' and the column of data 'data'
		df1 = df1.T 
		df1 = df1.loc[:, df1.columns != 'name']
		test_df = df1.tail(test_size)
		test_df.index = pd.RangeIndex(start = training_size, stop = rows)
		test_df.to_csv(testSet_path, index_label = ('timeStamp'))
	else:
		df1 = df1.T 
		df1 = df1.loc[:, df1.columns != 'name']
		df1.tail(test_size).to_csv(testSet_path)

#insert dataset into a Collection
#if the collection exists set exists to True and pass the col refr. to colPtr
def insert_toCol(client, filename, docName: str, exists: bool = False, TS_colPtr = None, Scores_colPtr = None):
	"""
	Description: this method retrieves the test set of a given dataset (housed in a given)
	collection and returns the training data as a .csv at the given filepath (testSet_path)
	
	Usage: insert_toCol(client, 'chua_circuit.csv', 'chua_circuit', exists = True, TS_colPtr = client.TimeSeries.Circuit, Scores_colPtr = client.Scores.Circuit)

			Note: the exists parameter indicates whether the user is inserting to a pre-existing collection, if this is not the case (which is the default), 
			their document is inserted to a newly made colldction with the same name as the provided docName.
				• ATTENTION: docName is the name to be given to the document that is inserted to the databse, whereas filename is the name of the file to read data
				from 
	"""

	TS_db = client.TimeSeries
	Scores_db = client.Scores
	###CHECKS IF THE COLLECTION ALREADY EXISTS####
	if(not exists):
		col = str(docName)
		TS_col = TS_db.create_collection(col)
		Scores_col = Scores_db.create_collection(col)
		df = pd.read_csv(filename)
		if(len(df.columns) < 2):
			#if data is less than 2 columns, treat the one column as the data to be forecasted
			#and manually set the row #'s as the timestamp
			name_dict = {'meta_data': {'name': str(docName)}}
			Scores_col.insert_one(name_dict) #inserts a document with the meta_data to the Scores database in the according collection
			df = set_DatetoIndex_noTS_CSV(filename) #set indices (see pre_proc.py)
			data_dict = df.to_dict('index')
			name_dict.update(data_dict)
			TS_col.insert_one(name_dict) #insert a document with the meta_data and the data to be forecasted to the TimeSeries db in the appropiate collection
		else:
			name_dict = {'meta_data': {'name': str(docName)}}
			Scores_col.insert_one(name_dict) #inserts a document with the meta_data to the Scores database in the according collection
			df = set_timeStamptoIndex(filename)	#sent indices (see pre_proc.py)
			data_dict = df.to_dict('index')
			name_dict.update(data_dict)
			TS_col.insert_one(name_dict)#insert a document with the meta_data and the data to be forecasted to the TimeSeries db in the appropiate collection

	## Same protocol for insertion but for if the collection DOES already exist ##
	else:
		df = pd.read_csv(filename)
		if(len(df.columns) < 2):
			#if data is less than 2 columns, treat the one column as the data to be forecasted
			#and manually set the row #'s as the timestamp
			name_dict = {'meta_data': {'name': str(docName)}}
			Scores_colPtr.insert_one(name_dict) #inserts a document with the meta_data to the Scores database in the according collection
			df = set_DatetoIndex_noTS_CSV(filename) #sent indices (see pre_proc.py)
			data_dict = df.to_dict('index')
			name_dict.update(data_dict)
			TS_colPtr.insert_one(name_dict) #insert a document with the meta_data and the data to be forecasted to the TimeSeries db in the appropiate collection
		else:
			name_dict = {'meta_data': {'name': str(docName)}}
			Scores_colPtr.insert_one(name_dict) #inserts a document with the meta_data to the Scores database in the according collection
			df = set_timeStamptoIndex(filename)	#sent indices (see pre_proc.py)	
			data_dict = df.to_dict('index')
			name_dict.update(data_dict)
			TS_colPtr.insert_one(name_dict) #insert a document with the meta_data and the data to be forecasted to the TimeSeries db in the appropiate collection
	

def update_ScoreBoard(Scores_colPtr, docName: str, score = float,  userName: str = 'Anon', userLink: str = None):
	"""
	Description: this method updates the list of submissions (aka scoreboard) for a given dataset (housed in a given)
	collection by adding another user's submission. Each user's submission need to contain at least the Score (which represents the error calculated for 
	thier model as compared to the test set), if no userName is provided it is set to 'Anon' and the userLink defaults to None and is optional.
	
	Usage: update_Scoreboard(client.Scores.Circuits, 'chua_circuit', 98.78, 'Einstein', 'github.com/Einstein')
	"""
	filter = {'meta_data': {'name': str(docName)}}
	newVals = {"$addToSet": {'highscores': [score, str(userName), userLink]}}
	result = Scores_colPtr.update_one(filter, newVals)



def get_highScores(Scores_colPtr, docName: str):
	"""
	Description: this method retrieves the list of submissions (aka scoreboard) for a given dataset (housed in a given)
	collection. Each user's submission need to contain at least the Score, whereas, if no userName is provided it is set to 'Anon'
	and the userLink defaults to None and is optional.
	
	Usage: get_highScores(client.Scores.Circuits, 'chua_circuit')
	"""
	filter = {'meta_data': {'name': str(docName)}}
	doc = Scores_colPtr.find_one(filter)
	doc = doc['highscores']
	result = (sorted(doc, reverse= True))
	return result

@app.route('/dataSets')
def get_dataSetNames(db = mongo.db) -> list:
	"""
	Description: Returns a list of all of the datasets names in the TimeSeries database (partitioned by collection)  in dict_result
	
	Usage: get_dataSetNames(client.TimeSeries)
	"""
	# 
	empty = True
	dict_results = dict()
	collections = db.list_collection_names()
	filter = {}
	for i in range(0, len(collections), 1):
		result = list()
		col = db[collections[i]]
		cur = col.find(filter, {'_id': 0, 'meta_data.name': 1}) #retrieve only the name of each doc, not the whole doc (also not the _id)
		for doc in cur:
				empty = False
				result.append(doc['meta_data']['name'])
		if(not empty):	
			dict_results[collections[i]] = result 
		else:
			dict_results[collections[i]] = []
	return list(dict_results.items())



if __name__ == "__main__":
	CORS(app)
	app.run()
