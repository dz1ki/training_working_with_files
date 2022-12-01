import * as http from "http";

export async function getImage(urlImage: string): Promise<Buffer> {
  return new Promise((resolve) => {
    http.get(urlImage, (response) => {
      const body: Buffer[] = [];
      response
        .on("data", (chunk: Buffer) => {
          body.push(chunk);
        })
        .on("end", () => {
          resolve(Buffer.concat(body));
        });
    });
  });
}
