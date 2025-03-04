//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function () {
    // Get values from input fields
    let blockId = document.getElementById("block_id").value.trim();
    let color = document.getElementById("colour_id").value.trim();

    // Reset all grid elements to transparent
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Validate input and change color
    if (blockId >= 1 && blockId <= 9 && color) {
        document.getElementById(blockId).style.backgroundColor = color;
    } else {
        alert("Please enter a valid block ID (1-9) and a color.");
    }
});

// Reset button to clear all colors
document.getElementById("Reset").addEventListener("click", function () {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
    });
});
