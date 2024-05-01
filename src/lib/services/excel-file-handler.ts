import fs from 'fs';
import * as xlsx from 'xlsx';

const convertFileToJSON = (filePath: string) => {
	return new Promise<unknown[]>((resolve, reject) => {
		const absolutePath = `${process.cwd()}/public${filePath}`;

		fs.readFile(absolutePath, (err, data) => {
			if (err) {
				reject(err);
			} else {
				const buffer = new Uint8Array(data).buffer;
				const workbook = xlsx.read(buffer, { type: 'buffer' });
				const [firstSheetName] = workbook.SheetNames;

        if (!firstSheetName) {
          reject('No sheet found in the file');
          return;
        }
				const worksheet = workbook.Sheets[firstSheetName];

        if (!worksheet) {
          reject('No worksheet found in the file');
          return;
        }
        
				const jsonData = xlsx.utils.sheet_to_json(worksheet);

				resolve(jsonData);
			}
		});
	});
};

export { convertFileToJSON };
