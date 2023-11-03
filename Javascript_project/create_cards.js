// setting up the list
const card_image_list = [image1, image2, image3];


// for each item in the list of card image, set the 
// card_name to the current item in the list,
// and then set up a div that 
for (i in card_image_list, i < len(card_image_list), i++)
{
    // setting the current card name from the list
    let card_name = card_image_list[i];
    // creating a new div
    const div = document.createElement("div");
    // setting the id of the div created as the name of the card
    div.className = card_name;
    // adding the div to the HTML file
    <script src="card_flip.js"></script>
    document.appendChild(div);
}