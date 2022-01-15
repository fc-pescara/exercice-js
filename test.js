
function createquestion(){

let quizz = document.createElement("p")
quizz.appendChild(document.createTextNode("quelle est la capitale de la belgique"));
document.getElementById("onequestion").appendChild(quizz);
quizz.className="quizzone";


let onereponse = document.createElement("p");
onereponse.type = "text";
onereponse.className="onereponseone";
onereponse.appendChild(document.createTextNode("Bruxelle"));
document.getElementById("formulaire").appendChild(onereponse)

let onereponse2 = document.createElement("p");
onereponse2.className="onereponsetwo"
onereponse2.type="text";
onereponse2.appendChild(document.createTextNode("Charleroi"));
document.getElementById("formulaire").appendChild(onereponse2)

onereponse && onereponse.addEventListener('click',function(question) {
    onereponse.className="bonnereponse";
    onereponse2.className="mauvaisereponse";
    
    
});




 onereponse2.addEventListener('click',function() {
 onereponse2.className="mauvaisereponse";
 onereponse.className="bonnereponse";
 



 

 onereponse2 && onereponse.addEventListener('click', event => {


    quizz.innerHTML = "";
    onereponse2.innerHTML = "";
    onereponse.innerHTML = "";


  quizz.appendChild(document.createTextNode("Quelle est la capitale de la france"));
    onereponse.appendChild(document.createTextNode("Paris"));
    onereponse2.appendChild(document.createTextNode("Marseille")); 

    quizz.className="twoetape";
onereponse.className="twoetape"
onereponse2.className="twoetape1"

onereponse && onereponse2.addEventListener('onclick', event=> {
    onereponse.className="bonnereponse2";
    onereponse2.className="mauvaisereponse";

    
});
      








onereponse2 && onereponse.addEventListener('click', event => {


    quizz.innerHTML = "";
    onereponse2.innerHTML = "";
    onereponse.innerHTML = "";

  

  quizz.appendChild(document.createTextNode("Quelle est la capitale de l'italie"));
    onereponse.appendChild(document.createTextNode("Pescara"));
    onereponse2.appendChild(document.createTextNode("Rome")); 

    quizz.className="twoetape";
    onereponse.className="twoetape"
    onereponse2.className="twoetape"

     });

     onereponse && onereponse2.addEventListener('click',function(question1) {
    
        onereponse.className="twoetape"
        onereponse2.className="twoetape"

        onereponse2.className="bonnereponse3"
        onereponse.className="mauvaisereponse3"


       



       



});

      
});

});
}



createquestion();

question();
question1();
question2();
   




