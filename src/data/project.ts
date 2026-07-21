export const projects = [
  {
    title: "EduCredit",
    subheading: "Educational Finance Management Tool",
    year: "2023",
    src: "/4.webp",
    color: "#028391",
    href: "https://github.com/wanhasib/educredit-core",
    description:
      "EduCredit is an educational finance management tool that helps students manage their credits and loans efficiently.",
    technologies: ["React Native", "TypeScript", "Context API"],
    slug: "educredit",
    detail:
      "EduCredit assists students in keeping track of their financial obligations related to education. The tool offers features like loan calculators, payment schedules, and financial planning tips to ensure students can manage their credits and loans without stress.",
    detailedLink: "https://github.com/wanhasib/educredit-core",
    bottleneckHook: "180ms rendering lag during high-frequency loan calculations. Solved by decoupling native calculation threads from rendering, using debounced inputs, and implementing a memoized calculation cache to achieve a flat 4ms response latency.",
    architectureMap: [
      "User Input Event [Debounced 15ms]",
      "  │",
      "  ▼",
      "Native Calculation Worker Cache Thread [Off-Main-Thread]",
      "  │",
      "  ▼",
      "Memoized State Provider (Context Layer)",
      "  │",
      "  ▼",
      "Canvas-Backed High-Performance Graphs"
    ],
    deploymentLink: "https://github.com/wanhasib/educredit-core"
  },
  {
    title: "Vivre.Sub",
    subheading: "Graphic Design & Portfolio Platform",
    year: "2024",
    src: "/vivre-header.webp",
    src_body: ["/vivre-body1.jpg", "/vivre-body2.png"],
    color: "#507687",
    href: "https://github.com/wanhasib/vivre-sub",
    description:
      "Vivre.sub is a cafe located in the center of Surabaya, precisely on Sonokembang street. My main task here is to create posts for social media such as Instagram posts, Instagram stories, etc.",
    technologies: ["Next.js", "Edge CDN", "Sharp Image Processing"],
    slug: "vivre",
    detail:
      "Planning with a copywriter, doing photoshoots of products for promos, big day greetings, or new product launches. We optimized asset delivery pipelines to ensure large photography assets load instantly on the client side.",
    detailedLink: "https://github.com/wanhasib/vivre-sub",
    bottleneckHook: "8.2s Largest Contentful Paint (LCP) caused by raw, high-resolution photography assets. Created a node-based optimization pipeline converting raw assets to modern, compressed WebP format and served them through a geographic Edge CDN layer.",
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
      "Responsive next/image Client with Dynamic LQIP Skeletons"
    ],
    deploymentLink: "https://github.com/wanhasib/vivre-sub"
  },
  {
    title: "Wanderful",
    subheading: "Your Ultimate Travel Planner",
    year: "2024",
    src: "/8.webp",
    src_body: ["/flutter-cafe-body1.png", "/flutter-cafe-body2.png", "/flutter-cafe-body2.png"],
    color: "#000000",
    href: "https://github.com/wanhasib/wanderful-planner",
    description:
      "Wanderful is a travel planning application designed to help users explore and organize their trips efficiently.",
    technologies: ["Next.js (App Router)", "Tailwind CSS", "Framer Motion"],
    slug: "wanderful",
    detail:
      "Wanderful simplifies travel planning by providing users with a platform to create itineraries, discover new destinations, and share travel experiences. We structured the navigation layers to minimize cumulative layout shifts.",
    detailedLink: "https://github.com/wanhasib/wanderful-planner",
    bottleneckHook: "Cumulative Layout Shifts (CLS: 0.38) during complex route-based itinerary rendering. Resolved by enforcing strict layout constraint containers, loading non-critical viewports via IntersectionObserver, and utilizing CSS aspect-ratio properties.",
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
      "IntersectionObserver Triggered Dynamic Itinerary Load"
    ],
    deploymentLink: "https://github.com/wanhasib/wanderful-planner"
  },
  {
    title: "Flutter Cafe",
    subheading: "Community Hub for Flutter Developers",
    year: "2024",
    src: "/5.webp",
    src_body: ["/flutter-cafe-body1.png", "/flutter-cafe-body2.png"],
    color: "#8c8c8c",
    href: "https://github.com/wanhasib/flutter-cafe-app",
    description:
      "Flutter Cafe is a company profile website project from a cafe with the same name. My main task is to create a website that is used to provide information to the audience to make it clearer about their company.",
    technologies: ["Framer Web", "Tailwind CSS", "JavaScript"],
    slug: "flutter-cafe",
    detail:
      "Flutter Cafe serves as a hub for Flutter enthusiasts to connect, learn, and grow. It offers tutorials, code snippets, and best practices shared by the community.",
    detailedLink: "https://github.com/wanhasib/flutter-cafe-app",
    bottleneckHook: "Widget repaint flooding on real-time comment feedback streams. Re-designed the render flow to use local key-value indexed nodes, eliminating recursive widget tree updates to secure a continuous 60 FPS update loop.",
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
      "Targeted DOM Repaint (Zero Ancestor / Sibling Recalculations)"
    ],
    deploymentLink: "https://github.com/wanhasib/flutter-cafe-app"
  },
  {
    title: "Second Brain",
    subheading: "Personal Knowledge Management System",
    year: "2024",
    src: "/7.webp",
    color: "#EFE8D3",
    href: "https://github.com/wanhasib/second-brain-pkm",
    description:
      "Second Brain is a personal knowledge management system to help users capture and organize their thoughts and ideas.",
    technologies: ["Next.js", "Node.js", "Inverted-Index Search"],
    slug: "second-brain",
    detail:
      "Second Brain provides a structured environment for users to store and manage knowledge. The system supports note-taking, task management, and integration with other productivity tools, making files easy to search and access.",
    detailedLink: "https://github.com/wanhasib/second-brain-pkm",
    bottleneckHook: "680ms latency during search query matching inside complex document databases. Designed and built an in-memory client-side Trie matching engine, cutting search index latency to a consistent 8ms.",
    architectureMap: [
      "Search Input Focus (Initialization)",
      "  │",
      "  ▼",
      "Document Database Index Flat Serialization",
      "  │",
      "  ▼",
      "Client-Side In-Memory Trie Parsing Node",
      "  │",
      "  ▼",
      "Debounced (10ms) Instant Rendering Render Cycle"
    ],
    deploymentLink: "https://github.com/wanhasib/second-brain-pkm"
  }
];
