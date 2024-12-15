// handle cookie banner
(() => {
  const $cookiesBanner = document.querySelector(".cookies-eu-banner");
  const $cookiesBannerButton = $cookiesBanner.querySelector("button");

  $cookiesBannerButton.addEventListener("click", () => {
    $cookiesBanner.remove();
  });
})();

const getCookie = (name) => {
  const value = " " + document.cookie;
  console.log("value", `==${value}==`);
  const parts = value.split(" " + name + "=");
  return parts.length < 2 ? undefined : parts.pop().split(";").shift();
};

const setCookie = function (name, value, expiryDays, domain, path, secure) {
  const exdate = new Date();
  exdate.setHours(
    exdate.getHours() +
    (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
  );
  document.cookie =
    name +
    "=" +
    value +
    ";expires=" +
    exdate.toUTCString() +
    ";path=" +
    (path || "/") +
    (domain ? ";domain=" + domain : "") +
    (secure ? ";secure" : "");
};

const $cookiesBanner = document.querySelector(".cookies-eu-banner");
const $cookiesBannerButton = $cookiesBanner.querySelector("button");
const $googleMaps = document.querySelector(".jo-contact-map");
const cookieName = "cookiesBanner";
const hasCookie = getCookie(cookieName);

if (!hasCookie) {
  $cookiesBanner.classList.remove("hidden");

}

$cookiesBannerButton.addEventListener("click", () => {
  setCookie(cookieName, "closed");
  $cookiesBanner.remove();
  $googleMaps.classList.remove("hidden");
});

// handle cookie consent / no consent for google maps
const consent = getCookie(cookieName);
if (consent !== "closed") {
  $googleMaps.classList.add("hidden");
} else {
  $googleMaps.classList.remove("hidden");
}