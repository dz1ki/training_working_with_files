import * as PDFDocument from "pdfkit";
import { generate } from "./generate.pdf";
import { getFormatedDate } from "./helper";

export async function generatePDF(
  firstName: string,
  lastName: string,
  imageBuffer: Buffer
): Promise<Buffer> {
  return new Promise(async (resolve, reject) => {
    const doc: PDFDocument = new PDFDocument({ margin: 20, bufferPages: true });
    const buffers: Buffer[] = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("error", (error) => {
      reject(error);
    });
    doc.on("end", async () => {
      resolve(Buffer.concat(buffers));
    });
    const dateFormatDDMMYYYY = getFormatedDate();
    generate(firstName, lastName, imageBuffer, doc, dateFormatDDMMYYYY);
    doc.end();
  });
}
