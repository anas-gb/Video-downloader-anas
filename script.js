async function download(platform) {
  const url = document.getElementById('urlInput').value;
  if (!url) {
    alert("Please paste a link!");
    return;
  }

  try {
    const response = await fetch("https://anasgb496.Backend-videodownloder.repl.co/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: url, platform: platform })
    });

    if (!response.ok) {
      throw new Error("Failed to download the video. Please try again.");
    }

    const blob = await response.blob();
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "video.mp4"; // You can dynamically change this based on the platform or video metadata
    a.click();

  } catch (error) {
    alert("An error occurred: " + error.message);
  }
}
