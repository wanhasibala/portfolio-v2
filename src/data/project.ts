export interface ProjectData {
  title: string;
  subheading: string;
  slug: string;
  year?: string;
  src?: string;
  src_body?: string[];
  color?: string;
  href?: string;
  description?: string;
  detail?: string;
  technologies?: string[];
  overview?: string;
  issue?: string;
  designApproach?: string;
  material?: string;
  conclusion?: string;
  bottleneckHook?: string;
  architectureMap?: string[];
  deploymentLink?: string;
  detailedLink?: string;
  [key: string]: any;
}

export const projects: ProjectData[] = [
  {
    title: "Nata POS System",
    subheading: "QR Self-Ordering & POS System for F&B UMKM",
    slug: "nata-pos",
    year: "2026",
    src: "/nata/nata.webp",
    src_body: [
      "/nata/nata1.webp",
      "/nata/nata2.webp",
      "/nata/nata3.webp",
      "/nata/nata4.webp",
      "/nata/nata5.webp",
      "/nata/nata7.webp",
      "/nata/nata6.webp",
    ],
    color: "#676B55",
    href: "https://nata-id.vercel.app",
    overview:
      "Nata is a modern Table QR Self-Ordering & POS System engineered specifically for Indonesian culinary MSMEs (UMKM), eliminating order queue bottlenecks and automating kitchen ticket routing in real-time.",
    issue:
      "Long ordering queues at cashier counters during peak dining hours and human errors in manual table order tracking, resulting in customer churn and delayed table turnover rates.",
    designApproach:
      "Designed a seamless zero-install mobile QR ordering interface for guests paired with a reactive, high-contrast POS cashier dashboard that syncs live kitchen order tickets instantly.",
    material:
      "Next.js 14 (App Router), TypeScript, Tailwind CSS, PostgreSQL, Realtime WebSockets, QRIS Webhook Integration.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "WebSockets",
      "QRIS",
    ],
    conclusion:
      "Successfully reduced average dining order latency by 65% and cut cashier operational overhead while providing restaurant owners with instant daily sales analytics.",
    description:
      "Nata is an all-in-one digital POS and table ordering system built to empower Indonesian culinary businesses.",
    detail:
      "Developed a responsive multi-role interface supporting table-side customer ordering, kitchen display systems, and administrative financial reports.",
    bottleneckHook:
      "Order synchronization delays during high dining load. Resolved with websocket event streams and optimistic UI state caching.",
    architectureMap: [
      "Customer QR Scan [Zero-Install Client]",
      "  │",
      "  ▼",
      "WebSocket Event Stream Broker",
      "  │",
      "  ▼",
      "Kitchen Display System & POS Cashier Sync",
    ],
    deploymentLink: "https://nata-id.vercel.app",
  },
  {
    title: "Wareify",
    subheading: "Enterprise Asset Management System",
    slug: "wareify",
    year: "2025",
    src: "/wareify/wareify1.webp",
    src_body: [
      "/wareify/wareify2.webp",
      "/wareify/wareify3.webp",
      "/wareify/wareify4.webp",
      "/wareify/wareify5.webp",
      "/wareify/wareify6.webp",
      "/wareify/wareify7.webp",
      "/wareify/wareify8.webp",
    ],
    color: "#3F4E4F",
    href: "https://dev-eam.midsuit.com",
    overview:
      "Wareify is an enterprise-grade Asset & Inventory Management platform built for mid-to-large scale facilities to track asset depreciation, maintenance schedules, and warehouse locations.",
    issue:
      "Fragmented spreadsheet tracking causing asset loss, inaccurate depreciation accounting, and missed scheduled equipment maintenance windows.",
    designApproach:
      "Architected an intuitive relational asset hierarchy with automated barcode/QR scanning capabilities and real-time lifecycle tracking.",
    material:
      "React, TypeScript, Node.js, Express, Tailwind CSS, PostgreSQL, Chart.js.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Chart.js",
    ],
    conclusion:
      "Streamlined warehouse audit procedures, reducing inventory reconciliation time from 3 days to under 4 hours.",
    description:
      "A comprehensive asset management platform enabling organizations to maintain accurate inventory and maintenance audit trails.",
    detail:
      "Built with role-based access control, barcode generation, and automated depreciation calculation algorithms.",
    bottleneckHook:
      "Slow database queries on large asset trees. Solved with recursive CTE indexing and cached dashboard aggregations.",
    deploymentLink: "https://github.com/wanhasib",
  },
  // {
  //   title: "EduCredit",
  //   subheading: "Educational Finance Management Tool",
  //   slug: "educredit",
  //   year: "2023",
  //   src: "/4.webp",
  //   src_body: ["/5.webp", "/6.webp"],
  //   color: "#028391",
  //   href: "https://github.com/wanhasib/educredit-core",
  //   overview:
  //     "EduCredit is an educational finance management tool that assists students and institutions in tracking loans, calculating payment schedules, and planning credit budgets efficiently.",
  //   issue:
  //     "Complex interest calculations and delayed payment tracking leading to financial confusion and high default rates among students.",
  //   designApproach:
  //     "Created an intuitive loan simulation calculator with interactive payment schedule graphs and automated deadline alerts.",
  //   material:
  //     "React Native, TypeScript, Context API, Canvas-backed Charts, Node.js.",
  //   technologies: [
  //     "React Native",
  //     "TypeScript",
  //     "Context API",
  //     "Canvas Charts",
  //   ],
  //   conclusion:
  //     "Achieved a flat 4ms response latency on complex calculation threads and improved financial planning clarity for thousands of students.",
  //   description:
  //     "EduCredit is an educational finance management tool that helps students manage their credits and loans efficiently.",
  //   detail:
  //     "EduCredit assists students in keeping track of their financial obligations related to education. The tool offers features like loan calculators, payment schedules, and financial planning tips.",
  //   detailedLink: "https://github.com/wanhasib/educredit-core",
  //   bottleneckHook:
  //     "180ms rendering lag during high-frequency loan calculations. Solved by decoupling native calculation threads from rendering, using debounced inputs, and implementing a memoized calculation cache to achieve a flat 4ms response latency.",
  //   architectureMap: [
  //     "User Input Event [Debounced 15ms]",
  //     "  │",
  //     "  ▼",
  //     "Native Calculation Worker Cache Thread [Off-Main-Thread]",
  //     "  │",
  //     "  ▼",
  //     "Memoized State Provider (Context Layer)",
  //     "  │",
  //     "  ▼",
  //     "Canvas-Backed High-Performance Graphs",
  //   ],
  //   deploymentLink: "https://github.com/wanhasib/educredit-core",
  // },
  {
    title: "Vivre.Sub",
    subheading: "Graphic Design & Portfolio Platform",
    slug: "vivre",
    year: "2024",
    src: "/vivre-header.webp",
    src_body: ["/vivre-body1.jpg", "/vivre-body2.png"],
    color: "#507687",
    overview:
      "Vivre.sub is a creative cafe and design portfolio platform based in Surabaya, showcasing premium branding, high-resolution photography, and digital campaigns.",
    issue:
      "8.2s Largest Contentful Paint (LCP) caused by raw, high-resolution photography assets degrading visitor retention and mobile user experience.",
    designApproach:
      "Implemented a sharp Node.js asset compression pipeline to convert high-res assets to modern WebP with LQIP blur placeholders and geographic Edge CDN delivery.",
    material:
      "Next.js, Tailwind CSS, Sharp Image Engine, Geographic Edge CDN, Framer Motion.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Sharp Image Engine",
      "Edge CDN",
      "Framer Motion",
    ],
    conclusion:
      "Reduced page load time by 78%, dropping LCP from 8.2s to under 1.2s while preserving pristine visual fidelity across Retina displays.",
    description:
      "Vivre.sub is a cafe located in the center of Surabaya, precisely on Sonokembang street. My main task here is to create posts for social media such as Instagram posts, Instagram stories, etc.",
    detail:
      "Planning with a copywriter, doing photoshoots of products for promos, big day greetings, or new product launches. We optimized asset delivery pipelines to ensure large photography assets load instantly on the client side.",
    detailedLink: "https://github.com/wanhasib/vivre-sub",
    bottleneckHook:
      "8.2s Largest Contentful Paint (LCP) caused by raw, high-resolution photography assets. Created a node-based optimization pipeline converting raw assets to modern, compressed WebP format and served them through a geographic Edge CDN layer.",
    architectureMap: [
      "Raw Imagery (High-Resolution Uploads)",
      "  │",
      "  ▼",
      "Node.js Sharp Asset Optimization Pipeline",
      "  │",
      "  ▼",
      "Geographic Edge CDN (Caching Layer)",
      "  │",
      "  ▼",
      "Responsive next/image Client with Dynamic LQIP Skeletons",
    ],
    deploymentLink: "https://github.com/wanhasib/vivre-sub",
  },
  {
    title: "Wanderful",
    subheading: "Your Ultimate Travel Planner",
    slug: "wanderful",
    year: "2024",
    src: "/8.webp",
    src_body: ["/wanderful-body1.png", "/wanderful-body2.png"],
    color: "#000000",
    href: "https://genuine-pentagon-729201.framer.app/",
    overview:
      "Wanderful is an interactive travel itinerary and destination discovery application built to help globetrotters plan, visualize, and budget multi-day trips.",
    issue:
      "Cumulative Layout Shifts (CLS: 0.38) during complex route-based itinerary map rendering, disrupting smooth client-side interactions.",
    designApproach:
      "Engineered rigid aspect-ratio constraint containers and deferred non-critical viewports via IntersectionObserver for instant, jank-free navigation.",
    material:
      "Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Leaflet Maps.",
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Leaflet",
    ],
    conclusion:
      "Eliminated layout shifting entirely (CLS reduced from 0.38 to 0.01) while delivering a highly responsive, animated route planning canvas.",
    description:
      "Wanderful is a travel planning application designed to help users explore and organize their trips efficiently.",
    detail:
      "Wanderful simplifies travel planning by providing users with a platform to create itineraries, discover new destinations, and share travel experiences.",
    detailedLink: "https://github.com/wanhasib/wanderful-planner",
    bottleneckHook:
      "Cumulative Layout Shifts (CLS: 0.38) during complex route-based itinerary rendering. Resolved by enforcing strict layout constraint containers, loading non-critical viewports via IntersectionObserver, and utilizing CSS aspect-ratio properties.",
    architectureMap: [
      "Client Navigation Request",
      "  │",
      "  ▼",
      "App Router Segment Boundary (Pre-fetching Core Metadata)",
      "  │",
      "  ▼",
      "Strict aspect-ratio Mock Skeleton Layout Walls",
      "  │",
      "  ▼",
      "IntersectionObserver Triggered Dynamic Itinerary Load",
    ],
    deploymentLink: "https://github.com/wanhasib/wanderful-planner",
  },
  {
    title: "Flutter Cafe",
    subheading: "Community Hub for Flutter Developers",
    slug: "flutter-cafe",
    year: "2024",
    src: "/5.webp",
    src_body: ["/flutter-cafe-body1.png", "/flutter-cafe-body2.png"],
    color: "#8c8c8c",
    href: "https://grumpy-course-353885.framer.app/",
    overview:
      "Flutter Cafe is a community portal and company profile website built to connect mobile developers with tutorials, tech meetups, and real-time community discussions.",
    issue:
      "Frequent widget tree repaints and frame drops during live real-time comment and forum feedback streams.",
    designApproach:
      "Refactored state management to utilize key-value indexed sub-tree rendering nodes, isolating re-renders to only modified message rows.",
    material: "Framer Web, Tailwind CSS, JavaScript, WebSocket Client, WebGL.",
    technologies: [
      "Framer Web",
      "Tailwind CSS",
      "JavaScript",
      "WebSockets",
      "WebGL",
    ],
    conclusion:
      "Maintained a rock-solid 60 FPS scroll and interaction performance under heavy real-time discussion socket traffic.",
    description:
      "Flutter Cafe is a company profile website project from a cafe with the same name. My main task is to create a website that is used to provide information to the audience to make it clearer about their company.",
    detail:
      "Flutter Cafe serves as a hub for Flutter enthusiasts to connect, learn, and grow. It offers tutorials, code snippets, and best practices shared by the community.",
    detailedLink: "https://github.com/wanhasib/flutter-cafe-app",
    bottleneckHook:
      "Widget repaint flooding on real-time comment feedback streams. Re-designed the render flow to use local key-value indexed nodes, eliminating recursive widget tree updates to secure a continuous 60 FPS update loop.",
    architectureMap: [
      "Incoming Socket Message Event",
      "  │",
      "  ▼",
      "Key-Indexed Node Repository Lookup",
      "  │",
      "  ▼",
      "Localized Rendering Sub-tree Boundary",
      "  │",
      "  ▼",
      "Targeted DOM Repaint (Zero Ancestor / Sibling Recalculations)",
    ],
    deploymentLink: "https://github.com/wanhasib/flutter-cafe-app",
  },
  // {
  //   title: "Second Brain",
  //   subheading: "Personal Knowledge Management System",
  //   slug: "second-brain",
  //   year: "2024",
  //   src: "/7.webp",
  //   src_body: ["/8.webp", "/9.webp"],
  //   color: "#EFE8D3",
  //   href: "https://github.com/wanhasib/second-brain-pkm",
  //   overview:
  //     "Second Brain is a local-first personal knowledge management (PKM) application allowing researchers to organize markdown notes, bi-directional links, and graph nodes.",
  //   issue:
  //     "680ms search query latency when performing full-text inverted index searches across thousands of interconnected markdown notes.",
  //   designApproach:
  //     "Designed and implemented an in-memory client-side Trie parsing engine and debounced index reader running off the main thread.",
  //   material:
  //     "Next.js, TypeScript, Node.js, In-Memory Trie Indexing Engine, Tailwind CSS.",
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "Node.js",
  //     "Trie Search Engine",
  //     "Tailwind CSS",
  //   ],
  //   conclusion:
  //     "Reduced search query latency from 680ms to an instant 8ms, enabling real-time as-you-type fuzzy note discovery.",
  //   description:
  //     "Second Brain is a personal knowledge management system to help users capture and organize their thoughts and ideas.",
  //   detail:
  //     "Second Brain provides a structured environment for users to store and manage knowledge. The system supports note-taking, task management, and integration with other productivity tools.",
  //   detailedLink: "https://github.com/wanhasib/second-brain-pkm",
  //   bottleneckHook:
  //     "680ms latency during search query matching inside complex document databases. Designed and built an in-memory client-side Trie matching engine, cutting search index latency to a consistent 8ms.",
  //   architectureMap: [
  //     "Search Input Focus (Initialization)",
  //     "  │",
  //     "  ▼",
  //     "Document Database Index Flat Serialization",
  //     "  │",
  //     "  ▼",
  //     "Client-Side In-Memory Trie Parsing Node",
  //     "  │",
  //     "  ▼",
  //     "Debounced (10ms) Instant Rendering Render Cycle",
  //   ],
  //   deploymentLink: "https://github.com/wanhasib/second-brain-pkm",
  // },
];
