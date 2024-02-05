import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Cover from '../components/Cover'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>MARS COIN</title>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
        <meta name="description" content="MARS offers innovative end-to end solutions that work in ASEAN. We solve environmental problems caused by waste, make the transition to clean energy affordable and strive to lead the resource revolution in ASEAN and beyond." />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Navbar />
      <Cover />

      {/* feature-section-------- */}
      <section className={styles.futureSection}>
        <h3>The Problem</h3>
        <div className={styles.featureBlock}>

          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i class="las la-globe-asia"></i></p>
            <h4 className={styles.featureHead}>SAVE THE EARTH</h4>
            <p className={styles.featureText}>
            The world is producing more waste than ever and Southeast Asia projects 300 million tons per year by 2030.

            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i class="las la-biohazard"></i></p>
            <h4 className={styles.featureHead}>PLASTIC WASTAGE</h4>
            <p className={styles.featureText}>
            Southeast Asian’s countries with their long coast lines and mismanaged plastic waste contribute 25% of the global ocean plastic.

            </p>
          </div>
          <div className={styles.featureCard}>
            <p className={styles.featureIcon}><i class="las la-recycle"></i></p>
            <h4 className={styles.featureHead}>RECYCLE</h4>
            <p className={styles.featureText}>
            The recycling rate across Southeast Asia is less than 50% composting and incineration have limited capacity.

            </p>
          </div>


        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutImageSection}>
          <img src="/garbage-patch.jpg" alt="image" />
        </div>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Global Waste</h3>
          <p className={styles.aboutText}>
            Waste to grow by 70% by 2050 unless urgent action is taken
            where the amount of plastic waste in the oceans is projected to double by 2030 and even triple by 2040 and the region’s energy related Green House Gas (GHG) emissions will increase by 34-147% between 2017 and 2040.
          </p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Plastic Waste</p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Medical Waste</p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Chemical Waste</p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Other Solid Hazardous</p>
          
        </div>
      </section>

      

      {/* feature-section-------- */}

      {/* about-section------ */}

      <section className={styles.aboutSection}>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Vision and Mission</h3>
          <p className={styles.aboutText}>
          </p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Vision</h2>
            To be at the forefront of new era of building a vision for climate change and sustainability which serves next generation of human life , so they can live with more freedom.</p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Mission</h2>
            Mars mainly focuses on climate protection, sustainability to achieve Profitable Green Energy Products from waste conversion and Zero Waste by waste recycling, recovery, disposal and re-use.</p>
          <p className={styles.aboutText}><i className="las la-lock"></i>
            <h2>Solution</h2>
            We have planned a ecosystem of new solutions which will help the climate using Plastic Waste Cataltic Cracking where we convert the plastic waste into Bio-Fuel. Our ecosystem is offering to build the most efficient and high calorific value for the RDF/SRF by turning organic to fuel pellet.
          </p>
        </div>
        <div className={styles.aboutImageSection2}>
          <img src="/vision.png" alt="image" />
        </div>
      </section>
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutImageSection}>
          <img src="/recycleimage.png" alt="image" />
        </div>
        <div className={styles.aboutTextSection}>
          <h3 className={styles.aboutHeader}>Hazardous Waste Management</h3>
          <p className={styles.aboutText}>
          The only hazardous waste treatment facility for the West Indonesia Region
(Aceh,  North Sumatra, West Sumatra,  Riau, Riau Islands,  Jambi, Bengkulu, South Sumatra, Lampung, Bangka Belitung, West Kalimantan)
will be Processing of 9 – 10 MILLION tons of hazardous and municipal waste per year.
          </p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Oil, Plastic, Medical Waste</p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Ash & Mining Residuals</p>
          <p className={styles.aboutText}><i className="las la-arrow-right"></i>Electronic Waste & Batteries</p>
        </div>
      </section>

      {/* about-section------ */}
      {/* rail-section-- */}
      <section className={styles.railSection}>

        <div className={styles.railColumn}>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>OPTIMAL RESOURCE RECOVERY</h3>
              <p className={styles.railText}>
              world’s most advanced sensor-based sorting solutions for waste recycling. Proven full-service sorting systems with software-driven intelligence that maximize recovery across numerous waste streams.
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>AUTOMATED RECOVERY</h3>
              <p className={styles.railText}>
              Fully automated recovery of plastics, metals, paper, organics, e-waste and other valuable materials from waste streams. Delivering high-quality recycling materials that are in high demand.
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>MOLECULAR REFRACTIONING</h3>
              <p className={styles.railText}>
              MARS does the optimal preparation of the highly efficient production of green energy using Molecular Refractioning (MORF).  

              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>FLEXIBLE SOLUTIONS</h3>
              <p className={styles.railText}>
              Flexible solutions tailored to the waste composition including the ability to process input from landfill mining. Options to produce agglomerate, compost, refuse derived fuels and more
              </p>
            </div>
          </div>
        </div>
        <div className={styles.railColumn}>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>SORTING SOLUTION AND PLANT BUILDER</h3>
              <p className={styles.railText}>
              MARS Beside operator also offer to the market as Recycling Sorting Plant Builder, MARS is joining partnership with BENLI RECYCLING SYSTEM in 2023 for offer the plant builder and technology to Recycling Industries in APAC region.
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>LOCAL COMMUNITIES</h3>
              <p className={styles.railText}>
                MARS support local communities like CSR Foundation where The foundation will be established in each neighborhood of a collection center, with focus on the waste pickers in the surrounding area.

              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>BEASISWA MARS EDU</h3>
              <p className={styles.railText}>
                MARS give formal education for the kids from orphanage and waste pickers that work for the collection centre and also give a basic skill for the adults about the awareness to do recycling and green  nature for them to ready to work back at the collection centre.
              </p>
            </div>
          </div>
          <div className={styles.railCard}>
            <i className="las la-caret-left"></i>
            <div>
              <h3 className={styles.railHead}>MARS FUTURE</h3>
              <p className={styles.railText}>
              Improving the production, distribution and efficient use of Green Energy, Enabling closing the quantity and quality gaps in plastic recycling and linking it to energy production and Enabling automation in textiles recycling.


              </p>
            </div>
          </div>
        </div>

      </section>
      {/* rail-section-- */}

      {/* tokenomics-section-- */}
      <section className={styles.tokenomicsSection} id="token">
        <h2 className={styles.tokenomicsHeader}>Tokenomics</h2>
        <div className={styles.tokenomicsDetailsHolder}>
          <div className={styles.tokenomicsColumn}>
            <h4 className={styles.tokenDetailHead}>Token Name</h4>
            <p className={styles.tokenDetailText}>MARS COIN</p>
            <h4 className={styles.tokenDetailHead}>Launch Sale Start Date</h4>
            <p className={styles.tokenDetailText}>March 01, 2024</p>
            <h4 className={styles.tokenDetailHead}>Presale Start Date</h4>
            <p className={styles.tokenDetailText}>February 10, 2024</p>

          </div>
          <div className={styles.tokenomicsColumn}>
          <h4 className={styles.tokenDetailHead}>Token Symbol</h4>
            <p className={styles.tokenDetailText}>MRSC</p>

            <h4 className={styles.tokenDetailHead}>Total Supply</h4>
            <p className={styles.tokenDetailText}>1,000,000,000</p>

            <h4 className={styles.tokenDetailHead}>Presale Token Supply</h4>
            <p className={styles.tokenDetailText}>200,000,000</p>



          </div>
          <div className={styles.tokenomicsColumn}>
          <h4 className={styles.tokenDetailHead}>Currencies Accepted</h4>
            <p className={styles.tokenDetailText}>BNB, USDT</p>
            <h4 className={styles.tokenDetailHead}>Hardcap</h4>
            <p className={styles.tokenDetailText}>6600 BNB</p>
            <h4 className={styles.tokenDetailHead}>Softcap</h4>
            <p className={styles.tokenDetailText}>3300 BNB</p>



          </div>
        </div>
      </section>
      {/* tokenomics-section-- */}

      <section className={styles.chartSection}>
        <div>
          <h3>Tokenomics</h3>
          <img src="/tokenomics-chart.png" alt="chart" />

        </div>
        <div>
          <h3>Fund Allocation</h3>
          <img src="/allocation-chart.png" alt="chart" />
        </div>
      </section>

      {/* roadmap-section---------- */}
      <section className={styles.roadmapSection} id="roadmap">
        <h3>Roadmap</h3>

        <div className={styles.timeline}>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Sept-Oct 2023</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Ideation of MARS Token
                  </li>
                  <li>Plan for Fundraising.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>NOV-DEC 2023</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>MARS Website Design
                  </li>
                  <li>Contract Development of MARS Token
                  </li>
                  <li>Sale Contract Development
                  </li>
                  <li>Tokenomics & Fund Allocation
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Dec-Jan 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                <li>MARS Website Development
                  </li>
                  <li>Contract Development of MARS Token
                  </li>
                  <li>Sale Contract Development
                  </li>
                  <li>Team Expansion
                  </li>
                  <li>Whitepaper, Future Goals & Roadmap
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Feb-March 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>MARS Website Deployment
                  </li>
                  <li>Contract Deployment of MARS Token
                  </li>
                  <li>Sale Contract Deployment
                  </li>
                  <li>
                    MARS Pre Sale Launch
                  </li>
                  <li>
                    Press Release, Partnerships & Collaborations
                  </li>
                  <li>
                    Proposal to Government of Indonesia on MARS Roadmap
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>March-April 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>MARS Public Launch
                  </li>
                  <li>Events & Promotions
                  </li>
                  <li>MARS Green Energy Campaigns 
                  </li>
                  <li>Partnerships with NGO's & Institutions
                  </li>

                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>May-June 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>MARS Token Holders Meetup
                  </li>
                  <li>Official Press Release of fund raised
                  </li>
                  <li>MARS Green Factory Program (Indonesia)
                  </li>
                  <li>
                    Preparation for DEX Lisiting 
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>July-September 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>Listing on Decentralised Exchanges
                  </li>
                  <li>MARS Sustainability Conference
                  </li>
                  <li>Green Factory Land Demarkation (Indonesia)
                  </li>
                  <li>MARS Investors Meetups in ASEAN Region
                  </li>
                  <li>Preparation for MARS Staking
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Oct-Dec 2024</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>MARS Staking Platform Development
                  </li>
                  <li>Development of Green Energy Custom Softwares
                  </li>
                  <li>Search & Planning Committee for MARS Machinary
                  </li>
                  <li>
                    MARS Green Energy Press Conference
                  </li>
                  <li>
                    Planning for MARS Factory Construction
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}>Q1 2025</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>MARS Green Staking Platform Launch
                  </li>
                  <li>Green Staking Platform Press Conference
                  </li>
                  <li>Starting MARS Factory Construction
                  </li>
                  <li>MARS Green Partnerships
                  </li>
                  <li>MARS Green & Clean Restoration
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Q2 2025</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>MARS Factory Construction
                  </li>
                  <li>Launch Green Energy Platform
                  </li>
                  <li>MARS Plastic Collection Campaigns
                  </li>
                  <li>MARS Government Clean Projects
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.date}> Q3 2025</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>MARS Factory Construction
                  </li>
                  <li>MARS Green & Clean Volunteering Programs
                  </li>
                  <li>MARS Green Conference on Global Waste
                  </li>
                  <li>
                    MARS Factory Planning on Conversion Waste into Bio-Fuel
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={styles.date}>Q4 2025 - Q2 2026</div>
            <i className="icon ri-heart-line"></i>
            <div className={styles.content}>
              <p>
                <ul>
                  <li>MARS Factory Launch
                  </li>
                  <li>MARS Global Wastage Collection
                  </li>
                  <li>Dividing MARS Factory in Multiple Sections
                  </li>
                  <li>Digital business models for Green Energy
                  </li>
                  <li>Preparation for Research & Development Center
                  </li>
                  <li>Preparation for Integrated Solid Waste Disposal Centre
                  </li>
                </ul>
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* roadmap-section-------- */}


      {/* why-section-- */}
      <section className={styles.whySection}>
        <div className={styles.whyTextSection}>
          <h2 className={styles.whyHeader}>Why choose us?</h2>
          <p className={styles.whyAnswer}>
          MARS offers innovative end-to end solutions that work in ASEAN. We solve environmental problems caused by waste, make the transition to clean energy affordable and strive to lead the resource revolution in ASEAN and beyond.  2023, MARS, SABIC and Lepack form a JV for off taker solution    


          </p>
          <div className={styles.whyAnswerPoint}>
            <h3>Vision & Mission</h3>
            <p>
            At MARS, our Vision is to lead the resources revolution.It is our belief that businesses have the power and responsibility to help manage our planet's precious resources - today and tomorrow.
<br></br>
<br></br>
            Our Mission is to build the best circular economy practice, secure sustainable energy supply and protect the climate.

            </p>
          </div>
          <div className={styles.whyAnswerPoint}>
            <h3>Establishment</h3>
            <p>
            In 2001, PT MARS Indonesia was established as scrap collection and sorting with 50 T/day in Batam Island, In 2011, MARS PLASTIC SOLUTION was established in Singapore as independent company for doing System integration, process engineering and training for Plastic Injection Molding. 
            In 2015, MARS PLASTIC SOLUTION started doing process engineering for r-PET and r-PP in Injection molding 
2017, MARS deliver the most lightest beverage closure in the market
 


            </p>
          </div>
          <div className={styles.whyAnswerPoint}>
            <h3>Awards</h3>
            <p>
            In 2021, MARS awarded by Presidency office and Ministry Industry  for Strategic Project National on Eco zero emission Industrial Estate and Hazardous and Municiple Waste Processor in Ladi island Indonesia.

            </p>
          </div>
        </div>
        <div className={styles.whyImageSection}>
        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?si=yZZi8cGyVBGla9xU" title="Why Choose Us?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </section>
      {/* why-section-- */}
      {/* team-section------ */}
      <section className={styles.teamSection} id="team">
        <h3 className={styles.teamHeader}>Team</h3>
        <div className={styles.teamBlock}>
          <div className={styles.teamCard}>
            <img src="/leo.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Keith Bambang</h4>
            <p className={styles.teamDes}>FOUNDER</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/rabbit.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Fred Neust</h4>
            <p className={styles.teamDes}>CHIEF EXECUTIVE OFFICER</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/wolf.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Dan Lin Peng Ghee</h4>
            <p className={styles.teamDes}>CHIEF FINANCE OFFICER</p>
          </div>

          <div className={styles.teamCard}>
            <img src="/leo.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Siao Tien</h4>
            <p className={styles.teamDes}>CHIEF MARKETING OFFICER</p>
          </div>
          
          
        </div>
        <div className={styles.teamBlock}>
        <div className={styles.teamCard}>
            <img src="/wolf.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Krivash</h4>
            <p className={styles.teamDes}>CHIEF TECHNOLOGY OFFICER</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/leo.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Ramita Sen</h4>
            <p className={styles.teamDes}>CREATIVE MANAGER</p>
          </div>

          <div className={styles.teamCard}>
            <img src="/leo.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Kaye Torres</h4>
            <p className={styles.teamDes}>COMUNITY MANAGER</p>
          </div>
          <div className={styles.teamCard}>
            <img src="/rabbit.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Stephen Ong</h4>
            <p className={styles.teamDes}>PROJECT ADVISOR</p>
          </div>


          
        </div>
      </section>
      {/* team-section------ */}

            {/* PARTNERS-section------ */}
            <section className={styles.teamSection2} id="team">
        <h3 className={styles.teamHeader2}>Partners</h3>
        <div className={styles.teamBlock2}>
          <div className={styles.teamCard2}>
            <img src="/leo.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Advice Me</h4>
            <p className={styles.teamDes}>PROJECT PARTNER</p>
          </div>
          <div className={styles.teamCard2}>
            <img src="/rabbit.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Benli</h4>
            <p className={styles.teamDes}>MACHINARY PARTNER</p>
          </div>
          <div className={styles.teamCard2}>
            <img src="/wolf.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Sabic</h4>
            <p className={styles.teamDes}>OFF TAKER PARTNER</p>
          </div>

          <div className={styles.teamCard2}>
            <img src="/leo.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Ladi Eco Park</h4>
            <p className={styles.teamDes}>GREEN PARTNER</p>
          </div>
          <div className={styles.teamCard2}>
            <img src="/leo.jpeg" alt="team-member" />
            <h4 className={styles.teamName}>Indonesia</h4>
            <p className={styles.teamDes}>GOVT PARTNER</p>
          </div>
          
        </div>
      </section>
      {/* PARTNERS-section------ */}
      {/* whitepaper-section------- */}
      <section className={styles.whitepaperSection} id="whitepaper">
        <div className={styles.whitepaperBlock}>
          <div className={styles.whitepaperTextSection}>
            <h2 className={styles.whitepaperHead}>Whitepaper</h2>
            <p className={styles.whitepaperText}>
              Total of 1 billion (1,000,000,000) MARSs will be minted through
              Smart contract and deployed through Binance Smart Chain . We will be selling 20% of the
              tokens in presale which will be done in 1 phase which will run max for 30 days. If the Pre-Sale phases goals
              are reached before time, we will launch on the mentioned date. We have
              kept the investment amount to minimum 0.005 BNB for our presale which will make easy for
              most of the retail investors to invest.
              We will not accept any FIAT currencies during the Pre-Sale as we firmly believe in digital
              currencies and that&apos;s why working on building a ecosystem based on blockchain and
              crypto assets and crypto currencies.
            </p>
          </div>
          <div className={styles.whitepaperActionSection}>
            <Link href="#"><a target="_blank" rel="noreferrer">Read Online</a></Link>
            <Link href="#"><a target="_blank" rel="noreferrer" download>Download</a></Link>
          </div>
        </div>
      </section>
      {/* whitepaper-section------- */}

      {/* contact-section-- */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.contactSocialSide}>
          <h3 className={styles.contactHeader}>Contact Us</h3>
          <div className={styles.contactSocialBlock}>
            <Link href="mailto:support@mars.com"><a target="_blank" rel="noreferrer"><i className="las la-envelope"></i>support@mars.com</a></Link>
            <Link href="https://t.me/mars"><a target="_blank" rel="noreferrer"><i className="lab la-telegram"></i>Telegram</a></Link>
            <Link href="https://twitter.com/marsofficial"><a target="_blank" rel="noreferrer"><i className="lab la-twitter-square"></i>X</a></Link>
            <Link href="https://www.instagram.com/mars_official/"><a target="_blank" rel="noreferrer"><i className="lab la-instagram"></i>Instagram</a></Link>
            <Link href="https://www.youtube.com/channel/UCCP3Ce_X8U-_lkvC9xREGQA"><a target="_blank" rel="noreferrer"><i className="lab la-youtube"></i>YouTube</a></Link>
          </div>
        </div>
        <div className={styles.contactFormSide}>
          <div className={styles.contactForm}>
            <input type="text" id='name' required autoComplete='off' placeholder='Full Name' />
            <input type="email" id='email' required autoComplete='off' placeholder='Email' />
            <input type="text" id='telegram' required autoComplete='off' placeholder='Telegram' />
            <input type="text" id='message' required autoComplete='off' placeholder='Message' />
            <button className={styles.submitBtn} onClick={submitForm}>Send Message</button>
          </div>
        </div>
      </section>
      {/* contact-section-- */}

      {/* footer--------- */}
      <section className={styles.footerSection}>
        <div className={styles.brandFooter}>
          <p className={styles.brandText}>Designed with</p>
          <p className={styles.heart}><i className="las la-heart"></i></p>
          <p className={styles.brandText}>by</p>
          <p className={styles.brandText}><Link href="https://www.mars.com"><a target="_blank" rel="noreferrer">MARS</a></Link></p>
        </div>
      </section>
      {/* footer--------- */}


    </>
  )
}


function submitForm() {
  let name = document.getElementById("name").value;
  let telegram = document.getElementById("telegram").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let data = {
    name,
    telegram,
    email,
    message
  }

  fetch('/api/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    alert("Application Submitted!");

    document.getElementById("name").value = "";
    document.getElementById("telegram").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
    }
  })
}