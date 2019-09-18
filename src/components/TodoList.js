import React, { useEffect } from "react";

const ToDoList = () => {
  const handleAddToDo = event => {
    event.preventDefault();
    console.log('handleAddToDo');
  };

  useEffect(() => {
    //download from API
  });

  return (
    <>
      <input placeholder="Wpisz zadanie" type="text" />

      <button onClick={handleAddToDo}>Dodaj zadanie</button>
    </>
  );
};

export default ToDoList;
