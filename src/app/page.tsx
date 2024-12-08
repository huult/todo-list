'use client';
import Button from "@/component/ComponentButton";
import Input from "@/component/ComponentInput";
import "../css/ToDoList.css";

export default function Home() {
  return (
    <>
      <div className="header">
        <h1>My to do list</h1>
        <div className="button">
          <Input
            onChange={(e) => {
              console.log("changed");
              console.log(e);
            }}
          />
          <Button
            onClick={() => {
              console.log("click");
            }}
          />
        </div>
      </div>
    </>
  );
}
