import * as PDFDocument from "pdfkit";

export async function generate(
  firstName: string,
  lastName: string,
  imageBuffer: Buffer,
  doc: PDFDocument,
  dateFormatDDMMYYYY: string
) {
  generateHeader(doc);
  generateBody(doc, firstName, lastName, imageBuffer);
  generateRunningTitle(doc, dateFormatDDMMYYYY);
}
function generateHeader(doc: PDFDocument) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text(`Test task working with files!`, 200, 57, { align: "midle" })
    .moveDown();
}
function generateBody(
  doc: PDFDocument,
  firstName: string,
  lastName: string,
  imageBuffer: Buffer
) {
  doc
    .image(imageBuffer, 200, 210, { width: 400 })
    .fillColor("#444444")
    .fontSize(20)
    .text(`${firstName}`, 50, 300, { align: "left" })
    .text(`${lastName}`, 50, 325, { align: "left" })
    .moveDown();
}
function generateRunningTitle(doc: PDFDocument, dateFormatDDMMYYYY: string) {
  doc
    .fillColor("black")
    .fontSize(10)
    .text(`Date: ${dateFormatDDMMYYYY}`, 70, 750)
    .moveDown();
}
