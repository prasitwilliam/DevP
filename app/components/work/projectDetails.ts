import {
  SiNextdotjs,
  SiReact,
  SiRust,
  SiNodedotjs,
  SiDotnet,
  SiWordpress,
  SiMysql,
  SiBootstrap,
  SiThreedotjs,
  SiAngular,
  SiAngularjs,
  SiTensorflow,
  SiSelenium,
  SiPython,
  SiAndroid,
  SiDrupal,
  SiPhp,
  SiSwift,
  SiAwsorganizations,
  SiFirebase,
  SiXcode,
  SiCsharp,
  SiAndroidstudio,
  SiRubyonrails,
  SiHeroku,
  SiElectron,
  SiSolidity,
  SiWeb3Dotjs,
  SiKotlin,
  SiIos,
  SiChatbot,
  SiExpress,
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  //   github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
  {
    id: 1,
    name: "TalkHealth.ai",
    description:
      "TalkHealth.ai is a groundbreaking web application poised to redefine patient engagement in healthcare. Our platform leverages advanced AI technology to ...",
    technologies: [SiChatbot, SiReact, SiDotnet],
    techNames: ["Chatbot", "React", "Asp.net"],
    techLinks: [
      "",
      "https://react.dev/",
      "https://nodejs.org/en",
      ""
    ],
    demo: "https://www.talkhealth.ai",
    image: "/projects/talkhealth.png",
    available: true,
  },
  {
    id: 2,
    name: "Yoga Studio",
    description:
      "Explore a world of possibilities with our app: Ready-Made Yoga Classes: Choose from 190+ yoga classes and meditations, regularly updated with fresh content.",
    technologies: [SiAndroid, SiKotlin, SiFirebase, SiIos],
    techNames: ["Android", "Kotlin", "Firebase", "iOS"],
    techLinks: [
      "https://www.android.com",
      "https://kotlinlang.org/",
      "https://firebase.google.com/",
      "https://www.apple.com/ios/ios-17/"
    ],
    demo: "https://play.google.com/store/apps/details?id=com.gaiam.yogastudio&hl=en_US",
    image: "/projects/yoga.png",
    available: true,
  },
  {
    id: 3,
    name: "Fuzzie",
    description:
      "The Fuzzie Club is an exclusive, invite-only membership programme that gives you insider access to the greatest privileges ever by hundreds of popular brands from dining, groceries, entertainment, healthcare, fitness, beauty, kids, activities, cars, pets and lots more.",
    technologies: [SiAndroid, SiRubyonrails, SiHeroku],
    techNames: ["Android", "Ruby on Rails", "Heroku"],
    techLinks: [
      "https://www.android.com",
      "https://rubyonrails.org",
      "https://www.heroku.com",
    ],
    demo: "https://play.google.com/store/apps/details?id=sg.com.fuzzie.android&hl=en_US",
    image: "/projects/fuzzie.png",
    available: true,
  },
  {
    id: 4,
    name: "MASQ",
    description:
      "MASQ Spaces is a new way to use your browser. Organise your dApps in the dock, and switch spaces with ease to keep clutter in check.",
    technologies: [SiRust, SiElectron, SiSolidity, SiWeb3Dotjs],
    techNames: ["Rust", "Electron", "Solidity", "web3.js"],
    techLinks: [
      "https://www.rust-lang.org",
      "https://electronjs.org",
      "https://soliditylang.org",
      "https://web3js.org",
    ],
    demo: "https://masq.ai/",
    image: "/projects/MASQ.png",
    available: true,
  },
  {
    id: 5,
    name: "AuditPRO",
    description:
      "AuditPRO is a Safety and Compliance Inspection Platform that companies use to improve the efficiency of their safety activities and demonstrate regulatory ...",
    technologies: [SiAngular, SiCsharp],
    techNames: ["Angular", "C#"],
    techLinks: [
      "https://angularjs.org",
      "",
    ],
    demo: "https://auditpro.com/",
    image: "/projects/auditpro.png",
    available: true,
  },
  {
    id: 6,
    name: "Answer",
    description:
      "MSR-FSR LLC. is a leading developer and supplier of critical subsystems, components and parts, and ultra-high purity cleaning and analytical services primarily ...",
    technologies: [SiAngular, SiCsharp],
    techNames: ["Angular", "C#"],
    techLinks: [
      "https://angularjs.org",
      "",
    ],
    demo: "https://answer.msr-fsr.com",
    image: "/projects/answer3.0.png",
    available: true,
  },
  {
    id: 7,
    name: "Barbak",
    description:
      "BarBak Hospitality, established in 2019 in Charlotte, NC, has its roots firmly planted in wholesale third-party delivery. We've always collaborated with top-tier wholesale providers to supply your business with the necessary products for success, all while keeping your costs at a minimum.",
    technologies: [SiReact, SiNextdotjs, SiNodedotjs],
    techNames: ["React", "Next.js", "Node.js"],
    techLinks: [
      "https://react.dev/",
      "https://nextjs.org/",
      "https://nodejs.org/en",
    ],
    demo: "https://bar-bak-mine.vercel.app/",
    image: "/projects/barbak.png",
    available: true,
  },
  {
    id: 8,
    name: "Vocaloid",
    description:
      "Vocaloid is a singing voice-changing plugin created using AI; I was responsible for backend API implementation. I improved the quality of cloned-voice. We became familiar with signal processing, ML and Voice synthesis. Prototyped the ML models in a interactive way ",
    technologies: [SiReact, SiNextdotjs, SiNodedotjs],
    techNames: ["React", "Next.js", "Node.js"],
    techLinks: [
      "https://react.dev/",
      "https://nextjs.org/",
      "https://nodejs.org/en",
    ],
    demo: "https://www.vocaloid.com/en/",
    image: "/projects/vocaloid.jpg",
    available: true,
  },
  {
    id: 9,
    name: "Crypto Trading",
    description:
      "Orion aggregates liquidity from the largest CEXs and DEXs to ensure the best possible asset prices and trade routes for your favorite tokens.",
    technologies: [SiReact, SiNextdotjs, SiNodedotjs],
    techNames: ["React", "Next.js", "Node.js"],
    techLinks: [
      "https://react.dev/",
      "https://nextjs.org/",
      "https://nodejs.org/en",
    ],
    demo: "https://trade.orion.xyz/trade/ORN-USDT",
    image: "/projects/crypto_trading.png",
    available: true,
  },
  // {
  //   id: 9,
  //   name: "FoodPanda",
  //   description:
  //     "Food & grocery delivery near you from top restaurants and shops across Hong Kong ✓ Large variety of dishes and shopping items ✓ Safe & easy payment ...",
  //   technologies: [SiAndroid, SiNodedotjs],
  //   techNames: ["Android", "Node.js"],
  //   techLinks: ["https://www.android.com", "https://nodejs.org/en"],
  //   demo: "https://apps.apple.com/hk/app/foodpanda-%E7%BE%8E%E9%A3%9F%E5%92%8C%E7%94%9F%E9%AE%AE%E9%9B%9C%E8%B2%A8%E5%A4%96%E9%80%81/id758103884?ppid=b158a9db-0d47-49a8-8cd4-bd3d18a51800",
  //   image: "/projects/foodpanda.png",
  //   available: true,
  // },
  {
    id: 10,
    name: "Sport Betting Site Scraping",
    description:
      "Scraped the detailed info about the games. https://www.loom.com/share/fbcfacfc518e4f41ab3eefdea0873f87.\n Output data field: Player, Prop, Hash, Over Odds, Under Odds, Away Team, Home Team, and Game Time in UTC.\n Output format: Json file",
    technologies: [SiSelenium, SiPython],
    techNames: ["Selenium", "Python"],
    techLinks: ["https://www.selenium.dev/", "https://www.python.org/"],
    demo: "https://ny.wynnbet.com",
    image: "/projects/wynnbet.png",
    available: true,
  },
  {
    id: 11,
    name: "Web Scraping",
    description:
      "This is the video that scrap the information of member in Skool",
    technologies: [SiSelenium, SiPython],
    techNames: ["Selenium", "Python"],
    techLinks: ["https://www.selenium.dev/", "https://www.python.org/"],
    demo: "https://drive.google.com/file/d/1AZZbeDP6wMcboc8HIBGgWYjXxesTi08I/view?usp=drive_link",
    image: "/projects/skool_scraping.png",
    available: true,
  },
  {
    id: 12,
    name: "SangiShop",
    description:
      "芸能人は歯が命のアパガード公式通販サイト。通販専用の最上位品アパガードロイヤルをはじめ、薬用ハイドロキシアパタイト配合歯磨き、歯ブラシなどオーラルケア商品を ...",
    technologies: [SiReact],
    techNames: ["React"],
    techLinks: ["https://reactjs.org/"],
    demo: "https://www.sangishop.jp/",
    image: "/projects/sangishop.png",
    available: true,
  },
  // {
  //   id: 13,
  //   name: "Mela Envy",
  //   description:
  //     "There apple envy is born from the wish, that Of Pleasure to who near Of give Everything is fine moment special, transforming the ordinary in extraordinary.",
  //   technologies: [SiReact, SiNextdotjs, SiThreedotjs],
  //   techNames: ["React", "Next.js", "Three.js"],
  //   techLinks: [
  //     "https://reactjs.org/",
  //     "https://nextjs.org/",
  //     "https://threejs.org",
  //   ],
  //   demo: "https://www.melaenvy.it/",
  //   image: "/projects/apple.png",
  //   available: true,
  // },
  {
    id: 13,
    name: "AI Trading Bot",
    description:
      "Trading strategies for Swing and Day Traders: Swing Traders trade stocks within a few days. Day Traders trade stocks multiple times per day.",
    technologies: [SiAngularjs, SiBootstrap, SiTensorflow],
    techNames: ["Angular", "Bootstrap", "Tensoflow"],
    techLinks: [
      "https://angularjs.org",
      "https://getbootstrap.com/",
      "https://www.tensorflow.org/",
    ],
    demo: "https://tickeron.com/bot-trading/",
    image: "/projects/tradingbot.png",
    available: true,
  },
  {
    id: 14,
    name: "Know Your Forest",
    description:
      "Know Your Forest is an educational website for Oregon forest landowners. They have been providing educational resources to Oregon’s forest landowners, managers, and operators towards their goals of forest management and stewardship.",
    technologies: [SiDrupal, SiPhp],
    techNames: ["Drupal", "PHP"],
    techLinks: [
      "https://www.drupal.org/",
      "https://www.php.net/",
    ],
    demo: "https://knowyourforest.org/",
    image: "/projects/know-Your-Forest-1.png",
    available: true,
  },
  {
    id: 15,
    name: "Montgomery Parks",
    description:
      "Montgomery Parks is a public agency that serves Maryland’s citizens by providing a regional system of clean, safe, and natural area parks. It features 424 outstanding natural area parks with more than 490 miles of streams and over 37072 acres of land in Maryland. The goal of the agency is to provide the best park experience to society.",
    technologies: [SiWordpress, SiPhp, SiMysql],
    techNames: ["WordPress", "PHP", "MySQL"],
    techLinks: [
      "https://wordpress.com/",
      "https://www.php.net/",
      "https://www.mysql.com/",
    ],
    demo: "https://montgomeryparks.org/",
    image: "/projects/Montg_concerts_park.png",
    available: true,
  },
  {
    id: 16,
    name: "Gorilla",
    description:
      "Gorilla is an exclusive social networking application for filmmakers, job seekers, businesses, and other film industry professionals. Members can quickly reach out to each other, connect with experts, and find opportunities related to their interests. The platform’s goal is to help users interact regularly and enhance their social connections by uploading portfolios and sharing their professional activities.",
    technologies: [SiSwift, SiAwsorganizations, SiFirebase, SiXcode],
    techNames: ["Swift", "AWS", "Firebase", "Xcode"],
    techLinks: [
      "https://swift.org/",
      "https://aws.amazon.com/",
      "https://firebase.google.com/",
      "https://developer.apple.com/xcode/",
    ],
    demo: "https://play.google.com/store/apps/details?id=com.brt.gorillaapp&hl=en_US",
    image: "/projects/Gorilla-500x278.jpg",
    available: true,
  },
  {
    id: 17,
    name: "HAMR",
    description:
      "HAMR is a basic optimized transport logistics application that aids the customers to book trucks and cars on a rental basis and allows movements of goods across one city in one click.",
    technologies: [SiSwift, SiCsharp, SiAwsorganizations, SiAndroidstudio],
    techNames: ["Swift", "C#", "AWS", "Android Studio"],
    techLinks: [
      "https://swift.org/",
      "",
      "https://aws.amazon.com/",
      "https://developer.android.com/"
    ],
    demo: "https://montgomeryparks.org/",
    image: "/projects/HAMR-500x278.jpg",
    available: true,
  },
];
