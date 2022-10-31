# DATSR: DUX Amazing Time Series Repository


## Description

This repository contains source code for DATSR: a web-hosted repository made specifically for time series data. This application was created for Project 1 in Computer Science 422 (Software Methodologies I) at the University of Oregon led by professor Juan Flores and GE Kartikeya Sharma.

Date Created: October 7th, 2022
Last Modified: October 30th, 2022



## Authors

DUX D-Zine (Sam Heilenbach, Cheyanne Kester, Ian McConachie, Scott Wallace, Austin Warren)


## Software Dependencies

As this application is web hosted, software dependencies should not be an issue in using DATSR. However, for development purposes the versions of software used while creating this project are listed below:

- Angular:
- Python:   3.9.0
	- pymongo:   4.2.0
	- numpy:   1.23.1
	- bson:   0.5.10
- Flask:   2.2.2
- Sphinx:   5.2.3


## Contents


### frontend dir

This directory contains the code that makes up the frontend of our application. It is primarily written in Typescript, but there are also files in HTML, CSS, and Javascript that have been generated through the Angular web framework and customized for our website display.


### backend dir

This directory contains the Python source code for DATSR's backend. This includes code that connects the backend to the Mongo database as well as to the front end using Flask.


### docs

This file contains documentation for DATSR including the system design specification, the system design specification, the user documentation, and the DATSR developer's manual. 


### TS_data.zip

A zipped folder containing some time series data that was used for testing while developing this application.




## How to Use

DATSR is hosted on a Firebase web server and can be accessed by visiting the URL https://datsr-app.web.app/home. For more instructions on how to use DATSR, see the user docs in the docs folder.





## How to Contribute

To be added as a contributor to this repository contact Cheyanne Kester (ckester23 on GitHub) to ask for the proper permissions. For more information on how the code is structured and best practices, see the developer's manual in the docs folder.



