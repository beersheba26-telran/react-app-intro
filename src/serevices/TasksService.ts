import { type Item } from "../models/Item";

export default interface TasksService {
    getItems(): Item[];
    addItem(item: Item):void,
    deleteItem(itemId: number): void
}