export const downloadTxtFile = () => {
  const element = document.createElement("a");
  let data = document.querySelector(".w-md-editor-text-input").value;
  let work1 = data.split("\n");
  let title = work1
    .filter((el) => el.match(/title:/))
    .toString()
    .substring(7)
    .substring(1)
    .slice(0, -1);
  const file = new Blob([data], {
    type: "text/plain",
  });

  element.href = URL.createObjectURL(file);
  element.download = title + ".md";
  document.body.appendChild(element);
  element.click();
};

export const tempStorage = () => {
  let tempMkd = document.querySelector(".w-md-editor-text-input").value;
  window.localStorage.setItem("tempMkd", tempMkd);
};
