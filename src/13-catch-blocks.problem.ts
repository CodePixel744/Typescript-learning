// import { expect, it } from "vitest";
// const tryCatchDemo = (state: "fail" | "succeed") => {
//   try {
//     if (state === "fail") {
//       throw new Error("Failure!");
//     }
//   } catch (e: any) {
//     return e.message;
//   }
// };

// it("Should return the message when it fails", () => {
//   expect(tryCatchDemo("fail")).toEqual("Failure!");
// });


import { expect, it } from "vitest";
const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  }
  catch (e) {
    return (e as Error).message;
  }
}
it("Should return this", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure");
})
