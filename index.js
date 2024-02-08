import fs from 'node:fs';
import os from 'node:os';
import { parse } from 'csv-parse';
// Note, the `stream/promises` module is only available
// starting with Node.js version 16
import { finished } from 'stream/promises';


// Read and process the CSV file
const processFile = async () => {
    const records = [];
    const parser = fs
      .createReadStream(`./asset_matching.csv`)
      .pipe(parse({
      // CSV options if any
      }));
    parser.on('readable', function(){
      let record; while ((record = parser.read()) !== null) {
      // Work with each record
        records.push(record);
      }
    });
    await finished(parser);
    return records;
};

const result = await processFile();

console.log(result);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

const randomNumber = getRandomInt(1,4)