import * as PDFDocument from "pdfkit";
//import * as streamifier from "streamifier";
export async function generate(
  firstName,
  lastName,
  imageBuffer,
  doc: PDFDocument
) {
  generateHeader(doc, imageBuffer);
}
function generateHeader(doc, imageBuffer) {
  doc
    .image(imageBuffer, 50, 45, { width: 50 })
    .fillColor("#444444")
    .fontSize(20)
    .text("ACME Inc.", 110, 57)
    .fontSize(10)
    .text("123 Main Street", 200, 65, { align: "right" })
    .text("New York, NY, 10025", 200, 80, { align: "right" })
    .moveDown();
}
