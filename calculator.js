
getEquation = ()=>{return document.getElementById("equation-value").innerText;}

displayEquation = (num)=> {document.getElementById("equation-value").innerText=getFormatNumber(num);;}
getAnswers = ()=>{return document.getElementById("answer-value").innerText;}
displayAnswers = (num)=>{document.getElementById("answer-value").innerText=num}


getFormatNumber = (num)=>{var n = Number(num); var value = n.toLocaleString("en"); return value;}


reverseFormat = (num) => {return Number(num.replace(/,/g,''));}
var numbers = document.getElementsByClassName("number");
for(var i =0; i<numbers.length;i++){
    numbers[i].addEventListener('click',function(){
        var equation = reverseFormat(getEquation());
        if(equation!=NaN){
            equation=equation+this.id;
            displayEquation(equation);
        }
    })
}

var operator = document.getElementsByClassName("operator");
for(var i =0; i<operator.length;i++){
    
    operator[i].addEventListener('click',function(){
        
        if(this.id=="clear"){
            displayEquation("");
            displayAnswers("");
        }
        else if (this.id =="backspace"){
            var equation=reverseFormat(getEquation()).toString();
            if(equation){
                equation = equation.substr(0,equation.length-1);
                displayEquation(equation);
            }
        }
        else if (this.id =="bye"){
            displayAnswers("bye");
            displayEquation("");
        }
        else if (this.id =="hello"){
            var list = ["hello","hi","sup","goodluck","good day"];
            var number = Math.floor(Math.random() * 4);
             displayAnswers(list[number]);
             displayEquation("");
        }
        else{
            var equation = getEquation();
            var answer = getAnswers();
            if(equation != "") {
                equation = reverseFormat(equation);
                answer = answer+equation;
                if(this.id=="="){
                    var result=eval(answer)
                    displayAnswers("");
                    displayEquation(result);
                }
                else{
                    answer=answer+this.id;
                    displayEquation("");
                    displayAnswers(answer);
                }
            }
        }
    })
}



