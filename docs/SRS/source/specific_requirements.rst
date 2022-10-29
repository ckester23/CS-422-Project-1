Specific Requirements
======================


External Interfaces (Inputs and Outputs)
-----------------------------------------


Time Series Data (Output)
#########################

The user will be able to download time series data sets from the repository as that is the main purpose of the repository. The data will be available in the form of a .csv or .dat file. The output will be sourced from our backend database which will hold all the TS data. These atomic data sets will have metadata that describes them in addition to the time series data itself. The ranges that this data will fall into can be expressed in terms of the number of data points (from 1 to 999999) and the number of variables (from 1 to 999). Alternatively, the size of the data can be seen as size in memory and there will be an upper limit of 5MB for this size.


Predictive Points (Input)
###########################

Users will be able to upload predictions they have made for the validation set of the time series data. The purpose of this is so that they can test their predictive model and receive feedback for future improvement. They will have to upload the data as a .csv or .dat file formatted in the manner specified in the user docs. The size of this input will vary depending on the number of validation points in that specific TS data set. 


New Data Sets (Input)
#######################

Contributers to the repository will be able to submit new TS data that they wish to be included on the site. To do this, they must upload the data as a .dat or .csv file in the format specified in the user documentation. They must also specify meta data so that the new TS set can be categorized in the database. The size of this input will follow the same constraints as the output time series data which have been detailed above.


Functions
----------



Preparing Data for Download
############################

Once the user has selected which data set they wish to download, the logic section and database section of our application will have to correctly format their data as a csv or dat file. The backend modules will query the database and process the information to format it in the manner specified in the user documentation.


Input Validation
##################

When a file is uploaded, the file will be compared to the expected file format and either accepted or rejected. If the uploaded file is ill-formatted, the user will get an error message and be asked to re-upload. If uploaded data is rejected, the user will be pointed in the direction of the documentation that specifies data formatting standards.


Prediction "Scoring"
#####################

If the user submits an acceptable file of predicted data points, the application will run our scoring algorithm to compare the validation set we have kept from the user with their predictions. Then, without showing the user the hidden validation set, we will tell them their "score" for the prediction they have made. Although the validation set will remain hidden, users will be able to see how the scoring algorithm works in the user documentation.



Usability Requirements
-----------------------

Our application will include an intuitive GUI that guides users through the process of downloading time series data and testing predictive models against hidden validation sets. In addition to this, our application will include thorough user documentation that will help guide users not only through the application's UI, but also through the methodology and reasoning used in designing the system. For developers/contributers to the project, there will be documentation that further details the system on a technical level to aid future maintenance and updates.


Performance Requirements
--------------------------

We are aiming to have a statistically significant number of users (95%) experience wait times of less than 5 seconds for loading the website. Once the user moves on to trying to download the data set, we hope to prepare and send the file to the user in less than 30 seconds 95% of the time. The scoring algorithm will complete and display the rating of a user's prediction within 20 seconds also at a rate of 95%.


Software System Attributes 
---------------------------

Key to our application is the consistency, reliability, and transparency of the scoring algorithm used with predictive data. A large part of the target market for our application are people in the realm of academia and high-tech industries. In the academic world it is very important to understand the methodology of an application and for that methodology to remain consistent. Furthermore, industry regulations often call for transparency especially in areas that commonly use time series analysis such as electric utilities and economics.

This application will be able to run on all major browsers. This is an important attribute for our project because we have a diverse set of possible users and it is unreasonable to expect them to have the same network stack. To achieve compatibility with most major browsers (e.g., Chrome, Firefox, Safari, Edge), we will make sure to only use web development frameworks and libraries that have widespread support and documentation.

