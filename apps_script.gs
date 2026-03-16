function doPost(e) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getActiveSheet();

  const data = JSON.parse(e.postData.contents);

  // Add header row automatically on first submission
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Campus",
      "Role",
      "Grade",
      "Teaching Quality",
      "Lesson Clarity",
      "Curriculum",
      "Comment"
    ]);
  }

  sheet.appendRow([
    new Date().toLocaleString(),
    data.campus   || "",
    data.q1       || "",
    data.q2       || "",
    data.q3       || "",
    data.q4       || "",
    data.q5       || "",
    data.comment  || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
