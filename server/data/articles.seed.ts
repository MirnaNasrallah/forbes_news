import type { Article } from '#types/article'
import { getCategoryThumbnailByIndex, HERO_LIVE_IMAGE } from '#utils/thumbnail'

const CULTURE_BODY = `
<p>Culture is not static; it is a living, breathing force that shapes and is shaped by the society in which it exists. Throughout history, cultural movements have emerged as powerful catalysts for change, challenging prevailing norms, reimagining artistic expression, and fundamentally altering how we understand ourselves and others.</p>

<p>In examining the influence of cultural movements on contemporary society, we must first acknowledge the breadth of what constitutes culture itself. From the visual arts and cinema to music, literature, fashion, and digital media, culture permeates every aspect of human experience. When these spheres align around shared values or grievances, cultural movements are born—and their impact can be profound.</p>

<p>The 21st century has witnessed an acceleration of cultural movements, driven in large part by the democratizing effect of social media and digital communication. Movements that once required years of grassroots organizing can now achieve global visibility within days. The #MeToo movement, which began as a social media hashtag in 2017, rapidly transformed into a global reckoning with gender dynamics in workplaces and cultural institutions. Similarly, the resurgence of Black Lives Matter brought systemic inequalities to the forefront of global discourse, prompting institutions from museums to film studios to reassess their historical relationships with representation and power.</p>

<p>These movements have not merely shifted conversations—they have fundamentally altered cultural production. The entertainment industry, long criticized for its narrow representation of human experience, has undergone significant transformation. Diverse storytelling, once confined to the margins, has moved toward the mainstream, with films, television series, and literary works centering perspectives that were previously invisible or caricatured. This shift reflects not only commercial recognition of diverse audiences but also a moral reckoning with the responsibilities of cultural institutions.</p>

<p>Architecture and urban planning, often overlooked in discussions of cultural movements, offer another lens through which to understand this transformation. The movement to recognize and preserve cultural heritage, particularly in post-colonial contexts, has led to new conversations about whose history is memorialized in public spaces. Across the Middle East, this has manifested in efforts to protect ancient sites while simultaneously creating contemporary cultural spaces that reflect regional identity without defaulting to either uncritical traditionalism or wholesale Western aesthetic imports.</p>

<p>The digital revolution has introduced entirely new cultural formations. Meme culture, online communities, and the creator economy have produced cultural movements that exist primarily in virtual space yet carry real-world consequences. The rise of K-pop as a global phenomenon, for instance, represents not merely a musical genre but an entire cultural ecosystem with its own aesthetic norms, community rituals, and economic dimensions. Its influence has prompted serious academic inquiry into how digital distribution has changed the global geography of cultural power.</p>

<p>Yet cultural movements are rarely without tension or contradiction. The commodification of protest aesthetics—whereby revolutionary imagery is absorbed into commercial branding—represents a persistent challenge. The line between genuine cultural transformation and shallow performativity is often blurred, and critics rightly ask whether institutional adoption of movement language represents substantive change or strategic co-optation.</p>

<p>In the Middle East specifically, cultural movements navigate particularly complex terrain. The tension between cultural preservation and modernization, between regional identity and global integration, plays out daily in the arts, architecture, fashion, and media. Emerging artists and cultural practitioners in cities like Dubai, Beirut, and Riyadh are producing work that refuses easy categorization, drawing on deep cultural heritage while engaging fully with global contemporary art discourse.</p>

<p>As we look ahead, the relationship between cultural movements and technology will continue to evolve. Artificial intelligence is already generating questions about authorship, creativity, and cultural value that will require sustained collective engagement. Understanding these dynamics is essential not only for cultural practitioners and scholars but for anyone seeking to comprehend the forces shaping our world. Culture is not ornamental to society—it is foundational.</p>
`.trim()

const WORLD_NEWS_BODY = `
<p>Social movements have always been engines of historical change, but the 21st century has dramatically altered both the speed and scale at which they operate. From the Arab Spring to climate activism and beyond, grassroots campaigns are reshaping political landscapes in ways that traditional institutions are struggling to comprehend, let alone manage.</p>

<p>The digital infrastructure underlying contemporary movements represents a fundamental shift in organizing capacity. Platforms that connect billions of people have reduced the coordination costs that once limited mass mobilization to well-resourced organizations. A single viral moment can catalyze action across dozens of countries within hours, as demonstrated by the rapid international spread of climate strikes following Greta Thunberg's initial protest in Stockholm.</p>

<p>Yet the same digital tools that empower movements also expose their vulnerabilities. Platform algorithms that amplify outrage can fragment coalitions, and state actors have become increasingly sophisticated at deploying counter-information campaigns to undermine protest movements before they reach critical mass. The result is a complex strategic environment in which movements must simultaneously manage external opposition and internal cohesion.</p>

<p>Governments worldwide are responding with a mix of accommodation and suppression. In some democracies, sustained pressure from social movements has produced meaningful legislative change on issues ranging from police accountability to environmental regulation. In more authoritarian contexts, digital surveillance has given states unprecedented capacity to monitor and pre-empt organized dissent. The interplay between movements and institutions will define much of the political story of the coming decade.</p>
`.trim()

const TECHNOLOGY_BODY = `
<p>Artificial intelligence has moved from a speculative technology to a transformative infrastructure layer reshaping every sector of the global economy. What was once the domain of specialized research labs is now embedded in products used by billions—and the implications of this shift are only beginning to be understood.</p>

<p>The current wave of generative AI, led by large language models capable of producing coherent text, images, and code, has introduced capabilities that blur long-established distinctions between human and machine cognition. This has triggered both excitement about productivity gains and genuine concern about displacement of knowledge workers who previously occupied roles thought immune to automation.</p>

<p>In the Middle East, AI adoption has been particularly aggressive, driven by national strategies in the UAE, Saudi Arabia, and Qatar that have positioned the region as a global hub for AI investment and research. The NEOM megaproject in Saudi Arabia, for instance, is designed from the ground up around autonomous systems, smart infrastructure, and AI-driven urban management. These efforts represent some of the largest coordinated AI deployments attempted anywhere in the world.</p>

<p>Alongside opportunity, the AI revolution poses serious ethical and regulatory challenges. Questions of algorithmic bias, data privacy, and the concentration of AI capabilities in the hands of a small number of corporations require urgent policy responses. International consensus on governance frameworks remains elusive, leaving a patchwork of national regulations that companies navigate—or exploit—depending on jurisdiction.</p>
`.trim()

const BUSINESS_BODY = `
<p>The global business landscape has rarely been more demanding. A confluence of macroeconomic headwinds—persistent inflation, elevated interest rates, geopolitical fragmentation, and accelerating technological disruption—is testing the strategic resilience of organizations across every sector. Companies that thrived in the low-rate, globalization-friendly environment of the previous decade are being forced to fundamentally rethink their operating models.</p>

<p>Supply chain reconfiguration has become one of the defining strategic imperatives of the era. The COVID-19 pandemic exposed the fragility of hyper-optimized, just-in-time global supply chains, and geopolitical tensions have amplified the pressure to diversify and regionalize sourcing. The concept of "friend-shoring"—concentrating supply chains within geopolitically aligned economies—has moved from policy rhetoric to operational reality for many multinationals.</p>

<p>The Middle East continues to attract significant corporate investment, with the UAE and Saudi Arabia in particular positioning themselves as alternative hubs for companies seeking to diversify away from traditional Western or East Asian operational centers. Low corporate tax rates, strategic geographic positioning, and ambitious economic diversification programs have made the region increasingly attractive to financial services, technology, and logistics firms.</p>

<p>Leadership quality has emerged as perhaps the most significant differentiator between organizations that navigate disruption successfully and those that falter. The capacity to make decisive strategic choices under uncertainty, build adaptive organizational cultures, and maintain stakeholder trust through volatility are competencies that cannot be outsourced or automated—and they command a premium in the current environment.</p>
`.trim()

const HEALTH_BODY = `
<p>Precision medicine—the practice of tailoring medical treatment to the individual characteristics of each patient—is transitioning from experimental promise to clinical reality. Advances in genomic sequencing, proteomics, and machine learning are enabling physicians to design treatment protocols based on a patient's unique biological profile rather than statistical averages derived from population studies.</p>

<p>The implications are most immediately visible in oncology, where genomic profiling of tumors has already transformed treatment decisions for many cancers. Rather than applying the same chemotherapy regimen to all patients with a given cancer type, oncologists can now identify the specific genetic mutations driving a patient's tumor and select targeted therapies with dramatically improved efficacy and reduced side effects. This approach has produced remarkable outcomes in cancers that were previously considered largely untreatable.</p>

<p>The economic dimensions of precision medicine present both promise and challenge. Targeted therapies often carry substantial price tags, raising critical questions about access and equity. The datasets required to train the AI models underlying precision medicine applications raise their own concerns about privacy and the commercial exploitation of sensitive health information.</p>

<p>Regulatory frameworks are evolving to keep pace with the technology, though the pace of adaptation varies significantly across jurisdictions. Healthcare systems that invest now in the genomic infrastructure, clinical bioinformatics capacity, and payment model reform required to support precision medicine will be positioned to deliver substantially better patient outcomes over the next decade.</p>
`.trim()

const POLITICS_BODY = `
<p>The global political order is experiencing one of its most turbulent periods since the end of the Cold War. The simultaneous rise of populist movements across multiple continents, the erosion of established democratic norms in several long-stable republics, and the increasingly assertive postures of revisionist powers have combined to create a period of genuine systemic uncertainty.</p>

<p>Electoral institutions are under particular stress. Questions about the integrity of democratic processes—amplified by the spread of disinformation and the deliberate exploitation of social divisions—have eroded public confidence in governments across the political spectrum. The challenge is not merely technical but deeply cultural: restoring trust in institutions requires not just improved processes but a renewed commitment to the norms that make those processes legitimate.</p>

<p>International relations are being reconfigured around new axes of competition and cooperation. The US-China rivalry is reshaping alliance structures, trade patterns, and technology ecosystems in ways that will define the geopolitical landscape for a generation. Meanwhile, middle powers in the Middle East, South Asia, and Southeast Asia are navigating this bipolar tension with increasing strategic sophistication, refusing simple alignment while extracting maximum benefit from competing great-power bids for influence.</p>
`.trim()

const SPORTS_BODY = `
<p>Sport has always been more than competition. At its best, it functions as a unique arena in which societies work out questions about identity, fairness, excellence, and belonging in ways that other institutions cannot replicate. The contemporary sports landscape—shaped by globalization, digital media, and unprecedented commercial scale—reflects and magnifies many of the central tensions of our moment.</p>

<p>The economics of elite sport have been transformed by streaming rights, social media, and the global expansion of fan bases. Leagues and federations that were once primarily national institutions now operate as global entertainment franchises. This commercial evolution has brought extraordinary resources to elite athletics while also intensifying the pressures placed on athletes who must navigate the demands of performance, celebrity, and commercial representation simultaneously.</p>

<p>The diversity and inclusion conversation has been particularly prominent in sports in recent years. From debates about transgender athletes to the long-overdue recognition of systemic barriers faced by athletes from underrepresented communities, sport is grappling with questions about what fairness means in contexts shaped by both biology and history. These conversations are uncomfortable but necessary, and their resolution will shape the character of competitive sport for decades to come.</p>
`.trim()

const PODCAST_BODY = `
<p>The podcasting medium has undergone a remarkable maturation over the past decade, evolving from a hobbyist curiosity into a sophisticated media ecosystem that attracts hundreds of millions of listeners and commands billions in advertising investment. What began as an accessible alternative to broadcast radio has become a dominant format for long-form journalism, storytelling, educational content, and expert conversation.</p>

<p>The economics of podcasting have consolidated significantly. While the technical barriers to entry remain low—anyone with a microphone and an internet connection can publish—the commercial landscape has stratified sharply. A small number of high-production shows attract the majority of advertising revenue and listener attention, while the vast majority of independent podcasts operate on minimal budgets with limited reach. Platform deals, exclusive content arrangements, and subscription models are reshaping the incentive structures that determine what gets made and who gets to hear it.</p>

<p>The medium's particular strength lies in its intimacy. The experience of listening to a trusted voice through headphones creates a parasocial connection that other media formats struggle to replicate. This intimacy makes podcasting a uniquely powerful vehicle for nuanced, extended exploration of complex topics—precisely the kind of content that the attention economics of social media systematically suppress.</p>
`.trim()

export const seedArticles: Article[] = [
  {
    id: 'egypt-wins-first-match-in-world-cup',
    slug: 'egypt-wins-first-match-in-world-cup',
    title: 'Egypt wins their first match in a world cup and leads group G with 4 points',
    excerpt:
      'Egypt wins their first match in a world cup and leads group G with 4 points.',
    body: SPORTS_BODY,
    category: 'sports',
    tags: ['sports', 'world-cup', 'egypt', 'group-g'],
    author: { name: 'Nina Volkov', slug: 'nina-volkov', title: 'Sports Reporter' },
    publishedAt: '2024-09-09T08:00:00Z',
    thumbnail: getCategoryThumbnailByIndex('sports', 0),
    readingTime: 5,
  },
  {
    id: 'social-movements-reshaping-world',
    slug: 'social-movements-reshaping-world',
    title: 'Economic policies are shaping international markets',
    excerpt:
      'A comprehensive examination of the grassroots campaigns driving global change—from climate activism to civil rights—and their growing influence on governments, institutions, and public life.',
    body: WORLD_NEWS_BODY,
    category: 'world-news',
    tags: ['social movements', 'activism', 'global affairs'],
    author: { name: 'Sarah Mitchell', slug: 'sarah-mitchell', title: 'Senior Correspondent' },
    publishedAt: '2024-09-08T09:00:00Z',
    thumbnail: getCategoryThumbnailByIndex('world-news', 0),
    readingTime: 4,
    featured: true,
  },
  {
    id: 'ai-robotics-latest-developments',
    slug: 'ai-robotics-latest-developments',
    title: 'The latest trends in AI and innovation',
    excerpt:
      'Artificial intelligence has moved from research lab to global infrastructure. We examine the breakthroughs, the risks, and the regional strategies shaping the AI revolution.',
    body: TECHNOLOGY_BODY,
    category: 'technology',
    tags: ['AI', 'robotics', 'innovation', 'technology'],
    author: { name: 'Marcus Thompson', slug: 'marcus-thompson', title: 'Technology Editor' },
    publishedAt: '2024-09-10T07:30:00Z',
    thumbnail: getCategoryThumbnailByIndex('technology', 0),
    readingTime: 5,
    featured: true,
  },
  {
    id: 'global-financial-landscape',
    slug: 'global-financial-landscape',
    title: 'Riding the tide of innovation and inspiration',
    excerpt:
      'Supply chain reconfiguration, geopolitical fragmentation, and shifting corporate strategies are defining the new rules of international business. We examine what resilience looks like in an era of sustained disruption.',
    body: BUSINESS_BODY,
    category: 'business',
    tags: ['finance', 'global economy', 'business strategy'],
    author: { name: 'David Chen', slug: 'david-chen', title: 'Economics Editor' },
    publishedAt: '2024-09-12T10:00:00Z',
    thumbnail: getCategoryThumbnailByIndex('business', 0),
    readingTime: 5,
  },
  {
    id: 'tailoring-treatments-genetic-profiles',
    slug: 'tailoring-treatments-genetic-profiles',
    title: 'Tailoring treatments to individual genetic profiles',
    excerpt:
      "Precision medicine is reshaping oncology and beyond, replacing statistical treatment averages with therapies calibrated to each patient's unique biology. What this means for healthcare access, equity, and the future of medicine.",
    body: HEALTH_BODY,
    category: 'health',
    tags: ['precision medicine', 'genomics', 'healthcare', 'innovation'],
    author: { name: 'Priya Nair', slug: 'priya-nair', title: 'Health Correspondent' },
    publishedAt: '2024-09-14T08:00:00Z',
    thumbnail: getCategoryThumbnailByIndex('health', 0),
    readingTime: 5,
  },
  {
    id: 'state-of-global-affairs',
    slug: 'state-of-global-affairs',
    title: 'A Comprehensive Analysis of the State of Global Affairs',
    excerpt:
      'From democratic backsliding to the US-China rivalry, the international order is under unprecedented stress. We map the fault lines and examine what the current moment means for stability.',
    body: POLITICS_BODY,
    category: 'politics',
    tags: ['geopolitics', 'democracy', 'international relations'],
    author: { name: 'James Hartley', slug: 'james-hartley', title: 'Political Editor' },
    publishedAt: '2024-09-16T09:00:00Z',
    thumbnail: getCategoryThumbnailByIndex('politics', 0),
    readingTime: 4,
  },
  {
    id: 'celebrating-diversity-sports',
    slug: 'celebrating-diversity-sports',
    title: 'Affect the integrity and future of professional sports',
    excerpt:
      "Sport has always been a mirror of society—and today's athletic landscape reflects both remarkable progress and unresolved tensions around inclusion, identity, and what it means to compete fairly.",
    body: SPORTS_BODY,
    category: 'sports',
    tags: ['diversity', 'inclusion', 'sports culture'],
    author: { name: 'Nina Volkov', slug: 'nina-volkov', title: 'Sports Reporter' },
    publishedAt: '2024-09-18T08:00:00Z',
    thumbnail: getCategoryThumbnailByIndex('sports', 4),
    readingTime: 4,
  },
  {
    id: 'power-of-the-podcast',
    slug: 'power-of-the-podcast',
    title: 'The Power of the Podcast: How Audio Is Reshaping Media',
    excerpt:
      'Podcasting has matured from hobbyist format to dominant media ecosystem. We examine the economics, the intimacy, and the editorial questions defining the next chapter of audio storytelling.',
    body: PODCAST_BODY,
    category: 'podcast',
    tags: ['podcasts', 'media', 'audio', 'storytelling'],
    author: { name: 'Leila Ahmadi', slug: 'leila-ahmadi', title: 'Business Reporter' },
    publishedAt: '2024-09-20T07:00:00Z',
    thumbnail: getCategoryThumbnailByIndex('podcast', 0),
    readingTime: 4,
  },
]
