import * as PDFDocument from "pdfkit";
import { generate } from "./generate.pdf";

export async function generatePDF(firstName, lastName, imageBuffer) {
  return new Promise(async (resolve, reject) => {
    const doc: PDFDocument = new PDFDocument({ margin: 20, bufferPages: true });
    const buffers: any[] = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("error", (error) => {
      reject(error);
    });
    doc.on("end", async () => {
      resolve(Buffer.concat(buffers));
    });

    generate(firstName, lastName, imageBuffer, doc);
    doc.end();
  });
}
