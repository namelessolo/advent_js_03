const keys = document.querySelectorAll(".keys");

keys.forEach((key, index) =>
  key.addEventListener("click", () => {
    const audio = new Audio(`./audio/key-${index}.mp3`);
    audio.play();
  })
);
