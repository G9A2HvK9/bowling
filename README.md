# Bowling

This is a common tech test, and an excercise in dealing with complexity in object oriented programming. The score logic works in such a way that frames are scores co-dependently, depending on the score of the previous frame.

* A frame which scores less than 10 points, will be scored as a simple function of the two rolls.  
* A spare will be scored as 10 points plus the next roll
* A strike will be scored as 10 points plus the next two rolls

Therefore, although there are only 12 frames in a game, the maxmimum score that a game can score is 300.


## 
