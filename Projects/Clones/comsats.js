function merit() {
    // Get the values from the input fields
    let obtainedSsc = parseFloat(document.getElementById('ssc-obt').value);
    let totalSsc = parseFloat(document.getElementById('ssc-total').value);
    let obtainedHssc = parseFloat(document.getElementById('hssc-obt').value);
    let totalHssc = parseFloat(document.getElementById('hssc-total').value);
    let obtainedNts = parseFloat(document.getElementById('nts-obt').value);
    let totalNts = parseFloat(document.getElementById('nts-total').value);

    // Check if values are valid (non-empty and greater than zero)
    if (isNaN(obtainedSsc) || isNaN(totalSsc) || isNaN(obtainedHssc) || isNaN(totalHssc) || isNaN(obtainedNts) || isNaN(totalNts)) {
        alert("Please fill all fields correctly!");
        return;
    }

    // Calculate the merit percentages
    let sscPer = (obtainedSsc / totalSsc) * 10;
    let hsscPer = (obtainedHssc / totalHssc) * 40;
    let ntsPer = (obtainedNts / totalNts) * 50;

    // Calculate the total merit
    let totalMerit = sscPer + hsscPer + ntsPer;

    // Display the total merit
    alert(`Your merit percentage is ${totalMerit.toFixed(2)}%`);
}