import type { Article, Author, Category } from '#types/article'
import { CATEGORIES } from '#types/article'
import { CATEGORY_IMAGE_COUNTS, CATEGORY_THUMBNAILS, getCategoryThumbnailByIndex } from '#utils/thumbnail'

// ─── Author pool ────────────────────────────────────────────────────────────

const AUTHORS: Author[] = [
  { name: 'Sarah Mitchell', slug: 'sarah-mitchell', title: 'Senior Correspondent' },
  { name: 'James Hartley', slug: 'james-hartley', title: 'Political Editor' },
  { name: 'Leila Ahmadi', slug: 'leila-ahmadi', title: 'Business Reporter' },
  { name: 'Marcus Thompson', slug: 'marcus-thompson', title: 'Technology Editor' },
  { name: 'Priya Nair', slug: 'priya-nair', title: 'Health Correspondent' },
  { name: 'Guy Hawkins', slug: 'guy-hawkins', title: 'Culture Editor' },
  { name: 'Nina Volkov', slug: 'nina-volkov', title: 'Sports Reporter' },
  { name: 'David Chen', slug: 'david-chen', title: 'Economics Editor' },
]

// ─── Generic filler paragraphs used to build generated article bodies ────────

const GENERIC_PARAGRAPHS = [
  `<p>The implications of these developments extend well beyond the immediate context, touching fundamental questions about governance, identity, and the distribution of opportunity in an increasingly interconnected world. Analysts across disciplines are working to understand the second- and third-order effects that will shape policy responses for years to come.</p>`,
  `<p>Regional dynamics add further complexity to an already intricate picture. Local actors—governments, civil society organizations, and private sector players—are navigating global pressures while managing distinctly local constraints. The solutions that emerge from this tension will not always be legible through frameworks developed in other contexts.</p>`,
  `<p>Data from the past several years paints a nuanced picture: progress in some dimensions, stagnation or reversal in others. Disaggregating these trends reveals significant variation across geographies and demographic groups, suggesting that aggregate narratives obscure as much as they illuminate about what is actually changing on the ground.</p>`,
  `<p>The voices of practitioners—those working directly in affected communities and institutions—offer perspectives that complement and sometimes challenge expert analysis. Their accounts of what works, what fails, and why point toward a more grounded understanding of the mechanisms through which change happens or stalls.</p>`,
  `<p>Looking ahead, the next five years are likely to be decisive. Structural forces already in motion will produce significant change regardless of policy choices; what remains open is whether those changes will be navigated well or poorly, and who will bear the costs and reap the benefits of the transition.</p>`,
]

// ─── Category-specific content banks ─────────────────────────────────────────

type CategoryBank = {
  titles: string[]
  excerpts: string[]
  tags: string[][]
  bodyOpeners: string[]
}

const WORD_BANKS: Record<Category, CategoryBank> = {
  'world-news': {
    titles: [
      'The effects of geopolitical shifts on global security',
      'How Global Refugee Crises Are Reshaping National Policy',
      'The UN Security Council and the Limits of Global Governance',
      'Economic Sanctions: Tools of Statecraft or Humanitarian Burden?',
      'New Alliances Emerging as Old World Orders Fracture',
      'The Hidden Costs of Protracted Regional Conflicts',
      'Examining the Challenges and Responsibilities of Nations',
      'Humanitarian Aid in the Age of Geopolitical Competition',
    ],
    excerpts: [
      'Diplomatic relations are being tested like never before as competing interests collide across the globe.',
      'As displacement reaches historic levels, governments worldwide are rethinking their approaches to migration and humanitarian responsibility.',
      'The effectiveness of multilateral institutions is being questioned as complex crises expose their structural limitations.',
      'Once seen as decisive foreign policy tools, economic sanctions face growing scrutiny over their long-term effectiveness.',
      'Shifting alliances and new power blocs are emerging as the postwar international order shows signs of strain.',
      'Beyond the battlefield, ongoing conflicts leave deep economic, social, and environmental scars that take generations to heal.',
      'Nations face mounting pressure to balance national interest with international obligation in an era of accelerating crises.',
      'Competition among great powers is reshaping the logistics and politics of humanitarian assistance in conflict zones worldwide.',
    ],
    tags: [
      ['diplomacy', 'foreign policy', 'international relations'],
      ['refugees', 'migration', 'humanitarian'],
      ['UN', 'multilateralism', 'global governance'],
      ['sanctions', 'geopolitics', 'foreign policy'],
      ['alliances', 'international order', 'geopolitics'],
      ['conflict', 'reconstruction', 'post-war'],
      ['nations', 'sovereignty', 'global affairs'],
      ['humanitarian aid', 'foreign policy', 'geopolitics'],
    ],
    bodyOpeners: [
      `<p>The architecture of international relations built after 1945 is under unprecedented strain. Multilateral institutions designed for a bipolar world are struggling to maintain relevance as power diffuses across new actors and new domains of competition emerge that existing frameworks were never designed to address.</p>`,
      `<p>Forced displacement has reached levels not seen since the Second World War. The combination of climate shocks, political violence, and economic dislocation is driving population movements that challenge the capacity and political will of receiving states in both the Global North and Global South.</p>`,
      `<p>When the Security Council convenes to address the world's most pressing crises, the gap between the urgency of the moment and the deliberateness of the process is often painful. Structural features designed to prevent any single power from dominating outcomes routinely prevent decisive action when it is most needed.</p>`,
    ],
  },

  politics: {
    titles: [
      'Far-Right Movements Prepare for a Post-Election Landscape',
      "Don's $19 Giveaways Spark Controversy Across Party Lines",
      'LG Election Update: A Divided Nation at the Polls',
      "Kamala Harris' Policies and the Road Ahead",
      "Trump's Potential Cabinet: What Appointments Signal",
      'How Electoral Misinformation Is Distorting Democratic Discourse',
      'The Rise of Third Parties: Challenge or Opportunity?',
      'Foreign Interference and the Integrity of National Elections',
    ],
    excerpts: [
      'Populist movements are reorganizing ahead of key elections, raising new questions about the durability of democratic norms.',
      'A series of high-profile political gifts and patronage decisions has reignited debate about ethics and accountability in public office.',
      'With a deeply polarized electorate, local government elections are emerging as bellwethers for national political trends.',
      "The former vice president's policy platform signals both continuity and meaningful departure from her predecessor's approach.",
      'Personnel is policy: the composition of a potential new administration reveals strategic priorities and ideological commitments.',
      'The deliberate spread of false information about electoral processes poses a fundamental challenge to democratic participation.',
      'Voter dissatisfaction with the two-party duopoly is creating openings for independent and third-party candidacies at multiple levels.',
      'Intelligence agencies are warning of sophisticated foreign influence operations targeting electoral infrastructure and voter opinion.',
    ],
    tags: [
      ['populism', 'elections', 'far-right'],
      ['politics', 'ethics', 'government'],
      ['elections', 'democracy', 'polarization'],
      ['policy', 'Democratic Party', 'US politics'],
      ['Trump', 'cabinet', 'administration'],
      ['misinformation', 'elections', 'democracy'],
      ['third parties', 'electoral reform', 'democracy'],
      ['foreign interference', 'election security', 'geopolitics'],
    ],
    bodyOpeners: [
      `<p>Electoral cycles have always concentrated political energy, but the current moment feels qualitatively different. The normalization of previously fringe positions, the collapse of traditional party structures, and the weaponization of information environments have created conditions in which democratic outcomes are genuinely uncertain in ways they have not been for generations.</p>`,
      `<p>The relationship between political leaders and their bases has been transformed by social media into something more akin to a direct loyalty bond than the representative relationship envisioned by constitutional designers. This transformation has profound implications for accountability, deliberation, and the capacity of institutions to constrain executive overreach.</p>`,
      `<p>Local elections rarely generate the media attention their significance warrants. These contests determine who controls school boards, city councils, and county commissions—institutions that shape the daily texture of civic life far more directly than most federal policy. Their current nationalization reflects a troubling merging of local governance with partisan identity politics.</p>`,
    ],
  },

  business: {
    titles: [
      'Strategies for success in a competitive landscape',
      'Innovation hubs are transforming traditional industries',
      'The Evolution of Business Models in a Digital Economy',
      'Understanding the Interconnectedness of Supply Chains',
      'How Corporate Culture Is Being Redefined Post-Pandemic',
      'ESG Investing: Principles vs. Performance in a Volatile Market',
      'The Rise of the Chief AI Officer in Corporate Leadership',
      'Mergers and Acquisitions in an Era of Regulatory Scrutiny',
    ],
    excerpts: [
      'Innovation clusters are reshaping where and how competitive advantage is created, challenging traditional corporate structures.',
      'Digital transformation promises efficiency gains but demands organizational change that many enterprises are still struggling to achieve.',
      'Subscription, platform, and ecosystem models are displacing traditional product-and-service frameworks across industry after industry.',
      'The pandemic exposed the fragility of optimized global supply chains, and companies are still reconfiguring in response.',
      'Remote and hybrid work have permanently altered organizational culture, forcing leadership to rethink how cohesion and performance are built.',
      'Investors are demanding both financial returns and demonstrated environmental and social responsibility—but measuring the latter remains contested.',
      'As AI capabilities expand, a new executive role is emerging to bridge technical possibility and business strategy at the board level.',
      'Antitrust regulators on multiple continents are taking a more aggressive posture toward consolidation, reshaping M&A calculus.',
    ],
    tags: [
      ['innovation', 'startups', 'business models'],
      ['digital transformation', 'technology', 'business'],
      ['digital economy', 'platform business', 'disruption'],
      ['supply chain', 'logistics', 'global trade'],
      ['corporate culture', 'leadership', 'remote work'],
      ['ESG', 'investing', 'sustainability'],
      ['AI', 'corporate strategy', 'leadership'],
      ['M&A', 'regulation', 'antitrust'],
    ],
    bodyOpeners: [
      `<p>The geography of innovation has always mattered, but the scale and pace at which new clusters are forming—in the Middle East, Southeast Asia, and parts of Africa—represents a fundamental redistribution of where new industries are being built. Traditional centers of corporate power are responding, but often with the lag that characterizes large institutions facing disruptive change.</p>`,
      `<p>Every generation of corporate leaders inherits a set of taken-for-granted assumptions about how business works. The current generation is discovering that nearly all of those assumptions are contestable. From the purpose of the corporation to the nature of competitive advantage to the meaning of organizational loyalty, the foundational frameworks of business management are being renegotiated.</p>`,
      `<p>Capital markets have always played a disciplining role in corporate strategy, but the relationship between investment community expectations and corporate decision-making has never been more complex. Competing pressures from activist shareholders, ESG-focused institutional investors, and traditional return-maximizers are creating strategic whipsaw effects that some CEOs describe as the most difficult dimension of contemporary leadership.</p>`,
    ],
  },

  technology: {
    titles: [
      'Latest Innovations Paving the Way to a Sustainable Future',
      'Understanding the Role of Big Data in Driving Innovation',
      'Future of Computing and What It Means for Society',
      'How Technology Is Revolutionizing Urban Living',
      'Quantum Computing: From Theory to Practical Application',
      'Cybersecurity in an Age of State-Sponsored Digital Warfare',
      'The Metaverse After the Hype: What Actually Remains',
      'Open-Source AI: Democratizing Access or Amplifying Risk?',
    ],
    excerpts: [
      'Clean technology is attracting record investment as the convergence of economics and climate urgency accelerates the energy transition.',
      'Data has become the defining strategic resource of the digital economy, and the race to extract insight from it is intensifying.',
      'Quantum and neuromorphic computing represent paradigm shifts that will require entirely new frameworks for thinking about computational power.',
      'Smart city technologies are reshaping urban infrastructure, but the governance of pervasive sensors and data raises unresolved questions.',
      'Quantum processors are moving out of research facilities and into real-world applications, with implications for cryptography and drug discovery.',
      'Nation-state actors are increasingly deploying cyberweapons with destructive real-world effects, challenging conventional deterrence frameworks.',
      'After billions in investment and outsized expectations, the metaverse is being rebuilt around practical enterprise and social applications.',
      'The open-source release of powerful AI models has democratized access to advanced capabilities while raising new biosecurity concerns.',
    ],
    tags: [
      ['sustainability', 'clean tech', 'innovation'],
      ['big data', 'analytics', 'AI'],
      ['quantum computing', 'future tech', 'computing'],
      ['smart cities', 'urban tech', 'IoT'],
      ['quantum', 'cryptography', 'computing'],
      ['cybersecurity', 'geopolitics', 'digital warfare'],
      ['metaverse', 'VR', 'digital economy'],
      ['open source', 'AI', 'regulation'],
    ],
    bodyOpeners: [
      `<p>The energy transition is accelerating faster than most projections from even five years ago anticipated. Falling costs for solar, wind, and battery storage have crossed economic tipping points that make renewables the default choice for new generation capacity in a growing number of markets—without subsidies. The question is no longer whether the transition will happen but how quickly and who will be left behind.</p>`,
      `<p>The organizations that understand how to generate competitive advantage from data are pulling away from those that do not, and the gap is widening. This is not simply a technology question—it is a leadership, culture, and capability question that determines whether data assets translate into decision-making quality or remain an underutilized infrastructure investment.</p>`,
      `<p>Computational power has always shaped what kinds of problems human civilization can solve. The architectures under development today—quantum processors, neuromorphic chips, photonic computing—represent not incremental improvements on existing silicon but genuinely different paradigms with different strengths, limitations, and application domains.</p>`,
    ],
  },

  health: {
    titles: [
      'How Technology Is Revolutionizing Patient Experiences',
      'Analyzing the Effects of Global Health Policies',
      'Mental Health: The Crisis Hiding in Plain Sight',
      'Antibiotic Resistance and the Coming Post-Antibiotic Era',
      'How Wearable Technology Is Transforming Preventive Medicine',
      'Nutrition Science: Separating Evidence from Marketing',
      'Global Health Equity: Why Where You Are Born Determines How Long You Live',
      'The Future of Surgery: Robotics, Remote Procedures, and Nanomedicine',
    ],
    excerpts: [
      'Digital health technologies are enabling patient-centered care models that were impossible even a decade ago.',
      'International health policies are being stress-tested by a succession of crises that reveal deep structural inequities in global health architecture.',
      'A global mental health crisis is unfolding with insufficient clinical infrastructure to meet the scale of need, demanding systemic response.',
      'Bacteria that resist every available antibiotic are a growing clinical reality, and the pipeline for new antimicrobials is dangerously thin.',
      'Consumer health devices are generating clinically actionable data at unprecedented scale, forcing healthcare systems to integrate new information streams.',
      'The science of nutrition is more rigorous than it has ever been—but dietary advice remains confounded by commercial interests and media simplification.',
      'Life expectancy varies by decades between and within countries, reflecting differences in income, education, and healthcare access that are policy choices.',
      'Surgical robotics, telesurgery, and targeted nanomedicine are transforming intervention in ways that will fundamentally alter clinical training.',
    ],
    tags: [
      ['digital health', 'patient care', 'technology'],
      ['global health', 'policy', 'public health'],
      ['mental health', 'wellbeing', 'healthcare'],
      ['antibiotic resistance', 'public health', 'medicine'],
      ['wearables', 'preventive medicine', 'health tech'],
      ['nutrition', 'public health', 'science'],
      ['health equity', 'global health', 'social determinants'],
      ['surgery', 'robotics', 'medical innovation'],
    ],
    bodyOpeners: [
      `<p>The patient experience of healthcare is being redesigned from the ground up. Telehealth platforms that achieved in weeks the adoption that had stalled for years, remote monitoring devices that generate continuous clinical-grade data, and AI diagnostic tools that perform at or above specialist level in specific domains—together, these technologies are beginning to dissolve the distinction between the clinic and the rest of a patient's life.</p>`,
      `<p>The COVID-19 pandemic was a stress test that the global health system largely failed. The pathways from alarm to international coordination to resource deployment proved far slower and more politically contested than pandemic preparedness frameworks had assumed. The lessons are being incorporated into updated agreements and institutional designs, but implementation remains uneven.</p>`,
      `<p>Suicide is now among the leading causes of death for people under 35 in many high-income countries. Rates of depression and anxiety are rising across demographic groups. The clinical system designed to address these conditions—built around outpatient psychiatry and pharmacotherapy—is structurally inadequate to the scale of need. New approaches, from digital therapeutics to community health worker integration to psychedelic-assisted therapy, are being evaluated with increasing urgency.</p>`,
    ],
  },

  sports: {
    titles: [
      'The Journey from Aspiring Athlete to Global Sports Icon',
      'The Economics, Sponsorships, and Branding Behind the Scores',
      'How Sports Technology Is Changing Training and Performance',
      'The Business of Football: Broadcasting Rights and Global Expansion',
      'Women in Sport: Progress, Gaps, and the Road to Parity',
      'Doping, Integrity, and the Science of Clean Competition',
      'Mental Health and the Athlete: Breaking the Culture of Silence',
    ],
    excerpts: [
      'The path from promising prospect to elite performer is increasingly understood as a science—and a business.',
      'Modern sports franchises are sophisticated media and lifestyle brands as much as athletic organizations.',
      'Match-fixing, performance enhancement, and governance failures threaten the credibility that makes sport culturally valuable.',
      'Data analytics, biomechanics, and sports science are transforming how athletes train and how teams make decisions.',
      'Football broadcasting rights have become one of the most contested assets in global media, driving club valuations to stratospheric levels.',
      "Women's sport is experiencing unprecedented commercial growth—but structural inequities in pay, media coverage, and investment persist.",
      'Anti-doping science and regulation are locked in an escalating race against chemists, creating genuine uncertainty about competitive fairness.',
      'Elite athletes are speaking openly about mental health challenges in ways that are reshaping the culture of competitive sport.',
    ],
    tags: [
      ['athletes', 'sports career', 'excellence'],
      ['sports business', 'sponsorship', 'branding'],
      ['integrity', 'governance', 'professional sports'],
      ['sports tech', 'performance', 'analytics'],
      ['football', 'broadcasting', 'sports business'],
      ['women in sport', 'gender equity', 'sports'],
      ['anti-doping', 'integrity', 'competition'],
      ['mental health', 'athlete wellbeing', 'sports culture'],
    ],
    bodyOpeners: [
      `<p>The development of elite athletes has become one of the most scientifically rigorous endeavors in human performance. Where coaches once relied on intuition and physical observation, today's elite programs integrate real-time biometric monitoring, load management algorithms, personalized nutrition protocols, and psychological performance coaching into comprehensive development systems that begin identifying talent as early as childhood.</p>`,
      `<p>Sports franchises in the world's leading leagues now function as global entertainment and lifestyle brands whose revenue streams extend far beyond gate receipts. Streaming rights, merchandise, betting partnerships, gaming integrations, and academy fees have transformed the financial architecture of professional sport—and created new pressures and incentives that don't always align with on-field excellence.</p>`,
      `<p>The commercial growth of women's sport is one of the genuinely positive stories in contemporary athletics. Attendance records are falling, broadcast deals are being signed at levels unimaginable a decade ago, and a generation of female athletes is building the kind of individual brand power that was once exclusively male territory. But the infrastructure gap—in coaching resources, facility quality, and medical support—remains substantial.</p>`,
    ],
  },

  culture: {
    titles: [
      'How Architecture Is Reflecting the Identity of Modern Nations',
      'The Resurgence of Indigenous Arts in a Global Marketplace',
      'Fashion as Politics: What We Wear as Cultural Statement',
      'Cinema Beyond Hollywood: The Rise of Global Film Industries',
      'Literary Traditions and the Digital Publishing Revolution',
      'Street Art and the Contested Politics of Public Space',
      'Museum Ethics in an Age of Repatriation Demands',
      'How Music Streaming Has Reshaped Cultural Geography',
    ],
    excerpts: [
      'Contemporary architecture is increasingly being asked to express cultural identity rather than simply provide efficient space.',
      'Indigenous artists are navigating the global art market on their own terms, challenging both colonial aesthetics and commercial cooptation.',
      'Fashion has always communicated social identity; in an era of heightened political awareness, what people wear carries new weight.',
      "Film industries in South Korea, Nigeria, India, and the Middle East are producing work that challenges Hollywood's global dominance.",
      'The shift to digital distribution has democratized publishing access while concentrating algorithmic power in a small number of platforms.',
      'Street art occupies an ambiguous position: simultaneously radical critique and real-estate asset, outsider art and institutional collection.',
      'Demands for the repatriation of cultural objects are forcing museums to reckon with the colonial histories of their acquisition practices.',
      'Streaming algorithms have both expanded the reach of local music and created new forms of homogenization as platforms optimize for engagement.',
    ],
    tags: [
      ['architecture', 'identity', 'design'],
      ['indigenous arts', 'culture', 'global marketplace'],
      ['fashion', 'politics', 'cultural expression'],
      ['cinema', 'global film', 'cultural industry'],
      ['literature', 'publishing', 'digital media'],
      ['street art', 'public space', 'urban culture'],
      ['museums', 'repatriation', 'colonial history'],
      ['music', 'streaming', 'cultural geography'],
    ],
    bodyOpeners: [
      `<p>The great building projects of the 21st century are as much cultural statements as they are functional infrastructure. The spectacular museums, stadiums, and urban districts being constructed across the Gulf states, East Asia, and parts of Africa are simultaneously assertions of national ambition, bids for international attention, and negotiations with historical identity. Architecture has always carried this symbolic weight, but the current moment—with its compressed timelines and global media reach—has amplified these dimensions to an unprecedented degree.</p>`,
      `<p>Indigenous artists and cultural practitioners have always worked within and against the constraints of the markets that sought to consume their work. What has changed in the 21st century is the combination of digital tools, which enable direct access to global audiences, and a growing critical consciousness about the terms on which cultural exchange happens. This combination has produced a generation of indigenous artists who participate in global markets on their own conceptual and commercial terms.</p>`,
      `<p>Fashion's relationship to politics has oscillated throughout modern history between the personal and the programmatic. In the current moment, that relationship has intensified: what public figures wear is scrutinized for political signal; consumer choices are read as ethical statements; and fashion brands are expected to take positions on social questions that once seemed far outside their remit. This politicization reflects broader changes in how identity and values are performed in public life.</p>`,
    ],
  },

  podcast: {
    titles: [
      'Getting the Most of Innovation and Inspiration Conversations',
      'Where Ideas Come Alive and Stories Always Begin',
      'Connecting Dots: People, Insights, and Uncommon Conversations',
      'Deep Dives into the Science and Art of Human Performance',
      'How Investigative Podcasting Is Reshaping Journalism',
      'The Business of Podcasting: Monetization Strategies That Work',
      'Educational Podcasting and the Future of Informal Learning',
      'True Crime, Trauma, and the Ethics of Narrative Journalism',
    ],
    excerpts: [
      'The best podcast conversations take ideas seriously enough to follow them wherever they lead.',
      'Storytelling in audio demands different craft from any other medium—and when executed well, it creates unmatched listener intimacy.',
      'The most interesting conversations happen at the intersection of disciplines that rarely talk to each other.',
      'Human performance research has found a uniquely effective vehicle in long-form audio, reaching audiences hungry for depth.',
      'Podcasting has given investigative journalism a new distribution model that bypasses traditional editorial gatekeepers.',
      'Building a sustainable podcast business requires diversification across advertising, subscriptions, live events, and licensing.',
      'On-demand audio is emerging as one of the most effective formats for self-directed professional and intellectual development.',
      "The true crime genre's cultural dominance raises genuine questions about the ethics of entertainment built on real trauma.",
    ],
    tags: [
      ['podcast', 'innovation', 'inspiration'],
      ['storytelling', 'audio', 'narrative'],
      ['ideas', 'conversation', 'interdisciplinary'],
      ['human performance', 'science', 'podcast'],
      ['investigative journalism', 'podcasting', 'media'],
      ['podcast business', 'monetization', 'media'],
      ['education', 'learning', 'podcasting'],
      ['true crime', 'journalism', 'ethics'],
    ],
    bodyOpeners: [
      `<p>The best conversations in podcasting share a quality that is difficult to manufacture: genuine intellectual curiosity combined with enough preparation to ask questions that the interviewee hasn't answered a hundred times before. The shows that build loyal audiences over years are almost always those where that quality is consistently present—where listeners feel they are eavesdropping on a conversation between two people who are actually thinking together rather than performing.</p>`,
      `<p>Audio storytelling's structural constraints—no visuals, no text, only sound—force practitioners to develop craft skills that are different in kind from those required by print, television, or digital formats. The best audio producers understand that every element of what a listener hears, from the acoustic qualities of a recording environment to the cadence of narration, is a choice that shapes the emotional experience of a story.</p>`,
      `<p>Some of the most generative intellectual conversations happen when people from different domains engage seriously with each other's frameworks. Podcasting has created a format that rewards exactly this kind of cross-disciplinary engagement—long enough to develop complexity, intimate enough to model genuine curiosity, and distributed widely enough to reach the specific individuals most hungry for exactly this kind of thinking.</p>`,
    ],
  },
}

// ─── Utility helpers ──────────────────────────────────────────────────────────

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function pickAuthor(index: number, categoryIndex: number): Author {
  return AUTHORS[(index + categoryIndex * 3) % AUTHORS.length]!
}

/** Spreads generated dates across Sep–Oct 2024, deterministically. */
function generateDate(categoryIndex: number, articleIndex: number): string {
  const base = new Date('2024-09-01T00:00:00Z')
  const offset = (categoryIndex * 11 + articleIndex * 7) % 60
  base.setDate(base.getDate() + offset)
  return base.toISOString()
}

function buildBody(
  bank: CategoryBank,
  index: number,
  excerpt: string,
): string {
  const opener = bank.bodyOpeners[index % bank.bodyOpeners.length] ?? bank.bodyOpeners[0]!
  const filler1 = GENERIC_PARAGRAPHS[index % GENERIC_PARAGRAPHS.length]!
  const filler2 = GENERIC_PARAGRAPHS[(index + 2) % GENERIC_PARAGRAPHS.length]!
  return `<p>${excerpt}</p>\n\n${opener}\n\n${filler1}\n\n${filler2}`
}

function getUsedThumbnailIndices(seeds: Article[], category: Category): Set<number> {
  const images = CATEGORY_THUMBNAILS[category]
  const used = new Set<number>()
  for (const seed of seeds.filter((s) => s.category === category)) {
    const index = images.indexOf(seed.thumbnail)
    if (index >= 0) used.add(index)
  }
  return used
}

function takeNextThumbnailIndex(used: Set<number>, category: Category): number {
  const images = CATEGORY_THUMBNAILS[category]
  for (let index = 0; index < images.length; index++) {
    if (!used.has(index)) {
      used.add(index)
      return index
    }
  }
  return 0
}

// ─── Main generator ───────────────────────────────────────────────────────────

export function generateArticles(seeds: Article[]): Article[] {
  const result: Article[] = [...seeds]

  CATEGORIES.forEach((category, categoryIndex) => {
    const bank = WORD_BANKS[category]
    const existingInCategory = seeds.filter((s) => s.category === category).length
    const targetCount = CATEGORY_IMAGE_COUNTS[category]
    const usedThumbnailIndices = getUsedThumbnailIndices(seeds, category)
    const toGenerate = Math.max(0, targetCount - existingInCategory)

    for (let i = 0; i < toGenerate; i++) {
      const imageIndex = takeNextThumbnailIndex(usedThumbnailIndices, category)
      const title = bank.titles[i % bank.titles.length]!
      const excerpt = bank.excerpts[i % bank.excerpts.length]!
      const tags = bank.tags[i % bank.tags.length]!
      const slug = `${slugify(title)}-${categoryIndex}-${i}`
      const author = pickAuthor(i, categoryIndex)
      const date = generateDate(categoryIndex, i)
      const body = buildBody(bank, i, excerpt)
      const readingTime = Math.max(3, Math.ceil(body.split(/\s+/).length / 200))

      result.push({
        id: slug,
        slug,
        title,
        excerpt,
        body,
        category,
        tags,
        author,
        publishedAt: date,
        // TODO: return to the picsum after the website goes back up
        // thumbnail: `https://picsum.photos/seed/${category}-${imageIndex + 1}/800/500`,
        thumbnail: getCategoryThumbnailByIndex(category, imageIndex),
        readingTime,
      })
    }
  })

  return result
}
