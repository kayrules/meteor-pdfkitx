// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  var doc = new PDFDocument({size: 'A4', margin: 50});
  doc.fontSize(12);
  doc.text('PDFKit is simple', 10, 30, {align: 'center', width: 200});
  doc.write();
});
