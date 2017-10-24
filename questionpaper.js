var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [  ],
    [  ],
    [  ],
    [  ]
];
function _(x){
    return document.getElementById(x);
}
function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'> Next </button>";
}
function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos][5]){
        correct++;
    }
    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
$(document).ready(function() {
        //var options = {
        //    valueNames: ['einheit'],
        //    page: 13,
        //    plugins: [ListPagination({})]
        //}

        var list = new List('item-table', {
            valueNames: ['item'],
            page: 10,
            plugins: [ListPagination({})]
        });

        var i = 1;

        $('.next').on('click', function () {
            console.log("next");
            i++;
            list.show(i, 10);
        });

        $('.prev').on('click', function () {
            console.log("prev");
            i--;
            list.show(i, 10);
        });
    });