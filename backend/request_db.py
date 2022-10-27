import pandas as pd 
from preproc import *
import math

def clean_request(col, testSet_path: str = None, train_Set_path: str = None, savefile: bool = True):
	df1 = pd.DataFrame((col.find_one()))
	rows = df1.T.shape[0]
	training_size = math.ceil(rows*.8)
	test_size = math.floor(rows*.2)
	if(savefile):
		df1.T.head(training_size).to_csv(train_Set_path)
		df1.T.tail(test_size).to_csv(testSet_path)


def noTS_request(col, testSet_path: str = None, train_Set_path: str = None, savefile: bool = True):
	df1 = pd.DataFrame(col.find_one())
	rows = df1.T.shape[0]
	training_size = math.ceil(rows*.8)
	test_size = math.floor(rows*.2)
	if(savefile):
		train_df = df1.T.head(training_size)
		train_df.index = pd.RangeIndex(stop = training_size)
		test_df = df1.T.tail(test_size)
		test_df.index = pd.RangeIndex(start = training_size, stop = rows)
		train_df.to_csv(train_Set_path, index_label = ('timeStamp', 'data'))
		test_df.to_csv(testSet_path, index_label = ('timeStamp', 'data'))
