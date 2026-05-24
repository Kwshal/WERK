let entries = JSON.parse(localStorage.getItem("workJournal")) || [];

function calculateHours(start, end) {
    let startTime = new Date(`2000-01-01T${start}`);
    let endTime = new Date(`2000-01-01T${end}`);

    let diff = (endTime - startTime) / (1000 * 60 * 60);

    if (diff < 0) {
        diff += 24;
    }

    return diff.toFixed(2);
}

function saveData() {
    localStorage.setItem("workJournal", JSON.stringify(entries));
}

function renderEntries() {

    const body = document.getElementById("journalBody");
    const totalDisplay = document.getElementById("totalHours");

    body.innerHTML = "";

    let total = 0;

    entries.forEach((entry, index) => {

        total += Number(entry.hours);

        body.innerHTML += `
          <tr>
            <td>${entry.date}</td>
            <td>${entry.clockIn}</td>
            <td>${entry.clockOut}</td>
            <td>${entry.hours}</td>
          </tr>
        `;
    });

}

function addEntry() {

    const date = document.getElementById("date").value;
    const clockIn = document.getElementById("clockIn").value;
    const clockOut = document.getElementById("clockOut").value;

    if (!date || !clockIn || !clockOut) {
        alert("Fill all fields.");
        return;
    }

    const hours = calculateHours(clockIn, clockOut);

    entries.push({
        date,
        clockIn,
        clockOut,
        hours
    });

    saveData();
    renderEntries();

    document.getElementById("date").value = "";
    document.getElementById("clockIn").value = "";
    document.getElementById("clockOut").value = "";
}

function deleteEntry(index) {
    entries.splice(index, 1);
    saveData();
    renderEntries();
}

// renderEntries();

document.getElementById("months").addEventListener("change", () => {
    const selectedMonth = document.getElementById("months").value;
});


function daysAdder(startDate) {
    if (!startDate) return;

    // Accepts a date string (YYYY-MM-DD) or Date object
    let current = new Date(startDate);
    if (isNaN(current)) return;

    // Normalize to midnight
    current.setHours(0,0,0,0);

    const today = new Date();
    today.setHours(0,0,0,0);

    while (current <= today) {
        // Log in YYYY-MM-DD format
        const yyyy = current.getFullYear();
        const mm = String(current.getMonth() + 1).padStart(2, '0');
        const dd = String(current.getDate()).padStart(2, '0');
        console.log(`${yyyy}-${mm}-${dd}`);

        // increment one day
        current.setDate(current.getDate() + 1);
    }

