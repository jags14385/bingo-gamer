const PDFDocument = require('pdfkit');
const fs = require('fs');

function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
}

function createBingoFile(fileNumber) {
    // Create a document
    const doc = new PDFDocument();

    // File Name for PDF
    doc.pipe(fs.createWriteStream('output-'+fileNumber+'.pdf'));

    doc.rect(100,100,500,500);
    doc.moveTo(200,100).lineTo(200,600);
    doc.moveTo(300,100).lineTo(300,600);
    doc.moveTo(400,100).lineTo(400,600);
    doc.moveTo(500,100).lineTo(500,600);
    doc.moveTo(600,100).lineTo(600,600);

    doc.moveTo(100,200).lineTo(600,200);
    doc.moveTo(100,300).lineTo(600,300);
    doc.moveTo(100,400).lineTo(600,400);
    doc.moveTo(100,500).lineTo(600,500);

    doc.stroke();
    const bingo= ['B','I','N','G','O'];

    for(row = 0; row < 5; row++){
        doc.fontSize(35).text(bingo[row],140 + 100 * row,50);
        for(column = 0 ; column < 5; column++){
        doc
        .fontSize(25)
        .text(between(1,100), 100 + 100 * (column) , 120+100 * row)
        }
    }

    // Finalize PDF file
    doc.end();
}

const numFiles = 1;
for(ctr=0;ctr<numFiles;ctr++) {
    createBingoFile(ctr);
}