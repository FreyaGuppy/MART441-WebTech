var myPictureBookArray = new Array();
var currentIndex = 0; // Track the current index

class PictureBook {
    constructor(imagePath, caption) {
        this.imagePath = imagePath;
        this.caption = caption;
    }

    toString() {
        return this.imagePath + "<br>" + this.caption;
    }
}

function initializeArray() {
    myPictureBookArray.push(new PictureBook("images/bigSmile.gif", "With uncontrollable thoughts come uncontrollable jealousies."));
    myPictureBookArray.push(new PictureBook("images/happy.webp", "Global decay hasn't even begun."));
    myPictureBookArray.push(new PictureBook("images/puter.jpeg", "Let people know that medieval torture is actually really cool."));
    myPictureBookArray.push(new PictureBook("images/sadEyes.jpg", "Becoming amazing at burning things demands passion."));
    myPictureBookArray.push(new PictureBook("images/sitPretty.jpeg", "Show your support for people whom you don't like."));
    myPictureBookArray.push(new PictureBook("images/sob.jpg", "Feel lonely. Or don't."));
    myPictureBookArray.push(new PictureBook("images/strangle.jpg", "Quit smiling and keep yourself prioritized."));
    myPictureBookArray.push(new PictureBook("images/sunglasses.webp", "Magick. Something that goes all the way to the top?"));
    myPictureBookArray.push(new PictureBook("images/sweaty.webp", "If you want inspirational quotes you will have to learn to accept evil."));
    myPictureBookArray.push(new PictureBook("images/today.jpeg", "Abuse your position and bamboozle people."));
}

function accessInformation() {
    var selectedPictureBook = myPictureBookArray[currentIndex];
    var imageContainer = $("#imageContainer");
    var titleContainer = $("#title");
    var fadeDuration = 1500;
    var moveDistance = 300;

    var currentImage = imageContainer.children("img");
    var currentTitle = titleContainer.children("i");

    // Ensure the image has a relative position for animation
    if (!currentImage.length) {
        imageContainer.html(`<img src="${selectedPictureBook.imagePath}" style="width: 400px; position: relative;">`);
        titleContainer.html(`<i style="position: relative;">${selectedPictureBook.caption}</i>`);
        return;
    }

    // Animate both the image and the title moving to the right and fading out
    currentImage.animate({ left: `+=${moveDistance}px`, opacity: 0 }, 200);
    currentTitle.animate({ left: `+=${moveDistance}px`, opacity: 0 }, 500, function () {
        // After animation, replace the content
        imageContainer.html(`<img src="${selectedPictureBook.imagePath}" style="width: 400px; position: relative; left: -${moveDistance}px; opacity: 0;">`);
        titleContainer.html(`<i style="position: relative; left: -${moveDistance}px; opacity: 0;">${selectedPictureBook.caption}</i>`);

        // Fade in and move the new image and title back to position
        var newImage = imageContainer.children("img");
        var newTitle = titleContainer.children("i");
        
        newImage.animate({ left: "0px", opacity: 1 }, 200);
        newTitle.animate({ left: "0px", opacity: 1 }, 500);
    });

    // Move to the next index, loop back to 0 if at the end
    currentIndex = (currentIndex + 1) % myPictureBookArray.length;
}

$(document).ready(function() {
    function animateShapes() {
        $("#circle1").css({ left: "0", display: "block" }).animate({
            left: '100%'
        }, 10000, function() {
            $("#square1").css({ left: "0", display: "block" }).animate({
                left: '100%'
            }, 10000, function() {
                $("#circle2").css({ left: "0", display: "block" }).animate({
                    left: "100%"
                }, 10000, function() {
                    $("#square2").css({ left: "0", display: "block" }).animate({
                        left: "100%"
                    }, 10000, function() {
                        $("#circle3").css({ left: "0", display: "block" }).animate({
                            left: "100%"
                        }, 10000, function() {
                            $("#square3").css({ left: "0", display: "block" }).animate({
                                left: "100%"
                            }, 10000, function() {
                                animateShapes();
                            });
                        });
                    });
                });
            });
        });
    }

    animateShapes();
});