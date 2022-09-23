export const slugFromName = (name) => {
  return name
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

export const kebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
};

export const downloadFile = (file) => {
  let ext;

  if (['bmp', 'jpg', 'jpeg', 'gif', 'png'].includes(file.fileExt)) {
    ext = 'image/' + file.fileExt;
  } else {
    ext = 'application/' + file.fileExt;
  }

  const linkSource = `data:${ext};base64,${file.fileName}`;
  const downloadLink = document.createElement('a');
  let fileName = kebabCase(file.title) + '_attachment.' + file.fileExt;

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};
