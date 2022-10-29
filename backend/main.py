from app import app, mongo
from bson.json_util import dumps
from bson.objectid import ObjectId 
from flask import jsonify, request
import pandas as pd 
from preproc import *
import math

# @app.route('/create', methods=['POST'])
# @app.route('/read', methods=['GET'])
# @app.route('/update', methods=['PUT'])
# @app.route('/delete', methods=['DELETE'])

def db_requestTraining(col, train_Set_path: str = None):
	df1 = pd.DataFrame(col.find_one())
	rows = df1.T.shape[0]
	training_size = math.ceil(rows*.8)
	if(len(df1.T.columns) < 2):
		#If the dataframe only has one column, manually set the index as monotonically increasing
		#integers, and label that column 'timeStamp' and the column of data 'data'
		train_df = df1.T.head(training_size)
		train_df.index = pd.RangeIndex(stop = training_size)
		train_df.to_csv(train_Set_path, index_label = ('timeStamp', 'Data'))
	else:
		#if the dataframe has at least 2 columns, just return into a csv
		df1.T.head(training_size).to_csv(train_Set_path)

#retrieves the test set of a given dataset (accessed via Col)
def db_requestTest(col, testSet_path: str = None):
	df1 = pd.DataFrame(col.find_one())
	rows = df1.T.shape[0]
	training_size = math.ceil(rows*.8)
	test_size = math.floor(rows*.2)
	if(len(df1.T.columns) < 2):
		#If the dataframe only has one column, manually set the index as monotonically increasing
		#integers, and label that column 'timeStamp' and the column of data 'data'
		test_df = df1.T.tail(test_size)
		test_df.index = pd.RangeIndex(start = training_size, stop = rows)
		test_df.to_csv(testSet_path, index_label = ('timeStamp', 'Data'))
	else:
		#if the dataframe has at least 2 columns, just return into a csv
		df1.T.tail(test_size).to_csv(testSet_path)

#insert dataset into a Collection
#if the collection exists set exists to True and pass the col refr. to colPtr
def insert_toCol(db, filename, colName: str = None, exists: bool = False, colPtr = None):
	#if the collection doesn't exist, create it
	#then check if the data has at least two columns
	if(not exists):
		col = str(colName)
		col = db.create_collection(col)
		df = pd.read_csv(filename)
		#if data has only 1 column, manually set column names
		if(len(df.columns) < 2):
			df = set_DatetoIndex_noTS_CSV(filename)
			data_dict = df.to_dict('index')
			col.insert_one(data_dict)
		else:
			df = set_timeStamptoIndex(filename)		
			data_dict = df.to_dict('index')
			col.insert_one(data_dict)
	#if the collection already exists just check if the data has 2 columns
	#if it does submit into the collection as-is
	#else, manually set column names and insert
	else:
		df = pd.read_csv(filename)
		if(len(df.columns) < 2):
			df = set_DatetoIndex_noTS_CSV(filename)
			data_dict = df.to_dict('index')
			colPtr.insert_one(data_dict)
		else:
			df = set_timeStamptoIndex(filename)		
			data_dict = df.to_dict('index')
			colPtr.insert_one(data_dict)

if __name__ == "__main__":
    app.run()