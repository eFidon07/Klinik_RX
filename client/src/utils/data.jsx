import { Card, SearchFavorite, ShoppingBag } from "iconsax-react";
import { CiDeliveryTruck } from "react-icons/ci";

export const navlinks = [
  {
    placeholder: "Products",
    route: "/products",
  },
  {
    placeholder: "Blog",
    route: "/blog",
  },
  {
    placeholder: "About",
    route: "/about",
  },
];

export const howToSteps = [
  {
    label: "Search products of your choice.",
    icon: <SearchFavorite size={30} />,
  },
  {
    label: "Add the items you want to purchase to cart.",
    icon: <ShoppingBag size={30} />,
  },
  {
    label: "Finalize payment with admin on WhatsApp.",
    icon: <Card size={30} />,
  },
  {
    label: "Wait for items to be delivered to you.",
    icon: <CiDeliveryTruck size={38} />,
  },
];

export const platformStats = [
  {
    label: "available medication",
    amount: "120+",
  },
  {
    label: "satisfied customers",
    amount: "60+",
  },
];

export const faqs = [
  {
    question: "What is Klinik RX known for?",
    answer:
      "Klinik RX is a leading online medicine store offering a wide range of health products, convenient services, and reliable information to empower your health journey.",
  },
  {
    question: "How do I place an order?",
    answer: [
      "Search products of your choice.",
      "Add the items you want to purchase to cart.",
      "Finalize payment with admin on WhatsApp.",
      "Wait for items to be delivered to you.",
    ],
    // answer: `1. Search products of your choice.

    // 2. Add the items you want to purchase to cart.

    // 3. Finalize payment with admin on WhatsApp.

    // 4. Wait for items to be delivered to you.`,
  },
  {
    question: "When do my items get delivered?",
    answer:
      "Goods are sent out every friday, so delivery should be made between 2-3 days after goods are sent out (depending on your location).",
  },
];

export const drugCategories = [
  "Antimalarial Drugs",
  "Basics",
  "Antacids",
  "Supplements",
  "Antibiotics",
  "Analgesics",
  "Injections",
  "Probiotics",
  "Antihistamines",
  "Herbals",
  "Hormonal Drugs(Male/female)",
  "Prenatal Drugs/Supplements",
  "Contraceptives",
  "Antifungals",
  "Antivirals",
  "Skin & Beauty",
  "Chronic Condition",
  "Others",
].sort();
