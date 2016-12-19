<git commands and steps>

1. open git bash
2. set the path of the folder in which you have files to move into repository
3. run git init
4. run git config --global user.name "username of your github account"
5. run git config --global user.email "emailId of your github account"
6. run git status -----> shows all untracked files in the folder in red color
7. run git add -all ------> adds all the untracked files to the respository and you should see them in green now
8. run git commit -m "entersomemessage"
9. Now if you run git status command, you should see nothing to commit msg.
10.run git remote add origin "URL from your git repositoy ex:https://github.com/narenjaini/JsExcercises.git"
11.run git pull [if you see no tacking msg] got to next step
12.run git push -u origin master  

--
now open your github account and you will see all the files in your new repository     
