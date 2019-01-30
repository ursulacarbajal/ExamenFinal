var students = [];

var shoppingCart = [];



function calculateSum(){

    var sum = 0;
    shoppingCart.forEach(student => {
        sum = sum + student.score;
        console.log(student);
    });


    return sum;
}

function loadDataGrid(){

    var i = 0;
    let dataList = document.getElementById("dataList");
    // let shoppingCart = document.getElementById("shoppingCart");
    
         
        // console.log(students[i]);


        i = i + 1; // Alternatively, use i++;
}
   


function displaySum()
{
    // var resultSection = document.getElementById("resultSection");
    // var paragraph = document.createElement("p");
    // paragraph.classList.add("badge"); // 2) Bootstrap classes
    // paragraph.classList.add("badge-info");

    total.innerText = "Sum: " + calculateSum();

    // resultSection.append(paragraph);

}

var IndexCont = 0;

function saveChanges(){

    IndexCont += 1

    var i = 0;
        let dataList = document.getElementById("dataList");
       // let shoppingCart = document.getElementById("shoppingCart");

        if (i < students.length)

        var listItem = document.createElement("section");
        listItem.classList.add("row");

        var id = document.createElement("div");
        id.classList.add("col-sm");
        // var  idIn = document.getElementById ("idInput");
        id.innerText =  IndexCont;
        
        var name = document.createElement("div");
        name.classList.add("col-sm");
        var  nameIn = document.getElementById ("idInput");
        name.innerText =  nameIn.options [nameIn.selectedIndex] .value;

        var score = document.createElement("div");
        score.classList.add("col-sm");
        var  scoreIn = document.getElementById("nameInput");
        score.innerText =  scoreIn.options [scoreIn.selectedIndex] .value;


        var total = parseInt(score.innerText) * parseInt(scoreInput.value)
 
        shoppingCart.push({
            id: IndexCont,
            name: name.innerText,
            score: total
        });
    
    
    dataList.appendChild(listItem);

    listItem.appendChild(id);
    listItem.appendChild(name);
    listItem.appendChild(score);

    //shoppingCart.appendChild(listPrice);
    // shoppingCart.push(listPrice);
    // listPrice.appendChild(score);
    


function refreshScores(){
    let dataList = document.getElementById("dataList");

    while (dataList.childElementCount > 1){
        dataList.removeChild(dataList.lastChild);
    }
    loadDataGrid();
   
}
}


function lista(){
    var idIn = document.getElementById ("idInput");
    var cont = 0;

    students.forEach(element => {
        var a = document.createElement('option')
        a.id = cont;
        a.innerText = element.name
        idIn.append(a)

        cont += 1

    });

}

function price(){

    var index = idInput.selectedIndex;

    precio.innerText = students[index].price

}


function Clear(){

    idInput.options.length = 0;
    precio.innerText = "";
    scoreInput.value = "";
    
 
}
