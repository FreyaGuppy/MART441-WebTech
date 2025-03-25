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
            data.sort((a, b) => a.name.localeCompare(b.name));

            // Create an HTML string with sorted meteorite names and masses
            let output = "<ul>";
            data.forEach(meteorite => {
                if (meteorite.name && meteorite.mass) { // Ensure both values exist
                    output += `<li>${meteorite.name}<ul><li>ID: ${meteorite.id}</li><li>Mass: ${meteorite.mass}g</li><li>Class: ${meteorite.recclass}</li></ul>`;
                }
            });
            output += "</ul>";

            // Display the sorted data
            $("#meteoriteInformation").html(output);
        });
    });
});

/*
function fadeText(){
    $("#meteoriteInformation").fadeOut("slow").fadeIn("slow");
}
*/