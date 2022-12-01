import * as PDFDocument from "pdfkit";
export async function generate(
  firstName,
  lastName,
  imageBuffer,
  doc: PDFDocument,
  dateFormatDDMMYYYY: string
) {
  generateHeader(doc);
  generateBody(doc, firstName, lastName, imageBuffer);
  generateRunningTitle(doc, dateFormatDDMMYYYY);
}
function generateHeader(doc) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text(`Test task working with files!`, 200, 57, { align: "midle" })
    .moveDown();
}
function generateBody(doc, firstName, lastName, imageBuffer) {
  doc
    .image(imageBuffer, 200, 210, { width: 400 })
    .fillColor("#444444")
    .fontSize(20)
    .text(`${firstName}`, 50, 300, { align: "left" })
    .text(`${lastName}`, 50, 325, { align: "left" })
    .moveDown();
}
function generateRunningTitle(doc: PDFDocument, dateFormatDDMMYYYY) {
  doc
    .fillColor("black")
    .fontSize(10)
    .text(`Date: ${dateFormatDDMMYYYY}`, 70, 750)
    .moveDown();
}
