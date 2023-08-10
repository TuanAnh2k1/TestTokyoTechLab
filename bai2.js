function calGoldToPassLevel(m, d, k, c) {
    let monstersLeft = m;
    let currentDurability = d;
    let goldNeeded = 0;

    while (monstersLeft > 0) {
        if (currentDurability <= k) {
            if (goldNeeded < c) {
                return -1; // Not enough gold to fix items and pass the level
            } else {
                currentDurability = d;
                goldNeeded -= c;
            }
        }

        currentDurability = Math.max(currentDurability - k, 0); // Reduced durability, no sound
        monstersLeft--;
        goldNeeded += k;
    }

    return goldNeeded;
}

// Read input data from string
const input = "10 5 1 2"; // Replace with actual input
const [m, d, k, c] = input.split(' ').map(Number);

// Calculate and print the result
const goldNeeded = calGoldToPassLevel(m, d, k, c);
console.log(goldNeeded);
