/** @format */
let todo_list;

// all console logs will be commented out when i know they work "////"

const setup = () => {
    ///console.log("Setup Start");
    // 1. Create a 2px solid black border around the login box
    $(".access").css({ border: "2px solid black" });
    // 2. Hide li tags on the nav bar 
    $("nav ul li").hide();
    // 3. Add event handler for login button so login function is called
    $("#login").on("click", login);
};

const authOK = (userName, userPasscode) => {
    ////console.log("in authOK")
    // 1. Add a check : pass back true if the password is "pi" and the username is "timo", otherwise false
    // Note: && is the logical AND operator in JavaScript
    if (userName == "timo" && userPasscode == "pi") {
        ////console.log("true");
        return true
    }
    else {
        ////console.log("false");
        return false //Change during testing
    }
};

const login = () => {
    ////console.log("Loged In");
    //  Set variable, userName, to the content of the text box with id of id_Name
    let userName = document.querySelector("#id_Name").value;
    ////console.log(userName)
    //  Set variable, userPasscode, to the content of the text box with id of id_Passcode
    let userPasscode = document.querySelector("#id_Passcode").value;
    ////console.log(userPasscode)
    //  Use function authOK with userName and userPasscode- 
    if (authOK(userName, userPasscode) == true) { //       if the return is true show the li tags in the nav bar
      $("nav li").show();
      //hide the element with class of access and the log in prompt header
      $(".wrapper .access").hide();
      $("header h2").hide();
      //use jQuery to create an H3 tag, with content of
      nameStr = $(`<h3>Welcome, "${userName.toUpperCase()}" the account handler!</h3>`);
      //    "Welcome," whatever the user name is, and "account handler!"
      //Store the H3 tag reference (above) in variable nameStr.
    }else{
        alert(`Username or Password is incorrect. User is: timo, Pass is: pi`);
    };
  
    $("header").append(nameStr);
    //Now add this nameStr H3 reference to the header of the document.
    $("#Inside").on("click", createPanel);
    //Add a click hander for the Inside button, and use function createPanel as the handler
    $("#Outside").on("click", createPanel);
    //Add a click hander for the Outside button, and use function createPanel as the handler
    $("#Calc").on("click", createPanelTotaler);
    //Add a click hander for the Outside button, and use function createPanel as the handler
};

const createPanel = (event, index) => {
    // !!! Display the correct panel, there is a different one for Inside, Outside, link
    // !!! Use .html to create the content
    // !!! Examine, using the console - check the location
    let panel_class = event.target.id; //Getting the event ID. event is the action ie clicking the button
    ////console.log(`panel_class is: ${panel_class}`);
    ////console.log(event);
    $(".ToDo_List").html(`<div class="${panel_class}"</div>`);
    let area = $(`.ToDo_List .${panel_class}`);
    console.log(panel_class);

    // !!! Add the ToDo_List to the div of class described by panel_class, inside the element of class todo_list
    todo_list = (panel_class == "Inside") ? ToDoInsideAPI() : ToDoOutsideAPI();
    console.log(todo_list);
    
    todo_list.forEach((todo, index) => {
        ///console.log(todo);
        let todoListLine = $(`
            <div class="displayLine">
                <div class="Info">
                    ${todo.task} has been completed: ${todo.Completed}
                </div>
                <div class="CRUD_Buttons">
                    <button class="view">Read</button>
                    <button class="update">Update</button>
                    <button class="delete">Delete</button>
                    <button class="duplicate">Duplicate</button>
                </div>
            </div>
            <div class="ShowInfo" id="ShowInfo${index}"></div>
        `);
        ////console.log("Created todolist line : ",todoListLine);
        ////console.log(todo.task);
        area.append(todoListLine);
    }); 


  // This is an example of the use of the target object, a special object in jQuery
  // The target object identifies the element receiving the event.
  //The "e" stands for event
  $(".displayLine button").on("click", (e) => {
    const target = $(e.target);
    // Examine the target object - this will give the class of the item
    //console.log(`ERROR!!!! =`, target);
    console.log(target[0]);
    handler(target[0]);
  });

};

const createPanelTotaler = (event, index) => {
    // !!! Display the correct panel, there is a different one for Totaling time, and points
    // !!! Use .html to create the content
    // !!! Examine, using the console - check the location
    let panel_class = event.target.id; //Getting the event ID. event is the action ie clicking the button
    ////console.log(`panel_class is: ${panel_class}`);
    ////console.log(event);
    $(".ToDo_List").html(`<div class="${panel_class}"</div>`);
    let area = $(`.ToDo_List .${panel_class}`);
    console.log(panel_class);

    let TotalingLine = $(`
        <div class="displayLine">
            <div class="Info">
                Display all amounts(Read). Display Total(Total).
            </div>
            <div class="CRUD_Buttons">
                <button class="Alltotals">Read</button>
                <button class="Finaltotal">Total</button>
            </div>
        </div>
        <div class="ShowInfo" id="ShowInfoTotals"></div>
    `);
    ////console.log("Created todolist line : ",todoListLine);
    ////console.log(todo.task);
    area.append(TotalingLine);


  // This is an example of the use of the target object, a special object in jQuery
  // The target object identifies the element receiving the event.
  //The "e" stands for event
  $(".displayLine button").on("click", (e) => {
    const target = $(e.target);
    // Examine the target object - this will give the class of the item
    //console.log(`ERROR!!!! =`, target);
    console.log(target[0]);
    handler(target[0]);
  });

};


const handler = (element) => {
    //console.log(element);
    //console.log(`element: ${element}, element name ${element.className}`);
    let elementClass = element.className;
    //console.log(elementClass); // does not like elementClass
    //console.log(`error 1 part 1: ${elementClass}`)
    //console.log(`error 1 part 2: ${element}`)
    let indexOftodo = $(`button.${elementClass}`).index(element); //Error location
    //console.log(indexOftodo);
    //console.log(todo_list[indexOftodo]);
    if (elementClass == "view") {
        console.log("View called");
        viewHandler(indexOftodo);
    } else if ((elementClass == "update")) {
        console.log("update called");
        updateHandler(indexOftodo);
    } else if (elementClass == "delete") {
        console.log("removed called");
        removeHandler(indexOftodo);
    }else if (elementClass == "duplicate") {
        console.log("duplicate called");
        duplicateHandler(indexOftodo);
    }
    else if (elementClass == "Alltotals") {
        console.log("All Totals called");
        AllTotalsHandler(indexOftodo);
    }
    else if (elementClass == "Finaltotal") {
        console.log("Final Total called");
        FinalTotalHandler(indexOftodo);
    }
};

// Create content from data, for todo in list. Display.
const viewHandler = (index) => {
    // Define the info variable
    let info = $(`#ShowInfo${index}`); // Target the specific ShowInfo box

    // Add the details to the display area
    info.html(
        `
        ${todo_list[index].task} has been completed: ${todo_list[index].Completed}. The time estimedted is: ${todo_list[index].Time_Est}. 
        The amount of time taken is: ${todo_list[index].Time_Took}. Points apon compleation is: ${todo_list[index].Points}
        <button class="close">X</button>
        `
    );

    info.find(".close").on("click", () => {
        setTimeout(function () {
            // Use .html to reset the content
            info.html("");
        }, 1000);
    });
};

const updateHandler = (index) => {
    console.log("Update Function started for index:", index);
    let info = $(`#ShowInfo${index}`); // Target the specific ShowInfo box
    console.log("Targeting ShowInfo box:", info.get());
    console.log("Targeting ShowInfo box HTML:", info.html());

    // Populate the info div with input fields and a save button
    info.html(`
        Task name: <input id="task_name" value="${todo_list[index].task}">
        Time Estimation: <input id="Time_Est" value="${todo_list[index].Time_Est}">
        Time Taken: <input id="Time_Took" value="${todo_list[index].Time_Took}">
        Completed: 
        <select id="Completed">
            <option value="true" ${todo_list[index].Completed ? 'selected' : ''}>True</option>
            <option value="false" ${!todo_list[index].Completed ? 'selected' : ''}>False</option>
        </select>
        Points given: <input id="Points" value="${todo_list[index].Points}">
        <button class="save">Save</button>
    `);

    // Attach event listener to the save button
    info.find(".save").on("click", () => {
        console.log("Save button clicked");
        // Update the todo_list with new values
        todo_list[index].task = $("#task_name").val();
        todo_list[index].Time_Est = $("#Time_Est").val();
        todo_list[index].Time_Took = $("#Time_Took").val();
        todo_list[index].Completed = $("#Completed").val() === 'true';
        todo_list[index].Points = $("#Points").val();
        console.log("Updated todo_list:", todo_list[index]);

        // Clear the info div after saving
        setTimeout(function () {
            info.html("");
        }, 1000);
        createPanel({ target: { id: "Inside" } }); // Refresh the panel
    });
};

const removeHandler = (index) => {
    console.log("Removed");
    todo_list.splice(index, 1);
    createPanel({ target: { id: "Inside" } }); // Refresh the panel
};

const duplicateHandler = (index) => {
    console.log("Duplicate called for index:", index);

    // Clone the item
    let clonedItem = { ...todo_list[index] };

    // Insert the cloned item back into the list
    todo_list.splice(index + 1, 0, clonedItem);

    console.log("Duplicated item:", clonedItem);
    console.log("Updated todo_list:", todo_list);

    // Refresh the panel
    createPanel({ target: { id: "Inside" } });
};

const AllTotalsHandler = () => {
    // Define the info variable
    let info = $("#ShowInfoTotals"); // Target the specific ShowInfo box for totals

    // Clear any existing content
    info.html("");

    // Add a header for the list
    info.append("<h3>Task Points</h3>");

    // Get the todo lists from both APIs and concatenate them
    let insideList = ToDoInsideAPI();
    let outsideList = ToDoOutsideAPI();
    todo_list = [...insideList, ...outsideList]; // Combine both lists

    // Iterate through the todo_list and display each task with its points
    todo_list.forEach((todo) => {
        info.append(`
            <p>${todo.task}: ${todo.Points} points</p>
        `);
    });

    // Optionally, add a close button to clear the info
    info.append(`
        <button class="close">Close</button>
    `);

    info.find(".close").on("click", () => {
        setTimeout(function () {
            // Use .html to reset the content
            info.html("");
        }, 1000);
    });
};

const FinalTotalHandler = () => {
    // Define the info variable
    let info = $("#ShowInfoTotals"); // Targeting the specific ShowInfo box for totals

    // Clear any existing content
    info.html("");
    info.append("<h3>Total Points</h3>");

    // Get the todo lists from both APIs and combine them
    let insideList = ToDoInsideAPI();
    let outsideList = ToDoOutsideAPI();
    todo_list = [...insideList, ...outsideList]; // Combine both lists

    // Filtering out tasks with null points and sum the points
    let totalPoints = todo_list
        .filter(todo => todo.Points !== null)
        .reduce((sum, todo) => sum + todo.Points, 0);

    // Display the total points
    info.append(`
        <p>Total Points: ${totalPoints}</p>
    `);

    // Optionally, add a close button to clear the info
    info.append(`
        <button class="close">Close</button>
    `);

    info.find(".close").on("click", () => {
        setTimeout(function () {
            // Use .html to reset the content
            info.html("");
        }, 1000);
    });
};

$(document).ready(setup);