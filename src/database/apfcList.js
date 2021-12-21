// import axios from 'axios';

// const getApftList = async = ()=> {
//     const res = await axios({
//         method: "GET",
//         url: "http://localhost:3120/products/apfc"
//     })
//     const data = await res.data
//     return data
// }

const apfcList = [
    {
        id: 1,
        type: '1 CT',
        noOfSteps: 4,
        model: "RGI4",
        price: 9950,
        discount: 45
    },
    {
        id: 2,
        type: '1 CT',
        noOfSteps: 6,
        model: "RGI6",
        price: 12600,
        discount: 45
    },
    {
        id: 3,
        type: '1 CT',
        noOfSteps: 9,
        model: "RGI9",
        price: 14700,
        discount: 45
    },
    {
        id: 4,
        type: '1 CT',
        noOfSteps: 12,
        model: "RGI12",
        price: 16700,
        discount: 45
    },
    {
        id: 5,
        type: '3 CT',
        noOfSteps: 9,
        model: "RGP9",
        price: 19700,
        discount: 45
    },
    {
        id: 6,
        type: '3 CT',
        noOfSteps: 12,
        model: "RGP12",
        price: 21950,
        discount: 45
    },
    {
        id: 7,
        type: '3 CT',
        noOfSteps: 15,
        model: "RGA15",
        price: 29990,
        discount: 45
    },
]

export default apfcList;