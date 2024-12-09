"use client";

import Button from "@/component/ComponentButton";
import Input from "@/component/ComponentInput";
import "../css/ToDoList.css";
import { useState } from "react";
import ToDoList from "@/component/TodoList";


export default function Home() {
  const [lists, setLists] = useState<{ text: string; completed: boolean }[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddList = () => {
    if (inputValue.trim() === "") {
      return;
    }
    setLists([...lists, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleInputChange = (val: string) => {
    setInputValue(val); 
  };

  const handleToggleCompleted = (index: number) => {
    const updatedLists = lists.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setLists(updatedLists);
  };

  const handleDeleteList = (index: number) => {
    const updatedLists = lists.filter((_, i) => i!== index);
    setLists(updatedLists);
  };

  return (
    <>
      <div className="header">
        <p className="">My to do list</p>
        <div className="button">
          <Input value={inputValue} onChange={handleInputChange} />
          <Button onClick={handleAddList} />
        </div>
      </div>
      <ToDoList lists={lists} onToggleCompleted={handleToggleCompleted} onDelete={handleDeleteList}/>
      
    </>
  );
}
