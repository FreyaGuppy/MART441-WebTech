
$.fn.lightMode = function() {
    
}


$(document).ready(function () {
    $("#sortHeaviest").click(function () {
        $.getJSON("meteoriteData.json", function (data) {
            // Convert mass to numbers and sort by mass in descending order
            data.sort((a, b) => parseFloat(b.mass) - parseFloat(a.mass));

            // Create an HTML string with sorted meteorite names and masses
            let output = "<ul>";
            data.forEach(meteorite => {
                if (meteorite.name && meteorite.mass) { // Ensure both values exist
                    output += `<li>${meteorite.name}: ${meteorite.mass}g</li>`;
                }
            });
            output += "</ul>";

            // Display the sorted data
            $("#meteoriteInformation").html(output);
        });
    });

    $("#sortLightest").click(function () {
        $.getJSON("meteoriteData.json", function (data) {
            // Convert mass to numbers and sort by mass in descending order
            data.sort((a, b) => parseFloat(a.mass) - parseFloat(b.mass));

            // Create an HTML string with sorted meteorite names and masses
            let output = "<ul>";
            data.forEach(meteorite => {
                if (meteorite.name && meteorite.mass) { // Ensure both values exist
                    output += `<li>${meteorite.name}: ${meteorite.mass}g</li>`;
                }
            });
            output += "</ul>";

            // Display the sorted data
            $("#meteoriteInformation").html(output);
        });
    });

    $("#sortAlphabetical").click(function () {
        $.getJSON("meteoriteData.json", function (data) {
            // Sort alphabetically by name
            data.sort((a, b) => a.name.localeCompare(b.name));
    
            // Start building the table with a header row
            let output = `
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Mass (g)</th>
                            <th>Class</th>
                            <th>Coordinates</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
    
            // Loop through sorted data and add table rows
            data.forEach(meteorite => {
                if (meteorite.name && meteorite.mass) { // Ensure values exist
                    let coords = meteorite.geolocation?.coordinates || ["N/A", "N/A"]; // Handle missing coordinates
                    
                    output += `
                        <tr>
                            <td>${meteorite.name}</td>
                            <td>${meteorite.id}</td>
                            <td>${meteorite.mass}</td>
                            <td>${meteorite.recclass}</td>
                            <td>${coords[1]}, ${coords[0]}</td> <!-- Latitude, Longitude -->
                        </tr>
                    `;
                }
            });
    
            output += `</tbody></table>`; // Close table
    
            // Display the sorted data
            $("#meteoriteInformation").html(output);
        });
    });

    $("#viewMode").click(function (){
        $("body").toggleClass("light-mode"); // Add or remove the class
    });
});