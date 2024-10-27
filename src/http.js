export async function getAllMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if(!response.ok){
        throw new Error();
    }
    
    const dataResponse = await response.json();
    return dataResponse;
}   