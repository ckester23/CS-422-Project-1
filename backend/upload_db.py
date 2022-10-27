import pandas as pd 
from preproc import *


def insert_toNewCol(db, colName: str, filename):
	col = colName
	col = db.create_collection(col)
	df = pd.read_csv(filename)
	if(len(df.columns) < 2):
		df = set_DatetoIndex_noTS_CSV(filename)
		data_dict = df.to_dict('index')
		col.insert_one(data_dict)
	else:
		df = set_timeStamptoIndex(filename)		
		data_dict = df.to_dict('index')
		col.insert_one(data_dict)


def insert_toCurr_Col(col, filename):
	df = pd.read_csv(filename)
	if(len(df.columns) < 2):
		df = set_DatetoIndex_noTS_CSV(filename)
		data_dict = df.to_dict('index')
		col.insert_one(data_dict)
	else:
		df = set_timeStamptoIndex(filename)		
		data_dict = df.to_dict('index')
		col.insert_one(data_dict)