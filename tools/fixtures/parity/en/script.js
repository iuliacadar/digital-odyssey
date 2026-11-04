//  ==========================================================================
//     MECANISM 01: FIXTURE MECHANISM
//  ==========================================================================
//  A comment written in English. Comments may differ between volumes.
const url = "https://example.com/en"; // '//' inside a string is CODE, not a comment.
/* A block comment
   spanning two lines. */
function answer() {
  return 1; // PLANTED: ro returns 2 -> must be reported
}
const site = "https://example.com"; // PLANTED: ro says .org -> must be reported
    const indented = true; // indentation differs in ro -> must NOT be reported
