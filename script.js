
//Bring/import HTML elements to JS
const textInput = document.getElementById("text-input");
const button = document.getElementById("button");
const ItemsContainer = document.getElementById("item-container");


//Add a new Item to the list 
function addItemToList(){
    //Get the info that the user writes in the input
    let userText = textInput.value;
    
    //create p element in JS to store the users text
    let pElement = document.createElement('p');
    pElement.innerHTML = userText;
    pElement.className= "text"
    // create a new p element <p>HI!!!</p>

    //create a Button that says "Finished"
    let finishButton = document.createElement("button");
    finishButton.innerText = "Finished";
    finishButton.className="finish"
    //<button>Finish</button>

    //create a Button that says "Delete"
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className="delete"
    //<button>Delete</button>

    // Create a new container element to hold the item's text and buttons
    let ToDoElementContainer = document.createElement("div");

    // Make a class for the container to customize it
    ToDoElementContainer.className = "to-do-container";
    //<div></div>

    // Add the text element, "Finished" button, and "Delete" button to the container
    ToDoElementContainer.appendChild(pElement);
    ToDoElementContainer.appendChild(finishButton);
    ToDoElementContainer.appendChild(deleteButton);

    //Add event listeners to the buttons
    //Finish Button
    //If finished button is pressed then the text will get struck through, but if pressed again it will remove it  
    finishButton.addEventListener("click", function() {
        if (pElement.style.textDecoration === "line-through") {
            pElement.style.textDecoration = "none";
        } else {
            pElement.style.textDecoration = "line-through";
        }
    });

    //Delete Button
    // When the "Delete" button is clicked, remove the entire item from the list
    deleteButton.addEventListener("click", function(){
        ToDoElementContainer.remove();
    });

    // Add the new item to the list
    ItemsContainer.appendChild(ToDoElementContainer)
}


//+ Button event listener when being clicked
button.addEventListener("click", function() {
    // Get the user's input text
    let userText = textInput.value;

    // Check if the input field is not empty and if it is, dont add anything 
    if (userText.trim() !== "") {
        addItemToList();
    }
});