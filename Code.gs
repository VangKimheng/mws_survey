function doPost(e) {

var sheet = SpreadsheetApp.openById("PASTE_SHEET_ID").getSheetByName("Sheet1");

var data = [
new Date(),
e.parameter.role,
e.parameter.grade,
e.parameter.q1,
e.parameter.q2,
e.parameter.q3,
e.parameter.comments
];

sheet.appendRow(data);

return ContentService
.createTextOutput("Success")
.setMimeType(ContentService.MimeType.TEXT);

}