
async function download(platform) {
  const url = document.getElementById('urlInput').value;
  if (!url) {
    alert("Please paste a link!");
    return;
  }

  const response = await fetch("https://your-backend-url.onrender.com/download", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: url, platform: platform })
  });

  const blob = await response.blob();
  const a = document.createElement("a");
  a.href = window.URL.createObjectURL(blob);
  a.download = "video.mp4";
  a.click();
}
