// handle accordion clicks
function toggleAcc(id) {
  // get radiobutton for accordion toggle
  const acc = document.getElementById(id);
  // if the acccordion panel is already open, find the accordion body element and hide it if needed
  if (acc.checked) {
    let nextSibling = acc.nextElementSibling;
    while(nextSibling) {
      if (!!nextSibling.classList && nextSibling.classList.contains("acc-body")) {
        if (nextSibling.style.display === "block") {
          nextSibling.style.display = "none";
        } else {
          nextSibling.style.display = "block";
          // make sure all other panels are closed as well
          const otherPanels = document.getElementsByClassName("acc-body");
          for (const panel of otherPanels) {
            if (panel !== nextSibling) {
              panel.style.display = "none";
            }
          }
        }
        return;
      }
      nextSibling = nextSibling.nextElementSibling;
    }
  }
}

// handle more button
function showMoreAboutUs() {
  console.log("--- show more pressed ---");
  const stories = document.getElementsByClassName("more");
  console.log("number of additional stories: " + stories.length);
  for (const story of stories) {
    story.style.display = "flex";
    console.log("stories set to visible");
  }
}

// handle less button
function showLessAboutUs() {
  console.log("--- show less pressed ---");
  const stories = document.getElementsByClassName("more");
  console.log("number of additional stories: " + stories.length);
  for (const story of stories) {
    story.style.display = "none";
    console.log("stories set to hidden");
  }
}

