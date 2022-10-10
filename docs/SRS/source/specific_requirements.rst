Specific Requirements
======================


External Interfaces (Inputs and Outputs)
-----------------------------------------

Meta Data Specifications (Input)
##################################

The user will have several options to choose from for requirements they want their TS data set to satisfy. The purpose of this will be to narrow down which repository data sets to show the user or to tell them that the repo does not have data that fits their specifications. There will be specific ranges of acceptable values for numerical meta data, i.e. number of data points (1 to 999999) and number of variables (1 to 999). For other specifications such as domain, hierarchical class, scalar/vector, set class, etc. the options will be discrete and the user will choose from only acceptable values. This class of inputs will come from the user selecting their meta data options on the application's GUI.

Time Series Data (Output)
#########################

The user will be able to download time series data sets from the repository as that is the main purpose of the repository. The data will be available in a variety of formats including csv, JSON, and txt. The output will be sourced from our backend database which will hold all the TS data. These atomic data sets will have metadata that describes them in addition to the TS data itself. The ranges that this data will fall into can be expressed in terms of the number of data points (from 1 to 999999) and the number of variables (from 1 to 999). The size of the data will also be within a certain range (up to 1MB).

Predictive Points (Input)
###########################

The user will be able to upload predictions they have made for the validation set of the time series data. The purpose of this is so that they can test their predictive model and receive feedback for future improvement. They can upload this data in any of the file formats listed above (i.e. csv, JSON, txt). The size of this input will vary depending on the number of validation points in that specific TS data set. 


Functions
----------

Data Set Filtering
###################

When the user inputs the specifications that the TS data must fulfill, the program will filter out data sets that do not meet their requirements before displaying a list of TS data sets available for download. If no data sets exist that meet their specifications, then the GUI will display a message that indicates that no such data exists in the repository.


Preparing Data for Download
############################

Once the user has selected which data set they wish to download, they will have to select the format they wish to download it as. At this point, our application will query the backend and generate a document in the specified format.


Input Validation
##################

When a user inputs their predicted data points they will first have to specify which type of data they are uploading. Then, our system will know what kind of formatting is needed for that type of file upload. When a file is uploaded, the predicted data file will be compared to the expected file format. If the uploaded file is ill-formatted, the user will get an error message and be asked to re-upload.

There will also be input validation associated with meta data specifications. This will mostly consist of ensuring that numerical values are within allowed ranges which are listed above.


Prediction "Scoring"
#####################

If the user submits an acceptable file of predicted data points, the application will run our scoring algorithm and compare the validation set we have reserved from the user with their predictions. Then, without showing the user the hidden validation set, we will tell them their "score" for the prediction they have made. Although the validation set will remain hidden, users will be able to see how the scoring algorithm works in the user documentation.



Usability Requirements
-----------------------

Our application will include an intuitive GUI that guides users through the process of downloading time series data and testing predictive models against hidden validation sets. In addition to this, our application will include thorough user documentation that will help guide users not only through the application's UI, but also through the methodology and reasoning used in designing the system. For developers/contributers to the project, there will be documentation that further details the system on a technical level to aid future maintenance and updates.


Performance Requirements
--------------------------

We are aiming to have a statistically significant number of users (95%) experience wait times of less than 30 seconds for data filtration and TS repository display after they enter their specifications for a search. Once the user moves on to trying to download the data set, we hope to prepare and send the file to the user in less than 1 minute 95% of the time. The scoring algorithm will complete and display the rating of a user's prediction within 30 seconds 95% of the time.


Software System Attributes 
---------------------------

Key to our application is the consistency, reliability, and transparency of the scoring algorithm used with predictive data. A large part of the target market for our application are people in the realm of academia. In the academic world it is very important to understand the methodology of an application like this if it is to be used in research.

This application will be able to run on all 3 major operating systems (Linux, MacOS, and Windows). This is an important attribute for our project because we have a diverse set of possible users and it is unreasonable to expect them to have the same OS. To achieve compatibility on all three OSs, we will ensure that any dependencies included in our design will available on all major operating system types and clearly defined in the requirements section of the documentation.

