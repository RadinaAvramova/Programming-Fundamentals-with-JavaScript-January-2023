function extract(str) {
    let fileInfo = str.split("\\").pop();
    let name = fileInfo.substring(0, fileInfo.lastIndexOf("."));
    let ext = fileInfo.substring(fileInfo.lastIndexOf(".") + 1);
    console.log(`File name: ${name}\nFile extension: ${ext}`);
}

function extractFile(path) {
  let file = path.substring(path.lastIndexOf("\\") + 1);
  let fileName = file.substring(0, file.lastIndexOf("."));
  let fileExtension = file.substring(file.lastIndexOf(".") + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');