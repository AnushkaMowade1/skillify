const searchBar = document.getElementById("searchBar");
const suggestionsList = document.getElementById("suggestionsList");

const suggestions = [
    "webdevelopment",
   "communication",
   "datascience",
   "itcertification",
   "leadership",

];

// Event listener for input
searchBar.addEventListener("input", function () {
    const query = searchBar.value.toLowerCase();
    console.log("Input query: ", query); // Debugging line to see the query value

    suggestionsList.innerHTML = ""; // Clear previous suggestions

    if (query) {
        // Filter suggestions based on query
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));
        console.log("Filtered Suggestions: ", filteredSuggestions); // Debugging line

        // Display filtered suggestions
        filteredSuggestions.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            li.onclick = function () {
                searchBar.value = item;  // Set the clicked suggestion as the input value
                suggestionsList.innerHTML = "";  // Clear the suggestions
            };
            suggestionsList.appendChild(li);
        });

        if (filteredSuggestions.length > 0) {
            suggestionsList.style.display = "block"; // Show the suggestions list if there are any
        } else {
            suggestionsList.style.display = "none"; // Hide suggestions if no matching items
        }
    } else {
        suggestionsList.style.display = "none"; // Hide the suggestions if the input is empty
    }
});

// Hide suggestions when clicking outside the search bar
document.addEventListener("click", function (e) {
    if (!searchBar.contains(e.target)) {
        suggestionsList.style.display = "none";
    }
});

// Function to perform search and redirect
function performSearch() {
    const searchQuery = searchBar.value.trim().toLowerCase();
    const pageName = searchQuery.replace(/\s+/g, '-'); // Replace spaces with hyphens for page name

    // Check if the page exists
    const validPages = suggestions.map(suggestion => suggestion.toLowerCase().replace(/\s+/g, '-'));
    
    if (validPages.includes(pageName)) {
        window.location.href = `./courses/${pageName}.html`;  // Redirect to the corresponding page
    } else {
        alert("No matching page found!");
    }
}
 // Get the current year
 const currentYear = new Date().getFullYear();

 // Set the current year in the span with id "currentYear"
 document.getElementById('currentYear').textContent = currentYear;