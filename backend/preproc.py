"""
Description: this module contains all of the functions for preprocessing timeseries data to prepare it for insertion to mongoDB
Contributors/Authors: Austin, Sam 
"""

import pandas as pd


# SET INDEX df_comp.set_index("date", inplace=True)  # each date is a separate time-period so we can use the date
# column as our index for now print(df_comp.head())
def set_timeStamptoIndex(filename):
    """
    Description: concatonates date_time columns into one called 'timeStamp' sets the timeStamp to the index 
    Usage: set_timeStamptoIndex("EARTHQUAKE_OCCURRENCES_IN_2015.csv")
    """
    df = pd.read_csv(filename, parse_dates = {'timeStamp': ["Year", "Month", "Date", "Time"]})  # imports our time series data
    df_comp = df.copy()  # copies time series data
    df.set_index("timeStamp", inplace=True)
    df.index = df.index.strftime('%m/%d/%Y, %r')
    return df

def set_DatetoIndex_noTS_CSV(filename):
    """
    Description: Sets index as row numbers for datasets without timeStamps - also forces the indices to be str type
    Usage: set_DatetoIndex_noTS_CSV("chua_circuit.csv")
    """
    df = pd.read_csv(filename)
    df.index = df.index.map(str)
    # df.set_index("timeStamp", inplace = True)
    return df

"""
### UNUSED pandas functions that could be useful for parsing differently structured date_time data in datsets ###
STRINGS INTO DATES
df_comp.date.describe()  # Shows our date column data.
df_comp.date = pd.to_datetime(df_comp.date, dayfirst=True)


#returns data as a dataframe
def readData(filename):
    raw_csv_data = pd.read_csv(filename, parse_dates = {'timeStamp': ["Year", "Month", "Date", "Time"]})  # imports our time series data
    df_comp = raw_csv_data.copy()  # copies time series data
    df_comp = df_comp.astype(str)
    return df_comp


# HANDLE MISSING DATA VALUES
# print(df_comp.isna().sum())  # total number of missing data values
# print(df_comp.isna().head())
def printMissingVal(filename):
    raw_csv_data = pd.read_csv(filename)  # imports our time series data
    df_comp = raw_csv_data.copy()  # copies time series data
    df_comp.isna().sum()  # total number of missing data values


#print(printMissingVal())


def prevFill(filename):
    raw_csv_data = pd.read_csv(filename)  # imports our time series data
    df_comp = raw_csv_data.copy()  # copies time series data
    df_comp.spx = df_comp.spx.fillna(method='ffill')  # takes value from previous period and fills


#print(prevFill())


def frontFill(filename):
    raw_csv_data = pd.read_csv(filename)  # imports our time series data
    df_comp = raw_csv_data.copy()  # copies time series data
    df_comp.spx = df_comp.spx.fillna(method='bfill')  # takes value from next period and fills

"""
