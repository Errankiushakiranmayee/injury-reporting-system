document.getElementById("injuryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let report = {
        name: document.getElementById("name").value,
        department: document.getElementById("dept").value,
        injury: document.getElementById("injury").value,
        date: document.getElementById("date").value,
        description: document.getElementById("desc").value
    };

    let reports = JSON.parse(localStorage.getItem("injuries")) || [];
    reports.push(report);
    localStorage.setItem("injuries", JSON.stringify(reports));

    document.getElementById("message").innerText =
        "Injury reported successfully!";

    document.getElementById("injuryForm").reset();
});
