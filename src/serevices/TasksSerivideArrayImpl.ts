import { Item } from "../models/Item";
import TasksService from "./TasksService";

class TasksServiceArrayImpl implements TasksService {
    constructor(private items: Item[]){}
    getItems(): Item[] {
        return [...this.items]
    }
    addItem(item: Item): void {
        this.items.push(item)
    }
    deleteItem(itemId: number): void {
        const itemIn = this.items.findIndex(item => item.id === itemId)
        if(itemIn >= 0) {
            this.items.splice(itemIn, 1)
        }
    }
    
}
const itemsService: TasksService = new TasksServiceArrayImpl([{id: 123, name: "clean the room"},
    {id:124, name: "Learn React"}])
export default itemsService    