import { type Item } from "../models/Item";
export const interval = 1000
const timersConfig: Readonly<Item[]> = [
    {id: 1, city: 'Tel-Aviv',timeZone: 'Asia/Jerusalem'},
    {id: 2, city: 'Tokyo', timeZone: 'Asia/Tokyo'},
    {id: 3, city: 'New York', timeZone: 'America/New_York'},
    {id: 4, city: 'Paris', timeZone: 'Europe/Paris'},
]
export default timersConfig
