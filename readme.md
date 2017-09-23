# _{Ping Pong - Epicodus Project 3}_

#### _{Ping Pong -Epicodus -Project3}, {9/22/2017}_

#### By _**{Scott Reichert}**_

## Description

_{Ping pong takes in a user submitted number and returns a list of numbers from 1 to the user input. Numbers evenly divisible by 3 will output ping. Numbers evenly divisible by 5 will output pong. If submitted number is evenly divisible by both 3 and 5 (or 15) the application will then return ping-pong. A new number will empty previous results and generate a new list}_

_{The user submitted number is run through a function named calculator that loops for a determined length (user input) and builds an arrayAlpha based on the conditions met by "if else" statements and returns the array. A varible name arrayBeta is assigned to calculator function and it's argument the variable userInput. When the function submit is executed this newly generated arrayBeta is run through a loop that appends the callback and a list item into an unorder list for each object in the array. THis is then displayed as a list of items with replacements. When the sumbit is executed again the output is emptied and the process begins again}

## Setup/Installation Requirements

* _Using your favorite git terminal clone the github repository using the following command -
* _  git clone https://github.com/Scottreich/project3
* _Navigate to the newly cloned directory using your terminal and open using your preffered text editor
* _View in your favorite browser (Google Chrome Recommended) with the CNTRL (or CMD) + O_

## Known Bugs

_{Currently when submit hit with a negative number or a letter, no functionality present}_

## Specifications
_{Correct behaviors}
* _Numbers that are not not evenly divisible by 3 and/or 5 the UI will experience no change.
 _(i.e) Input = 2 , Output= 1, 2
* _Numbers with decimal points will parse to the nearest integer
 _(i.e) Input = 4.6 Output= 1, 2, ping, 4, pong
* _Numbers input that are evenly divisible by 3 are replaced with "ping"
 _(i.e) Input = 6 , Output= 1, 2, ping, 4, 5, ping;
* _Numbers input that are evenly divisible by 5 are replaced with "pong"
 _(i.e) Input = 6 , Output= 1, 2, ping, 4,  pong, Ping;
* _Numbers input that are BOTH evenly divisible by 3 and 5 are replaced with "ping-pong"
 _(i.e) Input = 15 , Output= 1, 2, ping, 4, 5, ping, 7, 8, ping, pong, 11, ping, 13, 14, ping-pong;
* _If a positive number is followed by a comma and the exact same number the UI will experience no change.
 _(i.e) Input = 5,5 Output= 1, 2, ping, 4, pong, ping
_{Incorrect behaviors}
* _If numbers input are negative the UI will experience no change
 _(i.e) Input = -1 , Output= " ";
* _If letters are input the UI will experience no change
 _(i.e) Input = "Hello world" , Output= " ";
* _If numbers input are separated by a space only the number preceeding the space will be run
 _(i.e) Input = 3 304 , Output= 1, 2, ping;
* _If a positive number input is follow by a comma and a different number the UI will experience no change
 _(i.e) Input = 3,4 , Output= " ";

# Support and contact details

_{Please contact Scott Reichert @ Scottreichert86@gmail.com for support .}_

## Technologies Used

_{This project was built with the text editor atom. JQuery and Bootstrap were used to add interactivity and style}_

### License

*{GPL}*

Copyright (c) 2016 **_{Scott Reichert}_**
