let qrCodeInstance;

    function generateQRCode() {
      const input = document.getElementById("qr-input").value.trim();
      const qrContainer = document.getElementById("qrcode");
      const downloadBtn = document.getElementById("download-btn");

      if (!input) {
        alert("Por favor, insira algum texto ou URL.");
        return;
      }

      // Limpar QR anterior
      qrContainer.innerHTML = "";

      // Criar novo QR code
      qrCodeInstance = new QRCode(qrContainer, {
        text: input,
        width: 200,
        height: 200,
        correctLevel: QRCode.CorrectLevel.H,
      });

      
      setTimeout(() => {
        qrContainer.style.display = "block";
        downloadBtn.style.display = "inline-block";
      }, 300); 
    }

    function downloadQR() {
      const img = document.querySelector("#qrcode img") || document.querySelector("#qrcode canvas");
      if (!img) return;

      let url;
      if (img.tagName === "IMG") {
        url = img.src;
      } else {
        url = img.toDataURL("image/png");
      }

      const link = document.createElement("a");
      link.href = url;
      link.download = "qrcode.png";
      link.click();
    }