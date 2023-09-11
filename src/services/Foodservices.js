import { sampleFoods } from "../data";


export const getAll = async () => sampleFoods

export const search = async searchTerm => sampleFoods.filter(
    item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );