document.getElementById("change_button").addEventListener("click", function () {
    // Get values from input fields
    let blockId = document.getElementById("block_id").value.trim();
    let color = document.getElementById("colour_id").value.trim();

    // Reset all grid elements to transparent before applying new color
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Transparent
    });

    // Validate input and apply color
    if (blockId >= 1 && blockId <= 9 && color) {
        document.getElementById(blockId).style.backgroundColor = color;
    } else {
        alert("Please enter a valid block ID (1-9) and a color.");
    }
});

// ✅ Fixed: Reset Button Works Correctly
document.getElementById("reset_button").addEventListener("click", function () {
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Reset to transparent
    });
});
