const timelineData = [
    {
        year: 1969,
        title: "ARPANET's First Connection",
        description: "On October 29, 1969, the first message was sent between computers at UCLA and Stanford Research Institute, creating the foundation of what would become the internet. This historic connection established the first node-to-node communication of the ARPANET network.",
        impact: "This milestone created the technical foundation for all future digital networking, establishing the revolutionary concept of decentralized computer communication. ARPANET demonstrated that computers could be interconnected to share resources and information across distances.",
        ethical: "ARPANET was initially designed and funded for military purposes during the Cold War, raising early questions about the military-industrial complex's role in technological development and the potential dual-use nature of communication technologies.",
        image: "https://samueli.ucla.edu/wp-content/uploads/samueli/Kleinrock-2-2011.png",
        icon: "fas fa-network-wired"
    },
    {
        year: 1971,
        title: "First Email Sent",
        description: "Computer engineer Ray Tomlinson sent the first network email in late 1971, choosing the @ symbol to separate the user name from the host computer, a convention that continues today. The first message was a test and likely included just random characters or the upper row of the keyboard.",
        impact: "Email revolutionized communication by enabling instant, asynchronous messaging across distances, transforming both personal and business interaction. It became the first killer application of the early internet, driving adoption of networking technology.",
        ethical: "Email began blurring boundaries between work and personal life as communication became constant and immediate. It raised early questions about privacy in digital communications and established patterns for how electronic messaging would be treated legally.",
        image: "https://i0.wp.com/blog.zamzar.com/wp-content/uploads/2019/06/Ray-Tomlinson-4.png",
        icon: "fas fa-envelope"
    },
    {
        year: 1983,
        title: "TCP/IP Standardization",
        description: "On January 1, 1983, ARPANET officially switched to the Transmission Control Protocol/Internet Protocol (TCP/IP), creating a standardized method for different computer networks to communicate. This 'flag day' marked the transition to the protocol suite that still powers the internet today.",
        impact: "This standardization is often considered the true 'birth of the internet' as we know it today. TCP/IP enabled the global interconnection of disparate networks into a cohesive system, creating the technical foundation for worldwide computer networking.",
        ethical: "The adoption of TCP/IP raised early questions about who should govern global network standards and resources. It highlighted tensions between American control over core internet infrastructure and the increasingly international nature of the network.",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*qKYppwKYM_BRRXqLiT3bGQ.jpeg",
        icon: "fas fa-project-diagram"
    },
    {
        year: 1989,
        title: "World Wide Web Invented",
        description: "While working at CERN in Switzerland, British computer scientist Tim Berners-Lee proposed an information management system that would become the World Wide Web. He developed the core components: HTTP, HTML, URLs, and the first web browser and server software.",
        impact: "Berners-Lee's invention transformed the internet from a primarily academic and government network into an accessible information system for non-technical users. The web created a platform for publishing, sharing, and accessing information that would grow explosively over the next decades.",
        ethical: "Even at its inception, the web raised questions about information control, centralization, and access equality. Berners-Lee deliberately chose not to patent his invention, ensuring it would remain free and open for everyone to use and build upon.",
        image: "https://static.scientificamerican.com/sciam/cache/file/B5FBB89E-6314-478B-80496FBE53AF8591_source.jpg",
        icon: "fas fa-globe"
    },
    {
        year: 1993,
        title: "Mosaic Web Browser Released",
        description: "The National Center for Supercomputing Applications (NCSA) released the Mosaic web browser, developed primarily by Marc Andreessen and Eric Bina. Unlike earlier text-based browsers, Mosaic featured a graphical user interface that could display images inline with text, making the web visually engaging.",
        impact: "Mosaic democratized internet access by providing an intuitive interface anyone could use, triggering explosive growth in web usage. Within 18 months of its release, web traffic increased by 10,000%. Mosaic's design influenced all subsequent browsers and helped catalyze the dot-com boom.",
        ethical: "The popularization of the web through Mosaic began early digital divide issues, separating those with access to this new technology from those without. It also raised questions about content regulation as the web became accessible to broader populations including children.",
        image: "https://media.wired.com/photos/59344b215321273fc0f91cd1/master/pass/mos-10.jpg",
        icon: "fas fa-window-maximize"
    },
    {
        year: 1995,
        title: "Amazon and eBay Launch",
        description: "In 1995, Jeff Bezos launched Amazon.com as an online bookstore operating from his garage, while Pierre Omidyar created AuctionWeb (later renamed eBay), establishing a person-to-person online auction site. These platforms pioneered e-commerce business models that would transform retail.",
        impact: "These platforms revolutionized retail by creating digital marketplaces that connected buyers and sellers across vast distances, changing consumer shopping habits and business models forever. They demonstrated the commercial viability of the web and helped establish online shopping as mainstream.",
        ethical: "The rise of e-commerce began the disruption of traditional retail, with eventual impacts on local businesses, jobs, and community structures. Amazon in particular would raise later questions about market power, working conditions, and the concentration of economic influence in digital platforms.",
        image: "https://media.licdn.com/dms/image/v2/C4D12AQFuJ5oPyq7yNw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1642908947239?e=2147483647&v=beta&t=VFoUJ5Oole9lCGgU5DQZPBDeD7vAoGOovAMXY6PCaIA",
        icon: "fas fa-shopping-cart"
    },
    {
        year: 1998,
        title: "Google Founded",
        description: "Stanford University Ph.D. students Larry Page and Sergey Brin launched Google with its revolutionary PageRank algorithm, which ranked websites based on how many other sites linked to them. This approach dramatically improved search quality over existing engines that relied primarily on keyword matching.",
        impact: "Google democratized information access by making the vast and growing knowledge on the web searchable and discoverable. Its superior search technology quickly made it the dominant gateway to online information, fundamentally changing how people find and consume information.",
        ethical: "Google's success began the concentration of information gatekeeping power in corporate hands and raised questions about search neutrality. The company's eventual business model based on targeted advertising would establish surveillance capitalism as the dominant economic model of the web.",
        image: "https://i.redd.it/51o0jo9j2vqb1.jpg",
        icon: "fab fa-google"
    },
    {
        year: 2001,
        title: "Wikipedia Launches",
        description: "On January 15, 2001, Jimmy Wales and Larry Sanger launched Wikipedia as a free, collaborative encyclopedia that anyone could edit. Based on wiki software that allowed easy collaboration, the platform embodied the web's potential for mass participation in knowledge creation.",
        impact: "Wikipedia democratized knowledge creation and access, challenging traditional encyclopedias and institutional authority over information. It demonstrated the power of mass collaboration on the internet and became one of the world's most visited websites, available in hundreds of languages.",
        ethical: "Wikipedia's open editing model raised persistent questions about accuracy, reliability, and the potential for misinformation in collaborative knowledge platforms. It also sparked debates about expertise, credibility, representation biases, and who gets to define accepted knowledge.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/EnwikipediaArt.PNG/400px-EnwikipediaArt.PNG",
        icon: "fab fa-wikipedia-w"
    },
    {
        year: 2004,
        title: "Facebook Launches",
        description: "Harvard sophomore Mark Zuckerberg launched 'TheFacebook' from his college dorm room on February 4, 2004. Initially restricted to Harvard students, the social networking service gradually expanded to other universities before opening to the general public in 2006.",
        impact: "Facebook transformed social interactions online, created new forms of community building, and changed how people maintain relationships across distances. It introduced the concept of the digital social graph and built a platform that would eventually connect billions of users worldwide.",
        ethical: "Facebook introduced unprecedented privacy challenges and began the era of surveillance capitalism through systematic data collection about users' social connections, preferences, and behaviors. It would later face criticism for facilitating filter bubbles, political polarization, and misinformation.",
        image: "https://i.insider.com/665f630b1cd3b17790434272?width=800&format=jpeg&auto=webp",
        icon: "fab fa-facebook"
    },
    {
        year: 2007,
        title: "iPhone Released",
        description: "On January 9, 2007, Apple CEO Steve Jobs unveiled the first iPhone, combining phone functionality with internet access and application capabilities in a revolutionary touchscreen device. The product launched on June 29, 2007, with people lining up for days to purchase it.",
        impact: "The iPhone fundamentally shifted internet usage from desktop to mobile, making digital connectivity truly ubiquitous and constantly accessible. It transformed computing from a stationary activity to an always-available resource, changed user interface expectations, and created the app economy.",
        ethical: "The rise of smartphones led to concerns about digital addiction, constant connectivity, and work-life balance disruption. The app ecosystem created new privacy vulnerabilities through location tracking and continuous data collection. Smartphone manufacturing raised questions about labor practices and resource extraction.",
        image: "https://i.insider.com/587374fadd0895e1148b47e7?width=600&format=jpeg&auto=webp",
        icon: "fas fa-mobile-alt"
    },
    {
        year: 2011,
        title: "Arab Spring",
        description: "Beginning in late 2010 and continuing through 2011, popular uprisings swept across Tunisia, Egypt, Libya, Yemen, Syria, and other Middle Eastern and North African countries. Social media platforms including Facebook, Twitter, and YouTube played a crucial role in organizing protests and sharing information.",
        impact: "The Arab Spring demonstrated the political power of social media to coordinate mass movements and challenge authoritarian regimes. It showed how internet platforms could facilitate horizontal organization, bypass traditional media censorship, and rapidly spread revolutionary sentiment.",
        ethical: "The events revealed the dual potential of social platforms for both democratic organizing and subsequent surveillance or censorship. It raised questions about the responsibilities of technology companies whose tools were being used in political movements, and the complex relationship between digital technologies and democratic change.",
        image: "https://farm5.static.flickr.com/4075/5410984464_69c9608e84.jpg",
        icon: "fas fa-users"
    },
    {
        year: 2016,
        title: "Fake News Crisis",
        description: "During the 2016 U.S. presidential election, coordinated disinformation campaigns and viral falsehoods spread rapidly across social media platforms, reaching millions of users. Fabricated stories, often optimized for engagement, earned more shares and interactions than factual reporting from traditional news sources.",
        impact: "This crisis highlighted the vulnerability of digital information ecosystems to manipulation and the challenge of verifying online information. It demonstrated how the business models of major platforms could unintentionally amplify false content, affecting public discourse and potentially democratic processes.",
        ethical: "The fake news crisis exposed how social media algorithms can create filter bubbles and promote divisive or false content simply because it generates engagement. It raised fundamental questions about platform responsibility, the economics of digital media, and the balance between free expression and information quality.",
        image: "https://live-production.wcms.abc-cdn.net.au/d93602b3419f54b3cc1134512e2cda6f?impolicy=wcms_crop_resize&cropH=1594&cropW=2837&xPos=85&yPos=77&width=862&height=485",
        icon: "fas fa-newspaper"
    },
    {
        year: 2018,
        title: "GDPR Implementation",
        description: "On May 25, 2018, the European Union implemented the General Data Protection Regulation (GDPR), the most comprehensive privacy legislation to date. The law established new requirements for data consent, collection limitations, breach notifications, and the right to access or delete personal data.",
        impact: "GDPR established new global standards for data privacy, forcing companies worldwide to revise their data collection and processing policies. It represented the first major regulatory challenge to the surveillance capitalism model and influenced subsequent privacy legislation in other jurisdictions.",
        ethical: "The implementation highlighted the tension between data-driven business models and individual privacy rights. It raised questions about whether meaningful consent is possible in complex digital ecosystems and whether technical compliance with privacy regulations actually protects users in practice.",
        image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gdpr_consent_2.max-1000x1000.png",
        icon: "fas fa-lock"
    },
    {
        year: 2023,
        title: "Generative AI Goes Mainstream",
        description: "In late 2022 and throughout 2023, generative AI tools like ChatGPT, DALL-E, and Midjourney became widely available to the general public, demonstrating unprecedented capabilities in language processing, image creation, and other creative tasks. These systems used large language models trained on vast datasets.",
        impact: "Generative AI began transforming creative processes, content creation, and knowledge work across sectors including education, media, software development, design, and customer service. These technologies promised significant productivity gains while threatening disruption to many professional fields.",
        ethical: "The rapid adoption of generative AI raised significant questions about copyright infringement, as these systems were trained on vast datasets of human-created works without explicit permission. It also sparked concerns about AI-generated misinformation, job displacement, and the concentration of power in the hands of companies controlling these technologies.",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*zA_ipKdHCGz3l8Yb_ewxcA.png",
        icon: "fas fa-robot"
    }
];
