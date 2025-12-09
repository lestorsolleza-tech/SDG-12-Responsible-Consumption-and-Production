function getFeedback() {
    return JSON.parse(localStorage.getItem("feedbackData") || "[]");
}

function saveFeedback(data) {
    localStorage.setItem("feedbackData", JSON.stringify(data));
}

function downloadFeedbackJSON() {
    const data = getFeedback();

    const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "feedback.json";
    a.click();

    URL.revokeObjectURL(url);
}

function viewFeedbackJSON() {
    console.table(getFeedback());
}

function clearFeedbackJSON() {
    if (confirm("Delete all feedback?")) {
        localStorage.removeItem("feedbackData");
    }
}
