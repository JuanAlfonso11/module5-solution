// script.js

// Define an array of category short names
const categoryShortNames = ["Lunch", "Dinner", "Sushi", "Drinks", "Desserts"];

// Function to load menu items for a given category
function loadMenuItems(categoryShortName) {
    // Code to load menu items for the given category from the server
    console.log("Loading menu items for category: " + categoryShortName);
}

// Function to get a random category short name
function getRandomCategoryShortName() {
    return categoryShortNames[Math.floor(Math.random() * categoryShortNames.length)];
}

// Function to handle click event on "Specials" tile
document.getElementById("specials").addEventListener("click", function() {
    const randomCategoryShortName = getRandomCategoryShortName();
    loadMenuItems(randomCategoryShortName);
});
