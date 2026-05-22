import {
  AlertTriangle,
  Percent,
  Phone,
  Smartphone,
  Target,
  TrendingUp,
} from "lucide-react";
import article1 from "./assets/article1.jpg";
import article2 from "./assets/article2.jpg";
import article3 from "./assets/article3.jpg";
import article4 from "./assets/article4.jpg";

// Mock Data
export const ARTICLES = [
  {
    id: 1,
    title: "Why Your Website Is Not Converting (And How CodePillars Fixes It)",
    description:
      "Most business websites look good but don’t convert. Here’s how we approach UX, copy, and performance to turn visitors into leads.",
    category: "Strategy",
    readTime: "7 Min Read",
    date: "9/18/2025",
    image: article1,
    resultsTitle: "What Better Conversion Design Actually Delivers",
    results: [
      { icon: TrendingUp, val: "+38%", label: "Lead Increase" },
      { icon: Target, val: "2.4x", label: "Higher Engagement" },
      { icon: Percent, val: "-42%", label: "Bounce Rate" },
    ],
    approachTitle: "How CodePillars Improves Website Conversion",
    approachDescription:
      "We combine UX strategy, performance optimization, and conversion-focused design to create websites that generate measurable business outcomes.",
    approaches: [
      {
        id: "01",
        title: "Positioning & Messaging",
        desc: "We craft messaging around your ideal customer profile, pain points, and business goals.",
      },
      {
        id: "02",
        title: "Campaign-Focused Landing Pages",
        desc: "Every landing page is aligned with marketing campaigns across Google Ads, Meta, and LinkedIn.",
      },
      {
        id: "03",
        title: "Analytics & Optimization",
        desc: "Heatmaps, analytics, and user behavior tracking help us identify friction points and improve conversion performance.",
      },
    ],
    problemTitle: "What Most Business Websites Get Wrong",
    problemDescription:
      "Many business websites are visually appealing but fail to guide visitors toward meaningful action. Weak messaging, unclear CTAs, and poor mobile performance reduce trust and conversions.",
    problems: [
      {
        icon: AlertTriangle,
        title: "Weak Hero Messaging",
        desc: "Most hero sections talk about the company instead of addressing the customer's actual pain points and goals.",
      },
      {
        icon: Phone,
        title: "No Clear CTA",
        desc: "Visitors leave when there's no obvious next step like booking a call, requesting a quote, or starting a conversation.",
      },
      {
        icon: Smartphone,
        title: "Poor Mobile Experience",
        desc: "Slow loading times and unoptimized mobile layouts reduce engagement and hurt conversion rates.",
      },
    ],
    articleMoto:
      "The highest-converting websites are built around customer intent, not company ego.",
  },
  {
    id: 2,
    title: "Our MERN Project Blueprint: From Idea to Production",
    description:
      "How we take a raw idea, validate it, design the architecture, and ship a secure, scalable MERN application for real-world usage.",
    category: "Development",
    readTime: "8 Min Read",
    date: "8/30/2025",
    image: article2,
    resultsTitle: "What Better Conversion Design Actually Delivers",
    results: [
      { icon: TrendingUp, val: "+38%", label: "Lead Increase" },
      { icon: Target, val: "2.4x", label: "Higher Engagement" },
      { icon: Percent, val: "-42%", label: "Bounce Rate" },
    ],
    approachTitle: "How CodePillars Improves Website Conversion",
    approachDescription:
      "We combine UX strategy, performance optimization, and conversion-focused design to create websites that generate measurable business outcomes.",
    approaches: [
      {
        id: "01",
        title: "Positioning & Messaging",
        desc: "We craft messaging around your ideal customer profile, pain points, and business goals.",
      },
      {
        id: "02",
        title: "Campaign-Focused Landing Pages",
        desc: "Every landing page is aligned with marketing campaigns across Google Ads, Meta, and LinkedIn.",
      },
      {
        id: "03",
        title: "Analytics & Optimization",
        desc: "Heatmaps, analytics, and user behavior tracking help us identify friction points and improve conversion performance.",
      },
    ],
    problemTitle: "What Most Business Websites Get Wrong",
    problemDescription:
      "Many business websites are visually appealing but fail to guide visitors toward meaningful action. Weak messaging, unclear CTAs, and poor mobile performance reduce trust and conversions.",
    problems: [
      {
        icon: AlertTriangle,
        title: "Weak Hero Messaging",
        desc: "Most hero sections talk about the company instead of addressing the customer's actual pain points and goals.",
      },
      {
        icon: Phone,
        title: "No Clear CTA",
        desc: "Visitors leave when there's no obvious next step like booking a call, requesting a quote, or starting a conversation.",
      },
      {
        icon: Smartphone,
        title: "Poor Mobile Experience",
        desc: "Slow loading times and unoptimized mobile layouts reduce engagement and hurt conversion rates.",
      },
    ],
    articleMoto:
      "The highest-converting websites are built around customer intent, not company ego.",
  },
  {
    id: 3,
    title: "Performance First: Making Your Site Feel Instantly Fast",
    description:
      "TTFB, CLS, lazy-loading, image optimization and how all of it ties back to real business metrics like leads and revenue.",
    category: "Performance",
    readTime: "6 Min Read",
    date: "7/21/2025",
    image: article3,
    resultsTitle: "What Better Conversion Design Actually Delivers",
    results: [
      { icon: TrendingUp, val: "+38%", label: "Lead Increase" },
      { icon: Target, val: "2.4x", label: "Higher Engagement" },
      { icon: Percent, val: "-42%", label: "Bounce Rate" },
    ],
    approachTitle: "How CodePillars Improves Website Conversion",
    approachDescription:
      "We combine UX strategy, performance optimization, and conversion-focused design to create websites that generate measurable business outcomes.",
    approaches: [
      {
        id: "01",
        title: "Positioning & Messaging",
        desc: "We craft messaging around your ideal customer profile, pain points, and business goals.",
      },
      {
        id: "02",
        title: "Campaign-Focused Landing Pages",
        desc: "Every landing page is aligned with marketing campaigns across Google Ads, Meta, and LinkedIn.",
      },
      {
        id: "03",
        title: "Analytics & Optimization",
        desc: "Heatmaps, analytics, and user behavior tracking help us identify friction points and improve conversion performance.",
      },
    ],
    problemTitle: "What Most Business Websites Get Wrong",
    problemDescription:
      "Many business websites are visually appealing but fail to guide visitors toward meaningful action. Weak messaging, unclear CTAs, and poor mobile performance reduce trust and conversions.",
    problems: [
      {
        icon: AlertTriangle,
        title: "Weak Hero Messaging",
        desc: "Most hero sections talk about the company instead of addressing the customer's actual pain points and goals.",
      },
      {
        icon: Phone,
        title: "No Clear CTA",
        desc: "Visitors leave when there's no obvious next step like booking a call, requesting a quote, or starting a conversation.",
      },
      {
        icon: Smartphone,
        title: "Poor Mobile Experience",
        desc: "Slow loading times and unoptimized mobile layouts reduce engagement and hurt conversion rates.",
      },
    ],
    articleMoto:
      "The highest-converting websites are built around customer intent, not company ego.",
  },
  {
    id: 4,
    title: "Practical AI for Small Teams: Automations That Actually Help",
    description:
      "Instead of chasing buzzwords, we focus on real workflows: lead triage, content assist, reporting, and customer support.",
    category: "AI & Automation",
    readTime: "9 Min Read",
    date: "6/10/2025",
    image: article4,
    resultsTitle: "What Better Conversion Design Actually Delivers",
    results: [
      { icon: TrendingUp, val: "+38%", label: "Lead Increase" },
      { icon: Target, val: "2.4x", label: "Higher Engagement" },
      { icon: Percent, val: "-42%", label: "Bounce Rate" },
    ],
    approachTitle: "How CodePillars Improves Website Conversion",
    approachDescription:
      "We combine UX strategy, performance optimization, and conversion-focused design to create websites that generate measurable business outcomes.",
    approaches: [
      {
        id: "01",
        title: "Positioning & Messaging",
        desc: "We craft messaging around your ideal customer profile, pain points, and business goals.",
      },
      {
        id: "02",
        title: "Campaign-Focused Landing Pages",
        desc: "Every landing page is aligned with marketing campaigns across Google Ads, Meta, and LinkedIn.",
      },
      {
        id: "03",
        title: "Analytics & Optimization",
        desc: "Heatmaps, analytics, and user behavior tracking help us identify friction points and improve conversion performance.",
      },
    ],
    problemTitle: "What Most Business Websites Get Wrong",
    problemDescription:
      "Many business websites are visually appealing but fail to guide visitors toward meaningful action. Weak messaging, unclear CTAs, and poor mobile performance reduce trust and conversions.",
    problems: [
      {
        icon: AlertTriangle,
        title: "Weak Hero Messaging",
        desc: "Most hero sections talk about the company instead of addressing the customer's actual pain points and goals.",
      },
      {
        icon: Phone,
        title: "No Clear CTA",
        desc: "Visitors leave when there's no obvious next step like booking a call, requesting a quote, or starting a conversation.",
      },
      {
        icon: Smartphone,
        title: "Poor Mobile Experience",
        desc: "Slow loading times and unoptimized mobile layouts reduce engagement and hurt conversion rates.",
      },
    ],
    articleMoto:
      "The highest-converting websites are built around customer intent, not company ego.",
  },
];

export const getArticleById = (id) => {
  const numericId = Number(id);
  const article = ARTICLES.find((item) => item.id === numericId);

  if (!article) {
    console.warn(`Article with ID ${id} not found.`);
    return null;
  }

  return article;
};
