export async function getAllMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if(!response.ok){
        throw new Error();
    }
    
    const dataResponse = await response.json();
    return dataResponse;
}

export async function makeOrder(items, userData){
    console.log(items, userData);
    const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            order: {
                customer : userData,
                items: items,
            }
        })
    });

    if(!response.ok){
        throw new Error();
    }

    const dataResponse = await response.json();
    return dataResponse;
}