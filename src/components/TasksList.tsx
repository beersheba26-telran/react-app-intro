import React from "react";
import itemsService from "../serevices/TasksSerivideArrayImpl";
import { Item } from "../models/Item";
import Task from "./Task";

function TasksList() {
  const [items, setItems] = React.useState<Item[]>(itemsService.getItems());
  function delItem(itemId: number): void {
    itemsService.deleteItem(itemId);
    setItems(itemsService.getItems());
  }
  return <ol>
    {items.map((item) => 
      <li key={item.id}>
        <Task
          item={item}
          delFn={(itemId: number) => delItem(itemId)}
        />
      </li>
    )}
  </ol>;
}
export default TasksList;
