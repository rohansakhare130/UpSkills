const btnGenerateImage = document.getElementById("btnGenerateImage");
const imgRandom = document.getElementById("imgRandom");
const txtName = document.getElementById("txtName");
const name = document.getElementById("name");

btnGenerateImage.addEventListener("click", () => {
  let displayName = txtName.value || "Dorimon";
  console.log(displayName);
  imgRandom.src = `https://joesch.moe/api/v1/${displayName}`;
  name.textContent = `${displayName}`;
});
