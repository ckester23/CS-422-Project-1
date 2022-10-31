"""
    Name: Error calculation Score Module
    Description: The purpose of this file is to take in two files and convert them to numpy arrays,
    then use our mean squared formula to get our score.
    Author: Austin
"""
import numpy as np

# https://www.geeksforgeeks.org/python-mean-squared-error/
# https://www.geeksforgeeks.org/import-text-files-into-numpy-arrays/
# We can add a specific col if multiple or skip row if there are headers. Check geeksforgeeks link!


# csv file actual text to numpy array
File_true = np.loadtxt("chua_circuit.csv", dtype=float)
# print(File_true)

# csv file prediction text to numpy array
File_pred = np.loadtxt("chen_system.csv", dtype=float)
# print(File_pred)


# Mean Squared Error Formula
# Formula only works if the lines of each file are equal!
MSE = np.square(np.subtract(File_true, File_pred)).mean()
print(MSE)
