import { sampleFoods , sampleTags } from "../data";


export const getAll = async () => sampleFoods

export const search = async searchTerm => sampleFoods.filter(
    item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
);

export const getAllTags = async () => sampleTags;


export const getAllByTags = async tag => {
    if(tag === 'All') return getAll();
    return sampleFoods.filter(item => item.tags?.includes(tag))
}

