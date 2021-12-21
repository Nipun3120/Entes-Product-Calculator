import axios from "axios"

export const CATEGORY_1CT = []
export const CATEGORY_3CT = []
export const KVAR_RATING = []

export const getRating = async ()=> {
    const res = await axios({
        method: 'GET',
        url: 'http://localhost:3120/choice-fields/kvar-rating'
    });
    const data = await res.data;
    data.map(item=> KVAR_RATING.push(item))
}

export const oneCtSteps = async()=> {
    const res = await axios({
        method: 'GET',
        url: 'http://localhost:3120/choice-fields/category-1ct-steps'
    });
    const data = await res.data;
    data.map(item=> CATEGORY_1CT.push(item))    
}
export const threeCtSteps = async()=> {
    const res = await axios({
        method: 'GET',
        url: 'http://localhost:3120/choice-fields/category-3ct-steps'
    });
    const data = await res.data;
    data.map(item=> CATEGORY_3CT.push(item))    
}
