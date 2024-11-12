//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent! Do not just fly, soar."
compliments[1]="Wow, you're really rocking! Believe you can, then you will."
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on. Today is a good day to try."
compliments[4]="Correct! Just keep swimming."
compliments[5]="Great Job! To infinity and beyond!"
compliments[6]="Good work! Adventure is out there."


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What was the first Pixar movie?"
choice1[1]="Toy Story"
choice1[2]="The Incredibles"
choice1[3]="Up"
choice1[4]="Monsters, Inc."

question[2]="What is the name of Rapunzel's chameleon?"
choice2[1]="Flynn"
choice2[2]="Pete"
choice2[3]="Pascal"
choice2[4]="Camy"

question[3]="What high school did Troy and Gabriella attend in High School Musical?"
choice3[1]="West High"
choice3[2]="East High"
choice3[3]="South High"
choice3[4]="North High"

question[4]="The Princess and the Frog is set in which city?"
choice4[1]="New Orleans"
choice4[2]="New York"
choice4[3]="Los Angeles"
choice4[4]="Orlando"

question[5]="Mike and Sully joined which fraternity in Monsters University?"
choice5[1]="Eta Hiss Hiss"
choice5[2]="Jaws Theta Chi"
choice5[3]="Oozma Kappa"
choice5[4]="Roar Omega Roar"

question[6]="Where does Winnie the Pooh live?"
choice6[1]="The Fifty Acre Wood"
choice6[2]="The Friend Filled Wood"
choice6[3]="The Honey Wood"
choice6[4]="The Hundred Acre Wood"

question[7]="What poisonous fruit did Snow White eat?"
choice7[1]="Orange"
choice7[2]="Apple"
choice7[3]="Banana"
choice7[4]="Peach"

question[8]="What country is Belle from in Beauty and the Beast?"
choice8[1]="Sweden"
choice8[2]="Italy"
choice8[3]="France"
choice8[4]="The UK"

question[9]="What animal did Peter Pan feed Captain Hook's hand to?"
choice9[1]="crocodile"
choice9[2]="shark"
choice9[3]="whale"
choice9[4]="alligator"

question[10]="What was the name of Walt Disney's first cartoon character?"
choice10[1]="Donald Duck"
choice10[2]="Goofy"
choice10[3]="Mickey Mouse"
choice10[4]="Oswald the Lucky Rabbit"

solution[1]="a"
solution[2]="c"
solution[3]="b"
solution[4]="a"
solution[5]="c"
solution[6]="d"
solution[7]="b"
solution[8]="c"
solution[9]="a"
solution[10]="d"
