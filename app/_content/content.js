const importAll = (requireContext) => requireContext.keys().map(requireContext);

/* HEADER */

import logo from "@/public/img/omnifood-logo.png";
export const logoContent = {
  logo,
  alt: "omnifood logo",
};

export const navigationContent = [
  { link: "#", text: "How it works" },
  { link: "#", text: "Meals" },
  { link: "#", text: "Testimonials" },
  { link: "#", text: "Pricing" },
  { link: "#", text: "Try for free" },
];

/* HERO */

import hero from "@/public/img/hero.png";
const avatars = importAll(
  require.context("@/public/img/customers", false, /\.(png|jpe?g|svg)$/),
);
const avatarImages = avatars.map((avatar) => avatar.default);

export const heroContent = {
  primaryButton: "Start eating well",
  secondaryButton: `Learn more ↓`,
  header: "A healthy meal delivered to your door, every single day",
  description:
    "The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.",
  avatars: avatarImages,
  altAvatars: "Customer photo",
  additionalText: (
    <>
      <span className="font-bold text-primary-600">250,000+ </span>
      meals delivered last year!
    </>
  ),
  heroImage: hero,
  altHero:
    "Three images, woman enjoying food, meals in storage container, and food bowls on a table",
};

/* FEATURED IN */

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
import {
  IoInfiniteOutline,
  IoLeafOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitch,
  IoLogoTwitter,
  IoNutritionOutline,
  IoPauseOutline,
} from "react-icons/io5";

export const howItWorksContent = {
  header: "Your daily dose of health in 3 simple steps",
  subHeader: "How it works",
  stepsContent: [
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
  ],
};

/* MEALS */

const meals = importAll(
  require.context("@/public/img/meals", false, /\.(png|jpe?g|svg)$/),
);
const mealsImages = meals.map((meal) => meal.default);

export const mealsContent = {
  header: "Omnifood AI chooses from 5,000+ recipes",
  subHeader: "Meals",
  headerList: "Works with any diet:",
  diets: [
    "Vegetarian",
    "Vegan",
    "Pescatarian",
    "Gluten-free",
    "Lactose-free",
    "Keto",
    "Paleo",
    "Low FODMAP",
    "Kid-friendly",
  ],
  meals: [
    {
      mealImage: mealsImages[0],
      meal: "Japanese Gyozas",
      categories: [{ category: "Vegetarian", tagColor: "#51cf66" }],
      properties: { calories: 650, nutriScore: 74, rating: 4.9, reviews: 537 },
    },
    {
      mealImage: mealsImages[1],
      meal: "Avocado Salad",
      categories: [
        { category: "Vegan", tagColor: "#94d82d" },
        { category: "Paleo", tagColor: "#ffd43b" },
      ],
      properties: { calories: 400, nutriScore: 92, rating: 4.8, reviews: 441 },
    },
  ],
  link: "See all recipes →",
};

/* TESTIMONIALS AND GALLERY IMAGES */

const testimonials = importAll(
  require.context("@/public/img/testimonials", false, /\.(png|jpe?g|svg)$/),
);
const testimonialsImages = testimonials.map(
  (testimonial) => testimonial.default,
);

export const testimonialsContent = {
  header: "Once you try it, you can't go back",
  subHeader: "Testimonials",
  testimonials: [
    {
      customer: "Dave Bryson",
      testimonial:
        "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
      image: testimonialsImages[1],
    },
    {
      customer: "Ben Hadley",
      testimonial:
        "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
      image: testimonialsImages[0],
    },
    {
      customer: "Steve Miller",
      testimonial:
        "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
      image: testimonialsImages[3],
    },
    {
      customer: "Hannah Smith",
      testimonial:
        "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
      image: testimonialsImages[2],
    },
  ],
};

const gallery = importAll(
  require.context("@/public/img/gallery", false, /\.(png|jpe?g|svg)$/),
);
export const galleryImages = gallery.map((image) => image.default);

/* PRICING AND FEATURES */

export const pricingContent = {
  header: "Eating well without breaking the bank",
  subHeader: "Pricing",
  footer:
    "Prices include all applicable taxes. You can cancel at any time. Both plans include the following:",
  pricingPlans: [
    {
      name: "Starter",
      price: 399,
      description: "per month. That's just $13 per meal!",
      features: [
        "1 meal per day",
        "Order from 11am to 9pm",
        "Delivery is free",
        "unavailable",
      ],
      button: "Start eating well",
    },
    {
      name: "Complete",
      price: 649,
      description: "per month. That's just $11 per meal!",
      features: [
        <>
          <strong>2 meals</strong> per day
        </>,
        <>
          Order <strong>24/7</strong>
        </>,
        "Delivery is free",
        "Get access to latest recipes",
      ],
      button: "Start eating well",
    },
  ],
};

export const featuresContent = [
  {
    title: "Never cook again!",
    description:
      "Our subscriptions cover 365 days per year, even including major holidays.",
    icon: <IoInfiniteOutline />,
  },
  {
    title: "Local and organic",
    description:
      "Our cooks only use local, fresh, and organic products to prepare your meals.",
    icon: <IoNutritionOutline />,
  },
  {
    title: "No waste",
    description:
      "All our partners only use reusable containers to package all your meals.",
    icon: <IoLeafOutline />,
  },
  {
    title: "Pause anytime",
    description:
      "Going on vacation? Just pause your subscription, and we refund unused days.",
    icon: <IoPauseOutline />,
  },
];

/* CALL TO ACTION */
import eating from "@/public/img/eating.jpg";

export const callToActionContent = {
  header: "Get your first meal for free!",
  description:
    "Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!",
  image: eating,
  alt: "Women enjoying a meal",
  formContent: {
    fullName: "Full Name",
    fullNamePlaceholder: "John Smith",
    email: "Email address",
    emailPlaceholder: "johnsmith@mail.com",
    select: "Where did you hear from us?",
    options: [
      { value: "", option: "Please choose one option:" },
      { value: "family", option: "Friends and family" },
      { value: "youtube", option: "Youtube video" },
      { value: "podcast", option: "Podcast" },
      { value: "facebook", option: "Facebook ad" },
      { value: "others", option: "Others" },
    ],
    button: "Sign up now",
  },
};

/* FOOTER */

export const footerContent = {
  copyrightText: (
    <>
      Copyright &copy; {new Date().getFullYear()} by Omnifood, Inc. All rights
      reserved.
    </>
  ),
  socialMediaLinks: [
    { link: "#", media: <IoLogoInstagram /> },
    { link: "#", media: <IoLogoFacebook /> },
    { link: "#", media: <IoLogoTwitter /> },
  ],
  contactInfo: {
    label: "Contact us",
    address: "623 Harrison St., 2nd Floor, San Francisco, CA 94107",
    phoneNumber: "415-201-6370",
    email: "hello@omnifood.com",
  },
  footerLinks: [
    {
      section: "Account",
      links: [
        { link: "#", text: "Create account" },
        { link: "#", text: "Sign in" },
        { link: "#", text: "iOS app" },
        { link: "#", text: "Android app" },
      ],
    },
    {
      section: "Company",
      links: [
        { link: "#", text: "About Omnifood" },
        { link: "#", text: "For Business" },
        { link: "#", text: "Cooking partners" },
        { link: "#", text: "Careers" },
      ],
    },
    {
      section: "Resources",
      links: [
        { link: "#", text: "Recipe directory" },
        { link: "#", text: "Help center" },
        { link: "#", text: "Privacy & terms" },
      ],
    },
  ],
};
