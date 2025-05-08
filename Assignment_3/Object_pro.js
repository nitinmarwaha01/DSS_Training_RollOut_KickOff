let car = {
    brand : "Toyota",
    model : "Fortuner",
    year :  2022,
    is_Electric : true
};

car.color = "Black";

car.is_Electric = false;

for(let key in car)
{
    console.log(key + ": " + car[key]);
}

let garage = [
    {
        brand : "Ford",
        model : "Mustang",
        year :  2021,
        is_Electric : true,
        color : "Red"
    },
    {
        brand : "Honda",
        model : "Civic",
        year :  2023,
        is_Electric : true,
        color : "Red"
    },
    {
        brand : "BMW",
        model : "320d",
        year :  2011,
        is_Electric : true,
        color : "Red"
    }
];

console.log(garage);

// bonus challange

function printGarageCars(garage)
{
    console.log("Garage Cars: ");
    for(let i =0;i<garage.length;i++)
    {
        console.log("Brand "+ garage[i].brand + ", Model "+garage[i].model);
    }
}