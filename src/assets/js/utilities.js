function getMobileOS() {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    return "Android";
  } else if (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  ) {
    return "iOS";
  }
  return "Other";
}

export function myFunction() {
  console.log("whatever");
}

function scrollIntoView() {
  const urlParams = new URLSearchParams(window.location.search);
  const parameter = urlParams.get("section");
  const element = parameter && document.getElementById(parameter);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  scrollIntoView();

  const map = document.getElementById("contact-page-map-link");
  if (map) {
    let mapLink;
    const osType = getMobileOS();

    if (osType && osType === "iOS") {
      // If the user is on an iPhone make the map link to Apple maps
      mapLink =
        "https://maps.apple.com/directions?destination=199%20Armour%20Dr%20NE%2C%20199%20Armour%20Dr%20NE%2C%20Atlanta%2C%20GA%20%2030324%2C%20United%20States&mode=driving";
    } else {
      mapLink = "https://maps.app.goo.gl/kwkqBUiMMPY9Lkp76";
    }

    map.setAttribute("href", mapLink);
  }
});
