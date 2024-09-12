const url = document.getElementById("url");
const btn = document.getElementById("btn");
let QRCodeDiv = document.getElementById("qrcode");
const loading = document.getElementById("loading");

btn.onclick = () => {
  QRCodeDiv.innerHTML = "";
  QRCodeDiv.classList.remove("p-8", "rounded-md", "border");

 
  if (!url.value) {
    return false;
  }

  const img = document.createElement("img");
  img.classList.add("mx-auto");

 
  loading.classList.remove("hidden");

  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${url.value}`;

  img.onload = () => {

    loading.classList.add("hidden");

    QRCodeDiv.classList.add("p-8", "rounded-md", "border");

 
    QRCodeDiv.appendChild(img);
  };
};