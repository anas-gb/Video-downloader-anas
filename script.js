async function download(platform) {
  const url = document.getElementById('urlInput').value;
  if (!url) {
    alert("Please paste a link!");
    return;
  }

  try {
    // Make the POST request to the backend
    const response = await fetch("https://anasgb496.Backend-videodownloder.repl.co/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: url, platform: platform })  // Passing platform if needed
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error("Failed to download the video. Please try again.");
    }

    // Convert the response to a blob (the video file)
    const blob = await response.blob();
    
    // Create a link to download the file
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);

    // Dynamically set the filename (you could modify this to use the video title, if available)
    a.download = "video.mp4"; // Change the filename if needed based on video metadata
    a.click();

    // Optional: Show a success message
    alert("Your download has started!");
  } catch (error) {
    // Handle any errors that occur during the request
    alert("An error occurred: " + error.message);
  }
}