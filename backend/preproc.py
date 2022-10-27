import pandas as pd

#returns data as a dataframe
def readData(filename):
    raw_csv_data = pd.read_csv(filename, parse_dates = {'timeStamp': ["Year", "Month", "Date", "Time"]})  # imports our time series data
    df_comp = raw_csv_data.copy()  # copies time series data
    df_comp = df_comp.astype(str)
    return df_comp

# def read_file(df_comp):
# inputFileName = input("Index2018.csv")
# inputFile = open(inputFileName, "r")

# print(read_file())


# STRINGS INTO DATES
# df_comp.date.describe()  # Shows our date column data.
# df_comp.date = pd.to_datetime(df_comp.date, dayfirst=True)


# SET INDEX df_comp.set_index("date", inplace=True)  # each date is a separate time-period so we can use the date
# column as our index for now print(df_comp.head())
def set_timeStamptoIndex(filename):
    df = pd.read_csv(filename, parse_dates = {'timeStamp': ["Year", "Month", "Date", "Time"]})  # imports our time series data
    df_comp = df.copy()  # copies time series data
    df.set_index("timeStamp", inplace=True)
    df.index = df.index.strftime('%m/%d/%Y, %r')
    return df

def set_DatetoIndex_noTS_CSV(filename):
    df = pd.read_csv(filename)
    df.index = df.index.map(str)
    #df.set_index("date", inplace = True)
    return df


#print(setDatetoIndex())


# SET CORRECT FREQUENCY
# df_comp = df_comp.asfreq('b')  # d for daily, w for weekly, a for annually, and b for business days.
# print(df_comp.head())

# def setFreq():
# df_comp = df_comp.asfreq('b')

# print(setFreq())


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


#print(frontFill())

# df_comp.dax = df_comp.dax.fillna(value=df_comp.dax.mean())  # takes average from data and fills. prob dont use this method for time series
