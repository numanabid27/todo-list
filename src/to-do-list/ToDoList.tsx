import { useState } from "react";
import styles from "./toDoList.module.css";

export const ToDoList = () => {
  const [value, setValue] = useState<any>('');
  const [isValue, setIsValue] = useState<any>([]);

  const handleSubmit = (e:any) =>{
    e.preventDefault();
    setIsValue((prevState:any) => [...prevState, value]);
    setValue(''); 
    console.log("...", isValue)
  }

  return (
    <>
      <div className={styles.todo_sec}>
        <form onSubmit={handleSubmit}>
          <label>User Name </label>
          <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} required/>
          <button type="submit">Add Value</button>
        </form>
      </div>
      <ul>
          {isValue.map((item:any, index:any) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </>
  );
};
