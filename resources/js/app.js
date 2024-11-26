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
  const stories = document.getElementsByClassName("more");
  for (const story of stories) {
    story.style.display = "flex";
  }
}

// handle less button
function showLessAboutUs() {
  const stories = document.getElementsByClassName("more");
  for (const story of stories) {
    story.style.display = "none";
  }
}

// show gallery button
function showGallery() {
  const gallery = document.getElementsByClassName("jo-stories-gallery")[0];
  if (gallery) {
    const showBtn = document.getElementsByClassName("jo-gallery-btn show")[0];
    showBtn.style.display = "none";
    const hideBtn = document.getElementsByClassName("jo-gallery-btn hide")[0];
    hideBtn.style.display = "inline-block";
  }
  // other galleries
  const elements = document.getElementsByClassName("jo-gallery-more");
  for (const element of elements) {
    element.style.display = "flex";
  }
}

  // hide more button
function hideGallery() {
  const gallery = document.getElementsByClassName("jo-stories-gallery")[0];
  if (gallery) {
    const showBtn = document.getElementsByClassName("jo-gallery-btn show")[0];
    showBtn.style.display = "inline-block";
    const hideBtn = document.getElementsByClassName("jo-gallery-btn hide")[0];
    hideBtn.style.display = "none";
  }
  // other galleries
  const elements = document.getElementsByClassName("jo-gallery-more");
  for (const element of elements) {
    element.style.display = "none";
  }
}

// handle show news button
function showNews() {
  const list = document.getElementsByClassName("jo-news-list")[0];
  list.style.display = "flex";
  const showBtn = document.getElementsByClassName("jo-news-btn show")[0];
  showBtn.style.display = "none";
  const hideBtn = document.getElementsByClassName("jo-news-btn hide")[0];
  hideBtn.style.display = "inline-block";
}

// handle hide news button
function hideNews() {
  const list = document.getElementsByClassName("jo-news-list")[0];
  list.style.display = "none";
  const showBtn = document.getElementsByClassName("jo-news-btn show")[0];
  showBtn.style.display = "inline-block";
  const hideBtn = document.getElementsByClassName("jo-news-btn hide")[0];
  hideBtn.style.display = "none";
}
