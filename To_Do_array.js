/** @format */

const ToDo_Inside = [
    {
        task: "Clean Bathroom",
        Time_Est: 20,
        Time_Took: null,
        Completed: true,
        Points: 30
    },
    {
        task: "Clean Room",
        Time_Est: 20,
        Time_Took: null,
        Completed: false,
        Points: null

    },
    {
        task: "Do Laundry",
        Time_Est: 60,
        Time_Took: null,
        Completed: true,
        Points: 60

    },
    {
        task: "Do Dishes",
        Time_Est: 10,
        Time_Took: null,
        Completed: false,
        Points: 9

    },
    {
        task: "Take out Trash",
        Time_Est: 20,
        Time_Took: null,
        Completed: false,
        Points: 12
    },
    {
        task: "Misc",
        Time_Est: 0,
        Time_Took: null,
        Completed: false,
        Points: null
    },
    
  ];

  const ToDo_Outside = [
    {
        task: "Mow Yard",
        Time_Est: 30,
        Time_Took: null,
        Completed: false,
        Points: 30
    },
    {
        task: "Shovel Snow",
        Time_Est: 90,
        Time_Took: null,
        Completed: false,
        Points: 60
    },
    {
        task: "Misc Yard Work",
        Time_Est: 0,
        Time_Took: null,
        Completed: false,
        Points: null
    },
    
  ];
  
  const ToDoInsideAPI = () => {
    return ToDo_Inside;
  };

  const ToDoOutsideAPI = () => {
    return ToDo_Outside;
  };
  
  
  