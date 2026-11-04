// Adapt the supplied AccordionGallery to this static site without a React runtime.
document.querySelectorAll('[data-team-accordion]').forEach((gallery) => {
  const panels = [...gallery.querySelectorAll('.ag-panel')];
  if (!panels.length) return;
  let active = Math.min(2, panels.length - 1);
  const render = () => {
    panels.forEach((panel, index) => {
      const selected = index === active;
      panel.classList.toggle('ag-panel--active', selected);
      panel.setAttribute('aria-pressed', String(selected));
      panel.style.setProperty('--ag-grow', selected ? String(Math.max(1, panels.length - 1)) : '1');
      panel.style.setProperty('--ag-tilt', `${selected ? 0 : index < active ? 8 : -8}deg`);
      panel.style.setProperty('--ag-drift', selected ? '0' : String(Math.max(-1.5, Math.min(1.5, active - index)) * .03));
    });
  };
  panels.forEach((panel, index) => {
    const select = () => { active = index; render(); };
    panel.addEventListener('pointerenter', (event) => {
      if (event.pointerType === 'mouse') select();
    });
    panel.addEventListener('focus', select);
    panel.addEventListener('click', select);
    panel.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % panels.length;
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + panels.length) % panels.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = panels.length - 1;
      else return;
      event.preventDefault();
      panels[next].focus({ preventScroll: true });
    });
  });
  const measure = () => {
    const usable = Math.max(gallery.clientWidth - 10 * (panels.length - 1), 120);
    gallery.style.setProperty('--ag-media-size', `${Math.max(140, usable * .5 * 1.22)}px`);
  };
  new ResizeObserver(measure).observe(gallery);
  measure();
  render();
});

document.querySelectorAll('[data-training-target]').forEach((button) => {
  button.addEventListener('click', () => {
    const detail = button.closest('.training-detail');
    const section = document.getElementById(button.dataset.trainingTarget);
    if (!detail || !section) return;
    section.focus({ preventScroll: true });
    detail.scrollTo({
      top: detail.scrollTop + section.getBoundingClientRect().top - detail.getBoundingClientRect().top - 24,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  });
});

const copy = {
  en: {
    combinedLiveEyebrow: "04 / LIVESTREAM & MARKET GROWTH",
    combinedLiveTitle: "Live Commerce &\nMarket Development",
    combinedLiveIntro: "From live engagement to commerce. We connect live shopping strategy, hands-on production, real-time operations and local market conditions to improve the path from audience interaction to purchase.",
    combinedLiveSummary: "Local understanding. Consistent execution.",
    trainingFlowLead: "Learn the business. Practise in real projects.",
    trainingFlowIntro: "From TikTok commerce fundamentals to livestream practice, we turn project experience into methods teams can use.",
    trainingContentsLabel: "Explore team training",
    trainingCommerceIntro: "Understand the platform, the product and the path from shop setup to daily operations.",
    trainingLiveIntro: "Prepare the show, practise on camera and review the results together.",
    trainingGalleryLabel: "Team activities photo gallery",
    trainingGalleryHint: "Hover or tap to expand a photo. Use arrow keys to browse.",
    trainingPhotoOne: "Team moments 01",
    trainingPhotoTwo: "Team moments 02",
    trainingPhotoThree: "Team moments 03",
    trainingPhotoFour: "Team moments 04",
    trainingPhotoFive: "Team moments 05",
    trainingCampusTitle: "University–Industry Collaboration",
    trainingActivitiesTogether: "Shared meals, small celebrations and everyday conversations give the team time to get to know one another beyond their roles. These photographs capture the people and moments behind the work.",
    trainingActivitiesConnection: "With different backgrounds and experiences around the same table, there is room to exchange ideas, share stories and build familiarity. That connection carries into the way we communicate and work together.",
    trainingCampusBody: "Through studio visits and practical observation, students explore how content, livestreams and commerce work in a real business setting.",
    trainingCampusObservation: "Students follow the work behind the camera: product preparation, studio setup, host presentation and coordination between roles. Project discussions connect what they see on site with the decisions behind each broadcast.",
    trainingCampusPractice: "Questions and shared observations help connect classroom knowledge with practical workflows, giving students a clearer view of the skills and collaboration involved in content and commerce.",
    trainingLiveEight: "Content structure",
    navAbout: "About",
    navContact: "Contact",
    navServices: "Team",
    navApproach: "Services",
    navCareers: "Project",
    navPackages: "",
    navSubscriptions: "Subscription Plans",
    navBrowseServices: "Explore all services",
    navBrowseProjects: "View selected work",
    navContact: "Contact",
    navStartProject: "Start a Project",
    heroEyebrow: "CLICK TALK / HANGZHOU / WORLDWIDE",
    heroStatement: "Creative Content.\nReal Commerce.\nGlobal Growth.",
    heroIntro: "We bring together strategy, content production, live commerce and team development to help brands connect with audiences and grow across markets.",
    heroFooter: "TIKTOK SHOP / CONTENT / LIVE / CREATORS / CROSS-BORDER COMMERCE",
    heroSignalLive: "LIVE SYSTEM",
    heroArtCaption: "Good conversations travel.",
    heroGalleryLabel: "Project photo spiral gallery",
    heroGalleryHint: "Drag to explore · Hover to pause",
    heroSignalLabel: "GLOBAL / SOCIAL COMMERCE",
    heroSignalTitle: "Signals\nin motion.",
    heroSignalOne: "CONTENT",
    heroSignalTwo: "LIVE",
    heroSignalThree: "MARKETS",
    guideToggle: "IMAGE GUIDE: ON",
    guideOff: "IMAGE GUIDE: OFF",
    slotATitle: "HAIR FAIR USA",
    slotASpec: "PROFILE / LIVE / 01",
    slotABrief: "Featured Shop Creator / live commerce / USA channel",
    slotBTitle: "ZAKA MY KITCHEN",
    slotBSpec: "PROFILE / SHOP / 02",
    slotBBrief: "TikTok Shop profile / daily kitchen life / product-led content",
    slotCTitle: "BUNDLEBID",
    slotCSpec: "PROFILE / ACCESSORIES / 03",
    slotCBrief: "Auction-led creator profile / bundles / community",
    aboutKicker: "ABOUT US",
    aboutTitle: "Talk local.\nMove global.",
    aboutLead: "Click Talk is a Hangzhou-based cross-border social commerce company, helping brands speak to the world through TikTok.",
    aboutBody: "We partner with Chinese and international brands across TikTok Shop operations, content creation, livestreaming, creator and affiliate marketing, and overseas market development. We turn local market intelligence into work that travels.",
    aboutStoryCta: "Read our journey ↗",
    historyEyebrow: "CLICK TALK / COMPANY JOURNEY",
    historyTitle: "From first trade\nto a global growth system.",
    historyIntro: "A timeline of the experiments, markets and operating capabilities that shaped Click Talk.",
    historyYearHint: "Select a year to open its story above. Select it again to close.",
    historyPhotoPlaceholder: "PHOTO / ADD IMAGE",
    historyStageSupply: "SUPPLY / FIRST SIGNAL",
    historyStagePlatform: "PLATFORM / CONNECTION",
    historyStageLive: "LIVE / FIRST SYSTEM",
    historyStageHost: "HOST / LICENSE / HANGZHOU",
    historyStageProduct: "PRODUCT / CATEGORY SHIFT",
    historyStageMarket: "MARKET / MANY DIRECTIONS",
    historyStageCompany: "COMPANY / NEXT CHAPTER",
    historySignalMonth: "monthly GMV / month three",
    historySignalMonthly: "monthly GMV / early 2025",
    historyBack: "Back to about",
    history2019Title: "The first bridge",
    history2019Body: "The journey began with Amazon and 1688, connecting capable Chinese factories with overseas demand. By year-end, the first TikTok short-video matrix was already taking shape.",
    history2021Title: "Platform connection",
    history2021Body: "In 2021, the team began building TikTok UK platform connections. From June to August, Amazon sales continued to scale, sharpening its understanding of platform-led cross-border commerce.",
    history2022Title: "Live commerce begins",
    history2022Body: "Early 2022 started with a Thailand TikTok project and hands-on work at livestream bases. Later that year, the team pushed UK yoga apparel toward the market front, bringing operations closer to overseas customers.",
    history2023Title: "Going live for real",
    history2023Body: "The team joined a Guangzhou TikTok livestream base, took part in a real-hair broadcast and secured a livestream permit. In July 2023, it travelled to Dubai for TikTok creator training. Back in Hangzhou, it built the real-hair business from zero. By year-end, two hours reached about US$1,000 in sales, with an hourly average near US$800.",
    history2024Title: "A new category",
    history2024Body: "When TikTok’s platform mechanics changed, the team began testing synthetic hair. The work established a repeatable rhythm across product, host and live operation.",
    history2025Title: "More markets, more directions",
    history2025Body: "By early 2025, the team began developing the Los Angeles market. New projects expanded across yoga apparel, fashion, outdoor products, wigs, 3C, Spanish-language US, bags and wellness. In the second half, Malaysia creator livestreams and Huawei broadcasts with an Olympic champion and a popular singer opened new directions.",
    history2026Title: "Click Talk takes shape",
    history2026Body: "At the beginning of 2026, the company formally began its next chapter with a purpose-built Hangzhou office, bringing supply, content, live commerce and brand growth into one system.",
    aboutMoreLabel: "Learn more about Click Talk",
    aboutMoreIntro: "Click Talk brings supply, content and commerce into one cross-border growth system.",
    aboutFactOneLabel: "SUPPLY CHAIN",
    aboutFactOne: "Connecting supply chain partners and coordinating product requirements, quality checks and delivery.",
    aboutFactTwoLabel: "BUSINESS MODEL",
    aboutFactTwo: "B2B wholesale, B2C retail and overseas warehouse distribution.",
    aboutFactThreeLabel: "MARKETS",
    aboutFactThree: "TikTok, Whatnot and social commerce across Europe and North America.",
    locationCopy: "FROM HANGZHOU\nIN CONVERSATION WITH THE WORLD",
    showcaseEyebrow: "SELECTED WORK",
    showcaseTitle: "Real Projects.\nReal Execution.",
    showcaseBody: "Explore how we turn strategy, creative production, and live commerce into practical business outcomes.",
    caseYogaCategory: "YOGA / WELLNESS",
    caseYogaName: "Yoga / Wellness",
    caseYogaHeadline: "A calmer route into live commerce.",
    caseYogaOverview: "We built a UK yoga apparel project around product demonstration, host rhythm and community response.",
    caseYogaResult: "15K+ PV / hour",
    caseYogaResultLabel: "LIVESTREAM VIEWS · SINGLE SESSION",
    yogaResultEyebrow: "LIVESTREAM REACH",
    yogaResultUnit: "PV per hour · single livestream",
    yogaResultContext: "A regular rhythm of five livestreams a week supported a growing live audience.",
    yogaResultSource: "View project results ↗",
    yogaScenesEyebrow: "03 / PROJECT IN ACTION",
    yogaScenesTitle: "From the live room.",
    yogaScenesBody: "Product demonstrations, host delivery and the operating setup behind the project.",
    yogaSceneOne: "Live broadcast",
    yogaSceneTwo: "Host delivery",
    yogaSceneThree: "Behind the camera",
    yogaSceneFour: "Product styling",
    yogaSceneFive: "Project results",
    yogaSceneOpen: "View full image ↗",
    caseFocusEyebrow: "PROJECT FOCUS",
    caseScenesEyebrow: "03 / PROJECT IN ACTION",
    caseClosingEyebrow: "04 / THE TAKEAWAY",
    jewelryHeroContext: "Creative direction, close-up storytelling and live execution.",
    jewelryMethodIntro: "Jewelry needs more than a beautiful frame. We connect material detail, wearing context and clear explanation so viewers can understand each piece before making a choice.",
    jewelryLiveEyebrow: "02 / LIVE PRESENTATION",
    jewelryLiveTitle: "Small details.\nA clearer choice.",
    jewelryLiveLead: "Bring the product closer, without losing the story around it.",
    jewelryLiveBody: "Close-up demonstration, wearing examples and audience questions work together. Each product gets a clear introduction, a moment to be seen and room for conversation before the next piece.",
    jewelryFocusTitle: "Detail.\nContext.\nConfidence.",
    jewelryFocusBody: "Show the finish, explain how a piece is worn and make product differences easier to understand.",
    jewelryLiveOne: "CLOSE-UP DETAIL",
    jewelryLiveOneBody: "Keep material, finish and proportion visible in the frame.",
    jewelryLiveTwo: "WEARING CONTEXT",
    jewelryLiveTwoBody: "Connect product presentation with styling and real wearing examples.",
    jewelryLiveThree: "LIVE CONVERSATION",
    jewelryLiveThreeBody: "Use audience questions to guide explanation and the pace of the session.",
    jewelryScenesTitle: "Behind every detail.",
    jewelryScenesBody: "Product presentation, studio preparation and the people bringing each livestream together.",
    jewelrySceneOne: "Close-up presentation",
    jewelrySceneTwo: "Live demonstration",
    jewelrySceneThree: "Host delivery",
    jewelrySceneFour: "The studio setup",
    jewelrySceneFive: "Behind the camera",
    jewelrySceneSix: "On-site execution",
    jewelrySceneSeven: "Livestream preparation",
    jewelrySceneEight: "Product presentation",
    jewelrySceneNine: "Display and staging",
    jewelryClosingTitle: "Let the detail speak.\nMake the choice clearer.",
    jewelryClosingBody: "A considered visual language and a steady live rhythm bring product, presenter and audience closer together.",
    crystalHeroContext: "Material, everyday rituals and a connected content rhythm.",
    crystalFocusTitle: "Texture.\nMeaning.\nConnection.",
    crystalFocusBody: "Keep material detail visible and the story grounded in real settings, product knowledge and audience conversation.",
    crystalScenesTitle: "The story, in practice.",
    crystalScenesBody: "The live room, product presentation and on-site collaboration behind the project.",
    crystalSceneOne: "Inside the live room",
    crystalSceneTwo: "Product and setting",
    crystalSceneThree: "Live presentation",
    crystalSceneFour: "On-site collaboration",
    crystalClosingBody: "A connected content system turns individual product moments into a recognizable brand experience.",
    yogaLiveDemoBody: "Movement, fabric and fit appear together.",
    yogaLiveHostBody: "Clear, patient expression keeps the live room moving.",
    yogaLiveResponseBody: "Audience questions return to content and product decisions.",
    caseHairCategory: "HAIR / WIGS",
    caseHairName: "Hair / Wigs",
    hairTotalResultTitle: "PROJECT GMV RESULT",
    hairAccountLink: "Visit TikTok · @hairfair_usa ↗",
    hairLiveComparisonLabel: "Earlier and later livestream dashboard comparison",
    hairLiveBefore: "EARLIER SESSION",
    hairLiveAfter: "LATER SESSION",
    hairLiveBeforeMetric: "GMV · USD",
    hairLiveAfterMetric: "Attributed GMV · USD",
    hairLiveComparisonNote: "These are individual livestream dashboard snapshots for comparison. The project’s total monthly GMV is reported above.",
    hairFeedbackEyebrow: "03 / CUSTOMER FEEDBACK",
    hairFeedbackTitle: "What our customers say.",
    hairFeedbackBody: "We have received many positive comments from shoppers, from appreciation for our hosts to praise for patient explanations and detailed product demonstrations. These responses reflect the care we put into helping people choose with confidence.",
    hairFeedbackCaptionOne: "Patient, detailed product demonstrations",
    hairFeedbackCaptionTwo: "Positive feedback for our hosts",
    hairFeedbackCaptionThree: "Viewers enjoy our hosts’ wig demonstrations",
    hairFeedbackCaptionFour: "Customers share positive feedback after purchase",
    hairFeedbackCaptionFive: "An engaging opening and natural presentation",
    hairFeedbackCaptionSix: "Customers appreciate the look and length",
    hairFeedbackOpen: "View full feedback ↗",
    caseHairHeadline: "Make product choice easier to trust.",
    caseHairOverview: "We connected product education, host-led demonstration and day-to-day live operations for a hair and wigs business.",
    caseHairResult: "Approx. US$100,000+",
    caseHairResultLabel: "TOTAL MONTHLY GMV",
    caseHairGmvLabel: "Total monthly GMV · USD",
    caseHairChartTitle: "Monthly total GMV / project progression",
    caseHairChartNote: "April: $0 monthly GMV → from May onward: US$100,000+ monthly GMV, sustained.",
    caseHairChartDescription: "April started at US$0 monthly GMV. From May onward, monthly GMV reached the US$100,000+ range and remained stable.",
    caseHairStableLabel: "Now",
    caseJewelryCategory: "JEWELRY / ACCESSORIES",
    caseJewelryName: "Jewelry / Accessories",
    caseJewelryHeadline: "Let detail do the selling.",
    caseJewelryOverview: "A detail-first content and livestream project designed to make material, finish and product value easier to understand.",
    caseJewelryResult: "Product storytelling",
    caseJewelryResultLabel: "CORE DELIVERY",
    caseCrystalCategory: "CRYSTAL / LIFESTYLE",
    caseCrystalName: "Crystal / Lifestyle",
    caseCrystalHeadline: "Turn atmosphere into a reason to stay.",
    caseCrystalOverview: "We shaped short-form product storytelling around a tactile lifestyle category, using visual direction and community-ready content.",
    caseCrystalResult: "Short-form content system",
    caseCrystalResultLabel: "CORE DELIVERY",
    caseViewStudy: "View Case Study",
    previousWork: "Previous work",
    nextWork: "Next work",
    railOneTitle: "CAMPAIGN HERO",
    railOneMeta: "4:5 · PRODUCT + PEOPLE",
    railTwoTitle: "CREATOR STORY",
    railTwoMeta: "3:4 · PORTRAIT",
    railThreeTitle: "SHOP RESULT",
    railThreeMeta: "4:5 · PRODUCT DETAIL",
    railFourTitle: "LIVE MOMENT",
    railFourMeta: "9:16 · STUDIO FRAME",
    railFiveTitle: "TEAM CULTURE",
    railFiveMeta: "3:2 · CANDID",
    servicesKicker: "OUR EXPERTISE",
    servicesTitle: "OUR\nEXPERTISE",
    servicesSubtitle: "One Connected Approach to Creative Commerce.",
    servicesIntro: "Strategy, content, live commerce and team development working together around the realities of each market.",
    serviceOne: "Operations Strategy",
    serviceOneBody: "Turning market insights into action. We connect platform operations, product positioning and content planning so brands can enter each market with a practical operating plan.",
    serviceTwo: "Content Creation",
    serviceTwoBody: "Content made to connect. We create product visuals and short-form videos that communicate value, fit the platform and support commerce.",
    serviceThree: "The Team",
    serviceThreeBody: "The people behind the studio, the live room and every market we enter.",
    serviceFour: "Live Commerce & Market Development",
    serviceFourBody: "From live engagement to commerce. We connect live shopping strategy, hands-on production and market-specific execution to improve the path from interaction to purchase.",
    serviceFive: "Overseas Market Development",
    serviceFiveBody: "Experience across markets, with a current focus on the U.S. market.",
    serviceSix: "Team Training & Development", serviceSixBody: "Building teams that deliver. We provide practical training, operating guidance and hands-on support for content, live commerce and daily execution.",
    jewelryTrainingCtaLabel: "TEAM TRAINING / LIVE", jewelryTrainingCta: "Explore live training",
    additionalKicker: "ADDITIONAL CAPABILITIES", additionalTitle: "More capabilities", additionalIntro: "Supporting capabilities that can be added around the core growth system.", additionalTrainingTitle: "Team Training", additionalTrainingBody: "Team training", additionalSetupTitle: "TikTok Shop Setup", additionalSetupBody: "TikTok Shop setup and foundational launch support", additionalConsultingTitle: "Strategy Consulting", additionalConsultingBody: "Strategy consulting for product, market and TikTok operating paths", additionalOutreachTitle: "Creator Outreach", additionalOutreachBody: "Creator finding, outreach and partnership support",
    trainingDetailEyebrow: "ADDITIONAL CAPABILITY / TEAM TRAINING", trainingDetailTitle: "Team Training", trainingDetailLead: "Not only execution.\nWe help teams build the ability to execute.", trainingDetailIntro: "Click Talk turns operating methods, content workflows and livestream experience from real projects into working methods that teams can continue to use.", trainingDetailApproach: "Training is not centered on theory. It is built around real business, practical projects and concrete execution workflows.", trainingCommerceTitle: "TikTok Commerce Training", trainingCommerceZh: "TikTok commerce training", trainingCommerceOne: "TikTok Shop fundamentals", trainingCommerceTwo: "Platform operations thinking", trainingCommerceThree: "Cross-border commerce workflow", trainingCommerceFour: "Market and product judgment", trainingContentTitle: "Team Activities", trainingContentZh: "Team activities", trainingDinnerBody: "Time together beyond projects — shared moments, conversation and team connection.", trainingLiveTitle: "Livestream Training", trainingLiveZh: "Livestream training", trainingLiveOne: "Livestream workflow", trainingLiveTwo: "Host coordination", trainingLiveThree: "Product presentation", trainingLiveFour: "Sales scripting", trainingLiveFive: "Livestream rhythm", trainingLiveSix: "On-site operations", trainingLiveSeven: "Data review", trainingLiveEight: "Content structure", trainingLiveProjectLabel: "PROJECT PRACTICE", trainingLiveProjectTitle: "From project execution to live capability", trainingLiveProjectIntro: "We use a real jewelry livestream project to make the operating method easier to repeat.", trainingLiveProjectOneTitle: "Product presentation", trainingLiveProjectOneBody: "Show detail, size, material and use clearly in livestreams and content.", trainingLiveProjectTwoTitle: "Live flow", trainingLiveProjectTwoBody: "Arrange product order, presentation rhythm and interaction points across the show.", trainingLiveProjectThreeTitle: "Sales communication", trainingLiveProjectThreeBody: "Build clearer language around product benefits, viewer questions and purchase decisions.", trainingLiveProjectFourTitle: "On-site coordination", trainingLiveProjectFourBody: "Help hosts, operators, product support and on-site staff work as one team.", trainingFrameworkTitle: "Operating Framework", trainingFrameworkZh: "Operating framework training", trainingFrameworkOne: "Project workflow", trainingFrameworkTwo: "Team role collaboration", trainingFrameworkThree: "Daily operations", trainingFrameworkFour: "Performance review", trainingFrameworkFive: "Continuous optimization", trainingWorkshopTitle: "Practical Workshops", trainingWorkshopZh: "Practical workshops", trainingWorkshopBody: "Training can use real products, real accounts or active projects so teams understand and practise inside real business rather than learning abstract theory.", trainingImagePlaceholder: "IMAGE / ADD LATER", trainingSummary: "Not only execution.\nCapability stays with the team.", trainingSummaryZh: "Not only complete the project.\nLeave execution capability with the team.",
    serviceDetailBack: "Back to growth system",
    operationsDetailEyebrow: "01 / OPERATIONS STRATEGY",
    operationsDetailTitle: "Operations\nStrategy",
    operationsDetailIntro: "Turning market insights into action.",
    operationsDetailIntroBody: "We connect platform operations, product positioning, pricing and content planning into a practical route to market. The result is a clearer operating plan for the next decision, not a deck that sits on a shelf.",
    operationsMarketTitle: "Market & Product",
    operationsMarketBody: "Before entering a market, we judge whether the product fits, what consumers truly need, and how the product should enter TikTok.",
    operationsMarketPointOne: "TARGET MARKET", operationsMarketPointTwo: "PRODUCT", operationsMarketPointThree: "SELECTION", operationsMarketPointFour: "PRICING", operationsMarketPointFive: "ENTRY",
    operationsRouteTitle: "Launch Blueprint", operationsRouteBody: "Launching a TikTok Shop is not a stack of independent actions, but a sequence of connected decisions.",
    operationsRouteShop: "Shop setup", operationsRouteMarket: "Market judgment", operationsRoutePositioning: "Positioning", operationsRouteContent: "Content", operationsRouteLive: "Live", operationsRouteAffiliate: "Affiliate", operationsRouteRoadmap: "Growth roadmap", operationsRouteNote: "From market entry to content, live commerce and creator partnerships, every step serves the same growth path.",
    operationsExecutionTitle: "Daily Operations", operationsExecutionBody: "Once the strategy is set, we translate it into concrete operations and keep the different parts working together.",
    operationsExecutionPointOne: "CONTENT RHYTHM", operationsExecutionPointTwo: "LIVESTREAM", operationsExecutionPointThree: "PROMOTION", operationsExecutionPointFour: "CREATOR", operationsExecutionPointFive: "SHOP OPERATIONS", operationsExecutionPointSix: "DATA REVIEW",
    operationsGrowthTitle: "Optimize & Scale", operationsGrowthBody: "Growth is not a one-time plan. We keep watching content, live, product and creator performance, identify what works, then move into the next round of adjustment and scale.",
    operationsGrowthPointOne: "Content performance analysis", operationsGrowthPointTwo: "Live data review", operationsGrowthPointThree: "Product performance judgment", operationsGrowthPointFour: "Creator performance review", operationsGrowthPointFive: "Stage-based strategy adjustment", operationsGrowthPointSix: "Scale validated paths",
    operationsImagePlaceholder: "IMAGE / ADD LATER", operationsSummary: "Judge first. Execute next. Adjust with results.", operationsSummaryEnglish: "Strategy connects every decision.",
    performanceSpeedTitle: "Inference Speed\nAI Response Latency",
    performanceSpeedCaption: "Average global\nresponse",
    performanceContextTitle: "Context Window\nLong-form Understanding",
    performanceContextCaption: "Tokens processed\nsimultaneously",
    performanceConnectionsTitle: "Intelligent Connections\nCross-Source Context",
    performanceConnectionsCaption: "Connected data\nsources",
    performanceLearn: "Learn More",
    contentDetailEyebrow: "02 / SHORT-FORM CONTENT",
    contentDetailTitle: "Short-form\nContent",
    contentDetailIntro: "Content made to connect.",
    contentPlanningExecution: "Each direction becomes a practical brief: the opening hook, key product benefit, scene and shot sequence. Seasonal moments and audience questions help shape a series of ideas the team can plan and produce together.",
    contentProductionScript: "We shape the opening, product demonstration and shot sequence into a clear script, so each scene has a purpose and the product benefit is easy to follow.",
    contentProductionCraft: "On set, framing, light and close-up details make the product tangible. Editing then brings together pacing, subtitles, sound and visual identity to turn those moments into a coherent short-form story.",
    contentDetailIntroBody: "From product visuals to short-form video, we create platform-native work that communicates value quickly and supports commerce. Each format is shaped around the product, the audience and the moment of attention.",
    contentStrategyTitle: "Content strategy", contentStrategyBody: "Before filming, we decide why the content needs to exist. Who is it for? Why would they stop? What is most worth seeing? Which expression fits this market?", contentAudience: "Audience", contentProductValue: "Product value", contentAngle: "Content angle", contentMarketLanguage: "Account direction",
    contentPlanningTitle: "Content planning", contentPlanningBody: "For different products and consumption moments, we build content directions that can be tested continuously instead of relying on one video template.", contentPlanningPointOne: "Product demonstration", contentPlanningPointTwo: "Use cases", contentPlanningPointThree: "Problem-solving content", contentPlanningPointFour: "Product reviews", contentPlanningPointFive: "Festive atmosphere", contentPlanningPointSix: "UGC-style content", contentPlanningPointSeven: "Trends and timely topics",
    contentProductionTitle: "Creative & production", contentProductionBody: "From the first idea to the final frame, we translate product information into content built for short-form viewing rhythm.", contentProcessDirection: "Creative direction", contentProcessScript: "Script / storyboard", contentProcessShooting: "Shooting", contentProcessEditing: "Editing", contentProcessPackaging: "Visual packaging",
    contentTestingTitle: "Testing & optimization", contentTestingBody: "We do not place growth on one “perfect video”. The same product can be tested through different hooks, scenes, expressions and structures, then adjusted through actual performance.", contentObserveLabelEnglish: "KEY OBSERVATIONS", contentObserveLabel: "What we observe", contentObserveStay: "Retention", contentObserveComplete: "Completion", contentObserveEngage: "Engagement", contentObserveClick: "Clicks", contentObserveConvert: "Conversion",
    contentImagePlaceholder: "IMAGE / ADD LATER", contentSummary: "Attention has peaks and valleys. Brand building is long-term.", contentSummaryEnglish: "Attention moves in waves. Brand building is long-term.",
    contentPointOne: "01 / CREATIVE DIRECTION",
    contentPointTwo: "02 / PLATFORM FORMATS",
    contentPointThree: "03 / PERFORMANCE ITERATION",
    overseasDetailEyebrow: "05 / GLOBAL MARKET PRESENCE", overseasDetailTitle: "Global Market Presence", overseasDetailMantra: "Global Experience.\nU.S. Focus.",
    overseasDetailIntro: "Our cross-border experience comes from real projects across different markets. Across countries and regions, the team has worked with different consumer habits, content environments, livestream formats and commerce ecosystems. These experiences shaped Click Talk's understanding of cross-market operations. Today, we are focusing more resources and experience on the U.S. market.",
    overseasExperienceTitle: "Experience Across Markets", overseasExperienceBody: "Real projects in different markets continue to build our practical understanding of cross-border business.", overseasExperiencePointOne: "Consumer habits", overseasExperiencePointTwo: "Content context", overseasExperiencePointThree: "Commerce environment", overseasExperiencePointFour: "Livestream habits", overseasExperiencePointFive: "Price perception", overseasExperiencePointSix: "Market stage", overseasMapPlaceholder: "MAP / ADD MARKET NODES LATER",
    overseasPlaybookTitle: "Different Markets, Different Playbooks", overseasPlaybookMantra: "One playbook\ndoesn't fit every market.", overseasPlaybookBody: "Different countries vary in consumer preference, content expression, livestream habits, price perception and e-commerce maturity. Cross-market experience makes us more accustomed to adjusting execution to real conditions instead of copying one template.", overseasKeywordContent: "Content expression", overseasKeywordCommerce: "Commerce habits", overseasKeywordLive: "Livestream format", overseasKeywordConsumer: "Consumer perception", overseasKeywordContext: "Local market context",
    overseasFocusTitle: "U.S. Focus", overseasFocusBody: "Building on cross-market practice, Click Talk is currently focused on the U.S. market. We continue to build first-hand experience across TikTok content, live commerce, Creator partnerships and cross-border operations.", overseasFromExperienceTitle: "From Experience to Focus", overseasFromExperienceBody: "Cross-market experience helps us understand difference. Market focus lets us go deeper.", overseasTransitionExperienceLabel: "GLOBAL EXPERIENCE", overseasTransitionExperience: "Content, live, commerce and cross-border execution experience gathered through different projects.", overseasTransitionFocusLabel: "U.S. FOCUS", overseasTransitionFocus: "Click Talk brings that experience into long-term practice in the U.S. market.", overseasSummary: "GLOBAL EXPERIENCE.\nU.S. FOCUS.", overseasSummaryZh: "Cross-market experience,\ndeepened in the U.S.", overseasSummaryEnglish: "Different markets taught us how to adapt.\nFocus allows us to go deeper.",
    overseasPointOne: "01 / MARKET ENTRY",
    overseasPointTwo: "02 / LOCALIZATION",
    overseasPointThree: "03 / GROWTH PLANNING",
    teamDetailEyebrow: "CLICK TALK / THE TEAM",
    teamMetaLabel: "CLICK TALK / HANGZHOU / WORLDWIDE",
    teamTenure: "In the business since 2020",
    projectFocusLabel: "FOCUS",
    projectFormatLabel: "FORMAT",
    projectRoleLabel: "ACHIEVEMENT",
    projectDetailBack: "Back to the work",
    hairProgressEyebrow: "PROJECT PROGRESS / 2026",
    hairProgressTitle: "A project that keeps moving.",
    hairProgressIntro: "A view of the Hair / Wigs operating rhythm from setup to scaled live commerce.",
    hairProgressChartLabel: "Rising project progress line from April to October 2026",
    hairProgressLegend: "PROJECT MOMENTUM / ILLUSTRATIVE INDEX",
    hairProgressResult: "SETUP → CONTENT → LIVE → SCALE",
    hairProgressApr: "Channel setup",
    hairProgressAprBody: "Positioning, product selection and show system.",
    hairProgressJun: "Content rhythm",
    hairProgressJunBody: "Repeatable formats and creator-led product education.",
    hairProgressOct: "Live scale",
    hairProgressOctBody: "A clearer path from attention to purchase.",
    hairProgressImageOne: "Live commerce setup",
    hairProgressImageTwo: "Production and team workflow",
    hairProgressImageThree: "Initial project baseline",
    liveDetailEyebrow: "03 / LIVESTREAM COMMERCE",
    liveDetailTitle: "A live room\nbuilt to glow.",
    liveDetailIntro: "A focused system for turning live attention into a clear path to purchase.",
    featureHardwareTitle: "Hardware",
    featureHardwareBody: "My entire desktop setup is built for power. It is silent, durable, and holds my focus.",
    featureStudioTitle: "Studio",
    featureStudioBody: "Studio is where I define every single pixel. It is the hub for each canvas I deliver.",
    featureMotionTitle: "Motion",
    featureMotionBody: "I use Motion to build lively prototypes, bridging the gap between views and code.",
    liveDetailBack: "Back to growth system",
    creatorDetailEyebrow: "04 / CREATOR & AFFILIATE MARKETING",
    creatorDetailTitle: "Creator &\nAffiliate Marketing",
    creatorDetailIntro: "Affiliate partnerships require continuous operation, not one-off outreach.",
    creatorDetailIntroBody: "Creator partnerships are not batch invitations. We find the right Creator for the product, market and content need, then continuously manage matching, communication, sampling, execution and review.",
    creatorTargetTitle: "Creator matching", creatorTargetBody: "Find Creators who truly fit the product and market, rather than looking only at follower count.", creatorTargetPointOne: "Target market", creatorTargetPointTwo: "Product type", creatorTargetPointThree: "Content style", creatorTargetPointFour: "Audience profile", creatorTargetPointFive: "Account performance", creatorTargetPointSix: "Brand fit",
    creatorPlanningTitle: "Partnership planning", creatorPlanningBody: "Set the partnership goal and execution approach, so the Creator knows how the product should enter the content instead of simply receiving a sample.", creatorPlanningPointOne: "Creator outreach", creatorPlanningPointTwo: "Product seeding", creatorPlanningPointThree: "Commission structure", creatorPlanningPointFour: "Content brief", creatorPlanningPointFive: "Campaign planning", creatorPlanningPointSix: "Partnership rhythm",
    creatorExecuteTitle: "Partnership execution", creatorExecuteBody: "Once a partnership starts, content, links, publishing times and campaign execution all need continued follow-up.", creatorExecutePointOne: "Creator communication", creatorExecutePointTwo: "Sample follow-up", creatorExecutePointThree: "Content publishing management", creatorExecutePointFour: "Affiliate link", creatorExecutePointFive: "Campaign coordination", creatorExecutePointSix: "Relationship maintenance",
    creatorReviewTitle: "Review", creatorReviewBody: "The end of a partnership does not mean the end of the relationship. We use actual results to decide which Creators and formats are worth continuing and scaling.", creatorReviewLabel: "What we review", creatorReviewPointOne: "Content performance", creatorReviewPointTwo: "Engagement", creatorReviewPointThree: "Clicks", creatorReviewPointFour: "Conversion", creatorReviewPointFive: "Sales performance", creatorReviewPointSix: "Long-term creator value",
    creatorImagePlaceholder: "IMAGE / ADD LATER", creatorSummary: "Creator relationships are built, not collected.", creatorSummaryEnglish: "Creator relationships are built, not collected.",
    livestreamDetailEyebrow: "04 / LIVESTREAM OPERATIONS", livestreamDetailTitle: "A live room needs\nmore than a host.", livestreamDetailSubtitle: "A live room is not enough with a host alone.", livestreamDetailIntro: "Behind every livestream, space, host, product, script and operating rhythm work together. Click Talk puts studio setup, host configuration, live planning, sales scripting and daily operations into one execution system, turning a live event into a sales scene that can be operated and optimized continuously.",
    livestreamSetupTitle: "Live Setup", livestreamSetupBody: "Before a livestream begins, we establish an environment suited to the product, brand and sales approach.", livestreamSetupPointOne: "STUDIO SETUP\nStudio setup", livestreamSetupPointTwo: "EQUIPMENT & PRODUCTION\nEquipment and production environment", livestreamSetupPointThree: "PRODUCT DISPLAY\nProduct display", livestreamSetupPointFour: "LIVE WORKFLOW\nLive execution workflow",
    livestreamPeopleTitle: "People Behind The Live", livestreamPeopleBody: "The host is only what consumers see. Stable livestreaming requires the host, operator and on-site team to work together.", livestreamPeoplePointOne: "HOST\nHost presentation and explanation", livestreamPeoplePointTwo: "LIVE OPERATOR\nBack-end operation and rhythm control", livestreamPeoplePointThree: "CONTENT / PRODUCT SUPPORT\nProduct and content support", livestreamPeoplePointFour: "ON-SITE COORDINATION\nOn-site coordination",
    livestreamPlanningTitle: "Live Planning", livestreamPlanningBody: "A livestream should not decide what to say after the camera turns on. We plan product order, content rhythm, promotional moments and sales expression in advance.", livestreamProcessOpening: "Audience retention", livestreamProcessProduct: "Product introduction", livestreamProcessDemo: "Demonstration and trial", livestreamProcessOffer: "Pricing and promotion", livestreamProcessInteraction: "Comment interaction", livestreamProcessConversion: "Purchase guidance", livestreamServicePlanning: "Livestream Planning\nLivestream planning", livestreamServiceScript: "Sales Scripting\nSales scripting", livestreamServiceSequence: "Product Sequence\nProduct sequence", livestreamServiceRhythm: "Promotional Rhythm\nPromotional rhythm", livestreamServiceInteraction: "Audience Interaction\nAudience interaction",
    livestreamDailyTitle: "Day-to-Day Operations", livestreamDailyBody: "A single livestream is one execution. Stable live capability comes from continuous operation, review and adjustment.\nWe observe product performance, host expression, user feedback and live rhythm, then move into the next round of optimization.", livestreamSummary: "Production, people and operations\nmeet in the same room.", livestreamSummaryZh: "People, content, production and operations meet in the same live room.", livestreamImagePlaceholder: "IMAGE / ADD LATER",
    creatorDetailBack: "Back to growth system",
    approachCurveLabel: "BUSINESS MODEL / GROWTH PATH",
    approachCurveTitle: "Source → operate → expand",
    approachCurveCaption: "A visual guide to how supply, operations and market expansion build compounding growth.",
    approachMetricsLabel: "Capability map",
    approachChartLabel: "A visual map connecting supply, content and live commerce capabilities",
    metricOneLabel: "01 / SUPPLY",
    metricOneCaption: "product context",
    metricTwoLabel: "02 / CONTENT",
    metricTwoCaption: "platform-native work",
    metricThreeLabel: "03 / LIVE",
    metricThreeCaption: "hands-on execution",
    curveLabelOne: "01 / CONNECT",
    curveLabelTwo: "02 / CREATE",
    curveLabelThree: "03 / CONVERT",
    curveLabelResult: "04 / RESULTS COMPOUND",
    stepOne: "Source",
    stepOneBody: "Start with owned supply, product development and a clear quality loop.",
    stepTwo: "Operate",
    stepTwoBody: "Connect TikTok, Whatnot, live commerce, content and creator operations.",
    stepThree: "Expand",
    stepThreeBody: "Use overseas warehousing, distribution and brand marketing to compound growth.",
    approachKicker: "WHY CLICK TALK",
    approachTitle: "Creative Thinking.\nPractical Execution.",
    careersKicker: "WHY CLICK TALK",
    careersTitle: "Creative Thinking.\nPractical Execution.",
    careersBody: "We combine creative production with hands-on ecommerce operations, bringing strategy, content and execution together in one collaborative approach.",
    modelOneTitle: "Team",
    modelOneBody: "Operators, hosts and creators work together across every market touchpoint.",
    modelTwoTitle: "Train",
    modelTwoBody: "Structured onboarding, hands-on mentoring and rotation across core roles.",
    modelThreeTitle: "Grow",
    modelThreeBody: "Flat collaboration and clear progression turn real projects into lasting capability.",
    contactTitle: "Let's make\nsomething move.",
    contactAddress: "Building 5, 310, Haizhi Center\nYuhang District, Hangzhou, Zhejiang",
    inquiryKicker: "START A CONVERSATION",
    inquiryTitle: "Tell us what\nyou’re building.",
    inquiryLead: "Share the essentials and we’ll suggest a practical next step for your brand, project or market.",
    inquiryDirectLabel: "Prefer email?",
    inquiryFormTitle: "Send a short brief",
    inquiryFormTime: "Usually takes under a minute.",
    inquiryName: "Your name",
    inquiryEmail: "Business email",
    inquiryCompany: "Company / brand",
    inquiryInterest: "What can we help with?",
    inquiryChoose: "Choose a service",
    inquiryOther: "Something else",
    inquiryMessage: "A few words about your goal",
    inquirySubmit: "SEND YOUR BRIEF",
    inquiryNote: "Send directly from this page via FormSubmit. No email app needed.",
    inquirySending: "SENDING…",
    inquirySendingStatus: "Submitting your brief. Please keep this page open.",
    inquirySuccess: "Your brief has been submitted. Thank you — our team will be in touch.",
    inquiryError: "We could not confirm your submission. Your details are still here; please try again or email us directly.",
    inquiryLocalFile: "Please open the website’s preview link to submit this form. Direct submission is unavailable from a local file.",
    packagesKicker: "SERVICES",
    oneOffLearnMore: "Learn more",
    packagesTitle: "Services for\nthe next move.",
    packagesBody: "Flexible packages for the stage you are in now, with room to grow into the next one.",
    oneOffKicker: "ONE-OFF SERVICES", oneOffTitle: "Single services", oneOffIntro: "Choose one service for a defined need. Pricing is confirmed against the agreed scope and execution details.", oneOffLivestream: "Single livestream", oneOffLivestreamBody: "Livestream planning, on-site execution and operations support", oneOffVideo: "Single short-form video", oneOffVideoBody: "Short-form concept, production and delivery", oneOffStore: "TikTok Shop setup", oneOffStoreBody: "TikTok Shop preparation and foundational setup", oneOffQuote: "Quote per project", oneOffBack: "Back to plans",
    packageOneTitle: "Explorer",
    packageOneSubtitle: "Explorer",
    packageOnePrice: "¥55,000/mo",
    packageOneFeatureOne: "2 Specialists",
    packageOneFeatureTwo: "40–60 videos/month",
    packageOneFeatureThree: "Basic reporting",
    packageOneTerm: "Min. 3 months",
    packageOneBody: "A focused starting system for brands beginning their overseas growth journey.",
    packageTwoTitle: "Advanced",
    packageTwoSubtitle: "Advanced",
    packageTwoPrice: "¥95,000/mo",
    packageTwoFeatureOne: "3–5 Specialists + Host",
    packageTwoFeatureTwo: "60–80 videos + 40h live",
    packageTwoFeatureThree: "Influencer outreach",
    packageTwoTerm: "Min. 6 months",
    packageTwoBody: "An integrated content, live and creator operation built for consistent momentum.",
    packageThreeTitle: "Navigator",
    packageThreeSubtitle: "Navigator",
    packageThreePrice: "¥165,000/year",
    packageThreeFeatureOne: "5–7 Specialists + 1–2 Hosts",
    packageThreeFeatureTwo: "80–120 videos + 100h live",
    packageThreeFeatureThree: "Full branding & multi-channel",
    packageThreeTerm: "Min. 1 year",
    packageThreeBody: "A full-brand, multi-channel system for teams ready to lead across markets.",
    packagePopular: "★ Most Popular",
    packageCta: "LEARN MORE",
    packageDetailEyebrow: "05 / SUBSCRIPTION SERVICE",
    packageFitLabel: "BEST FOR",
    packageOrderCta: "START A CONVERSATION",
    packageOrderNote: "Tell us where you are now. We will shape the right next step together.",
    packageFaqKicker: "WHAT IS INCLUDED",
    packageQuestionOne: "What does this plan cover?",
    packageQuestionTwo: "How does the workflow start?",
    packageQuestionThree: "Can the plan grow with us?",
    packageQuestionFour: "How do we order?",
    packageAnswerFour: "Use the button on the left to email Click Talk. We will reply with availability and a tailored scope.",
    packageBack: "Back to partnership plans",
    packageCommercialsKicker: "FLEXIBLE WAYS TO WORK",
    packageCommercialsTitle: "Add-ons & engagement models",
    packageAddonsTitle: "Add-On Services",
    addonStore: "TikTok Store Setup",
    addonOneTime: "one-time",
    addonStrategy: "Strategy Consulting",
    addonPerHour: "per hour",
    addonTraining: "Team Training",
    addonPerDay: "per day",
    addonInfluencer: "Influencer Outreach",
    addonPerPerson: "per person",
    addonPlatform: "Platform Resources",
    addonPerSession: "per session",
    addonNetwork: "Extra Network Lines",
    addonPerLine: "per line/month",
    packageEngagementTitle: "Engagement Models",
    engagementLaunch: "One-Time Launch Projects",
    engagementLaunchBody: "Initial setup and strategy",
    engagementRetainer: "Monthly Operations Retainers",
    engagementRetainerBody: "Ongoing management and growth",
    engagementPerformance: "Performance-Based Collaborations",
    engagementPerformanceBody: "Incentives aligned with your success",
    engagementEnterprise: "Custom Enterprise Solutions",
    engagementEnterpriseBody: "Tailored for large-scale operations",
    packageCommission: "Performance-based commission applies on top of the base fee. Rates are negotiable based on GMV volume, contract duration and scope.",
    calculatorKicker: "TRY PROJECT ESTIMATION CALCULATOR",
    calculatorTitle: "Get premium website within your budget",
    calculatorServiceTitle: "What kind of service do you need?",
    calculatorDesign: "Only Design",
    calculatorDevelopment: "Only Development",
    calculatorBoth: "Design + Development",
    calculatorPagesTitle: "Number of Pages",
    calculatorPagesUnit: "pages",
    calculatorAddonsTitle: "Add-ons",
    calculatorContent: "I will need help with content",
    calculatorPageShort: "page",
    calculatorSeo: "I want to optimize my website for SEO",
    calculatorTimelineTitle: "How fast do you need this?",
    calculatorRush: "Within 7 Days",
    calculatorFast: "Within 14 Days",
    calculatorRegular: "Regular Speed (Based on discussion)",
    calculatorEstimateTitle: "Estimated Cost",
    calculatorEstimateBody: "A clear starting point for your next growth move.",
    calculatorAgencyTitle: "Typical Agency charges minimum",
    calculatorAgencyNote: "+ Too much extra time & additional cost",
    calculatorFreelancerTitle: "Regular Freelancer charges minimum",
    calculatorFreelancerNote: "+ Too much headache & back-and-forth",
    calculatorYourTitle: "With Click Talk",
    calculatorYourNote: "Save your money, time & headache",
    calculatorOrder: "ORDER THIS PLAN",
    footerPrompt: "Let's get the world talking.",
    footerHeadline: "Have a project\nin mind?",
    footerStartProject: "Start a project",
    footerIntro: "From your next idea to your next market.\nLet’s build it together.",
    footerExplore: "Explore",
    footerHome: "Home",
    footerGrowth: "Growth",
    footerLiveService: "Live Commerce",
    footerContactLink: "Contact",
    footerGetInTouch: "Get in touch",
    footerBackTop: "Seen enough? Back to the top.",
    footerLocation: "Hangzhou, China · Working globally",
    footerRights: "All rights reserved.",
    backTop: "BACK TO TOP ↑",
  },
  zh: {
    combinedLiveEyebrow: "04 / 直播运营与市场发展",
    combinedLiveTitle: "直播运营与市场发展",
    combinedLiveIntro: "把主播配置、直播策划、销售表达与日常运营，结合当地消费者习惯和电商环境来执行。依托不同市场的真实项目经验，我们目前重点深耕美国市场，让直播转化与市场发展相互衔接。",
    combinedLiveSummary: "理解当地市场，做好每一场直播。",
    trainingFlowLead: "从理解业务，到独立完成一场直播。",
    trainingFlowIntro: "从 TikTok 电商基础到直播实训，把真实项目中的运营经验，变成团队能够实际运用的方法。",
    trainingContentsLabel: "团队培训内容导航",
    trainingCommerceIntro: "先理解平台规则、产品选择与业务流程，建立从开店到日常运营的基础。",
    trainingLiveIntro: "从开播准备、现场演练到数据复盘，完整练习一场直播的执行过程。",
    trainingGalleryLabel: "团队活动照片集",
    trainingGalleryHint: "鼠标悬停或点击展开照片，也可用方向键切换。",
    trainingPhotoOne: "团队时刻 01",
    trainingPhotoTwo: "团队时刻 02",
    trainingPhotoThree: "团队时刻 03",
    trainingPhotoFour: "团队时刻 04",
    trainingPhotoFive: "团队时刻 05",
    trainingLiveEight: "内容结构",
    trainingCampusTitle: "校企合作",
    trainingActivitiesTogether: "从一起吃饭、小小的庆祝，到工作间隙的轻松聊天，团队活动让我们在岗位之外认识彼此。这些照片记录的，是项目背后真实的人，以及大家一起度过的日常。",
    trainingActivitiesConnection: "不同背景与经历的伙伴围坐在一起，分享近况、交换想法，也在相处中增进了解。这份熟悉与信任，会延续到日常沟通和现场协作中，让一起做事更有默契。",
    trainingCampusBody: "通过企业参访与现场观摩，让学生在真实业务场景中了解内容创作、直播与电商运营的工作方式。",
    trainingCampusObservation: "从产品准备、直播间布置到主播表达与现场协同，带学生认识镜头背后的分工。结合具体项目交流，理解每个环节为什么这样安排，以及团队如何把想法落实为一次完整的直播。",
    trainingCampusPractice: "通过现场提问、观察分享与案例讨论，把课堂知识与实际工作流程连接起来，让学生更直观地认识行业岗位、协作方式与所需能力。",
    navAbout: "关于我们",
    navContact: "联系我们",
    navServices: "团队",
    navSubscriptions: "订阅套餐",
    navBrowseServices: "浏览全部服务",
    navBrowseProjects: "浏览全部项目",
    navApproach: "服务",
    navCareers: "项目",
    navPackages: "",
    navContact: "联系我们",
    navStartProject: "开始合作",
    heroEyebrow: "CLICK TALK / 杭州 / 面向全球",
    heroStatement: "让文化被看见。\n让品牌走向世界。",
    heroIntro: "Click Talk 连接文化、内容与商业，为有全球野心的品牌创造持续增长。",
    heroFooter: "TIKTOK SHOP / 内容 / 直播 / 达人 / 跨境电商",
    heroSignalLive: "实时系统",
    heroArtCaption: "让对话，走得更远。",
    heroGalleryLabel: "项目照片螺旋图集",
    heroGalleryHint: "上下拖动浏览 · 悬停暂停",
    heroSignalLabel: "全球 / 社交电商",
    heroSignalTitle: "信号\n持续发生。",
    heroSignalOne: "内容",
    heroSignalTwo: "直播",
    heroSignalThree: "市场",
    guideToggle: "图片标注：开启",
    guideOff: "图片标注：关闭",
    slotATitle: "HAIR FAIR USA",
    slotASpec: "账号 / 直播 / 01",
    slotABrief: "精选 Shop Creator / 直播电商 / 美国频道",
    slotBTitle: "ZAKA MY KITCHEN",
    slotBSpec: "账号 / 店铺 / 02",
    slotBBrief: "TikTok Shop 账号 / 日常厨房生活 / 产品内容",
    slotCTitle: "BUNDLEBID",
    slotCSpec: "账号 / 配饰 / 03",
    slotCBrief: "拍卖型达人账号 / 组合购买 / 社区互动",
    aboutKicker: "关于我们",
    aboutTitle: "立足本地。\n走向全球。",
    aboutLead: "Click Talk 是一家位于杭州的跨境社交电商公司，帮助品牌通过 TikTok 与世界展开对话。",
    aboutBody: "我们与国内外品牌并肩合作，提供 TikTok Shop 运营、内容创作、直播、电商达人及联盟营销、海外市场拓展等服务。以本地市场洞察为起点，让品牌的内容与生意真正走向世界。",
    aboutStoryCta: "查看我们的历程 ↗",
    historyEyebrow: "CLICK TALK / 公司历程",
    historyTitle: "从第一次贸易\n到完整的全球增长系统。",
    historyIntro: "记录 Click Talk 从供应链、平台运营到直播电商与品牌增长的关键阶段。",
    historyYearHint: "点击年份，向上展开这一年的故事；再次点击即可收起。",
    historyPhotoPlaceholder: "图片位置 / 待补充",
    historyStageSupply: "供应链 / 第一个信号",
    historyStagePlatform: "平台 / 开始建联",
    historyStageLive: "直播 / 第一套方法",
    historyStageHost: "主播 / 资质 / 杭州",
    historyStageProduct: "产品 / 赛道变化",
    historyStageMarket: "市场 / 多个方向",
    historyStageCompany: "公司 / 下一章",
    historySignalMonth: "第三个月 / 月度 GMV",
    historySignalMonthly: "2025 年初 / 月度 GMV",
    historyBack: "返回关于我们",
    history2019Title: "搭起第一座桥",
    history2019Body: "2019 年，从亚马逊和 1688 起步，把中国优质工厂与海外需求连接起来。年底开始打造 TikTok 短视频矩阵，第一条增长路径由此展开。",
    history2021Title: "连接平台",
    history2021Body: "21 年做开始做 TikTok 英区平台建联， 21 年的6-8 月持续运营亚马逊超卖，逐步建立对平台型跨境生意的理解。",
    history2022Title: "进入直播电商",
    history2022Body: "2022 年初从泰国 TikTok 项目起步，走进抖音直播基地参与海外项目。下半年深耕英区瑜伽服，做到英区前端，让运营模式更靠近海外消费者。",
    history2023Title: "真正做起直播",
    history2023Body: "23 年前往广州 TikTok 直播基地参与项目，应邀参加真人发直播并拿到直播许可。23 年 7 月前往迪拜参加 TikTok 达人培训。回到杭州后开始自营真人发业务，从零做起到年底达到两小时约 1000 美金，时均约 800 美金的销量。",
    history2024Title: "进入新赛道",
    history2024Body: "24 年 TikTok 平台机制变化后，团队开始尝试化纤头发，一套可复制的产品、主播与直播运营节奏开始成形。",
    history2025Title: "更多市场，更多方向",
    history2025Body: "25 年初，团队开始向美国洛杉矶市场发展，孵化瑜伽服、时尚服饰、户外用品、新的假发、3C、美区西语、箱包和保健品等项目。下半年开始马来西亚的达人直播，代表项目包括奥运会冠军和人气歌手的华为直播。",
    history2026Title: "Click Talk 成形",
    history2026Body: "26 年初，公司正式起步，打造属于自己的杭州办公室，把供应链、内容、直播电商和品牌增长放进同一个系统。",
    aboutMoreLabel: "了解更多关于 Click Talk",
    aboutMoreIntro: "Click Talk 将源头供应、内容表达与商业转化，连接成一套完整的跨境增长系统。",
    aboutFactOneLabel: "源头供应链",
    aboutFactOne: "对接供应链合作资源，协同产品需求、质量把控与交付。",
    aboutFactTwoLabel: "业务模式",
    aboutFactTwo: "覆盖 B2B 外贸批发、B2C 海外零售与海外仓分销。",
    aboutFactThreeLabel: "市场覆盖",
    aboutFactThree: "深耕 TikTok、Whatnot 等平台，服务欧美等海外市场。",
    locationCopy: "来自杭州\n与世界持续对话",
    showcaseEyebrow: "案例研究",
    showcaseTitle: "真实项目。\n真实执行。",
    showcaseBody: "了解我们如何将运营策略、创意制作与直播电商转化为实际业务成果。",
    caseYogaCategory: "瑜伽 / 健康",
    caseYogaName: "瑜伽 / 健康",
    caseYogaHeadline: "让直播电商进入更自然的节奏。",
    caseYogaOverview: "围绕英区瑜伽服项目，我们将产品展示、主播节奏与用户互动连接起来。",
    caseYogaResult: "15K+ 看播 PV / 小时",
    caseYogaResultLabel: "单场直播 · 每小时看播量",
    yogaResultEyebrow: "直播触达成果",
    yogaResultUnit: "单场直播 · 每小时看播 PV",
    yogaResultContext: "每周稳定开展五场直播，逐步积累直播间的观众与关注。",
    yogaResultSource: "查看项目成果原图 ↗",
    yogaScenesEyebrow: "03 / 项目现场",
    yogaScenesTitle: "从直播现场，看见执行。",
    yogaScenesBody: "产品展示、主播表达与拍摄布景，共同组成这个项目的日常运营。",
    yogaSceneOne: "直播画面",
    yogaSceneTwo: "主播表达",
    yogaSceneThree: "镜头背后的执行",
    yogaSceneFour: "产品造型",
    yogaSceneFive: "项目成果记录",
    yogaSceneOpen: "查看完整图片 ↗",
    caseFocusEyebrow: "项目重点",
    caseScenesEyebrow: "03 / 项目现场",
    caseClosingEyebrow: "04 / 项目总结",
    jewelryHeroContext: "连接创意方向、近景叙事与直播现场执行。",
    jewelryMethodIntro: "饰品不只需要一个好看的画面。我们把材质细节、佩戴情境与清晰讲解连接起来，让观众在做出选择前，真正看懂每一件产品。",
    jewelryLiveEyebrow: "02 / 直播表达",
    jewelryLiveTitle: "看清细节，\n再做选择。",
    jewelryLiveLead: "让产品离观众更近，也让每一处细节拥有完整的表达。",
    jewelryLiveBody: "近景展示、佩戴演示与观众问答在同一个直播节奏中展开。每一件产品先被清晰介绍，再留出观察和交流的时间，让产品切换自然衔接，而不是匆忙带过。",
    jewelryFocusTitle: "细节。\n场景。\n信心。",
    jewelryFocusBody: "看清材质与工艺，理解佩戴方式，让不同产品之间的差异更容易被感知。",
    jewelryLiveOne: "近景细节",
    jewelryLiveOneBody: "让材质、工艺与比例在镜头中清楚呈现。",
    jewelryLiveTwo: "佩戴情境",
    jewelryLiveTwoBody: "把产品介绍与搭配建议、真实佩戴效果连接起来。",
    jewelryLiveThree: "现场交流",
    jewelryLiveThreeBody: "跟随观众的问题调整讲解重点与直播节奏。",
    jewelryScenesTitle: "每处细节，都有执行。",
    jewelryScenesBody: "从产品展示、布景准备到现场协作，记录每一场直播背后的工作。",
    jewelrySceneOne: "近景展示",
    jewelrySceneTwo: "直播演示",
    jewelrySceneThree: "主播表达",
    jewelrySceneFour: "直播间布景",
    jewelrySceneFive: "镜头背后",
    jewelrySceneSix: "现场执行",
    jewelrySceneSeven: "开播准备",
    jewelrySceneEight: "产品呈现",
    jewelrySceneNine: "陈列与布置",
    jewelryClosingTitle: "让细节说话，\n让选择更清晰。",
    jewelryClosingBody: "有方向的视觉表达与稳定的直播节奏，让产品、主播和观众在同一个场景里建立连接。",
    crystalHeroContext: "把材质、日常仪式与连贯的内容节奏连接起来。",
    crystalFocusTitle: "质感。\n意义。\n连接。",
    crystalFocusBody: "看清材质细节，也让故事落在真实场景、产品知识和观众交流之中。",
    crystalScenesTitle: "让故事，在现场发生。",
    crystalScenesBody: "从直播间、产品呈现到现场协作，记录内容从构想到落地的过程。",
    crystalSceneOne: "走进直播间",
    crystalSceneTwo: "产品与场景",
    crystalSceneThree: "直播展示",
    crystalSceneFour: "现场协作",
    crystalClosingBody: "通过连贯的内容体系，把单次的产品展示连接成可识别、可延续的品牌体验。",
    yogaLiveDemoBody: "将动作、面料与穿着效果放在同一个画面中呈现。",
    yogaLiveHostBody: "清晰、耐心的讲解，让直播保持自然的交流节奏。",
    yogaLiveResponseBody: "把观众的问题带回内容表达与产品展示中。",
    caseHairCategory: "假发 / 美发",
    caseHairName: "假发 / 美发",
    hairTotalResultTitle: "项目 GMV 成果",
    hairAccountLink: "访问 TikTok · @hairfair_usa ↗",
    hairLiveComparisonLabel: "前期与后期直播后台数据对比",
    hairLiveBefore: "前期直播",
    hairLiveAfter: "后期直播",
    hairLiveBeforeMetric: "GMV · 美元",
    hairLiveAfterMetric: "归因 GMV · 美元",
    hairLiveComparisonNote: "以下为两场直播的后台截图对比；项目月度总 GMV 见上方。",
    hairFeedbackEyebrow: "03 / 顾客好评",
    hairFeedbackTitle: "来自顾客的认可。",
    hairFeedbackBody: "项目运营中，我们收到了许多顾客的积极反馈：既有对主播表现的喜爱，也有对耐心讲解和细致演示的认可。这些真实声音，让我们看到认真展示产品、耐心回答问题所带来的信任。",
    hairFeedbackCaptionOne: "耐心讲解与细致演示获得认可",
    hairFeedbackCaptionTwo: "顾客对直播主播的喜爱与好评",
    hairFeedbackCaptionThree: "观众喜爱主播的假发展示",
    hairFeedbackCaptionFour: "顾客分享购买后的认可",
    hairFeedbackCaptionFive: "自然的内容表达与吸引人的开场",
    hairFeedbackCaptionSix: "顾客认可产品造型与长度",
    hairFeedbackOpen: "查看完整反馈 ↗",
    caseHairHeadline: "让产品选择更值得信任。",
    caseHairOverview: "通过产品教育、主播演示与日常直播运营，帮助消费者更清楚地理解假发产品。",
    caseHairResult: "约 US$100,000+",
    caseHairResultLabel: "月度总 GMV",
    caseHairGmvLabel: "月度总 GMV · 美元",
    caseHairChartTitle: "月度总 GMV / 项目里程碑",
    caseHairChartNote: "4 月月度 GMV 为 $0 → 5 月起达到并持续稳定在 US$100,000+ 月度 GMV。",
    caseHairChartDescription: "4 月月度 GMV 为 0 美元；从 5 月开始，月度 GMV 达到 10 万美元以上并保持稳定。",
    caseHairStableLabel: "现在",
    caseJewelryCategory: "饰品 / 配饰",
    caseJewelryName: "饰品 / 配饰",
    caseJewelryHeadline: "让细节完成表达。",
    caseJewelryOverview: "以细节为核心的内容与直播项目，让材质、工艺与产品价值更容易被看见。",
    caseJewelryResult: "产品内容表达",
    caseJewelryResultLabel: "核心交付",
    caseCrystalCategory: "水晶 / 生活方式",
    caseCrystalName: "水晶 / 生活方式",
    caseCrystalHeadline: "让氛围成为留下来的理由。",
    caseCrystalOverview: "围绕生活方式品类建立短视频叙事，用视觉方向与可持续内容支持产品表达。",
    caseCrystalResult: "短视频内容体系",
    caseCrystalResultLabel: "核心交付",
    caseViewStudy: "查看案例",
    previousWork: "上一个作品",
    nextWork: "下一个作品",
    railOneTitle: "品牌主视觉",
    railOneMeta: "4:5 · 产品 + 人物",
    railTwoTitle: "达人故事",
    railTwoMeta: "3:4 · 肖像",
    railThreeTitle: "店铺成果",
    railThreeMeta: "4:5 · 产品细节",
    railFourTitle: "直播现场",
    railFourMeta: "9:16 · 工作室画面",
    railFiveTitle: "团队文化",
    railFiveMeta: "3:2 · 自然抓拍",
    servicesKicker: "核心能力",
    servicesTitle: "我们的\n核心能力",
    servicesSubtitle: "四大业务板块",
    servicesIntro: "将运营策略、短视频创作、直播与市场发展及团队培训整合为一套完整能力。",
    serviceOne: "运营策略",
    serviceOneBody: "从平台判断、商品策略到增长节奏，为不同市场建立清晰的运营路径。",
    serviceTwo: "短视频创作",
    serviceTwoBody: "让产品变得可见、有用、容易记住的短视频内容。",
    serviceThree: "团队介绍",
    serviceThreeBody: "来自工作室、直播间与不同市场的一群真实伙伴。",
    serviceFour: "直播运营与市场发展",
    serviceFourBody: "结合本地市场经验，连接直播策划、现场执行与成交转化。",
    serviceFive: "海外市场发展",
    serviceFiveBody: "跨市场积累项目经验，目前重点深耕美国市场。",
    serviceSix: "团队培训", serviceSixBody: "不仅替你执行，也帮助团队建立自己的执行能力。",
    jewelryTrainingCtaLabel: "团队培训 / 直播实训", jewelryTrainingCta: "查看直播培训内容",
    additionalKicker: "更多服务能力", additionalTitle: "更多服务能力", additionalIntro: "围绕五大核心业务提供的补充服务能力。", additionalTrainingTitle: "团队培训", additionalTrainingBody: "Team Training", additionalSetupTitle: "TikTok 店铺搭建", additionalSetupBody: "TikTok 店铺搭建与基础启动支持", additionalConsultingTitle: "策略咨询", additionalConsultingBody: "针对产品、市场与 TikTok 运营路径提供策略咨询", additionalOutreachTitle: "达人拓展", additionalOutreachBody: "达人寻找、联系与合作推进支持",
    trainingDetailEyebrow: "更多服务能力 / 团队培训", trainingDetailTitle: "团队培训", trainingDetailLead: "不仅替你执行，\n也帮助团队建立自己的执行能力。", trainingDetailIntro: "Click Talk 可以将实际项目中的运营方法、内容流程和直播经验转化为团队可以继续使用的工作方式。", trainingDetailApproach: "培训不以理论课程为核心，而是围绕真实业务、实际项目与具体执行流程展开。", trainingCommerceTitle: "TikTok 电商培训", trainingCommerceZh: "TikTok Commerce Training", trainingCommerceOne: "TikTok Shop 基础逻辑", trainingCommerceTwo: "平台运营思路", trainingCommerceThree: "跨境电商业务流程", trainingCommerceFour: "市场与产品判断", trainingContentTitle: "团队活动", trainingContentZh: "团队活动", trainingDinnerBody: "项目之外，也有一起相聚、交流与分享的时刻。", trainingLiveTitle: "直播培训", trainingLiveZh: "Livestream Training", trainingLiveOne: "直播流程", trainingLiveTwo: "主播配合", trainingLiveThree: "产品展示", trainingLiveFour: "销售话术", trainingLiveFive: "直播节奏", trainingLiveSix: "现场运营", trainingLiveSeven: "数据复盘", trainingLiveEight: "内容结构", trainingLiveProjectLabel: "项目实训", trainingLiveProjectTitle: "从项目执行到直播能力", trainingLiveProjectIntro: "以真实珠宝直播项目为案例，把现场经验整理成团队可以重复使用的方法。", trainingLiveProjectOneTitle: "产品展示", trainingLiveProjectOneBody: "在直播和内容中更清晰地展示产品细节、尺寸、材质与使用效果。", trainingLiveProjectTwoTitle: "直播流程", trainingLiveProjectTwoBody: "安排产品顺序、展示节奏和互动节点，让整场直播有清晰推进。", trainingLiveProjectThreeTitle: "销售表达", trainingLiveProjectThreeBody: "围绕产品卖点、用户问题和购买决策建立更清晰的表达。", trainingLiveProjectFourTitle: "现场协作", trainingLiveProjectFourBody: "让主播、运营、产品支持和现场人员在直播中形成有效配合。", trainingFrameworkTitle: "运营体系培训", trainingFrameworkZh: "Operating Framework", trainingFrameworkOne: "项目工作流", trainingFrameworkTwo: "团队岗位协作", trainingFrameworkThree: "日常运营流程", trainingFrameworkFour: "数据复盘方式", trainingFrameworkFive: "持续优化机制", trainingWorkshopTitle: "实战工作坊", trainingWorkshopZh: "Practical Workshops", trainingWorkshopBody: "培训可以结合真实产品、真实账号或实际项目开展，让团队在真实业务中理解和练习，而不是只学习抽象理论。", trainingImagePlaceholder: "图片 / 后续添加", trainingSummary: "不仅完成项目，\n也让执行能力留在团队里。", trainingSummaryZh: "Not only execution.\nCapability stays with the team.",
    serviceDetailBack: "返回增长系统",
    operationsDetailEyebrow: "01 / 运营策略",
    operationsDetailTitle: "运营策略",
    operationsDetailIntro: "我们不从“先发视频”开始，而是先判断市场、产品与平台机会。",
    operationsDetailIntroBody: "从产品定位、价格策略、内容方向，到直播节奏、达人合作与阶段性增长目标，Click Talk 将分散的运营动作整合成一条可执行的增长路径。",
    operationsMarketTitle: "市场与产品判断", operationsMarketBody: "进入一个市场之前，我们首先判断产品是否适合、消费者真正需要什么，以及产品应该以什么方式进入 TikTok。",
    operationsMarketPointOne: "TARGET MARKET\n目标市场分析", operationsMarketPointTwo: "PRODUCT\n产品竞争力判断", operationsMarketPointThree: "SELECTION\n产品组合与选品", operationsMarketPointFour: "PRICING\n价格与促销策略", operationsMarketPointFive: "ENTRY\nTikTok Shop 进入方式",
    operationsRouteTitle: "启动路径规划", operationsRouteBody: "TikTok Shop 的启动不是几个独立动作的堆叠，而是一系列彼此连接的决策。",
    operationsRouteShop: "店铺准备", operationsRouteMarket: "市场判断", operationsRoutePositioning: "定位", operationsRouteContent: "内容", operationsRouteLive: "直播", operationsRouteAffiliate: "达人联盟", operationsRouteRoadmap: "增长路线图", operationsRouteNote: "从市场进入到内容、直播与达人合作，我们让每一个环节服务于同一条增长路径。",
    operationsExecutionTitle: "日常运营执行", operationsExecutionBody: "策略确定之后，我们将规划落实到具体运营中，并保持不同环节之间的协同。",
    operationsExecutionPointOne: "CONTENT RHYTHM\n内容节奏规划", operationsExecutionPointTwo: "LIVESTREAM\n直播运营", operationsExecutionPointThree: "PROMOTION\n活动与促销", operationsExecutionPointFour: "CREATOR\n达人协同", operationsExecutionPointFive: "SHOP OPERATIONS\nTikTok Shop 日常运营", operationsExecutionPointSix: "DATA REVIEW\n数据复盘",
    operationsGrowthTitle: "数据复盘与增长", operationsGrowthBody: "增长不是一次性方案。我们持续观察内容、直播、产品与达人表现，识别真正有效的动作，再进入下一轮调整和放大。",
    operationsGrowthPointOne: "内容表现分析", operationsGrowthPointTwo: "直播数据复盘", operationsGrowthPointThree: "产品表现判断", operationsGrowthPointFour: "达人效果复盘", operationsGrowthPointFive: "阶段性策略调整", operationsGrowthPointSix: "放大已经验证有效的路径",
    operationsImagePlaceholder: "图片 / 后续添加", operationsSummary: "先判断，再执行，再用结果调整。", operationsSummaryEnglish: "Strategy connects every decision.",
    performanceSpeedTitle: "响应速度\nAI 响应延迟",
    performanceSpeedCaption: "全球平均\n响应时间",
    performanceContextTitle: "上下文窗口\n长文本理解",
    performanceContextCaption: "可同时处理的\n信息量",
    performanceConnectionsTitle: "智能连接\n跨来源场景理解",
    performanceConnectionsCaption: "已连接的\n数据来源",
    performanceLearn: "了解更多",
    contentDetailEyebrow: "02 / 短视频创作",
    contentDetailTitle: "短视频创作",
    contentDetailIntro: "让产品变得可见、有用、容易记住。",
    contentPlanningExecution: "每个方向都会进一步拆解为可执行的内容简报：如何开场、突出哪个卖点、放进什么场景、需要哪些镜头。结合节日节点与用户关心的问题，把零散想法整理为团队可以安排和拍摄的系列选题。",
    contentProductionScript: "我们把开场吸引点、产品演示与镜头顺序落实到脚本和分镜中，让每个画面都有明确的表达目的，也让观众更容易理解产品的价值。",
    contentProductionCraft: "拍摄时，通过构图、光线与近景细节呈现产品质感；后期再结合剪辑节奏、字幕、声音和视觉包装，把素材串联成清楚、连贯的短视频故事。",
    contentDetailIntroBody: "短视频不是单纯展示产品，而是帮助消费者更快理解产品、记住产品，并产生下一步行动。我们围绕产品卖点、使用场景、目标受众与 TikTok 内容习惯，建立能够持续生产、测试和优化的内容体系。",
    contentStrategyTitle: "内容策略", contentStrategyBody: "拍摄之前，先决定内容为什么存在。我们首先回答几个问题：拍给谁看？为什么他们会停下来？产品最值得被看到的是什么？什么样的表达方式更适合这个市场？", contentAudience: "目标受众", contentProductValue: "产品价值", contentAngle: "内容角度", contentMarketLanguage: "账号方向",
    contentPlanningTitle: "内容策划", contentPlanningBody: "围绕不同产品和消费场景，我们建立可持续测试的内容方向，而不是依赖单一的视频模板。", contentPlanningPointOne: "产品展示", contentPlanningPointTwo: "使用场景", contentPlanningPointThree: "问题解决型内容", contentPlanningPointFour: "产品测评", contentPlanningPointFive: "节日氛围", contentPlanningPointSix: "UGC 风格内容", contentPlanningPointSeven: "趋势与热点内容",
    contentProductionTitle: "创意与制作", contentProductionBody: "从创意到最终画面，我们把产品信息转化为适合短视频消费节奏的内容。", contentProcessDirection: "创意方向", contentProcessScript: "脚本与分镜", contentProcessShooting: "拍摄", contentProcessEditing: "剪辑", contentProcessPackaging: "视觉包装",
    contentTestingTitle: "测试与优化", contentTestingBody: "我们不会把增长押在一条“完美视频”上。同一个产品可以通过不同的开场 Hook、场景、表达方式和内容结构持续测试，再根据实际表现调整下一轮内容。", contentObserveLabel: "重点观察", contentObserveStay: "停留", contentObserveComplete: "完播", contentObserveEngage: "互动", contentObserveClick: "点击", contentObserveConvert: "转化",
    contentImagePlaceholder: "图片 / 后续添加", contentSummary: "内容热度有波峰，品牌积累有长线。", contentSummaryEnglish: "Attention moves in waves. Brand building is long-term.",
    contentPointOne: "01 / 创意方向",
    contentPointTwo: "02 / 平台内容格式",
    contentPointThree: "03 / 效果迭代",
    overseasDetailEyebrow: "05 / 全球市场布局", overseasDetailTitle: "全球市场布局", overseasDetailMantra: "Global Experience.\nU.S. Focus.",
    overseasDetailIntro: "我们的跨境经验，来自不同市场中的实际项目。在不同国家和地区的项目实践中，团队持续接触不同的消费者习惯、内容环境、直播方式和电商生态。这些经验最终形成了 Click Talk 对跨市场运营的理解。目前，我们正将更多资源和经验集中于美国市场。",
    overseasExperienceTitle: "跨市场项目经验", overseasExperienceBody: "不同市场中的真实项目，让团队不断建立对跨境业务的实际理解。", overseasExperiencePointOne: "消费者习惯", overseasExperiencePointTwo: "内容语境", overseasExperiencePointThree: "电商环境", overseasExperiencePointFour: "直播习惯", overseasExperiencePointFive: "价格认知", overseasExperiencePointSix: "市场阶段", overseasMapPlaceholder: "地图 / 后续添加市场节点",
    overseasPlaybookTitle: "不同市场，不同打法", overseasPlaybookMantra: "同一套打法，\n不会适合所有市场。", overseasPlaybookBody: "不同国家在消费者偏好、内容表达、直播习惯、价格认知和电商成熟度上存在明显差异。跨市场项目经验，让团队更习惯根据真实市场环境调整执行，而不是简单复制同一套模板。", overseasKeywordContent: "内容表达", overseasKeywordCommerce: "电商习惯", overseasKeywordLive: "直播方式", overseasKeywordConsumer: "消费者认知", overseasKeywordContext: "本地市场环境",
    overseasFocusTitle: "当前聚焦美国市场", overseasFocusBody: "在跨市场实践基础上，Click Talk 当前重点深耕美国市场。我们围绕 TikTok 内容、直播电商、Creator 合作和跨境运营，持续积累美国市场的一线执行经验。", overseasFromExperienceTitle: "从全球经验到市场聚焦", overseasFromExperienceBody: "跨市场经验让我们理解差异，市场聚焦让我们持续深入。", overseasTransitionExperienceLabel: "全球经验", overseasTransitionExperience: "将过往不同项目中积累的内容、直播、电商和跨境执行经验沉淀下来。", overseasTransitionFocusLabel: "美国市场聚焦", overseasTransitionFocus: "Click Talk 将这些经验进一步聚焦到美国市场的长期实践中。", overseasSummary: "全球经验。\n美国市场聚焦。", overseasSummaryZh: "跨市场积累经验，\n在美国持续深入。", overseasSummaryEnglish: "不同市场教会我们如何适应，市场聚焦让我们持续深入。",
    overseasPointOne: "01 / 市场进入",
    overseasPointTwo: "02 / 本地化",
    overseasPointThree: "03 / 增长规划",
    teamDetailEyebrow: "CLICK TALK / 团队介绍",
    teamMetaLabel: "CLICK TALK / 杭州 / 面向全球",
    teamTenure: "自 2020 年起深耕跨境业务",
    projectFocusLabel: "重点",
    projectFormatLabel: "形式",
    projectRoleLabel: "成就与经历",
    projectDetailBack: "返回项目展示",
    hairProgressEyebrow: "项目进程 / 2026",
    hairProgressTitle: "项目持续向前推进。",
    hairProgressIntro: "从基础搭建到直播规模化，呈现 Hair / Wigs 项目的运营节奏。",
    hairProgressChartLabel: "2026 年 4 月至 10 月持续上升的项目进程曲线",
    hairProgressLegend: "项目推进 / 示意指数",
    hairProgressResult: "搭建 → 内容 → 直播 → 规模化",
    hairProgressApr: "渠道搭建",
    hairProgressAprBody: "完成定位、选品与直播体系规划。",
    hairProgressJun: "内容节奏",
    hairProgressJunBody: "建立可重复的内容形式与达人产品教育。",
    hairProgressOct: "直播规模化",
    hairProgressOctBody: "让注意力更清晰地走向购买转化。",
    hairProgressImageOne: "直播电商搭建",
    hairProgressImageTwo: "制作与团队协作流程",
    hairProgressImageThree: "项目初始基线",
    liveDetailEyebrow: "03 / 直播电商",
    liveDetailTitle: "让每一场直播，\n都自带光芒。",
    liveDetailIntro: "把直播间的即时注意力，变成清晰可追踪的购买路径。",
    featureHardwareTitle: "硬件",
    featureHardwareBody: "稳定、安静、可靠的直播设备，为每一场直播提供持续支撑。",
    featureStudioTitle: "演播室",
    featureStudioBody: "从画面、灯光到每一个像素，演播室是内容品质的控制中心。",
    featureMotionTitle: "动态",
    featureMotionBody: "用更有生命力的动效串起直播间、商品和用户之间的每一次互动。",
    liveDetailBack: "返回增长系统",
    creatorDetailEyebrow: "04 / 达人及联盟营销",
    creatorDetailTitle: "达人及\n联盟营销",
    creatorDetailIntro: "达人合作需要持续运营，不是一次邀约。",
    creatorDetailIntroBody: "达人合作并不是批量发送邀请。我们根据产品、目标市场与内容需求寻找合适的 Creator，并持续管理匹配、沟通、寄样、合作执行与效果复盘。",
    creatorTargetTitle: "达人匹配", creatorTargetBody: "先找到真正适合产品和市场的 Creator，而不是只看粉丝数量。", creatorTargetPointOne: "目标市场", creatorTargetPointTwo: "产品类型", creatorTargetPointThree: "内容风格", creatorTargetPointFour: "受众画像", creatorTargetPointFive: "账号表现", creatorTargetPointSix: "品牌匹配度",
    creatorPlanningTitle: "合作规划", creatorPlanningBody: "明确合作目标与执行方式，让达人知道产品应该如何进入内容，而不是简单寄出一个样品。", creatorPlanningPointOne: "达人 Outreach", creatorPlanningPointTwo: "产品寄样", creatorPlanningPointThree: "佣金机制", creatorPlanningPointFour: "Content Brief", creatorPlanningPointFive: "Campaign Planning", creatorPlanningPointSix: "合作节奏",
    creatorExecuteTitle: "合作执行", creatorExecuteBody: "合作开始之后，需要持续跟进内容、链接、发布时间以及 Campaign 执行情况。", creatorExecutePointOne: "达人沟通", creatorExecutePointTwo: "寄样跟进", creatorExecutePointThree: "内容发布管理", creatorExecutePointFour: "Affiliate Link", creatorExecutePointFive: "Campaign Coordination", creatorExecutePointSix: "合作关系维护",
    creatorReviewTitle: "数据复盘", creatorReviewBody: "合作结束不代表关系结束。我们根据实际结果判断哪些达人、哪些内容形式值得继续合作和放大。", creatorReviewLabel: "观察内容", creatorReviewPointOne: "内容表现", creatorReviewPointTwo: "互动", creatorReviewPointThree: "点击", creatorReviewPointFour: "转化", creatorReviewPointFive: "销售表现", creatorReviewPointSix: "达人长期合作价值",
    creatorImagePlaceholder: "图片 / 后续添加", creatorSummary: "达人关系不是“收集”出来的，而是持续经营出来的。", creatorSummaryEnglish: "Creator relationships are built, not collected.",
    livestreamDetailEyebrow: "04 / 直播运营", livestreamDetailTitle: "直播运营", livestreamDetailSubtitle: "直播间，不只是有主播就够了。", livestreamDetailIntro: "一场直播的背后，是空间、主播、产品、脚本与运营节奏共同作用的结果。Click Talk 将直播间搭建、主播配置、直播策划、销售话术和日常运营放在同一个执行体系中，让直播从一次活动，变成能够持续运营和优化的销售场景。",
    livestreamSetupTitle: "直播体系搭建", livestreamSetupBody: "直播开始之前，我们先建立适合产品、品牌和销售方式的直播环境。", livestreamSetupPointOne: "STUDIO SETUP\n直播间搭建", livestreamSetupPointTwo: "EQUIPMENT & PRODUCTION\n设备与制作环境", livestreamSetupPointThree: "PRODUCT DISPLAY\n产品陈列", livestreamSetupPointFour: "LIVE WORKFLOW\n直播执行流程",
    livestreamPeopleTitle: "主播与现场团队", livestreamPeopleBody: "主播只是消费者看到的部分。真正稳定的直播，需要主播、运营与现场人员同时协作。", livestreamPeoplePointOne: "HOST\n主播展示与讲解", livestreamPeoplePointTwo: "LIVE OPERATOR\n后台运营与节奏控制", livestreamPeoplePointThree: "CONTENT / PRODUCT SUPPORT\n产品与内容支持", livestreamPeoplePointFour: "ON-SITE COORDINATION\n现场协作",
    livestreamPlanningTitle: "直播内容与销售节奏", livestreamPlanningBody: "直播不是打开镜头之后再决定说什么。我们提前规划产品顺序、内容节奏、促销节点与销售表达，让整场直播拥有清晰的推进逻辑。", livestreamProcessOpening: "开场留人", livestreamProcessProduct: "产品介绍", livestreamProcessDemo: "展示与试用", livestreamProcessOffer: "价格与促销", livestreamProcessInteraction: "评论互动", livestreamProcessConversion: "下单引导", livestreamServicePlanning: "Livestream Planning\n直播策划", livestreamServiceScript: "Sales Scripting\n销售话术", livestreamServiceSequence: "Product Sequence\n产品顺序", livestreamServiceRhythm: "Promotional Rhythm\n促销节奏", livestreamServiceInteraction: "Audience Interaction\n观众互动",
    livestreamDailyTitle: "日常直播运营", livestreamDailyBody: "单场直播只是一次执行。稳定的直播能力来自持续运营、复盘和调整。\n我们持续观察产品表现、主播表达、用户反馈与直播节奏，并根据实际结果进入下一轮优化。", livestreamSummary: "人、内容、制作与运营，\n最终在同一个直播间里汇合。", livestreamSummaryZh: "Production, people and operations meet in the same room.", livestreamImagePlaceholder: "图片 / 后续添加",
    creatorDetailBack: "返回增长系统",
    approachKicker: "成长趋势",
    approachTitle: "壮大团队。\n拓展市场。",
    approachCurveLabel: "业务模块 / 成长路径",
    approachCurveTitle: "源头 → 运营 → 出海",
    approachCurveCaption: "这是一条业务模块与成长路径曲线，展示从供应链、运营到市场拓展的增长积累。",
    approachMetricsLabel: "增长指标",
    approachChartLabel: "三条上升曲线，分别展示公司规模、项目效益与市场影响",
    metricOneLabel: "01 / 供应链",
    metricOneCaption: "产品与市场语境",
    metricTwoLabel: "02 / 内容",
    metricTwoCaption: "平台原生内容",
    metricThreeLabel: "03 / 直播",
    metricThreeCaption: "现场执行能力",
    curveLabelOne: "01 / 连接",
    curveLabelTwo: "02 / 创作",
    curveLabelThree: "03 / 转化",
    curveLabelResult: "04 / 结果持续复利",
    stepOne: "源头",
    stepOneBody: "从自有供应链、产品研发与清晰的品控闭环开始。",
    stepTwo: "运营",
    stepTwoBody: "连接 TikTok、Whatnot、直播、内容与达人运营。",
    stepThree: "出海",
    stepThreeBody: "以海外仓、分销与品牌营销，让增长持续复利。",
    careersKicker: "我们的成长模式",
    careersTitle: "从一个信号。\n到持续增长。",
    careersBody: "我们由成熟的跨境运营团队与资深外籍主播共同协作，把直播、内容和达人合作变成可复制的增长能力。",
    modelOneTitle: "团队",
    modelOneBody: "运营、主播与内容伙伴协同工作，覆盖每一个市场触点。",
    modelTwoTitle: "培养",
    modelTwoBody: "提供系统培训、全流程带教与核心岗位轮岗学习。",
    modelThreeTitle: "成长",
    modelThreeBody: "扁平协作与清晰晋升，让真实项目沉淀为长期能力。",
    contactTitle: "让好的想法，\n真正动起来。",
    contactAddress: "浙江省杭州市余杭区\n海智中心 5 幢 310",
    inquiryKicker: "开始沟通",
    inquiryTitle: "告诉我们，\n你正在做什么。",
    inquiryLead: "简单介绍品牌、项目或目标，我们会根据真实需求给出合适的下一步建议。",
    inquiryDirectLabel: "更习惯邮件？",
    inquiryFormTitle: "发送简短需求",
    inquiryFormTime: "通常不到一分钟即可完成。",
    inquiryName: "你的姓名",
    inquiryEmail: "工作邮箱",
    inquiryCompany: "公司 / 品牌",
    inquiryInterest: "希望我们提供什么帮助？",
    inquiryChoose: "选择服务方向",
    inquiryOther: "其他需求",
    inquiryMessage: "简单说明你的目标",
    inquirySubmit: "发送需求",
    inquiryNote: "通过 FormSubmit 在本页直接发送，无需打开邮件应用。",
    inquirySending: "正在发送…",
    inquirySendingStatus: "正在提交你的需求，请暂时不要关闭页面。",
    inquirySuccess: "需求已提交，感谢你的联系，我们会尽快回复。",
    inquiryError: "暂时无法确认是否提交成功，填写的内容已保留。请稍后重试，或直接通过邮箱联系我们。",
    inquiryLocalFile: "请通过网站预览链接打开后提交，本地文件页面暂不支持直接发送。",
    packagesKicker: "服务",
    oneOffLearnMore: "点击了解更多",
    packagesTitle: "为下一步\n选择合适的服务。",
    packagesBody: "根据品牌当前阶段灵活选择，并自然延展到下一阶段的合作方案。",
    oneOffKicker: "单项服务", oneOffTitle: "Single services", oneOffIntro: "按单项需求选择服务，价格可根据具体范围与执行内容确认。", oneOffLivestream: "单场直播", oneOffLivestreamBody: "直播策划、现场执行与运营支持", oneOffVideo: "单条短视频", oneOffVideoBody: "短视频创意、制作与交付", oneOffStore: "单独开店", oneOffStoreBody: "TikTok Shop 店铺准备与基础搭建", oneOffQuote: "按项目报价", oneOffBack: "返回套餐",
    packageOneTitle: "探索版",
    packageOneSubtitle: "探索版",
    packageOnePrice: "¥55,000/月",
    packageOneFeatureOne: "2 名专员",
    packageOneFeatureTwo: "每月 40–60 条视频",
    packageOneFeatureThree: "基础报告",
    packageOneTerm: "最低 3 个月",
    packageOneBody: "为刚开始海外增长的品牌，建立聚焦且清晰的起步系统。",
    packageTwoTitle: "进阶版",
    packageTwoSubtitle: "进阶版",
    packageTwoPrice: "¥95,000/月",
    packageTwoFeatureOne: "3–5 名专员 + 主播",
    packageTwoFeatureTwo: "60–80 条视频 + 40 小时直播",
    packageTwoFeatureThree: "达人拓展",
    packageTwoTerm: "最低 6 个月",
    packageTwoBody: "连接内容、直播与达人运营，形成稳定、持续的增长节奏。",
    packageThreeTitle: "领航版",
    packageThreeSubtitle: "领航版",
    packageThreePrice: "¥165,000/年",
    packageThreeFeatureOne: "5–7 名专员 + 1–2 名主播",
    packageThreeFeatureTwo: "80–120 条视频 + 100 小时直播",
    packageThreeFeatureThree: "全品牌与多渠道运营",
    packageThreeTerm: "最低 1 年",
    packageThreeBody: "为准备引领多个市场的团队，建立全品牌、多渠道增长系统。",
    packagePopular: "★ 最受欢迎",
    packageCta: "了解更多",
    packageDetailEyebrow: "05 / 订阅服务",
    packageFitLabel: "适合对象",
    packageOrderCta: "开始咨询",
    packageOrderNote: "告诉我们你现在所处的阶段，我们会一起确定下一步最合适的合作方式。",
    packageFaqKicker: "服务包含",
    packageQuestionOne: "这个套餐包含什么？",
    packageQuestionTwo: "合作会如何开始？",
    packageQuestionThree: "之后可以升级吗？",
    packageQuestionFour: "如何订购？",
    packageAnswerFour: "点击左侧按钮发送邮件，我们会回复可合作时间与适合你的服务范围。",
    packageBack: "返回合作套餐",
    packageCommercialsKicker: "灵活合作方式",
    packageCommercialsTitle: "增值服务与合作模式",
    packageAddonsTitle: "增值服务",
    addonStore: "TikTok 店铺搭建",
    addonOneTime: "一次性",
    addonStrategy: "策略咨询",
    addonPerHour: "每小时",
    addonTraining: "团队培训",
    addonPerDay: "每天",
    addonInfluencer: "达人拓展",
    addonPerPerson: "每人",
    addonPlatform: "平台资源",
    addonPerSession: "每次",
    addonNetwork: "额外网络线路",
    addonPerLine: "每月每线",
    packageEngagementTitle: "合作模式",
    engagementLaunch: "一次性启动项目",
    engagementLaunchBody: "初始搭建与策略",
    engagementRetainer: "月度运营合约",
    engagementRetainerBody: "持续管理与增长",
    engagementPerformance: "绩效合作模式",
    engagementPerformanceBody: "与成功挂钩的激励",
    engagementEnterprise: "定制企业方案",
    engagementEnterpriseBody: "为大规模运营量身定制",
    packageCommission: "在基础费用之上收取绩效佣金，费率可根据 GMV 体量、合同期限和服务范围协商。",
    calculatorKicker: "项目估价计算器",
    calculatorTitle: "在预算内，获得高品质网站",
    calculatorServiceTitle: "你需要哪种服务？",
    calculatorDesign: "仅设计",
    calculatorDevelopment: "仅开发",
    calculatorBoth: "设计 + 开发",
    calculatorPagesTitle: "页面数量",
    calculatorPagesUnit: "页",
    calculatorAddonsTitle: "增值服务",
    calculatorContent: "我需要内容创作支持",
    calculatorPageShort: "页",
    calculatorSeo: "我想为网站优化 SEO",
    calculatorTimelineTitle: "你希望多快完成？",
    calculatorRush: "7 天内",
    calculatorFast: "14 天内",
    calculatorRegular: "常规速度（具体沟通）",
    calculatorEstimateTitle: "预估费用",
    calculatorEstimateBody: "为你的下一步增长提供一个清晰的起点。",
    calculatorAgencyTitle: "常规代理公司最低收费",
    calculatorAgencyNote: "+ 额外时间与成本更高",
    calculatorFreelancerTitle: "普通自由职业者最低收费",
    calculatorFreelancerNote: "+ 沟通成本与反复修改更多",
    calculatorYourTitle: "Click Talk 为你提供",
    calculatorYourNote: "节省预算、时间与沟通成本",
    calculatorOrder: "订购这个方案",
    footerPrompt: "让世界聊起你的品牌。",
    footerHeadline: "下一步，\n一起走向世界。",
    footerStartProject: "聊聊你的项目",
    footerIntro: "从一个新想法，到下一个海外市场。\n让我们一起，把它变成现实。",
    footerExplore: "了解我们",
    footerHome: "首页",
    footerGrowth: "增长视角",
    footerLiveService: "直播电商",
    footerContactLink: "联系我们",
    footerGetInTouch: "保持联系",
    footerBackTop: "看到这里了？回顶部再看看。",
    footerLocation: "立足中国杭州 · 连接全球市场",
    footerRights: "保留所有权利。",
    backTop: "返回顶部 ↑",
  },
};

Object.assign(copy.en, {
  trainingDetailLead: "Building teams that deliver.\nCapability that stays with the work.",
  trainingDetailIntro: "We turn operating methods, content workflows and livestream experience from real projects into working methods teams can continue to use.",
  trainingDetailApproach: "Training is practical: real products, real accounts and concrete workflows that teams can rehearse, review and repeat.",
  modelOneTitle: "Market-focused",
  modelOneBody: "We start with the product, platform and customer context in front of us.",
  modelTwoTitle: "Content-driven",
  modelTwoBody: "We use content to make product value easier to see, understand and remember.",
  modelThreeTitle: "Execution-oriented",
  modelThreeBody: "We stay close to the work, from the live room to the next operating decision.",
  contactTitle: "Let's build\nwhat's next.",
  footerPrompt: "Have a project in mind? Let's explore what we can build together."
});

const packageDetails = {
  en: {
    launch: {
      title: "Explorer",
      intro: "A focused starting system for brands beginning their overseas growth journey.",
      price: "¥55,000/mo",
      usdPrice: "~$7,586/mo",
      featureOne: "2 Specialists",
      featureTwo: "40–60 videos/month",
      featureThree: "Basic reporting",
      term: "Min. 3 months",
      fit: "Brands building a focused first overseas operating system.",
      includeOne: "Two specialists, 40–60 videos each month and foundational reporting.",
      includeTwo: "We begin with a discovery call, category review and a clear first 30-day action map.",
      includeThree: "Yes. The plan is designed to move naturally into an always-on Growth partnership.",
    },
    growth: {
      title: "Advanced",
      intro: "An integrated content, live and creator operation built for consistent momentum.",
      price: "¥95,000/mo",
      usdPrice: "~$13,103/mo",
      featureOne: "3–5 Specialists + Host",
      featureTwo: "60–80 videos + 40h live",
      featureThree: "Influencer outreach",
      term: "Min. 6 months",
      fit: "Brands ready to connect content, live commerce and creator growth.",
      includeOne: "Three to five specialists plus a host, 60–80 videos, 40 live hours and influencer outreach.",
      includeTwo: "We align on your category, targets and channel data before setting the first operating cycle.",
      includeThree: "Yes. Growth can expand into Scale when new markets, categories or teams come online.",
    },
    scale: {
      title: "Navigator",
      intro: "A full-brand, multi-channel system for teams ready to lead across markets.",
      price: "¥165,000/year",
      usdPrice: "~$22,759/year",
      featureOne: "5–7 Specialists + 1–2 Hosts",
      featureTwo: "80–120 videos + 100h live",
      featureThree: "Full branding & multi-channel",
      term: "Min. 1 year",
      fit: "Teams expanding across markets, channels and product categories.",
      includeOne: "Five to seven specialists, one to two hosts, 80–120 videos, 100 live hours and full-brand multi-channel operations.",
      includeTwo: "We map markets, supply and commercial priorities into a phased expansion plan.",
      includeThree: "The partnership is shaped around your growth horizon and evolves with the business.",
    },
  },
  zh: {
    launch: {
      title: "探索版",
      intro: "为刚开始海外增长的品牌，建立聚焦且清晰的起步系统。",
      price: "¥55,000/月",
      usdPrice: "约 $7,586/月",
      featureOne: "2 名专员",
      featureTwo: "每月 40–60 条视频",
      featureThree: "基础报告",
      term: "最低 3 个月",
      fit: "正在建立首个海外运营系统的品牌。",
      includeOne: "2 名专员、每月 40–60 条视频与基础运营报告。",
      includeTwo: "从沟通需求、梳理品类开始，确定首个 30 天行动地图。",
      includeThree: "可以。启动套餐能够自然升级为长期的增长合作。",
    },
    growth: {
      title: "进阶版",
      intro: "连接内容、直播与达人运营，形成稳定、持续的增长节奏。",
      price: "¥95,000/月",
      usdPrice: "约 $13,103/月",
      featureOne: "3–5 名专员 + 主播",
      featureTwo: "60–80 条视频 + 40 小时直播",
      featureThree: "达人拓展",
      term: "最低 6 个月",
      fit: "准备连接内容、直播与达人增长的品牌。",
      includeOne: "3–5 名专员与主播、60–80 条视频、40 小时直播及达人拓展。",
      includeTwo: "先对齐品类、目标与渠道数据，再建立第一轮运营周期。",
      includeThree: "可以。当新市场、新品类或新团队启动时，可以继续升级到规模化合作。",
    },
    scale: {
      title: "领航版",
      intro: "为准备引领多个市场的团队，建立全品牌、多渠道增长系统。",
      price: "¥165,000/年",
      usdPrice: "约 $22,759/年",
      featureOne: "5–7 名专员 + 1–2 名主播",
      featureTwo: "80–120 条视频 + 100 小时直播",
      featureThree: "全品牌与多渠道运营",
      term: "最低 1 年",
      fit: "正在扩展市场、渠道与品类的团队。",
      includeOne: "5–7 名专员、1–2 名主播、80–120 条视频、100 小时直播及全品牌多渠道运营。",
      includeTwo: "把市场、供应链和商业优先级整理成分阶段的扩张计划。",
      includeThree: "合作会围绕你的增长周期设计，并随业务发展持续进化。",
    },
  },
};

const langButtons = document.querySelectorAll(".lang-button");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const siteHeader = document.querySelector(".site-header");
let activeLanguage = "en";

function updateHeaderState() {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  const servicesPlansRect = document.querySelector("#services-plans")?.getBoundingClientRect();
  // Sample behind each navigation group so split backgrounds stay readable too.
  [...siteHeader.children].forEach((group) => {
    const rect = group.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const sampleY = rect.top + rect.height / 2;
    const overServicesPlans = servicesPlansRect
      && sampleY >= servicesPlansRect.top
      && sampleY <= servicesPlansRect.bottom;
    let surface = document.elementsFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2)
      .find((element) => !siteHeader.contains(element));
    let remaining = 1;
    let brightness = 0;
    while (surface && remaining > 0.01) {
      const channels = getComputedStyle(surface).backgroundColor.match(/[\d.]+/g)?.map(Number);
      if (channels && channels.length >= 3) {
        const alpha = channels[3] ?? 1;
        brightness += remaining * alpha * (channels[0] * 0.299 + channels[1] * 0.587 + channels[2] * 0.114);
        remaining *= 1 - alpha;
      }
      surface = surface.parentElement;
    }
    group.classList.toggle("is-on-dark", overServicesPlans || brightness + remaining * 255 < 150);
  });
}

let headerStateFrame = 0;
function scheduleHeaderState() {
  if (headerStateFrame) return;
  headerStateFrame = requestAnimationFrame(() => {
    headerStateFrame = 0;
    updateHeaderState();
  });
}
window.addEventListener("scroll", scheduleHeaderState, { passive: true, capture: true });
window.addEventListener("resize", scheduleHeaderState);
window.addEventListener("hashchange", scheduleHeaderState);
document.addEventListener("click", scheduleHeaderState);
updateHeaderState();

const extendedProjectCopy = {
  en: {
    ".hair-system-section .service-detail-eyebrow": "01 / PRODUCT EDUCATION", ".hair-section-heading h3": "Make choice clearer.", ".hair-system-intro p": "Hair and wigs are personal products. The live room needs to make selection, styling and care feel easier to understand.",
    ".hair-system-list article:nth-child(1) h4": "PRODUCT CLARITY", ".hair-system-list article:nth-child(1) p": "Show length, density, texture and construction through a steady product-led rhythm.", ".hair-system-list article:nth-child(2) h4": "STYLING CONFIDENCE", ".hair-system-list article:nth-child(2) p": "Use demonstration and comparison to help viewers imagine the finished look.", ".hair-system-list article:nth-child(3) h4": "TRUSTED GUIDANCE", ".hair-system-list article:nth-child(3) p": "Answer practical questions with clear language before the viewer makes a choice.",
    ".hair-live-section .service-detail-eyebrow": "02 / LIVE OPERATING RHYTHM", ".hair-live-section h3": "From selection<br />to confidence.", ".hair-live-lead": "A strong hair livestream gives every product enough time to be seen, explained and compared.", ".hair-live-copy": "We connect product order, host expression, close-up demonstration and audience questions into a repeatable operating rhythm.", ".hair-closing-section .service-detail-eyebrow": "03 / THE TAKEAWAY", ".hair-closing-section h3": "More than a look.<br />A clearer decision.",
    ".yoga-method-section .service-detail-eyebrow": "01 / PROJECT METHOD", ".yoga-section-heading h3": "Build the ritual.", ".yoga-method-intro p": "For this UK yoga apparel project, we built a live operating rhythm around movement, comfort and confidence. Product demonstrations, host delivery and audience questions help viewers picture how the clothing fits into their own lives.",
    ".yoga-method-list article:nth-child(1) h4": "MOVEMENT FIRST", ".yoga-method-list article:nth-child(1) p": "Natural movement demonstrates stretch, support and fit so the product is understood in real use.", ".yoga-method-list article:nth-child(2) h4": "DAILY RITUAL", ".yoga-method-list article:nth-child(2) p": "Practice, going out and recovery become everyday scenes that feel close to the audience.", ".yoga-method-list article:nth-child(3) h4": "TRUSTED VOICE", ".yoga-method-list article:nth-child(3) p": "Host demonstration, try-on feedback and ongoing interaction make product choice feel easier.",
    ".yoga-live-section .service-detail-eyebrow": "02 / LIVE CONTENT", ".yoga-live-section h3": "A calmer<br />way to sell.", ".yoga-live-lead": "The live room became a place to demonstrate, answer and build confidence together.", ".yoga-live-copy > p:last-child": "Product demonstration, questions and trust-building happen in one continuous live experience.", ".yoga-closing-section .service-detail-eyebrow": "04 / THE TAKEAWAY", ".yoga-closing-section h3": "Make space<br />for movement.",
    ".crystal-lens-section .service-detail-eyebrow": "01 / PROJECT LENS", ".crystal-section-heading h3": "Objects with meaning.", ".crystal-section-heading > span": "Let the product be seen and its meaning be felt.", ".crystal-intro p:first-child": "Crystal products are understood through more than shape or colour. Their texture, symbolism and place in everyday rituals all shape how people connect with them.", ".crystal-intro p:last-child": "We translate material, light and everyday context into a clearer product experience.",
    ".crystal-story-section .service-detail-eyebrow": "02 / CONTENT SYSTEM", ".crystal-story-copy h3": "From detail<br />to story.", ".crystal-story-copy > span": "From product detail to a complete narrative", ".crystal-story-lead": "We turn visual detail into a content rhythm that can continue across products, moments and conversations.", ".crystal-story-copy > p:last-child": "Different products, moments and conversations stay connected through one consistent content rhythm.",
    ".crystal-direction-list article:nth-child(1) h4": "MATERIAL PRESENCE", ".crystal-direction-list article:nth-child(1) strong": "Material presence", ".crystal-direction-list article:nth-child(1) p": "Use close-up framing, natural light and slow movement to reveal each crystal’s texture, clarity and subtle variations.", ".crystal-direction-list article:nth-child(2) h4": "RITUAL CONTEXT", ".crystal-direction-list article:nth-child(2) strong": "Ritual context", ".crystal-direction-list article:nth-child(2) p": "Place products in real spaces and daily rituals to show how they fit into life beyond the display.", ".crystal-direction-list article:nth-child(3) h4": "VISUAL CONTINUITY", ".crystal-direction-list article:nth-child(3) strong": "Visual continuity", ".crystal-direction-list article:nth-child(3) p": "Build a recognizable brand world through consistent colour, composition and content rhythm.",
    ".crystal-content-list article:nth-child(1) h4": "CLOSE-UP LANGUAGE", ".crystal-content-list article:nth-child(1) strong": "Close-up language", ".crystal-content-list article:nth-child(1) p": "Use detail shots to create a first impression of the product.", ".crystal-content-list article:nth-child(2) h4": "USE MOMENTS", ".crystal-content-list article:nth-child(2) strong": "Use moments", ".crystal-content-list article:nth-child(2) p": "Show the product through spaces, styling and everyday routines.", ".crystal-content-list article:nth-child(3) h4": "PRODUCT EDUCATION", ".crystal-content-list article:nth-child(3) strong": "Product education", ".crystal-content-list article:nth-child(3) p": "Explain materials, features and how to choose.", ".crystal-content-list article:nth-child(4) h4": "COMMUNITY RHYTHM", ".crystal-content-list article:nth-child(4) strong": "Community rhythm", ".crystal-content-list article:nth-child(4) p": "Extend conversations through questions, interests and audience feedback.",
    ".crystal-closing-section .service-detail-eyebrow": "04 / THE RESULTING LANGUAGE", ".crystal-closing-section h3": "Seen in detail.<br />Remembered through feeling.", ".crystal-closing-section > div > span": "Seen through detail.<br />Remembered through feeling."
  },
  zh: {
    ".hair-system-section .service-detail-eyebrow": "01 / 产品教育", ".hair-section-heading h3": "让选择更清晰。", ".hair-system-intro p": "假发是非常个人化的产品。直播需要让选品、造型与护理方式更容易理解。",
    ".hair-system-list article:nth-child(1) h4": "产品信息", ".hair-system-list article:nth-child(1) p": "通过稳定的产品展示节奏，说明长度、密度、纹理与结构。", ".hair-system-list article:nth-child(2) h4": "造型信心", ".hair-system-list article:nth-child(2) p": "通过演示与对比，帮助观众想象最终的佩戴效果。", ".hair-system-list article:nth-child(3) h4": "可信指导", ".hair-system-list article:nth-child(3) p": "在观众做出选择之前，用清晰表达回答实际问题。",
    ".hair-live-section .service-detail-eyebrow": "02 / 直播运营节奏", ".hair-live-section h3": "从选择<br />到建立信心。", ".hair-live-lead": "好的假发直播会给每件产品足够的时间，让它被看见、被解释、被比较。", ".hair-live-copy": "我们把产品顺序、主播表达、近景演示与观众问题连接成可重复的运营节奏。", ".hair-closing-section .service-detail-eyebrow": "03 / 项目总结", ".hair-closing-section h3": "不只是造型，<br />也是更清晰的选择。",
    ".yoga-method-section .service-detail-eyebrow": "01 / 项目方法", ".yoga-section-heading h3": "建立日常节奏。", ".yoga-method-intro p": "围绕英区瑜伽服项目，我们把动作、舒适度与穿着自信放进直播表达，通过产品演示、主播讲解和观众问答，让消费者更容易想象自己穿上产品的真实感受。",
    ".yoga-method-list article:nth-child(1) h4": "动作优先", ".yoga-method-list article:nth-child(1) p": "用自然动作呈现弹性、支撑与穿着状态，让产品在真实运动中被理解。", ".yoga-method-list article:nth-child(2) h4": "日常场景", ".yoga-method-list article:nth-child(2) p": "从练习、出门到休息，建立贴近消费者生活节奏的内容画面。", ".yoga-method-list article:nth-child(3) h4": "可信表达", ".yoga-method-list article:nth-child(3) p": "通过主播演示、试穿反馈与持续互动，降低选择产品时的距离感。",
    ".yoga-live-section .service-detail-eyebrow": "02 / 直播内容", ".yoga-live-section h3": "更从容的<br />销售方式。", ".yoga-live-lead": "直播间成为共同演示、回答问题和建立信心的场景。", ".yoga-live-copy > p:last-child": "产品演示、问题解答和信任建立在一次连续的直播体验中完成。", ".yoga-closing-section .service-detail-eyebrow": "04 / 项目总结", ".yoga-closing-section h3": "为动作与选择<br />留出空间。",
    ".crystal-lens-section .service-detail-eyebrow": "01 / 项目视角", ".crystal-section-heading h3": "有意义的物件。", ".crystal-section-heading > span": "让产品被看见，也让意义被感知。", ".crystal-intro p:first-child": "水晶产品不只通过形状和颜色被理解。它的质感、象征意义和日常仪式共同影响人与产品的连接。", ".crystal-intro p:last-child": "我们把材质、光线与日常情境转化为更清晰的产品体验。",
    ".crystal-story-section .service-detail-eyebrow": "02 / 内容体系", ".crystal-story-copy h3": "从细节到故事。", ".crystal-story-copy > span": "从产品细节到完整叙事", ".crystal-story-lead": "我们把视觉细节转化为可以持续使用的内容节奏。", ".crystal-story-copy > p:last-child": "让不同产品、使用时刻和用户交流之间保持连贯。",
    ".crystal-direction-list article:nth-child(1) h4": "材质质感", ".crystal-direction-list article:nth-child(1) strong": "材质质感", ".crystal-direction-list article:nth-child(1) p": "通过近距离画面、自然光线与缓慢移动，呈现水晶的纹理、通透度与细微差异。", ".crystal-direction-list article:nth-child(2) h4": "生活场景", ".crystal-direction-list article:nth-child(2) strong": "生活场景", ".crystal-direction-list article:nth-child(2) p": "把产品放进真实的空间与日常仪式中，让观众理解它如何进入生活，而不只是停留在展示层面。", ".crystal-direction-list article:nth-child(3) h4": "视觉延续", ".crystal-direction-list article:nth-child(3) strong": "视觉延续", ".crystal-direction-list article:nth-child(3) p": "建立稳定的色彩、构图与内容节奏，让单个产品画面逐步形成可识别的品牌世界。",
    ".crystal-content-list article:nth-child(1) h4": "近景表达", ".crystal-content-list article:nth-child(1) strong": "近景表达", ".crystal-content-list article:nth-child(1) p": "用细节镜头建立产品的第一感受。", ".crystal-content-list article:nth-child(2) h4": "使用时刻", ".crystal-content-list article:nth-child(2) strong": "使用时刻", ".crystal-content-list article:nth-child(2) p": "在空间、搭配与日常动作中呈现产品。", ".crystal-content-list article:nth-child(3) h4": "产品理解", ".crystal-content-list article:nth-child(3) strong": "产品理解", ".crystal-content-list article:nth-child(3) p": "清楚说明材质、特点与选择方式。", ".crystal-content-list article:nth-child(4) h4": "社区互动", ".crystal-content-list article:nth-child(4) strong": "社区互动", ".crystal-content-list article:nth-child(4) p": "围绕问题、兴趣与反馈延续内容对话。",
    ".crystal-closing-section .service-detail-eyebrow": "04 / 最终表达", ".crystal-closing-section h3": "在细节中被看见，<br />在感受中被记住。", ".crystal-closing-section > div > span": "在细节中被看见，在感受中被记住。"
  }
};

function updateExtendedProjectCopy(language) {
  Object.entries(extendedProjectCopy[language]).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  });
  const labels = language === "zh"
    ? [[".yoga-live-list article:nth-child(1) h4", "产品演示"], [".yoga-live-list article:nth-child(2) h4", "主播节奏"], [".yoga-live-list article:nth-child(3) h4", "互动回应"], [".hair-live-list span:nth-child(1)", "产品顺序"], [".hair-live-list span:nth-child(2)", "主播表达"], [".hair-live-list span:nth-child(3)", "近景演示"], [".hair-live-list span:nth-child(4)", "观众问题"]]
    : [[".yoga-live-list article:nth-child(1) h4", "PRODUCT DEMO"], [".yoga-live-list article:nth-child(2) h4", "HOST RHYTHM"], [".yoga-live-list article:nth-child(3) h4", "COMMUNITY RESPONSE"], [".hair-live-list span:nth-child(1)", "PRODUCT ORDER"], [".hair-live-list span:nth-child(2)", "HOST EXPLANATION"], [".hair-live-list span:nth-child(3)", "CLOSE-UP DEMO"], [".hair-live-list span:nth-child(4)", "AUDIENCE QUESTIONS"]];
  labels.forEach(([selector, value]) => { const element = document.querySelector(selector); if (element) element.textContent = value; });

  const jewelryCopy = language === "zh" ? {
    ".jewelry-approach-section .service-detail-eyebrow": "01 / 项目执行方式", ".jewelry-approach-section .jewelry-section-heading h3": "项目执行方式", ".jewelry-approach-section .jewelry-section-heading > span": "项目执行方式",
    ".jewelry-approach-list article:nth-child(1) h4": "创意方向", ".jewelry-approach-list article:nth-child(1) strong": "创意方向", ".jewelry-approach-list article:nth-child(2) h4": "内容规划", ".jewelry-approach-list article:nth-child(2) strong": "内容规划", ".jewelry-approach-list article:nth-child(3) h4": "直播执行", ".jewelry-approach-list article:nth-child(3) strong": "直播执行"
  } : {
    ".jewelry-approach-section .service-detail-eyebrow": "01 / PROJECT APPROACH", ".jewelry-approach-section .jewelry-section-heading h3": "How We Worked", ".jewelry-approach-section .jewelry-section-heading > span": "Project execution approach",
    ".jewelry-approach-list article:nth-child(1) h4": "CREATIVE DIRECTION", ".jewelry-approach-list article:nth-child(1) strong": "Creative direction", ".jewelry-approach-list article:nth-child(2) h4": "CONTENT PLANNING", ".jewelry-approach-list article:nth-child(2) strong": "Content planning", ".jewelry-approach-list article:nth-child(3) h4": "LIVESTREAM EXECUTION", ".jewelry-approach-list article:nth-child(3) strong": "Livestream execution"
  };
  Object.entries(jewelryCopy).forEach(([selector, value]) => { const element = document.querySelector(selector); if (element) element.textContent = value; });
  const jewelryBodyCopy = language === "zh" ? [
    [".jewelry-approach-list article:nth-child(1) p", "围绕珠宝产品的细节、质感与佩戴效果建立视觉表达方式，让产品在近距离画面中保持清晰和吸引力。"],
    [".jewelry-approach-list article:nth-child(2) p", "根据不同产品和展示场景规划内容结构，让产品展示、讲解和互动拥有稳定的节奏。"],
    [".jewelry-approach-list article:nth-child(3) p", "围绕产品切换、近距离展示、观众互动和现场节奏，建立适合珠宝类产品的直播方式。"]
  ] : [
    [".jewelry-approach-list article:nth-child(1) p", "We built a visual language around jewelry detail, material and how each piece is worn, keeping products clear and compelling in close-up frames."], [".jewelry-approach-list article:nth-child(2) p", "We planned the content structure around each product and setting so demonstration, explanation and interaction could move at a steady pace."], [".jewelry-approach-list article:nth-child(3) p", "We shaped a livestream rhythm for product changes, close-up views, audience interaction and on-site coordination."]
  ];
  jewelryBodyCopy.forEach(([selector, value]) => { const element = document.querySelector(selector); if (element) element.textContent = value; });

  const contentLoopLabels = language === "zh"
    ? ["创作", "测试", "学习", "优化"]
    : ["CREATE", "TEST", "LEARN", "REFINE"];
  document.querySelectorAll(".content-loop span").forEach((element, index) => {
    if (contentLoopLabels[index]) element.textContent = contentLoopLabels[index];
  });
  const contentLoop = document.querySelector(".content-loop");
  if (contentLoop) {
    let contentLoopTitle = contentLoop.querySelector(".content-loop-title");
    if (!contentLoopTitle) {
      contentLoopTitle = document.createElement("strong");
      contentLoopTitle.className = "content-loop-title";
      contentLoop.prepend(contentLoopTitle);
    }
    contentLoopTitle.textContent = language === "zh" ? "内容迭代循环" : "CONTENT ITERATION LOOP";
    contentLoop.setAttribute("aria-label", language === "zh" ? "创作、测试、学习与优化循环" : "Create, test, learn and refine");

    const testingSection = contentLoop.closest(".content-section-testing");
    const testingCopy = testingSection?.querySelector(".content-section-copy");
    if (testingSection && testingCopy) {
      let testingSystem = testingSection.querySelector(".content-testing-system");
      if (!testingSystem) {
        testingSystem = document.createElement("div");
        testingSystem.className = "content-testing-system";
        testingCopy.after(testingSystem);
      }
      let stages = contentLoop.querySelector(".content-loop-stages");
      if (!stages) {
        stages = document.createElement("div");
        stages.className = "content-loop-stages";
        Array.from(contentLoop.children).forEach((element) => {
          if (element !== contentLoopTitle) stages.append(element);
        });
        contentLoop.append(stages);
      }
      testingSystem.append(contentLoop);

      const observationLabel = testingCopy.querySelector(".content-observe-label");
      const observationList = testingCopy.querySelector(".content-observe-list");
      let observations = testingSystem.querySelector(".content-testing-observations");
      if (!observations) {
        observations = document.createElement("div");
        observations.className = "content-testing-observations";
        testingSystem.append(observations);
      }
      if (observationLabel) observations.append(observationLabel);
      if (observationList) observations.append(observationList);
    }
  }

  const livestreamLoopLabels = language === "zh"
    ? ["规划", "开播", "观察", "复盘", "优化"]
    : ["PLAN", "GO LIVE", "OBSERVE", "REVIEW", "OPTIMIZE"];
  document.querySelectorAll(".livestream-loop span").forEach((element, index) => {
    if (livestreamLoopLabels[index]) element.textContent = livestreamLoopLabels[index];
  });
  const livestreamLoop = document.querySelector(".livestream-loop");
  if (livestreamLoop) livestreamLoop.setAttribute("aria-label", language === "zh" ? "日常直播运营循环" : "Day-to-day livestream operating cycle");
}

function updateGalleryCaptions(language) {
  const captionTranslations = new Map([
    ["Halloween video special", "万圣节视频特辑"],
    ["Product content / cups · Cover", "杯类产品内容 · 封面"],
    ["Product content / cups · Production", "杯类产品内容 · 制作"],
    ["Cup product scene", "杯类产品场景"],
    ["Production scene · Halloween", "制作现场 · 万圣节"],
    ["Production scene · Jewelry", "制作现场 · 珠宝"],
    ["Jewelry content cover", "珠宝内容封面"],
    ["Livestream training", "直播培训"],
    ["Livestream operations training", "直播运营培训"],
    ["Project discussion", "项目讨论"],
    ["Studio training session", "直播间培训"],
    ["Practical workshop", "实战工作坊"],
    ["University–industry group visit", "校企合作参访"],
    ["Studio observation", "直播间观摩"],
    ["Livestream operations observation", "直播运营观摩"],
    ["Team moments", "团队时刻"]
  ]);

  document.querySelectorAll("[data-caption]").forEach((card) => {
    if (!card.dataset.captionEn) card.dataset.captionEn = card.dataset.caption;
    const englishCaption = card.dataset.captionEn;
    if (language === "en") {
      card.dataset.caption = englishCaption;
      return;
    }
    let translatedCaption = englishCaption;
    for (const [english, chinese] of captionTranslations) {
      if (translatedCaption.startsWith(english)) {
        translatedCaption = translatedCaption.replace(english, chinese);
        break;
      }
    }
    card.dataset.caption = translatedCaption;
  });

  document.querySelectorAll("[data-content-gallery], [data-training-gallery], [data-livestream-gallery]").forEach((gallery) => {
    const activeCard = gallery.querySelector("[data-caption].is-active");
    const caption = gallery.querySelector("[data-content-caption], [data-training-caption], [data-livestream-caption]");
    if (activeCard && caption) caption.textContent = activeCard.dataset.caption;
  });
}

function setLanguage(language) {
  activeLanguage = language;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-copy]").forEach((element) => {
    const key = element.dataset.copy;
    if (!copy[language][key]) return;
    const value = copy[language][key];
    if (value.includes("\n")) {
      element.innerHTML = value.split("\n").join("<br />");
    } else {
      element.textContent = value;
    }
  });

  // History pages are detached while their folders are closed; translate them too.
  if (typeof historyEntries !== "undefined") {
    historyEntries.forEach((entry) => {
      entry.querySelectorAll("[data-copy]").forEach((element) => {
        const key = element.dataset.copy;
        if (!copy[language][key]) return;
        const value = copy[language][key];
        element.innerHTML = value.includes("\n") ? value.split("\n").join("<br />") : value;
      });
    });
  }

  document.querySelectorAll("[data-copy-aria]").forEach((element) => {
    const key = element.dataset.copyAria;
    if (copy[language][key]) element.setAttribute("aria-label", copy[language][key]);
  });
  updateExtendedProjectCopy(language);
  updateGalleryCaptions(language);

  if (activePackageId && typeof renderPackageDetail === "function") {
    renderPackageDetail(activePackageId);
  }
  if (typeof updateCalculator === "function") updateCalculator();
  if (typeof renderKollektiva === "function" && typeof kollektivaActive !== "undefined") renderKollektiva(kollektivaActive);
  if (window.location.hash.startsWith("#project-") && typeof renderProjectCase === "function") {
    renderProjectCase(window.location.hash.slice(9));
  }

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

// Share existing destinations and translation keys between desktop and mobile menus.
const navigationGroups = [
  {
    key: "services", label: "navApproach", overview: "navBrowseServices", href: "#services",
    image: "history-2026-office-01.jpg",
    items: [
      ["#operations-detail", "serviceOne"],
      ["#content-detail", "serviceTwo"],
      ["#creator-detail", "serviceFour"],
      ["#training-detail", "serviceSix"],
    ],
  },
  {
    key: "projects", label: "navCareers", overview: "navBrowseProjects", href: "#project",
    image: "hair-project-new-03.jpg",
    items: [
      ["#project-hair", "caseHairName", "hair-project-new-03.jpg"],
      ["#project-yoga", "caseYogaName", "yoga-project-05.jpg"],
      ["#project-jewelry", "caseJewelryName", "jewelry-cover.jpeg"],
      ["#project-crystal", "caseCrystalName", "crystal-cover.jpeg"],
    ],
  },
];
navigationGroups.forEach((group) => {
  [document.querySelector(".desktop-nav"), mobileMenu].forEach((nav) => {
    const original = nav.querySelector(`a[href="${group.href}"]`);
    if (!original) return;
    const dropdown = document.createElement("details");
    dropdown.className = "nav-dropdown";
    const serviceTriggerTypes = ["operations", "content", "creator", "training"];
    const links = group.items.map(([href, key, image], index) => {
      const triggerAttributes = image
        ? ` data-nav-image="${image}" data-detail-trigger="project" data-project-id="${href.slice(9)}" aria-controls="project-detail" aria-haspopup="dialog"`
        : group.key === "services" && index < 4
          ? ` data-detail-trigger="${serviceTriggerTypes[index]}" aria-controls="${href.slice(1)}" aria-haspopup="dialog"`
          : "";
      return `<a href="${href}"${triggerAttributes}><small>${String(index + 1).padStart(2, "0")}</small><span data-copy="${key}">${copy.en[key]}</span><span aria-hidden="true">↗</span></a>`;
    });
    const overviewLink = group.key === "services"
      ? ""
      : `<a class="nav-mega-overview" href="${group.href}"><span data-copy="${group.overview}">${copy.en[group.overview]}</span><span aria-hidden="true">↗</span></a>`;
    const asideMarkup = group.key === "services"
      ? ""
      : `<div class="nav-mega-aside">${links.slice(4).join("")}${overviewLink}</div>`;
    dropdown.innerHTML = `<summary><span data-copy="${group.label}">${copy.en[group.label]}</span><span class="nav-dropdown-mark" aria-hidden="true">+</span></summary>
      <div class="nav-mega-panel${group.key === "services" ? " nav-mega-panel--services" : ""}">
        <div class="nav-mega-image"><img src="./assets/${group.image}" alt="" /></div>
        <div class="nav-mega-links">${links.slice(0, 4).join("")}</div>
        ${asideMarkup}
      </div>`;
    original.replaceWith(dropdown);
    // Clicking the label goes to its main-page introduction; the plus opens the menu on touch.
    dropdown.querySelector("summary")?.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.closest(".nav-dropdown-mark")) {
        const wasOpen = dropdown.open;
        nav.querySelectorAll(".nav-dropdown").forEach((other) => { other.open = false; });
        dropdown.open = !wasOpen;
        return;
      }
      dropdown.open = false;
      mobileMenu.hidden = true;
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open menu");
      document.body.classList.remove("menu-open");
      const destination = document.querySelector(group.href);
      if (destination) {
        window.history.pushState({}, "", group.href);
        destination.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start",
        });
      }
    });
    let closeTimer = 0;
    const cancelClose = () => {
      window.clearTimeout(closeTimer);
      closeTimer = 0;
    };
    const close = () => {
      cancelClose();
      dropdown.open = false;
    };
    const scheduleClose = () => {
      cancelClose();
      closeTimer = window.setTimeout(() => {
        if (!dropdown.contains(document.activeElement)) dropdown.open = false;
      }, 600);
    };
    const open = () => {
      cancelClose();
      nav.querySelectorAll(".nav-dropdown").forEach((other) => { if (other !== dropdown) other.open = false; });
      dropdown.open = true;
    };
    dropdown.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse" && nav.classList.contains("desktop-nav")) {
        cancelClose();
        open();
      }
    });
    dropdown.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse" && nav.classList.contains("desktop-nav") && !dropdown.contains(document.activeElement)) scheduleClose();
    });
    dropdown.querySelector(".nav-mega-panel")?.addEventListener("pointerenter", cancelClose);
    dropdown.addEventListener("toggle", () => {
      if (dropdown.open) nav.querySelectorAll(".nav-dropdown").forEach((other) => { if (other !== dropdown) other.open = false; });
    });
    dropdown.addEventListener("focusout", (event) => { if (!dropdown.contains(event.relatedTarget)) close(); });
    dropdown.addEventListener("keydown", (event) => {
      if (event.key === "Escape") { dropdown.querySelector("summary").focus(); close(); }
      if (event.key === "ArrowDown" && event.target.closest("summary")) {
        event.preventDefault();
        open();
        dropdown.querySelector(".nav-mega-panel a")?.focus();
      }
    });
    dropdown.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
      const preview = () => {
        if (link.dataset.navImage) dropdown.querySelector(".nav-mega-image img").src = `./assets/${link.dataset.navImage}`;
      };
      link.addEventListener("pointerenter", preview);
      link.addEventListener("focus", preview);
    });
  });
});
document.addEventListener("pointerdown", (event) => {
  document.querySelectorAll(".nav-dropdown[open]").forEach((dropdown) => {
    if (!dropdown.contains(event.target)) dropdown.open = false;
  });
});
window.addEventListener("resize", () => {
  document.querySelectorAll(".nav-dropdown[open]").forEach((dropdown) => { dropdown.open = false; });
});

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menuButton.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  mobileMenu.hidden = open;
  document.body.classList.toggle("menu-open", !open);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  });
});

const inquiryModal = document.querySelector(".inquiry-modal");
const inquiryPanel = inquiryModal?.querySelector(".inquiry-panel");
const inquiryOpeners = document.querySelectorAll("[data-inquiry-open]");
let inquiryReturnFocus = null;
let inquiryPreviousHash = "";

function openInquiry(trigger = null, updateHash = true) {
  if (!inquiryModal) return;
  inquiryReturnFocus = trigger;
  inquiryPreviousHash = window.location.hash === "#contact" ? "" : window.location.hash;
  inquiryModal.hidden = false;
  inquiryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("inquiry-open");
  if (updateHash && window.location.hash !== "#contact") window.history.pushState({}, "", "#contact");
  window.requestAnimationFrame(() => {
    inquiryModal.classList.add("is-open");
    inquiryModal.querySelector(".inquiry-close")?.focus();
  });
}

function closeInquiry() {
  if (!inquiryModal || inquiryModal.hidden) return;
  inquiryModal.classList.remove("is-open");
  inquiryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("inquiry-open");
  if (window.location.hash === "#contact") {
    const destination = inquiryPreviousHash || `${window.location.pathname}${window.location.search}`;
    window.history.pushState({}, "", destination);
  }
  window.setTimeout(() => {
    inquiryModal.hidden = true;
    inquiryReturnFocus?.focus?.();
    inquiryReturnFocus = null;
  }, 360);
}

inquiryOpeners.forEach((opener) => {
  opener.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    openInquiry(opener);
  });
});
inquiryModal?.querySelectorAll("[data-inquiry-close]").forEach((closer) => closer.addEventListener("click", closeInquiry));
inquiryModal?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeInquiry();
  if (event.key !== "Tab" || !inquiryPanel) return;
  const focusable = Array.from(inquiryPanel.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((element) => !element.disabled);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
if (window.location.hash === "#contact") openInquiry(null, false);

const inquiryForm = document.querySelector("[data-inquiry-form]");
if (inquiryForm) {
  const submitButton = inquiryForm.querySelector('button[type="submit"]');
  const submitLabel = submitButton?.querySelector('[data-copy="inquirySubmit"]');
  const status = inquiryForm.querySelector("[data-inquiry-status]");
  let submitting = false;
  const showStatus = (key, state) => {
    if (!status) return;
    status.hidden = false;
    status.dataset.copy = key;
    status.dataset.state = state;
    status.textContent = copy[activeLanguage][key];
  };

  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submitting || !inquiryForm.reportValidity()) return;
    if (!/^https?:$/.test(window.location.protocol)) {
      showStatus("inquiryLocalFile", "error");
      return;
    }

    const formData = new FormData(inquiryForm);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      interest: String(formData.get("interest") || ""),
      message: String(formData.get("message") || "").trim(),
      _subject: activeLanguage === "zh" ? "Click Talk 项目咨询" : "Click Talk project enquiry",
      _template: "table",
      _captcha: "false",
      _honey: String(formData.get("_honey") || ""),
      _url: window.location.href,
    };
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    submitting = true;
    inquiryForm.setAttribute("aria-busy", "true");
    if (submitButton) submitButton.disabled = true;
    if (submitLabel) {
      submitLabel.dataset.copy = "inquirySending";
      submitLabel.textContent = copy[activeLanguage].inquirySending;
    }
    showStatus("inquirySendingStatus", "sending");

    try {
      const response = await fetch(inquiryForm.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error("Submission was not accepted");
      }
      inquiryForm.reset();
      showStatus("inquirySuccess", "success");
    } catch {
      showStatus("inquiryError", "error");
    } finally {
      window.clearTimeout(timeout);
      submitting = false;
      inquiryForm.setAttribute("aria-busy", "false");
      if (submitButton) submitButton.disabled = false;
      if (submitLabel) {
        submitLabel.dataset.copy = "inquirySubmit";
        submitLabel.textContent = copy[activeLanguage].inquirySubmit;
      }
    }
  });
}

const expertiseRoot = document.querySelector("#services");
const expertiseSections = [
  document.querySelector("#operations-detail"),
  document.querySelector("#content-detail"),
  document.querySelector("#creator-detail"),
  document.querySelector("#training-detail"),
].filter(Boolean);

if (expertiseRoot) {
  expertiseSections.forEach((section) => {
    section.classList.add("expertise-drawer");
    const panel = section.querySelector(".service-detail-panel");
    panel?.setAttribute("role", "dialog");
    panel?.setAttribute("aria-modal", "true");
    expertiseRoot.append(section);
  });
}

const detailByTrigger = {
  "single-services": document.querySelector("#single-services-detail"),
  training: document.querySelector("#training-detail"),
  operations: document.querySelector("#operations-detail"),
  content: document.querySelector("#content-detail"),
  livestream: null,
  creator: document.querySelector("#creator-detail"),
  project: document.querySelector("#project-detail"),
  package: document.querySelector("#package-detail"),
};
const detailLayers = Object.values(detailByTrigger).filter(Boolean);
const detailTriggers = document.querySelectorAll("[data-detail-trigger]");
let activeDetail = null;
let detailReturnFocus = null;
let detailReturnLayer = null;
let detailCloseTimer = 0;

const projectCases = {
  yoga: {
    eyebrow: "01 / YOGA & WELLNESS",
    title: "Yoga / Wellness",
    mark: "YOGA",
    intro: "Content and commerce built around a calmer daily ritual.",
    focus: "Livestream commerce",
    format: "Live selling",
    role: "Built and operated a UK yoga livestream project with a market-leading front end.",
    visualClass: "project-yoga",
  },
  hair: {
    eyebrow: "02 / HAIR & WIGS",
    title: "Hair / Wigs",
    mark: "HAIR",
    intro: "From US$0 monthly GMV in April to a sustained US$100,000+ per month from May onward.",
    focus: "Live commerce",
    format: "Host-led show / product demonstration",
    role: "Livestream planning, production and affiliate support",
    visualClass: "project-hair",
  },
  jewelry: {
    eyebrow: "03 / JEWELRY & ACCESSORIES",
    title: "Jewelry / Accessories",
    mark: "JEWELRY",
    intro: "A detail-first content world for products that need to be seen up close.",
    focus: "Jewelry & Accessories",
    format: "Product livestream",
    role: "Creative direction, content planning and partnerships",
    visualClass: "project-jewelry",
  },
  crystal: {
    eyebrow: "04 / CRYSTAL & LIFESTYLE",
    title: "Crystal / Lifestyle",
    mark: "CRYSTAL",
    intro: "A tactile visual language that gives a lifestyle product room to build meaning.",
    focus: "Crystal & Lifestyle",
    format: "Short-form video / community content",
    role: "Creative direction, product storytelling and content planning",
    visualClass: "project-crystal",
  },
};

const projectCasesZh = {
  yoga: { eyebrow: "01 / 瑜伽与健康", title: "瑜伽 / 健康", intro: "围绕英区瑜伽服直播与带货，建立更贴近海外消费者的运营模式。", focus: "直播 / 带货", format: "直播", role: "2022 年下半年切入英区瑜伽服赛道，从直播内容、产品表达与达人协作入手，逐步做到英区前端，让运营节奏真正贴近海外消费者。" },
  hair: { eyebrow: "02 / 假发与美发", title: "假发 / 美发", intro: "4 月月度 GMV 为 0 美元；5 月起，月度总 GMV 持续稳定在 10 万美元以上。", focus: "直播电商", format: "主播直播 / 产品演示", role: "直播策划、制作与联盟支持" },
  jewelry: { eyebrow: "03 / 饰品与配饰", title: "饰品 / 配饰", intro: "为需要被近距离看见的产品打造细节优先的内容世界。", focus: "珠宝首饰", format: "产品直播", role: "创意方向、内容策划与合作" },
  crystal: { eyebrow: "04 / 水晶与生活方式", title: "水晶 / 生活方式", intro: "用有触感的视觉语言，让生活方式产品建立更深的意义。", focus: "水晶与生活方式", format: "短视频 / 社区内容", role: "创意方向、产品叙事与内容规划" },
};

function renderProjectCase(projectId) {
  const project = { ...(projectCases[projectId] || projectCases.yoga), ...(activeLanguage === "zh" ? (projectCasesZh[projectId] || projectCasesZh.yoga) : {}) };
  const projectPanel = document.querySelector(".project-detail-panel");
  if (projectPanel) {
    projectPanel.classList.toggle("project-hair-detail", projectId === "hair");
    projectPanel.classList.toggle("project-yoga-detail", projectId === "yoga");
    projectPanel.classList.toggle("project-jewelry-detail", projectId === "jewelry");
    projectPanel.classList.toggle("project-crystal-detail", projectId === "crystal");
  }
  const projectModeControls = document.querySelector(".project-mode-controls");
  if (projectModeControls) projectModeControls.remove();
  const projectGalleryElement = document.querySelector("[data-project-gallery]");
  if (projectGalleryElement) {
    projectGalleryElement.querySelectorAll("[data-project-loop-copy]").forEach((card) => card.remove());
    projectGalleryElement.hidden = false;
    projectGalleryElement.scrollLeft = 0;
  }
  const galleryImages = [
    "./assets/show-hairfair-live.png",
    "./assets/show-live-production.png",
    "./assets/show-team-meeting.png",
    "./assets/show-team-meeting.png",
  ];
  const yogaGalleryImages = [
    "./assets/yoga-project-01.jpg",
    "./assets/yoga-project-02.jpg",
    "./assets/yoga-project-03.jpg",
    "./assets/yoga-project-04.jpg",
    "./assets/yoga-project-05.jpg",
  ];
  const jewelryGalleryImages = [
    "./assets/jewelry-project-07.jpeg",
    "./assets/jewelry-project-08.jpeg",
    "./assets/jewelry-project-09.jpeg",
    "./assets/jewelry-project-10.jpeg",
    "./assets/jewelry-project-05.jpeg",
    "./assets/jewelry-project-06.jpeg",
  ];
  const crystalGalleryImages = [
    "./assets/crystal-project-01.jpeg",
    "./assets/crystal-project-02.jpeg",
    "./assets/crystal-project-03.jpeg",
    "./assets/crystal-project-04.jpg",
  ];
  const hairGalleryImages = [
    "./assets/hair-project-01.jpeg",
    "./assets/hair-project-new-01.jpg",
    "./assets/hair-project-new-02.jpg",
    "./assets/hair-project-new-03.jpg",
    "./assets/hair-project-04.jpeg",
    "./assets/hair-project-05.jpg",
    "./assets/hair-project-07.png",
    "./assets/hair-project-08.png",
    "./assets/hair-project-09.png",
    "./assets/hair-project-10.jpeg",
    "./assets/hair-project-11.jpeg",
    "./assets/hair-project-12.jpeg",
    "./assets/hair-project-13.jpeg",
    "./assets/hair-live-dashboard-2508.png",
  ];
  document.querySelectorAll("[data-project-gallery-image]").forEach((image) => {
    const index = Number(image.dataset.projectGalleryImage);
    const projectImages = projectId === "hair" ? hairGalleryImages : projectId === "yoga" ? yogaGalleryImages : projectId === "jewelry" ? jewelryGalleryImages : projectId === "crystal" ? crystalGalleryImages : galleryImages;
    const source = projectImages[index];
    const card = image.closest(".project-detail-gallery-card");
    card?.classList.toggle("is-project-unused", !source);
    if (!source) {
      image.removeAttribute("src");
      image.alt = "";
      return;
    }
    image.src = source;
    image.alt = projectId === "hair" ? `Hair project progress ${index + 1}` : projectId === "yoga" ? `Yoga project image ${index + 1}` : projectId === "jewelry" ? `Jewelry livestream project image ${index + 1}` : projectId === "crystal" ? `Crystal livestream project image ${index + 1}` : "Click Talk project detail";
  });
  if (projectId === "crystal" && projectGalleryElement) {
    const cards = [...projectGalleryElement.querySelectorAll(".project-detail-gallery-card:not(.is-project-unused)")];
    // Extra sets keep the strip filled while the first set loops out of view.
    for (let repeat = 0; repeat < 2; repeat++) {
      cards.forEach((card) => {
        const copy = card.cloneNode(true);
        copy.dataset.projectLoopCopy = "";
        copy.setAttribute("aria-hidden", "true");
        copy.inert = true;
        copy.querySelectorAll("[data-project-gallery-image]").forEach((image) => image.removeAttribute("data-project-gallery-image"));
        copy.querySelectorAll("video").forEach((video) => video.remove());
        projectGalleryElement.append(copy);
      });
    }
  }
  const visual = document.querySelector("[data-project-visual]");
  visual.className = `project-detail-visual ${project.visualClass}`;
  visual.querySelector("[data-project-mark]").textContent = project.mark;
  document.querySelector("[data-project-eyebrow]").textContent = project.eyebrow;
  document.querySelector("[data-project-title]").textContent = project.title;
  document.querySelector("[data-project-intro]").textContent = project.intro;
  document.querySelector("[data-project-focus]").textContent = project.focus;
  document.querySelector("[data-project-format]").textContent = project.format;
  document.querySelector("[data-project-role]").textContent = project.role;
  const roleLabel = document.querySelector("[data-copy='projectRoleLabel']");
  if (roleLabel) {
    roleLabel.textContent = projectId === "hair" || projectId === "yoga" || projectId === "jewelry" || projectId === "crystal"
      ? (activeLanguage === "zh" ? "我们的职责" : "OUR ROLE")
      : (activeLanguage === "zh" ? "成就与经历" : "ACHIEVEMENT");
  }
  projectGalleryRotation = 0;
  setProjectGalleryMode(projectId === "hair" ? "ring" : "lift");
  window.requestAnimationFrame(resizeDirectCards);
}

const projectGallery = document.querySelector("[data-project-gallery]");
const projectGalleryCards = projectGallery ? Array.from(projectGallery.querySelectorAll(".project-detail-gallery-card")) : [];
const directCards = projectGallery ? Array.from(projectGallery.querySelectorAll(".direct-card")) : [];

// Keep trackpad horizontal swipes from being interpreted as browser/page navigation.
// Actual horizontal galleries keep the event and handle it in their own wheel listeners.
window.addEventListener("wheel", (event) => {
  if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
  if (event.target instanceof Element && event.target.closest(".project-detail-gallery, .gallery-viewport, [data-auto-carousel], [data-cup-gallery]")) return;
  event.preventDefault();
}, { capture: true, passive: false });

const cupGallery = document.querySelector(".content-cup-images");
const cupDetailStrip = document.querySelector(".content-cup-detail-strip");
if (cupGallery && cupDetailStrip) {
  cupGallery.className = "content-cup-gallery";
  cupGallery.dataset.cupGallery = "";
  cupGallery.tabIndex = 0;
  cupGallery.setAttribute("role", "region");
  cupGallery.setAttribute("aria-label", "Cup short-form content gallery");
  cupDetailStrip.querySelectorAll("figure").forEach((figure) => cupGallery.append(figure));
  cupDetailStrip.remove();

  const cupFigures = Array.from(cupGallery.querySelectorAll("figure"));
  cupFigures.forEach((figure, index) => figure.classList.add(index === 1 ? "is-landscape" : "is-portrait"));
  cupGallery.querySelectorAll("img").forEach((image) => { image.draggable = false; });

  const heading = cupGallery.closest(".content-cup-feature")?.querySelector(".content-halloween-heading");
  let previousButton;
  let nextButton;
  if (heading) {
    const headingBar = document.createElement("div");
    headingBar.className = "content-cup-heading";
    heading.before(headingBar);
    headingBar.append(heading);

    const controls = document.createElement("div");
    controls.className = "content-cup-controls";
    controls.innerHTML = '<button type="button" data-cup-gallery-prev aria-label="Previous cup image"><span class="material-icons" aria-hidden="true">arrow_back</span></button><button type="button" data-cup-gallery-next aria-label="Next cup image"><span class="material-icons" aria-hidden="true">arrow_forward</span></button>';
    headingBar.append(controls);
    previousButton = controls.querySelector("[data-cup-gallery-prev]");
    nextButton = controls.querySelector("[data-cup-gallery-next]");
  }

  const moveCupGallery = (direction) => {
    const current = cupGallery.scrollLeft;
    const positions = cupFigures.map((figure) => figure.offsetLeft);
    const target = direction > 0
      ? positions.find((position) => position > current + 2) ?? cupGallery.scrollWidth
      : positions.reverse().find((position) => position < current - 2) ?? 0;
    cupGallery.scrollTo({
      left: Math.max(0, Math.min(target, cupGallery.scrollWidth - cupGallery.clientWidth)),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    });
  };
  const updateCupGalleryControls = () => {
    if (!previousButton || !nextButton) return;
    previousButton.disabled = cupGallery.scrollLeft <= 2;
    nextButton.disabled = cupGallery.scrollLeft >= cupGallery.scrollWidth - cupGallery.clientWidth - 2;
  };
  let cupGalleryFrame = 0;
  const scheduleCupGalleryUpdate = () => {
    if (cupGalleryFrame) return;
    cupGalleryFrame = window.requestAnimationFrame(() => {
      cupGalleryFrame = 0;
      updateCupGalleryControls();
    });
  };
  previousButton?.addEventListener("click", () => moveCupGallery(-1));
  nextButton?.addEventListener("click", () => moveCupGallery(1));
  cupGallery.addEventListener("scroll", scheduleCupGalleryUpdate, { passive: true });
  window.addEventListener("resize", scheduleCupGalleryUpdate);
  if ("ResizeObserver" in window) new ResizeObserver(scheduleCupGalleryUpdate).observe(cupGallery);

  cupGallery.addEventListener("wheel", (event) => {
    if (event.ctrlKey) return;
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? cupGallery.clientWidth : 1;
    const distance = (Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX) * unit;
    if (!distance || cupGallery.scrollWidth <= cupGallery.clientWidth) return;
    const next = Math.max(0, Math.min(cupGallery.scrollLeft + distance, cupGallery.scrollWidth - cupGallery.clientWidth));
    if (Math.abs(next - cupGallery.scrollLeft) < .5) return;
    event.preventDefault();
    cupGallery.scrollTo({ left: next, behavior: "instant" });
  }, { passive: false });

  cupGallery.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    moveCupGallery(event.key === "ArrowLeft" ? -1 : 1);
  });

  let cupGalleryDragging = false;
  let cupGalleryLastX = 0;
  cupGallery.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    cupGalleryDragging = true;
    cupGalleryLastX = event.clientX;
    cupGallery.classList.add("is-dragging");
    cupGallery.setPointerCapture(event.pointerId);
  });
  cupGallery.addEventListener("pointermove", (event) => {
    if (!cupGalleryDragging) return;
    cupGallery.scrollLeft -= event.clientX - cupGalleryLastX;
    cupGalleryLastX = event.clientX;
  });
  const releaseCupGallery = (event) => {
    if (!cupGalleryDragging) return;
    cupGalleryDragging = false;
    cupGallery.classList.remove("is-dragging");
    if (cupGallery.hasPointerCapture(event.pointerId)) cupGallery.releasePointerCapture(event.pointerId);
  };
  cupGallery.addEventListener("pointerup", releaseCupGallery);
  cupGallery.addEventListener("pointercancel", releaseCupGallery);
  cupGallery.addEventListener("lostpointercapture", releaseCupGallery);
  scheduleCupGalleryUpdate();
}

const livestreamDailySection = document.querySelector(".livestream-section-daily");
const livestreamDailyLoop = livestreamDailySection?.querySelector(".livestream-loop");
const livestreamDailyHeading = livestreamDailySection?.querySelector("h3");
if (livestreamDailyLoop && livestreamDailyHeading) {
  livestreamDailyHeading.after(livestreamDailyLoop);
}
const directVideos = directCards.map((card) => card.querySelector(".direct2-video")).filter(Boolean);
const directPhotos = directCards.map((card) => card.querySelector(".direct-card__photo")).filter(Boolean);
function resizeDirectCards() {
  projectGallery?.querySelectorAll(".direct-card").forEach((card) => {
    const frame = card.closest(".project-detail-gallery-card");
    if (!frame) return;
    const scale = Math.min(frame.clientWidth / 660, frame.clientHeight / 836);
    card.querySelector(".direct-card__artboard")?.style.setProperty("--direct-scale", scale);
  });
}
window.addEventListener("resize", resizeDirectCards);
window.addEventListener("load", resizeDirectCards);
const projectThemeToggle = document.querySelector("[data-theme-toggle]");
if (projectThemeToggle) {
  projectThemeToggle.addEventListener("click", () => {
    const night = !document.body.classList.contains("is-night");
    document.body.classList.toggle("is-night", night);
    projectThemeToggle.setAttribute("aria-pressed", String(night));
    directVideos.forEach((video) => {
      if (night) video.play().catch(() => {});
      else video.pause();
    });
    directPhotos.forEach((photo) => {
      const daySrc = photo.dataset.daySrc || photo.src;
      const nightSrc = photo.dataset.nightSrc || daySrc;
      photo.dataset.daySrc = daySrc;
      photo.style.opacity = "0";
      photo.onload = () => { photo.style.opacity = "1"; };
      photo.src = night ? nightSrc : daySrc;
    });
  });
}
const projectModeButtons = Array.from(document.querySelectorAll("[data-project-gallery-mode]"));
let projectGalleryMode = "lift";
let projectGalleryRotation = 0;

function renderProjectGallery(mode, rotation = 0) {
  if (!projectGallery) return;
  if (directCards.length) {
    projectGallery.dataset.galleryMode = mode === "ring" ? "ring" : "direct";
    const ringCards = projectGalleryCards.filter((card) => !card.classList.contains("is-project-unused"));
    if (mode !== "ring") {
      projectGalleryCards.forEach((card) => {
        card.style.cssText = "";
      });
    }
    ringCards.forEach((card, index) => {
      if (mode !== "ring") return;
      const angle = index * (360 / ringCards.length) + rotation;
      const normalized = ((angle % 360) + 360) % 360;
      const depth = Math.cos((normalized * Math.PI) / 180);
      card.style.setProperty("--project-ring-angle", `${angle}deg`);
      card.style.setProperty("--project-ring-scale", `${0.82 + Math.max(0, depth) * 0.18}`);
      card.style.setProperty("--project-ring-opacity", `${0.35 + Math.max(0, depth) * 0.65}`);
      card.style.setProperty("--project-ring-brightness", `${0.62 + Math.max(0, depth) * 0.38}`);
      card.style.setProperty("--project-ring-z", `${Math.round(20 + (depth + 1) * 20)}`);
    });
    return;
  }
  projectGallery.dataset.galleryMode = mode;
  projectGalleryCards.forEach((card, index) => {
    card.style.cssText = "";
    if (mode === "fan") {
      const offset = index - (projectGalleryCards.length - 1) / 2;
      card.style.setProperty("--project-fan-x", `${offset * 48}px`);
      card.style.setProperty("--project-fan-rotate", `${offset * 12}deg`);
      card.style.setProperty("--project-fan-scale", `${1 - Math.abs(offset) * 0.08}`);
      card.style.setProperty("--project-fan-opacity", `${1 - Math.abs(offset) * 0.14}`);
      card.style.setProperty("--project-fan-z", `${20 - Math.abs(offset)}`);
    } else if (mode === "flex") {
      const offset = index - (projectGalleryCards.length - 1) / 2;
      card.style.setProperty("--project-flex-x", `${offset * 36 + rotation * 0.18}px`);
      card.style.setProperty("--project-flex-y", `${Math.abs(offset) * 12}px`);
      card.style.setProperty("--project-flex-rotate", `${offset * 7}deg`);
      card.style.setProperty("--project-flex-scale", `${1 - Math.abs(offset) * 0.045}`);
      card.style.setProperty("--project-flex-opacity", `${1 - Math.abs(offset) * 0.1}`);
    } else if (mode === "ring") {
      const angle = index * (360 / projectGalleryCards.length) + rotation;
      const normalized = ((angle % 360) + 360) % 360;
      const depth = Math.cos((normalized * Math.PI) / 180);
      card.style.setProperty("--project-ring-angle", `${angle}deg`);
      card.style.setProperty("--project-ring-counter-angle", `${-angle}deg`);
      card.style.setProperty("--project-ring-scale", `${0.84 + Math.max(0, depth) * 0.16}`);
      card.style.setProperty("--project-ring-opacity", `${0.42 + Math.max(0, depth) * 0.58}`);
      card.style.setProperty("--project-ring-brightness", `${0.68 + Math.max(0, depth) * 0.32}`);
      card.style.setProperty("--project-ring-z", `${Math.round(20 + depth * 10)}`);
    }
  });
}

function setProjectGalleryMode(mode) {
  if (!["lift", "fan", "ring", "flex"].includes(mode)) return;
  projectGalleryMode = mode;
  projectModeButtons.forEach((button) => {
    const active = button.dataset.projectGalleryMode === mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderProjectGallery(mode, projectGalleryRotation);
}

projectModeButtons.forEach((button) => {
  button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
  button.addEventListener("click", () => setProjectGalleryMode(button.dataset.projectGalleryMode));
});

projectGalleryCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (projectGallery?.matches(":has(.direct-card)")) {
      return;
    }
    card.classList.toggle("is-focused");
  });
});

if (projectGallery) {
  let projectGalleryLastFrame = 0;
  let crystalLoopCopy = null;
  let crystalLoopOffset = 0;
  const animateProjectGallery = (timestamp) => {
    const projectPanel = document.querySelector(".project-detail-panel");
    const projectDetail = document.querySelector("#project-detail");
    const shouldPause =
      projectGalleryMode !== "ring" ||
      !projectPanel?.classList.contains("project-hair-detail") ||
      projectDetail?.hidden ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.hidden;

    if (!shouldPause) {
      if (projectGalleryLastFrame) {
        const elapsed = Math.min(timestamp - projectGalleryLastFrame, 34);
        projectGalleryRotation = (projectGalleryRotation - elapsed * 0.008) % 360;
        renderProjectGallery("ring", projectGalleryRotation);
      }
    }

    if (projectPanel?.classList.contains("project-crystal-detail")) {
      const firstCopy = projectGallery.querySelector("[data-project-loop-copy]");
      if (firstCopy !== crystalLoopCopy) {
        crystalLoopCopy = firstCopy;
        crystalLoopOffset = 0;
      }
      if (firstCopy && !projectDetail?.hidden && !document.hidden &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const firstCard = projectGalleryCards[0];
        const loopWidth = firstCopy.offsetLeft - firstCard.offsetLeft;
        if (loopWidth > 0 && projectGalleryLastFrame) {
          const elapsed = Math.min(timestamp - projectGalleryLastFrame, 34);
          crystalLoopOffset = (crystalLoopOffset + elapsed * 0.032) % loopWidth;
          projectGallery.scrollLeft = crystalLoopOffset;
        }
      }
    }

    projectGalleryLastFrame = timestamp;
    window.requestAnimationFrame(animateProjectGallery);
  };
  window.requestAnimationFrame(animateProjectGallery);
}

document.querySelectorAll(".history-photo-strip").forEach((strip) => {
  strip.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    strip.scrollBy({ left: event.deltaY, behavior: "smooth" });
  }, { passive: false });
});

document.querySelectorAll(".history-year-gallery img").forEach((image) => {
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `${image.alt} — bring to front`);
  const bringToFront = () => {
    const gallery = image.closest(".history-year-gallery");
    gallery?.querySelectorAll("img").forEach((item) => item.classList.remove("is-front"));
    image.classList.add("is-front");
  };
  image.addEventListener("click", bringToFront);
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      bringToFront();
    }
  });
});

document.querySelectorAll("[data-auto-carousel]").forEach((gallery) => {
  const track = gallery.querySelector(".history-year-gallery-track");
  const images = [...gallery.querySelectorAll(".history-year-gallery-track img")];
  const dots = [...gallery.querySelectorAll(".history-year-gallery-dots span")];
  if (!track || images.length < 2) return;
  const pattern = [1, .5, -.3, -1, .2, .75, -.6, .35];
  let activeIndex = 0;
  let hoverIndex = -1;
  let resumeAt = 0;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pauseAfterInteraction = () => {
    resumeAt = Date.now() + 4500;
  };

  const getLayout = () => {
    const rect = gallery.getBoundingClientRect();
    const middle = (images.length - 1) / 2;
    const reach = Math.max(1, middle);
    const spread = Math.min(84, Math.max(48, rect.width / (images.length + 2)));
    const push = Math.min(112, Math.max(62, rect.width * .2));
    const cardSize = Math.min(260, Math.max(176, rect.width * .48), Math.max(176, rect.height * .72));
    return {
      cardSize,
      push,
      slots: images.map((_, imageIndex) => {
        const offset = imageIndex - middle;
        return {
          x: offset * spread,
          y: 17 * (offset / reach) ** 2,
          rotate: 10 * pattern[imageIndex % pattern.length],
        };
      }),
    };
  };

  const render = (animate = true, stagger = false) => {
    const layout = getLayout();
    const presentedIndex = hoverIndex >= 0 ? hoverIndex : activeIndex;
    images.forEach((image, imageIndex) => {
      const slot = layout.slots[imageIndex];
      const selected = imageIndex === presentedIndex;
      const pushedX = selected
        ? slot.x
        : slot.x + Math.sign(imageIndex - presentedIndex) * layout.push;
      const y = selected ? slot.y - layout.cardSize * .04 : slot.y;
      const rotate = selected ? 0 : slot.rotate;
      const scale = selected ? 1.06 : 1;
      image.style.transition = animate && !reducedMotion.matches
        ? "transform 820ms cubic-bezier(.34,1.56,.64,1), box-shadow 300ms ease, filter 300ms ease"
        : "none";
      image.style.transitionDelay = stagger && !reducedMotion.matches ? `${imageIndex * 60}ms` : "0ms";
      image.style.setProperty("--history-bounce-size", `${layout.cardSize}px`);
      image.style.transform = `translate(-50%, -50%) translate3d(${pushedX}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`;
      image.style.opacity = "1";
      image.style.filter = selected ? "brightness(1)" : "brightness(.92)";
      image.style.zIndex = selected ? String(images.length + 2) : String(imageIndex + 1);
      image.toggleAttribute("data-active", selected);
    });
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === activeIndex));
  };

  const resetCards = () => {
    const layout = getLayout();
    images.forEach((image, imageIndex) => {
      const slot = layout.slots[imageIndex];
      image.style.transition = "none";
      image.style.setProperty("--history-bounce-size", `${layout.cardSize}px`);
      image.style.transform = `translate(-50%, -50%) translate3d(${slot.x}px, ${slot.y}px, 0) rotate(${slot.rotate}deg) scale(0)`;
    });
    requestAnimationFrame(() => requestAnimationFrame(() => render(true, true)));
  };

  images.forEach((image, imageIndex) => {
    image.addEventListener("click", () => {
      activeIndex = imageIndex;
      hoverIndex = -1;
      render(true);
      pauseAfterInteraction();
    });
  });

  gallery.addEventListener("pointermove", (event) => {
    const layout = getLayout();
    const rect = gallery.getBoundingClientRect();
    const pointerX = event.clientX - rect.left - rect.width / 2;
    const pointerY = event.clientY - rect.top - rect.height / 2;
    let closest = -1;
    let distance = Infinity;
    layout.slots.forEach((slot, imageIndex) => {
      const gap = Math.abs(pointerX - slot.x);
      if (gap < distance && Math.abs(pointerY - slot.y) <= layout.cardSize / 2 + 18) {
        closest = imageIndex;
        distance = gap;
      }
    });
    if (distance > layout.cardSize / 2 + 18) closest = -1;
    if (closest === hoverIndex) return;
    hoverIndex = closest;
    render(true);
  });
  gallery.addEventListener("pointerleave", () => {
    hoverIndex = -1;
    render(true);
  });
  window.addEventListener("resize", () => render(false));
  gallery.resetBounceCards = resetCards;
  resetCards();

  window.setInterval(() => {
    const entry = gallery.closest(".history-entry");
    if (
      document.hidden ||
      reducedMotion.matches ||
      Date.now() < resumeAt ||
      !entry?.classList.contains("is-active")
    ) return;
    hoverIndex = -1;
    activeIndex = (activeIndex + 1) % images.length;
    render(true);
  }, 4800);
});

// Keep the 2021 frame still while full images gently crossfade inside it.
document.querySelectorAll("[data-history-fixed]").forEach((gallery) => {
  const images = [...gallery.querySelectorAll("img")];
  let activeIndex = 0;
  window.setInterval(() => {
    if (document.hidden || !gallery.closest(".history-entry")?.classList.contains("is-active")) return;
    const nextIndex = (activeIndex + 1) % images.length;
    if (!images[nextIndex].complete || !images[nextIndex].naturalWidth) return;
    images[activeIndex].classList.remove("is-active");
    images[activeIndex].setAttribute("aria-hidden", "true");
    images[nextIndex].classList.add("is-active");
    images[nextIndex].removeAttribute("aria-hidden");
    activeIndex = nextIndex;
  }, 4800);
});

// A seamless filmstrip for journey photographs and video.
document.querySelectorAll("[data-history-smooth]").forEach((gallery) => {
  const track = gallery.querySelector(".history-smooth-track");
  const group = gallery.querySelector(".history-smooth-group");
  group.querySelectorAll("figure").forEach((figure) => {
    const media = figure.querySelector("img, video");
    figure.style.setProperty("--history-media-ratio", Number(media.getAttribute("width")) / Number(media.getAttribute("height")));
    if (media.tagName === "IMG") media.loading = "eager";
  });
  const duplicate = group.cloneNode(true);
  duplicate.setAttribute("aria-hidden", "true");
  duplicate.inert = true;
  duplicate.querySelectorAll("img").forEach((image) => { image.loading = "eager"; });
  duplicate.querySelectorAll("video").forEach((video) => { video.controls = false; });
  track.append(duplicate);
  const updateSpeed = () => {
    const distance = group.getBoundingClientRect().width;
    track.style.setProperty("--history-loop-duration", `${Math.max(1, distance / 38)}s`);
  };
  new ResizeObserver(updateSpeed).observe(group);
  updateSpeed();

  const visibleVideos = new Set();
  const videos = [...gallery.querySelectorAll("video")];
  const syncVideo = (video) => {
    if (visibleVideos.has(video) && !document.hidden && !gallery.closest(".history-entry").hidden) {
      video.play().catch(() => {});
    } else video.pause();
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) visibleVideos.add(target);
      else visibleVideos.delete(target);
      syncVideo(target);
    });
  }, { threshold: 0.01 });
  videos.forEach((video) => {
    video.muted = true;
    observer.observe(video);
  });
  document.addEventListener("visibilitychange", () => videos.forEach(syncVideo));
});

const historyYearTabs = [...document.querySelectorAll(".history-year-tab")];
const historyEntries = [...document.querySelectorAll(".history-timeline .history-entry")];
let activeYear = null;
historyEntries.forEach((entry) => {
  const year = entry.querySelector(".history-year")?.textContent.trim();
  entry.dataset.historyEntry = year;
  entry.id = `history-entry-${year}`;
  entry.setAttribute("role", "region");
  entry.setAttribute("aria-labelledby", `history-year-${year}`);
  entry.hidden = true;
});
historyYearTabs.forEach((tab) => {
  tab.id = `history-year-${tab.dataset.historyYear}`;
});
function setHistoryYear(year) {
  const entry = historyEntries.find((item) => item.dataset.historyEntry === year);
  activeYear = entry ? year : null;
  historyYearTabs.forEach((tab) => {
    const selected = tab.dataset.historyYear === activeYear;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-expanded", String(selected));
  });
  historyEntries.forEach((item) => {
    const selected = item === entry;
    item.hidden = !selected;
    item.classList.toggle("is-active", selected);
  });
  entry?.querySelector("[data-auto-carousel]")?.resetBounceCards?.();
  scheduleHeaderState();
}
function revealHistoryYear(year, behavior = "smooth") {
  setHistoryYear(year);
  const entry = historyEntries.find((item) => item.dataset.historyEntry === year);
  if (!entry || !entry.closest("#about")) return;
  requestAnimationFrame(() => {
    const headerHeight = document.querySelector(".site-header")?.getBoundingClientRect().height || 84;
    const journey = entry.closest(".about-journey") || entry;
    const journeyRect = journey.getBoundingClientRect();
    const shouldReveal = journeyRect.top > window.innerHeight * 0.45 || journeyRect.bottom < headerHeight + 24;
    if (!shouldReveal) return;
    const top = journeyRect.top + window.scrollY - headerHeight - 18;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : behavior,
    });
  });
}
historyYearTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    revealHistoryYear(tab.dataset.historyYear);
  });
  tab.addEventListener("keydown", (event) => {
    let target;
    if (event.key === "ArrowRight") target = (index + 1) % historyYearTabs.length;
    if (event.key === "ArrowLeft") target = (index - 1 + historyYearTabs.length) % historyYearTabs.length;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = historyYearTabs.length - 1;
    if (target === undefined) return;
    event.preventDefault();
    historyYearTabs[target].focus();
  });
});
// Keep the journey closed until the visitor chooses a year.
setHistoryYear(null);
document.querySelectorAll('a[href="#about"]').forEach((link) => {
  link.addEventListener("click", () => setHistoryYear(null));
});

function openDetail(detail, trigger) {
  if (!detail) return;
  window.clearTimeout(detailCloseTimer);
  detailReturnLayer = trigger && activeDetail && activeDetail !== detail && activeDetail.contains(trigger) ? activeDetail : null;
  detailReturnFocus = trigger?.closest(".nav-dropdown")
    ? (trigger.closest("#mobile-menu") ? menuButton : trigger.closest(".nav-dropdown").querySelector("summary"))
    : trigger || document.activeElement;
  if (trigger?.closest(".nav-dropdown")) {
    trigger.closest(".nav-dropdown").open = false;
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
  }
  detailLayers.forEach((layer) => {
    if (layer !== detail) {
      layer.classList.remove("is-open");
      layer.setAttribute("aria-hidden", "true");
      layer.hidden = true;
    }
  });
  activeDetail = detail;
  detail.hidden = false;
  document.body.classList.add("detail-open");
  detail.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => detail.classList.add("is-open"));
  detail.querySelector(".service-detail-close").focus();
}

function closeDetail(detail = activeDetail) {
  if (!detail || detail.hidden) return;
  const returnLayer = detail === activeDetail ? detailReturnLayer : null;
  const returnFocus = detailReturnFocus;
  detailReturnLayer = null;
  detail.classList.remove("is-open");
  detail.setAttribute("aria-hidden", "true");
  if (!returnLayer) document.body.classList.remove("detail-open");
  activeDetail = null;
  detailCloseTimer = window.setTimeout(() => {
    detail.hidden = true;
    if (returnLayer) {
      activeDetail = returnLayer;
      returnLayer.hidden = false;
      returnLayer.setAttribute("aria-hidden", "false");
      document.body.classList.add("detail-open");
      requestAnimationFrame(() => {
        returnLayer.classList.add("is-open");
        if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
      });
    } else if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
  }, 260);
}

detailTriggers.forEach((trigger) => {
  const detail = detailByTrigger[trigger.dataset.detailTrigger];
  if (!detail) return;
  const open = () => {
    if (trigger.dataset.detailTrigger === "project") {
      renderProjectCase(trigger.dataset.projectId);
      renderProjectGallery(projectGalleryMode, projectGalleryRotation);
      const projectHash = `#project-${trigger.dataset.projectId}`;
      if (window.location.hash !== projectHash) window.history.pushState({ projectId: trigger.dataset.projectId }, "", projectHash);
    }
    openDetail(detail, trigger);
  };
  trigger.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    open();
  });
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
});

detailLayers.forEach((detail) => {
  detail.querySelectorAll("[data-detail-close]").forEach((button) => {
    button.addEventListener("click", () => {
      if (detail === detailByTrigger.project && window.location.hash.startsWith("#project-")) {
        window.history.pushState({}, "", "#project");
      }
      closeDetail(detail);
    });
  });
});

let activePackageId = null;
const packageTriggers = Array.from(document.querySelectorAll("[data-package-trigger]"));
const packageDetail = detailByTrigger.package;
const packageFields = packageDetail ? Array.from(packageDetail.querySelectorAll("[data-package-field]")) : [];
const packageOrderLink = packageDetail ? packageDetail.querySelector("[data-package-order]") : null;

function renderPackageDetail(packageId) {
  if (!packageDetail || !packageDetails[activeLanguage][packageId]) return;
  const plan = packageDetails[activeLanguage][packageId];
  packageFields.forEach((field) => {
    const value = plan[field.dataset.packageField];
    if (value) field.textContent = value;
  });
  if (packageOrderLink) {
    packageOrderLink.href = `mailto:yibangecommerce@outlook.com?subject=${encodeURIComponent(`Click Talk ${plan.title} package`)}`;
  }
}

function openPackageDetail(trigger) {
  activePackageId = trigger.dataset.packageTrigger;
  renderPackageDetail(activePackageId);
  openDetail(packageDetail, trigger);
}

packageTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openPackageDetail(trigger));
  trigger.addEventListener("keydown", (event) => {
    if (event.target.closest("button, a")) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPackageDetail(trigger);
    }
  });
});

const calculatorPages = document.querySelector("#calculator-pages");
const calculatorPageValue = document.querySelector("#calculator-pages-value");
const calculatorAgency = document.querySelector("#calculator-agency");
const calculatorFreelancer = document.querySelector("#calculator-freelancer");
const calculatorTotal = document.querySelector("#calculator-total");
const calculatorContent = document.querySelector("#calculator-content");
const calculatorSeo = document.querySelector("#calculator-seo");
const calculatorOrder = document.querySelector("[data-calculator-order]");

function formatCalculatorPrice(value) {
  return `$${value.toLocaleString()}`;
}

function getCalculatorState() {
  return {
    serviceType: document.querySelector("input[name='calculator-service']:checked")?.value || "both",
    pages: Number(calculatorPages?.value || 5),
    needContent: Boolean(calculatorContent?.checked),
    needSEO: Boolean(calculatorSeo?.checked),
    timeline: document.querySelector("input[name='calculator-timeline']:checked")?.value || "regular",
  };
}

function calculatePrice(state) {
  const basePrices = {
    design: { base: 399, perPage: 100 },
    development: { base: 199, perPage: 100 },
    both: { base: 499, perPage: 200 },
  };
  const pricing = basePrices[state.serviceType] || basePrices.both;
  let total = Math.max(pricing.base, pricing.base + (state.pages - 1) * pricing.perPage);
  if (state.needContent) total += state.pages * 50;
  if (state.needSEO) total += state.pages * 50;
  if (state.timeline === "rush") total += state.pages * 100;
  if (state.timeline === "fast") total += state.pages * 25;
  return total;
}

function calculateAgencyCost(state) {
  const perPage = state.serviceType === "both" ? 1000 : 400;
  return 8000 + (state.pages - 1) * perPage;
}

function calculateFreelancerCost(state) {
  const perPage = state.serviceType === "both" ? 500 : 200;
  return 3000 + (state.pages - 1) * perPage;
}

function updateCalculator() {
  if (!calculatorPages || !calculatorTotal) return;
  const state = getCalculatorState();
  const total = calculatePrice(state);
  calculatorPageValue.textContent = String(state.pages);
  calculatorTotal.textContent = formatCalculatorPrice(total);
  calculatorAgency.textContent = formatCalculatorPrice(calculateAgencyCost(state));
  calculatorFreelancer.textContent = formatCalculatorPrice(calculateFreelancerCost(state));
  calculatorPages.style.setProperty("--calculator-progress", `${((state.pages - 1) / 29) * 100}%`);
  if (calculatorOrder) {
    const planName = activePackageId && packageDetails[activeLanguage][activePackageId]
      ? packageDetails[activeLanguage][activePackageId].title
      : "project";
    const summary = `${planName} package estimate: ${formatCalculatorPrice(total)} for ${state.pages} pages`;
    calculatorOrder.href = `mailto:yibangecommerce@outlook.com?subject=${encodeURIComponent(`Click Talk ${planName} order`)}&body=${encodeURIComponent(summary)}`;
  }
}

document.querySelectorAll("#calculator-section input").forEach((input) => {
  input.addEventListener("input", updateCalculator);
  input.addEventListener("change", updateCalculator);
});
updateCalculator();

function syncProjectRoute() {
  const projectId = window.location.hash.startsWith("#project-") ? window.location.hash.slice(9) : "";
  if (projectId && projectCases[projectId]) {
    renderProjectCase(projectId);
    openDetail(detailByTrigger.project);
  } else if (activeDetail === detailByTrigger.project) {
    closeDetail(detailByTrigger.project);
  }
}

window.addEventListener("popstate", syncProjectRoute);
window.addEventListener("hashchange", syncProjectRoute);
syncProjectRoute();

// Footer section links scroll explicitly, including when the hash is unchanged.
// Service details and contact links retain their existing dialog handlers.
document.querySelectorAll('.site-footer a[href^="#"]:not([data-detail-trigger]):not([data-inquiry-open]), [data-footer-contact]').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute("href");
    const destination = document.getElementById(hash.slice(1));
    if (!destination || destination.hidden) return;
    event.preventDefault();

    document.querySelectorAll(".nav-dropdown[open]").forEach((dropdown) => { dropdown.open = false; });
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");

    if (window.location.hash !== hash) window.history.pushState({}, "", hash);
    requestAnimationFrame(() => {
      const headerHeight = siteHeader?.getBoundingClientRect().height || 0;
      const top = hash === "#top" ? 0 : destination.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      });
      scheduleHeaderState();
    });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && activeDetail) {
    if (activeDetail === detailByTrigger.project && window.location.hash.startsWith("#project-")) {
      window.history.pushState({}, "", "#project");
    }
    closeDetail();
  }
});

const kollektivaDetail = document.querySelector("#team");
const kollektivaSlides = [
  {
    name: "Chris",
    role: "Founder & CEO",
    description: "Chris leads Click Talk and sets the direction for a team built around sharp operations, strong talent and global growth.",
  },
  {
    name: "Eve",
    role: "Operating Partner · Operations Manager",
    description: "Eve keeps the day-to-day operation moving, connecting people, priorities and live commerce details with calm precision.",
  },
  {
    name: "Ouma",
    role: "Livestream Host",
    description: "Ouma brings an open, confident energy to the live room and turns every product moment into a reason to stay and talk.",
  },
  {
    name: "Candy",
    role: "Livestream Host",
    description: "Candy makes live commerce feel personal, expressive and easy to follow, helping audiences move naturally from interest to action.",
  },
  {
    name: "Lisa",
    role: "Livestream Host",
    description: "Lisa pairs a warm on-camera presence with a clear product story, creating live moments that feel useful, memorable and real.",
  },
  {
    name: "Asia",
    role: "Livestream Host",
    description: "Asia brings pace and personality to every broadcast, keeping the room engaged while the offer stays clear and compelling.",
  },
  {
    name: "Mels",
    role: "Livestream Host",
    description: "Mels brings a distinct point of view to the live room, building trust through an easy rhythm, thoughtful details and genuine connection.",
  },
];
const kollektivaSlidesZh = [
  { name: "Chris", role: "创始人兼 CEO", description: "Chris 负责 Click Talk 的整体方向，带领团队以扎实运营、优秀人才与全球增长为核心持续前进。" },
  { name: "Eve", role: "公司合伙人 · 运营经理", description: "Eve 负责推动日常运营，把人员、重点与直播电商细节连接成稳定而清晰的节奏。" },
  { name: "Ouma", role: "直播主播", description: "Ouma 为直播间带来开放、自信的能量，把每一个产品瞬间变成值得停留和交流的理由。" },
  { name: "Candy", role: "直播主播", description: "Candy 让直播电商更有温度、更有表达，也让观众自然地从兴趣走向行动。" },
  { name: "Lisa", role: "直播主播", description: "Lisa 用亲切的镜头表现和清晰的产品表达，创造有用、难忘又真实的直播时刻。" },
  { name: "Asia", role: "直播主播", description: "Asia 为每场直播带来节奏与个性，在保持现场热度的同时，让产品价值清晰可见。" },
  { name: "Mels", role: "直播主播", description: "Mels 用独特的视角与自然的节奏建立信任，让直播间产生真实连接。" },
];
const kollektivaBackgrounds = Array.from(kollektivaDetail.querySelectorAll("[data-kollektiva-background]"));
const kollektivaAvatars = Array.from(kollektivaDetail.querySelectorAll("[data-kollektiva-avatar]"));
const kollektivaDescription = kollektivaDetail.querySelector("[data-kollektiva-description]");
const kollektivaName = kollektivaDetail.querySelector("[data-kollektiva-name]");
const kollektivaRole = kollektivaDetail.querySelector("[data-kollektiva-role]");
let kollektivaActive = 0;

function renderKollektiva(index) {
  kollektivaActive = (index + kollektivaSlides.length) % kollektivaSlides.length;
  const slide = (activeLanguage === "zh" ? kollektivaSlidesZh : kollektivaSlides)[kollektivaActive];
  kollektivaBackgrounds.forEach((background, backgroundIndex) => {
    background.classList.toggle("is-active", backgroundIndex === kollektivaActive);
  });
  kollektivaAvatars.forEach((avatar, avatarIndex) => {
    const active = avatarIndex === kollektivaActive;
    avatar.classList.toggle("is-active", active);
    avatar.setAttribute("aria-selected", String(active));
  });
  kollektivaDescription.textContent = slide.description;
  kollektivaName.textContent = slide.name;
  kollektivaRole.textContent = slide.role;
  [kollektivaDescription, kollektivaName].forEach((element) => {
    element.classList.remove("is-changing");
    void element.offsetWidth;
    element.classList.add("is-changing");
  });
}

kollektivaAvatars.forEach((avatar) => {
  avatar.addEventListener("click", () => renderKollektiva(Number(avatar.dataset.kollektivaAvatar)));
  avatar.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (kollektivaActive + direction + kollektivaSlides.length) % kollektivaSlides.length;
      renderKollektiva(nextIndex);
      kollektivaAvatars[nextIndex].focus();
    }
  });
});
renderKollektiva(0);

const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

const outcomeCurve = document.querySelector("[data-outcome-curve]");
if (outcomeCurve) {
  if (motionQuery.matches || !("IntersectionObserver" in window)) {
    outcomeCurve.classList.add("is-visible");
  } else {
    const outcomeObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        outcomeCurve.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.28 });
    outcomeObserver.observe(outcomeCurve);
  }
}

// A duplicated group makes the feedback strip loop without an end-to-start jump.
function initializeHairFeedbackLoop(gallery) {
  if (!gallery || gallery.querySelector(".hair-feedback-track")) return;
  const figures = [...gallery.children].filter((element) => element.tagName === "FIGURE");
  if (figures.length < 2) return;

  const track = document.createElement("div");
  track.className = "hair-feedback-track";
  const group = document.createElement("div");
  group.className = "hair-feedback-group";
  group.append(...figures);
  const copy = group.cloneNode(true);
  copy.setAttribute("aria-hidden", "true");
  copy.querySelectorAll("a").forEach((link) => { link.tabIndex = -1; });
  track.append(group, copy);
  gallery.append(track);
  gallery.querySelectorAll("img").forEach((image) => { image.loading = "eager"; });

  const updateDuration = () => {
    const width = group.getBoundingClientRect().width;
    if (width > 0) track.style.setProperty("--hair-feedback-duration", `${width / 32}s`);
  };
  if (typeof ResizeObserver !== "undefined") new ResizeObserver(updateDuration).observe(group);
  window.addEventListener("resize", updateDuration);
  updateDuration();
}

initializeHairFeedbackLoop(document.querySelector("[data-hair-feedback-loop]"));
initializeHairFeedbackLoop(document.querySelector("[data-yoga-scene-loop]"));
document.querySelectorAll("[data-case-scene-loop]").forEach(initializeHairFeedbackLoop);

// Apply the active language once after every inner-page module is initialized.
// This keeps hardcoded first-paint labels and dynamic detail content in sync.
setLanguage(activeLanguage);


// Service details read continuously; their selectors are in-page shortcuts.
function setupServiceSections(reel, prefix, panels, galleries, buttons) {
  reel.classList.add("service-continuous");
  const copy = reel.querySelector(`.${prefix}-reel-copy`);
  const visuals = reel.querySelector(`.${prefix}-reel-galleries`);
  const extras = [...visuals.children].filter((child) => !galleries.includes(child));
  const rows = panels.map((panel, index) => {
    const row = document.createElement("section");
    row.className = "service-reading-section";
    row.id = `${reel.closest(".service-detail").id}-section-${index + 1}`;
    const heading = panel.querySelector("h3");
    heading.id = `${row.id}-title`;
    row.setAttribute("aria-labelledby", heading.id);
    const rowCopy = document.createElement("div");
    rowCopy.className = `${prefix}-reel-copy`;
    const panelWrap = document.createElement("div");
    panelWrap.className = `${prefix}-reel-panels`;
    panel.hidden = false;
    panel.classList.add("is-active");
    panel.removeAttribute("role");
    const number = panel.querySelector(`.${prefix}-reel-number`);
    if (number) number.textContent = `${String(index + 1).padStart(2, "0")} / ${String(panels.length).padStart(2, "0")}`;
    panelWrap.append(panel);
    rowCopy.append(panelWrap);
    const rowVisuals = document.createElement("div");
    rowVisuals.className = `${prefix}-reel-galleries`;
    const gallery = galleries[index];
    if (gallery) {
      gallery.hidden = false;
      gallery.classList.add("is-active");
      rowVisuals.append(gallery);
    }
    if (index === 0) rowVisuals.append(...extras);
    if (gallery?.classList.contains("training-activities-album")) row.classList.add("service-reading-section--album");
    row.append(rowCopy, rowVisuals);
    reel.append(row);
    return row;
  });
  copy.remove();
  visuals.remove();
  const navigation = buttons[0]?.parentElement;
  navigation?.setAttribute("role", "navigation");
  buttons.forEach((button, index) => {
    button.removeAttribute("role");
    button.removeAttribute("aria-selected");
    button.setAttribute("aria-controls", rows[index].id);
  });
  function highlight(index) {
    buttons.forEach((button, buttonIndex) => {
      const active = index === buttonIndex;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "location");
      else button.removeAttribute("aria-current");
    });
  }
  const scroller = reel.closest(".service-detail-panel");
  let scheduled = false;
  scroller.addEventListener("scroll", () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      const readingLine = scroller.getBoundingClientRect().top + 140;
      let current = 0;
      rows.forEach((row, index) => { if (row.getBoundingClientRect().top <= readingLine) current = index; });
      highlight(current);
    });
  }, { passive: true });
  return (index, scroll = true) => {
    highlight(index);
    if (!scroll) return;
    scroller.scrollTo({
      top: scroller.scrollTop + rows[index].getBoundingClientRect().top - scroller.getBoundingClientRect().top - 28,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };
}

// The full-width step selector jumps to each copy panel and its gallery.
// Mixed portrait and landscape images retain their source ratio.
const operationsReel = document.querySelector("[data-operations-reel]");
if (operationsReel) {
  const panels = [...operationsReel.querySelectorAll("[data-reel-panel]")];
  const stepButtons = [...operationsReel.querySelectorAll("[data-reel-step-button]")];
  const galleries = [...operationsReel.querySelectorAll("[data-step-gallery]")];
  const launchRoute = operationsReel.querySelector('[data-reel-panel="0"] .operations-route');
  const launchNote = operationsReel.querySelector('[data-reel-panel="0"] .operations-section-note');
  const launchGallery = galleries[0];

  // Keep the complete launch path with its image gallery instead of squeezing it into the copy column.
  if (launchRoute && launchGallery) {
    launchGallery.insertAdjacentElement("afterend", launchRoute);
    launchRoute.dataset.routeGallery = "0";
    if (launchNote) {
      launchRoute.insertAdjacentElement("afterend", launchNote);
      launchNote.dataset.routeGallery = "0";
    }
  }

  const showOperationsStep = setupServiceSections(operationsReel, "operations", panels, galleries, stepButtons);

  stepButtons.forEach((button, index) => {
    button.addEventListener("click", () => showOperationsStep(index));
  });

  galleries.forEach((stage, groupIndex) => {
    const cards = [...stage.querySelectorAll("[data-group-card]")];
    const currentLabel = stage.querySelector("[data-group-current]");
    if (cards.length < 2) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let currentIndex = 0;
    let hovering = false;
    let dragging = false;
    let pointerY = 0;
    let dragDistance = 0;
    let moveTimer = 0;

    function renderGroupRing(animate = true) {
      if (animate) {
        stage.classList.add("is-moving");
        window.clearTimeout(moveTimer);
        moveTimer = window.setTimeout(() => stage.classList.remove("is-moving"), 720);
      }
      cards.forEach((card, index) => {
        const offset = index === currentIndex ? 0 : (index > currentIndex ? 1 : -1);
        card.style.setProperty("--group-y", `${offset * 155}px`);
        card.style.setProperty("--group-angle", `${offset * -11}deg`);
        card.style.setProperty("--group-scale", offset === 0 ? "1" : ".76");
        card.style.setProperty("--group-opacity", offset === 0 ? "1" : ".34");
        card.style.zIndex = offset === 0 ? "3" : "1";
        card.classList.toggle("is-active", offset === 0);
        card.tabIndex = offset === 0 ? 0 : -1;
        card.setAttribute("aria-hidden", String(offset !== 0));
      });
      if (currentLabel) currentLabel.textContent = String(currentIndex + 1).padStart(2, "0");
    }

    function showCard(index) {
      currentIndex = (index % cards.length + cards.length) % cards.length;
      renderGroupRing();
    }

    cards.forEach((card, index) => card.addEventListener("click", () => showCard(index)));
    stage.addEventListener("mouseenter", () => { hovering = true; });
    stage.addEventListener("mouseleave", () => { hovering = false; });
    stage.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragging = true;
      pointerY = event.clientY;
      dragDistance = 0;
      stage.classList.add("is-dragging");
      stage.setPointerCapture(event.pointerId);
    });
    stage.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const delta = event.clientY - pointerY;
      dragDistance += delta;
      pointerY = event.clientY;
      if (Math.abs(dragDistance) < 48) return;
      showCard(currentIndex + (dragDistance < 0 ? 1 : -1));
      dragDistance = 0;
    });
    function releaseGroupRing(event) {
      if (!dragging) return;
      dragging = false;
      stage.classList.remove("is-dragging");
      if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    }
    stage.addEventListener("pointerup", releaseGroupRing);
    stage.addEventListener("pointercancel", releaseGroupRing);
    stage.addEventListener("keydown", (event) => {
      if (["ArrowDown", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
        showCard(currentIndex + 1);
      } else if (["ArrowUp", "ArrowLeft"].includes(event.key)) {
        event.preventDefault();
        showCard(currentIndex - 1);
      }
    });

    window.setInterval(() => {
      if (!stage.hidden && !reducedMotion.matches && !hovering && !dragging && !document.hidden) showCard(currentIndex + 1);
    }, 3500 + groupIndex * 350);

    renderGroupRing(false);
  });

  showOperationsStep(0, false);
}

const contentReel = document.querySelector("[data-content-reel]");
if (contentReel) {
  const panels = [...contentReel.querySelectorAll("[data-content-panel]")];
  const stepButtons = [...contentReel.querySelectorAll("[data-content-step-button]")];
  const galleries = [...contentReel.querySelectorAll("[data-content-gallery]")];
  const strategyGallery = contentReel.querySelector('[data-content-gallery="0"]');
  const productionGallery = contentReel.querySelector('[data-content-gallery="2"]');
  const productionProcess = contentReel.querySelector('[data-content-panel="2"] .content-process');
  const productionCards = [...contentReel.querySelectorAll("[data-content-card]")];
  const caption = contentReel.querySelector("[data-content-caption]");
  const currentLabel = contentReel.querySelector("[data-content-current]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let currentIndex = 0;
  let hovering = false;
  let dragging = false;
  let pointerY = 0;
  let dragDistance = 0;
  let moveTimer = 0;

  if (strategyGallery && productionProcess) {
    strategyGallery.insertAdjacentElement("afterend", productionProcess);
    productionProcess.dataset.processGallery = "0";
  }

  const showContentStep = setupServiceSections(contentReel, "content", panels, galleries, stepButtons);

  function contentOffset(index) {
    let offset = index - currentIndex;
    if (offset > productionCards.length / 2) offset -= productionCards.length;
    if (offset < -productionCards.length / 2) offset += productionCards.length;
    return offset;
  }

  function renderContentGallery(animate = true) {
    if (!productionGallery || !productionCards.length) return;
    if (animate) {
      productionGallery.classList.add("is-moving");
      window.clearTimeout(moveTimer);
      moveTimer = window.setTimeout(() => productionGallery.classList.remove("is-moving"), 720);
    }
    productionCards.forEach((card, index) => {
      const offset = contentOffset(index);
      const distance = Math.abs(offset);
      card.style.setProperty("--content-y", `${offset * 126}px`);
      card.style.setProperty("--content-angle", `${offset * -8}deg`);
      card.style.setProperty("--content-scale", String(Math.max(.68, 1 - distance * .14)));
      card.style.setProperty("--content-opacity", String(distance === 0 ? 1 : distance === 1 ? .2 : .06));
      card.style.setProperty("--content-brightness", String(Math.max(.62, 1 - distance * .16)));
      card.style.setProperty("--content-blur", `${Math.min(distance * 2.5, 5)}px`);
      card.style.zIndex = String(20 - distance);
      card.style.pointerEvents = distance > 2 ? "none" : "auto";
      card.classList.toggle("is-active", index === currentIndex);
      card.tabIndex = index === currentIndex ? 0 : -1;
      card.setAttribute("aria-hidden", String(index !== currentIndex));
    });
    const activeCard = productionCards[currentIndex];
    if (caption) caption.textContent = activeCard.dataset.caption;
    if (currentLabel) currentLabel.textContent = String(currentIndex + 1).padStart(2, "0");
  }

  function showContentCard(index) {
    currentIndex = (index % productionCards.length + productionCards.length) % productionCards.length;
    renderContentGallery();
  }

  stepButtons.forEach((button, index) => button.addEventListener("click", () => showContentStep(index)));
  productionCards.forEach((card, index) => card.addEventListener("click", () => showContentCard(index)));

  if (productionGallery) {
    productionGallery.addEventListener("mouseenter", () => { hovering = true; });
    productionGallery.addEventListener("mouseleave", () => { hovering = false; });
    productionGallery.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragging = true;
      pointerY = event.clientY;
      dragDistance = 0;
      productionGallery.classList.add("is-dragging");
      productionGallery.setPointerCapture(event.pointerId);
    });
    productionGallery.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const delta = event.clientY - pointerY;
      dragDistance += delta;
      pointerY = event.clientY;
      if (Math.abs(dragDistance) < 46) return;
      showContentCard(currentIndex + (dragDistance < 0 ? 1 : -1));
      dragDistance = 0;
    });
    function releaseContentGallery(event) {
      if (!dragging) return;
      dragging = false;
      productionGallery.classList.remove("is-dragging");
      if (productionGallery.hasPointerCapture(event.pointerId)) productionGallery.releasePointerCapture(event.pointerId);
    }
    productionGallery.addEventListener("pointerup", releaseContentGallery);
    productionGallery.addEventListener("pointercancel", releaseContentGallery);
    productionGallery.addEventListener("keydown", (event) => {
      if (["ArrowDown", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
        showContentCard(currentIndex + 1);
      } else if (["ArrowUp", "ArrowLeft"].includes(event.key)) {
        event.preventDefault();
        showContentCard(currentIndex - 1);
      }
    });
  }

  window.setInterval(() => {
    if (productionGallery && !productionGallery.hidden && !reducedMotion.matches && !hovering && !dragging && !document.hidden) {
      showContentCard(currentIndex + 1);
    }
  }, 3500);

  renderContentGallery(false);
  showContentStep(0, false);
}

const livestreamReel = document.querySelector("[data-livestream-reel]");
if (livestreamReel) {
  const panels = [...livestreamReel.querySelectorAll("[data-livestream-panel]")];
  const stepButtons = [...livestreamReel.querySelectorAll("[data-livestream-step-button]")];
  const galleries = [...livestreamReel.querySelectorAll("[data-livestream-gallery]")];
  const peopleGallery = livestreamReel.querySelector('[data-livestream-gallery="0"]');
  const peopleCards = [...livestreamReel.querySelectorAll("[data-livestream-card]")];
  const caption = livestreamReel.querySelector("[data-livestream-caption]");
  const currentLabel = livestreamReel.querySelector("[data-livestream-current]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let currentIndex = 0;
  let hovering = false;
  let dragging = false;
  let pointerY = 0;
  let dragDistance = 0;
  let moveTimer = 0;

  const showLivestreamStep = setupServiceSections(livestreamReel, "livestream", panels, galleries, stepButtons);

  function livestreamOffset(index) {
    let offset = index - currentIndex;
    if (offset > peopleCards.length / 2) offset -= peopleCards.length;
    if (offset < -peopleCards.length / 2) offset += peopleCards.length;
    return offset;
  }

  function renderLivestreamGallery(animate = true) {
    if (!peopleGallery || !peopleCards.length) return;
    if (animate) {
      peopleGallery.classList.add("is-moving");
      window.clearTimeout(moveTimer);
      moveTimer = window.setTimeout(() => peopleGallery.classList.remove("is-moving"), 720);
    }
    peopleCards.forEach((card, index) => {
      const offset = livestreamOffset(index);
      const distance = Math.abs(offset);
      card.style.setProperty("--live-y", `${offset * 126}px`);
      card.style.setProperty("--live-angle", `${offset * -8}deg`);
      card.style.setProperty("--live-scale", String(Math.max(.68, 1 - distance * .14)));
      card.style.setProperty("--live-opacity", String(distance > 2 ? 0 : 1 - distance * .3));
      card.style.setProperty("--live-brightness", String(Math.max(.62, 1 - distance * .16)));
      card.style.zIndex = String(20 - distance);
      card.style.pointerEvents = distance > 2 ? "none" : "auto";
      card.classList.toggle("is-active", index === currentIndex);
      card.tabIndex = index === currentIndex ? 0 : -1;
      card.setAttribute("aria-hidden", String(index !== currentIndex));
    });
    const activeCard = peopleCards[currentIndex];
    if (caption) caption.textContent = activeCard.dataset.caption;
    if (currentLabel) currentLabel.textContent = String(currentIndex + 1).padStart(2, "0");
  }

  function showLivestreamCard(index) {
    currentIndex = (index % peopleCards.length + peopleCards.length) % peopleCards.length;
    renderLivestreamGallery();
  }

  stepButtons.forEach((button, index) => button.addEventListener("click", () => showLivestreamStep(index)));
  peopleCards.forEach((card, index) => card.addEventListener("click", () => showLivestreamCard(index)));

  if (peopleGallery && peopleCards.length > 1) {
    peopleGallery.addEventListener("mouseenter", () => { hovering = true; });
    peopleGallery.addEventListener("mouseleave", () => { hovering = false; });
    peopleGallery.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragging = true;
      pointerY = event.clientY;
      dragDistance = 0;
      peopleGallery.classList.add("is-dragging");
      peopleGallery.setPointerCapture(event.pointerId);
    });
    peopleGallery.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const delta = event.clientY - pointerY;
      dragDistance += delta;
      pointerY = event.clientY;
      if (Math.abs(dragDistance) < 46) return;
      showLivestreamCard(currentIndex + (dragDistance < 0 ? 1 : -1));
      dragDistance = 0;
    });
    function releaseLivestreamGallery(event) {
      if (!dragging) return;
      dragging = false;
      peopleGallery.classList.remove("is-dragging");
      if (peopleGallery.hasPointerCapture(event.pointerId)) peopleGallery.releasePointerCapture(event.pointerId);
    }
    peopleGallery.addEventListener("pointerup", releaseLivestreamGallery);
    peopleGallery.addEventListener("pointercancel", releaseLivestreamGallery);
    peopleGallery.addEventListener("keydown", (event) => {
      if (["ArrowDown", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
        showLivestreamCard(currentIndex + 1);
      } else if (["ArrowUp", "ArrowLeft"].includes(event.key)) {
        event.preventDefault();
        showLivestreamCard(currentIndex - 1);
      }
    });
  }

  window.setInterval(() => {
    if (peopleCards.length > 1 && peopleGallery && !peopleGallery.hidden && !reducedMotion.matches && !hovering && !dragging && !document.hidden) {
      showLivestreamCard(currentIndex + 1);
    }
  }, 3500);

  renderLivestreamGallery(false);
  showLivestreamStep(0, false);
}

const trainingReel = document.querySelector("[data-training-reel]");
if (trainingReel) {
  const panels = [...trainingReel.querySelectorAll("[data-training-panel]")];
  const stepButtons = [...trainingReel.querySelectorAll("[data-training-step-button]")];
  const galleries = [...trainingReel.querySelectorAll("[data-training-gallery]")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const showTrainingStep = setupServiceSections(trainingReel, "training", panels, galleries, stepButtons);

  stepButtons.forEach((button, index) => button.addEventListener("click", () => showTrainingStep(index)));

  galleries.forEach((stage, galleryIndex) => {
    if (stage.classList.contains("training-activities-album")) {
      const strip = stage.querySelector(".training-activities-strip");
      const track = document.createElement("div");
      track.className = "training-activities-track";
      const group = document.createElement("div");
      group.className = "training-activities-group";
      group.append(...strip.children);
      const copy = group.cloneNode(true);
      copy.setAttribute("aria-hidden", "true");
      copy.inert = true;
      copy.querySelectorAll("img").forEach((image) => { image.loading = "eager"; });
      track.append(group, copy);
      strip.append(track);
      const updateSpeed = () => {
        track.style.setProperty("--activities-duration", `${Math.max(1, group.getBoundingClientRect().width / 32)}s`);
      };
      new ResizeObserver(updateSpeed).observe(group);
      updateSpeed();
      return;
    }
    const cards = [...stage.querySelectorAll("[data-training-card]")];
    const caption = stage.querySelector("[data-training-caption]");
    const currentLabel = stage.querySelector("[data-training-current]");
    let currentIndex = 0;
    let hovering = false;
    let dragging = false;
    let pointerY = 0;
    let dragDistance = 0;
    let moveTimer = 0;

    function cardOffset(index) {
      let offset = index - currentIndex;
      if (offset > cards.length / 2) offset -= cards.length;
      if (offset < -cards.length / 2) offset += cards.length;
      return offset;
    }

    function renderTrainingGallery(animate = true) {
      if (!cards.length) return;
      if (animate) {
        stage.classList.add("is-moving");
        window.clearTimeout(moveTimer);
        moveTimer = window.setTimeout(() => stage.classList.remove("is-moving"), 720);
      }
      cards.forEach((card, index) => {
        const offset = cardOffset(index);
        const distance = Math.abs(offset);
        card.style.setProperty("--training-y", `${offset * 126}px`);
        card.style.setProperty("--training-angle", `${offset * -8}deg`);
        card.style.setProperty("--training-scale", String(Math.max(.68, 1 - distance * .14)));
        card.style.setProperty("--training-opacity", String(distance > 2 ? 0 : 1 - distance * .3));
        card.style.setProperty("--training-brightness", String(Math.max(.62, 1 - distance * .16)));
        card.style.zIndex = String(20 - distance);
        card.style.pointerEvents = distance > 2 ? "none" : "auto";
        card.classList.toggle("is-active", index === currentIndex);
        card.tabIndex = index === currentIndex ? 0 : -1;
        card.setAttribute("aria-hidden", String(index !== currentIndex));
      });
      const activeCard = cards[currentIndex];
      if (caption) caption.textContent = activeCard.dataset.caption;
      if (currentLabel) currentLabel.textContent = String(currentIndex + 1).padStart(2, "0");
    }

    function showTrainingCard(index) {
      currentIndex = (index % cards.length + cards.length) % cards.length;
      renderTrainingGallery();
    }

    cards.forEach((card, index) => card.addEventListener("click", () => showTrainingCard(index)));
    stage.addEventListener("mouseenter", () => { hovering = true; });
    stage.addEventListener("mouseleave", () => { hovering = false; });
    stage.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragging = true;
      pointerY = event.clientY;
      dragDistance = 0;
      stage.classList.add("is-dragging");
      stage.setPointerCapture(event.pointerId);
    });
    stage.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const delta = event.clientY - pointerY;
      dragDistance += delta;
      pointerY = event.clientY;
      if (Math.abs(dragDistance) < 46) return;
      showTrainingCard(currentIndex + (dragDistance < 0 ? 1 : -1));
      dragDistance = 0;
    });
    function releaseTrainingGallery(event) {
      if (!dragging) return;
      dragging = false;
      stage.classList.remove("is-dragging");
      if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    }
    stage.addEventListener("pointerup", releaseTrainingGallery);
    stage.addEventListener("pointercancel", releaseTrainingGallery);
    stage.addEventListener("keydown", (event) => {
      if (["ArrowDown", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
        showTrainingCard(currentIndex + 1);
      } else if (["ArrowUp", "ArrowLeft"].includes(event.key)) {
        event.preventDefault();
        showTrainingCard(currentIndex - 1);
      }
    });

    window.setInterval(() => {
      if (!stage.hidden && !reducedMotion.matches && !hovering && !dragging && !document.hidden) {
        showTrainingCard(currentIndex + 1);
      }
    }, 3500 + galleryIndex * 300);

    renderTrainingGallery(false);
  });

  showTrainingStep(0, false);
}
