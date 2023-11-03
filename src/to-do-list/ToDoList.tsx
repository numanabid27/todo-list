import { useEffect, useState } from "react";
import styles from "./toDoList.module.css";

export const ToDoList = () => {
  const [value, setValue] = useState("");
  const [isValue, setIsValue] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem("isValue") || "[]");
    return storedValue;
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsValue((prevState:any) => [...prevState, value]);
    setValue("");
  };

  const handleDelete = (index:any) => {
    const updatedValues = isValue.filter((_:any, i:any) => i !== index);
    setIsValue(updatedValues);
  };

  const handleEdit = (index:any) => {
    setValue(isValue[index]);
    setEditIndex(index);
  };

  useEffect(() => {
    localStorage.setItem("isValue", JSON.stringify(isValue));
  }, [isValue]);

  return (
    <>
      <div className={styles.todo_sec}>
        <form onSubmit={handleSubmit}>
          <label>User Name </label>
          <input
            type="text"
            value={value.substring(0, 15)}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            
            required
          />
         <button type="submit">
            {editIndex !== null ? "Edit Value" : "Add Value"}
          </button>
        </form>
        <ul>
        {isValue.map((item:any, index:any) => (
          <li key={index}>
            <span>{item}</span>
           <div className={styles.btn_row}>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
           </div>
          </li>
        ))}
      </ul>
      </div>
     
    </>
  );
};
