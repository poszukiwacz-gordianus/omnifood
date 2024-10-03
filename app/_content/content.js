const importAll = (requireContext) => requireContext.keys().map(requireContext);

/* HEADER */

import logo from "@/public/img/omnifood-logo.png";
export const logoContent = {
  logo,
  alt: "omnifood logo",
};

export const navigationContent = [
  { link: "#", text: "Section 1" },
  { link: "#", text: "Section 2" },
  { link: "#", text: "Section 3" },
  { link: "#", text: "Section 4" },
  { link: "#", text: "Section 5" },
];

/* HERO */

import hero from "@/public/img/hero.png";
const avatars = importAll(
  require.context("@/public/img/customers", false, /\.(png|jpe?g|svg)$/),
);
const avatarImages = avatars.map((avatar) => avatar.default);

export const heroContent = {
  header: "A healthy meal delivered to your door, every single day",
  description:
    "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.",
  avatars: avatarImages,
  altAvatars: "Customer photo",
  highlightedText: "250,000+ ",
  text: "meals delivered last year!",
  heroImage: hero,
  altHero:
    "Three images, woman enjoying food, meals in storage container, and food bowls on a table",
};

/* FEATURED */

const logos = importAll(
  require.context("@/public/img/logos", false, /\.(png|jpe?g|svg)$/),
);
const logoImages = logos.map((logo) => logo.default);
const altLogos = logoImages.map(
  (logo) =>
    logo.src.split("media/")[1].split(".")[0].replaceAll("-", " ") + " logo",
);

export const featuredContent = {
  featuredIn: "As featured in",
  logoImages,
  altLogos,
};

/* HOW IT WORKS */
import appScreen1 from "@/public/img/application/app-screen-1.png";
import appScreen2 from "@/public/img/application/app-screen-2.png";
import appScreen3 from "@/public/img/application/app-screen-3.png";

export const stepsContent = [
  {
    step: "01",
    header: "Tell us what you like (and what not)",
    description:
      "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
    image: appScreen1,
    alt: "iPhone app preferences selection screen",
  },
  {
    step: "02",
    header: "Approve your weekly meal plan",
    description:
      " Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
    image: appScreen2,
    alt: "iPhone app meal approving plan screen",
  },
  {
    step: "03",
    header: "Receive meals at convenient time",
    description:
      " Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
    image: appScreen3,
    alt: "iPhone app delivery screen",
  },
];
