.. _input:

Input Formatting
=================

Data inputted into DATSR---whether it is data for a new dataset or predictions submitted for an existing data set---should be in the form of a .csv file. The left-most column(s) should be populated by time values and to their right there should be the values for whatever variable is being measured over the time period. If there are no time values for the time series, the first column should be the values that are being measured. 

This formatting standard was selected because it is a common way for time series to be stored in other repositories. When we built DATSR, we wanted it to fit in well with the established research community and this formatting standard adds to DATSR's compatibility with the systems already in place.

Data downloaded from the repository will be formatted in this way, but other examples of correctly formatted data can be found in the zipped folder that this project was submitted in (chua_circuit.csv and EARTHQUAK_OCCURENCES_IN_2015.csv). For more information on these particular data sets, see the demo section of this document (:numref:`walkthrough`).