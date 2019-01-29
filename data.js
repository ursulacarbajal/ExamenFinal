var students = [
{"id":"001", "name":"bed","score":225.0},
{"id":"002", "name":"bench","score":29.99},
{"id":"003", "name":"chair","score":9.99},
{"id":"004", "name":"couch","score":50.0},
{"id":"005", "name":"pillow","score":5.0}
];


// function calculateSum(){

//     var sum = 0;
//     var sum = document.getElementById("[scoreIn.selectedIndex] .value");
//     return sum;
// }

function calculateSum(){

    var sum = 0;
    students.forEach(student => {
        sum = sum + student.score;
        console.log(student);
    });


    return sum;
}



function loadDataGrid(){

    var i = 0;
    let dataList = document.getElementById("dataList");
    
         
        // console.log(students[i]);


        i = i + 1; // Alternatively, use i++;
}
   


function displaySum()
{
    var resultSection = document.getElementById("resultSection");
    var paragraph = document.createElement("p");
    paragraph.classList.add("badge"); // 2) Bootstrap classes
    paragraph.classList.add("badge-info");

    paragraph.innerText = "Sum: " + calculateSum();

    resultSection.appendChild(paragraph);

}
function saveChanges(){

    var i = 0;
        let dataList = document.getElementById("dataList");

        if (i < students.length)

        var listItem = document.createElement("section");
        listItem.classList.add("row");

        var id = document.createElement("div");
        id.classList.add("col-sm");
        var  idIn = document.getElementById ("idInput");
        id.innerText =  idIn.options [idIn.selectedIndex] .value;
        
        var name = document.createElement("div");
        name.classList.add("col-sm");
        var  nameIn = document.getElementById ("nameInput");
        name.innerText =  nameIn.options [nameIn.selectedIndex] .value;

        var score = document.createElement("div");
        score.classList.add("col-sm");
        var  scoreIn = document.getElementById ("scoreInput");
        score.innerText =  scoreIn.options [scoreIn.selectedIndex] .value;



        students.push({
            id: idInput,
            name: name.innerText,
            score: parseInt(score.innerText)
        });
    // console.log(students)
    
    dataList.appendChild(listItem);

    listItem.appendChild(id);
    listItem.appendChild(name);
    listItem.appendChild(score);
    
    // var jsonData = document.getElementById("jsonData");
    //     jsonData.innerHTML =("<h3>JSON</h3>");
    //     jsonData.innerHTML +=("<pre class='alert alert-secondary'>"); //Bootstrap class
    //     jsonData.innerHTML +=(JSON.stringify(students, undefined, 2));
    //     jsonData.innerHTML +=("</pre>");
    //     jsonData.innerHTML +=("<br/>");
    // }

function refreshScores(){
    let dataList = document.getElementById("dataList");

    while (dataList.childElementCount > 1){
        dataList.removeChild(dataList.lastChild);
    }
    loadDataGrid();
}
}
