import axios from "axios";

export default class GamesService {
    static async getAll() {
        const response = await axios.get("https://646f869209ff19b120876c01.mockapi.io/rentcarapi/cars")
        return response.data
    }

    static async getById(id) {
        const response = await axios.get("https://646f869209ff19b120876c01.mockapi.io/rentcarapi/cars/" + id)
        return response;
    }
}