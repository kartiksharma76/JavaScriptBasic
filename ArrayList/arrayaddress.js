function arrayAddress() {
    let baseAddress = 100;
    let elementSize = 4;
    let Row = 8;
    let Column = 10;

    let i = 4;
    let j = 12;
    let lowerRowLimit = 2;
    let lowerColumnLimit = 9;

    // Corrected formula with * operator
    let Address = baseAddress + (j - lowerColumnLimit) + Row * (i - lowerRowLimit) + elementSize;
    console.log("Address of Z1(4,12) is: " + Address);
}

arrayAddress();
