//NAVBAR MENU
const NavDialouge = document.getElementById("nav-dialoge");
HandleMenu = () => {
  NavDialouge.classList.toggle("hidden");
};

// Function Image Name And Image in order
const ComaniesName = [
  "ReadyRunner",
  "LifeAt",
  "Convy",
  "Morgen",
  "Campsite",
  "Rise",
  "ClickUp",
  "Notion Calendar",
  "Sunsama",
  "Beeper",
  "Cal",
  "Webstudio",
  "Modyfi",
  "Superpowered",
  "Slite",
  "Typefully",
  "Unbounce",
  "Moises",
  "Basedash",
  "Cursor",
  "Linear",
  "Voiceflow",
  "Kitemaker",
  "Cron",
  "Bento",
  "Grain",
  "Conjure",
];
const ArrayByValue = (Value1, Value2, Appender) => {
  const LineGroups = document.getElementById(Appender);
  for (let i = Value1; i <= Value2; i++) {
    const companyName = ComaniesName[i - 3];
    const Imgs_Name = document.createElement("div");
    Imgs_Name.className =
      "flex flex-col items-center justify-center  min-w-24 min-h-24 md:min-w-32 md:min-h-32 rounded-xl border border-gray-300";
    const Imgs = document.createElement("img");
    Imgs.className = "w-12 h-12 md:w-16 md:h-16";
    Imgs.src = `./assets/asset ${i}.png`;
    const span = document.createElement("span");
    span.className = "text-[11px] md:text-[15px] font-bold";
    if (companyName) {
      span.textContent = companyName;
    } else {
      span.textContent = "...";
      // Handle potential missing company names (optional)
      console.warn(`Company name not found for index ${i}`);
    }
    Imgs_Name.appendChild(Imgs);
    Imgs_Name.appendChild(span);
    LineGroups.appendChild(Imgs_Name);
  }
};
ArrayByValue(3, 14, "companis-line-group1");
ArrayByValue(14, 25, "companis-line-group2");
ArrayByValue(7, 18, "companis-line-group3");

// This the animation of images
const InitialTranslateLTR = -48 * 4;
const InitialTranslateRTL = 36 * 4;
setupIntersectionObserver = (element, isLTR, speed) => {
  const Observer = new IntersectionObserver((entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
    function scrollHandler() {
      const translateX =
        (window.innerHeight - element.getBoundingClientRect().top) * speed;

      let totalTranslate = 0;
      if (isLTR) {
        totalTranslate = InitialTranslateLTR + translateX;
      } else {
        totalTranslate = -(InitialTranslateRTL + translateX);
      }
      element.style.transform = `translate(${totalTranslate}px)`;
    }
    // console.log(element, isIntersecting);
  });
  Observer.observe(element);
};
const Line1 = document.getElementById("companis-line-group1");
const Line2 = document.getElementById("companis-line-group2");
const Line3 = document.getElementById("companis-line-group3");

setupIntersectionObserver(Line1, true, 0.15);
setupIntersectionObserver(Line2, false, 0.15);
setupIntersectionObserver(Line3, true, 0.15);
