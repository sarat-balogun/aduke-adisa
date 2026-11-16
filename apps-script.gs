// Paste this into Extensions > Apps Script in your Google Sheet.
var NOTIFY_EMAIL = "saratbalogun6@gmail.com";
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Submitted", "Name", "Attending", "Guests", "Message"]);
  }
  var p = e.parameter;
  sheet.appendRow([new Date(), p.name || "", p.attending || "", p.guests || "", p.message || ""]);
  var coming = p.attending === "Yes";
var body = p.name + (coming ? " will attend" : " cannot attend") +
  (coming ? " with " + p.guests + " guest(s) in total." : ".") +
  (p.message ? "\n\nMessage: " + p.message : "") +
  "\n\nSee all replies: " + SpreadsheetApp.getActiveSpreadsheet().getUrl();
MailApp.sendEmail(NOTIFY_EMAIL, "New RSVP: " + p.name + " (" + (coming ? "Yes" : "No") + ")", body);

return ContentService.createTextOutput("ok");
}
