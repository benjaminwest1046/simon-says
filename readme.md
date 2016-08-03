#Simon Says

###Current Features/How to Play
	* Users can start a game
	* The game will play a sequence by lighting up a button on the board
	* Players should then click the buttons in order of the played sequence
	* After each turn, the sequence will grow by 1
	* If a user clicks the incorrect buttons, an alert will be displayed letting them know they lost

###Trello 
https://trello.com/b/1XoUz47S/simon-says

###Workflow
1. Have a static board that displays when players load the page, with a button labeled Start
2. When the player clicks start, randomly select one of four buttons and add it to an array
3. Next, play a sequence using the buttons in the array by changing the background opacity and then removing the opacity
4. Once the sequence is done, listen for clicks and add clicks to a second array. 
5. Now, compare the sequence array and the user clicks array and if they are the same, add a new button to the sequence array and loop through the sequence again. 
6. If they arrays do not match, show an alert letting the player know they lost and reset the board

###Live Demo
A live demo of the game can be found here: http://miner-whale-56222.bitballoon.com/