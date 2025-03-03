// let's create an empty array. We will add to this later

var myViewFinderArray = new Array();

// this is the main ViewFinder class
class ViewFinder
{
    // the constructor requires only one title, the description, imagePath, etc.
    // we will create multiple objects from this class
    constructor(title, description, imagePath, author, date)
    {
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.author = author;
        this.date = date;
    }

    // this just returns the title concatenated with the string "Title"
    // keep in mind only one return statement can exist in a function
    toString()
    {
        return this.imagePath + "<br>" + this.title + " by "+ this.author + ", " + this.date + this.description;  
    }
}

// this function is called in the body of the HTML page so that the objects are created and added to the array myViewFinderArray
function initializeArray()
{
    // create the first object from the class ViewFinder
    var myViewFinder = new ViewFinder("Six Grandfathers", "This is what Mount Rushmore looked like before it was Mount Rushmore.", "images/rushmore.jpg", "unknown photographer", "1884");
    var myViewFinder1 = new ViewFinder("Street Kids", "This is the the only known photo from the first day of the Stonewall Riots. It appeared on the front page of The New York Daily News on Sunday, June 29, 1969. Here the 'street kids' who were the first to fight back against the police are seen.", "images/stonewall.jpg", "Joseph Ambrosini", "1969");
    var myViewFinder2 = new ViewFinder("Unequal Scenes: La Malinche", "In the area of La Malinche, the barrio meets the wealthy areas next door. This private school offers tennis, basketball, and a well maintained pool, whereas next door the barrio only has a misshapen soccer pitch.", "images/mexico.png", "Johnny Miller", "2019");
    var myViewFinder3 = new ViewFinder("Rest Energy", 'This is a photograph of a performance art piece of which one of the participants says, "In Rest Energy we actually hold one arrow on the weight of our body and arrow is pointing my heart. We have two small, little microphones on our hearts where we can hear the sounds of the heart beating. As our performance is progressing heart beats become more and more intense and it\'s just four minutes and ten seconds, for me it was, I tell you it was forever. So, it was really a performance about complete and total trust."', "images/restEnergy.jpg", "Marina Abromovic and Ulay", "1980");
    var myViewFinder4 = new ViewFinder("Fatu and Najin", "Fatu (left) and Najin (right) are the last two northern white rhinos left on the planet. They are both female and are a mother-daughter duo. The fate of the species now rest on assisted methods of reproduction.", "images/rhinos.avif", "Gurcharan Roopra", "2021");
    // add the first object to the array
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

}

// this function gets an object from the array and puts it into the element with the id title 
function accessInformation()
{
    // Get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    var selectedViewFinder = myViewFinderArray[randomNumber];

    // Get the elements where the image and text will be displayed
    var imageContainer = document.getElementById("imageContainer");
    var titleContainer = document.getElementById("title");

    // Clear previous content
    imageContainer.innerHTML = "";
    titleContainer.innerHTML = "";

    // Create an image element and set its attributes
    var imgElement = document.createElement("img");
    imgElement.src = selectedViewFinder.imagePath;
    imgElement.alt = selectedViewFinder.title;
    imgElement.style.maxWidth = "100%"; // Ensures the image scales properly

    // Set text content
    titleContainer.innerHTML = `<i>${selectedViewFinder.title}</i> by ${selectedViewFinder.author}, ${selectedViewFinder.date}<br><br>${selectedViewFinder.description}`;

    // Append the image to the container
    imageContainer.appendChild(imgElement);
}
