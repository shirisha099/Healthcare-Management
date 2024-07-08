import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Features from '../components/features'
import './home.css'

const Home = (props) => {

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const [potentialIllnesses, setPotentialIllnesses] = useState([]);


  // Mapping of symptoms to potential illnesses
  const illnessMap = {
    "Abdominal pain": ["Appendicitis", "Gastritis", "Gallstones"],
    "Chest pain": ["Heart attack", "Pneumonia", "Costochondritis"],
    "Constipation": ["Irritable Bowel Syndrome (IBS)", "Bowel obstruction", "Colon cancer", "Hypothyroidism"],
    "Cough": ["Common cold", "Influenza (flu)", "Bronchitis", "Pneumonia", "Asthma", "Allergies", "Chronic obstructive pulmonary disease (COPD)"],
    "Breath difficulty": ["Asthma", "Chronic obstructive pulmonary disease (COPD)", "Pneumonia", "Pulmonary embolism", "Heart failure"],
    "Red eye": ["Conjunctivitis (Pink eye)", "Allergic conjunctivitis", "Bacterial conjunctivitis", "Corneal abrasion", "Uveitis"],
    "Foot pain": ["Plantar fasciitis", "Bunions", "Gout", "Stress fractures", "Achilles tendinitis"],
    "Foot swelling": ["Deep vein thrombosis (DVT)", "Lymphedema", "Venous insufficiency", "Cellulitis", "Kidney disease"],
    "Headache": ["Tension headache", "Migraine", "Cluster headache", "Sinusitis", "High blood pressure"],
    "Heart palpitation": ["Arrhythmia", "Atrial fibrillation", "Supraventricular tachycardia (SVT)", "Heart valve disorders", "Anxiety"],
    "Knee pain": ["Osteoarthritis", "Rheumatoid arthritis", "Patellar tendinitis", "Meniscus tear", "Bursitis"],
    "Hip pain": ["Osteoarthritis", "Hip labral tear", "Trochanteric bursitis", "Hip impingement", "Hip fracture"],
    "Low back pain": ["Muscle strain", "Lumbar herniated disc", "Degenerative disc disease", "Spinal stenosis", "Sciatica"],
    "Nasal congestion": ["Common cold", "Sinusitis", "Allergic rhinitis", "Nasal polyps", "Deviated septum"],
    "Neck pain": ["Muscle strain", "Whiplash", "Cervical herniated disc", "Cervical spondylosis", "Meningitis"],
  
    // Add mappings for other symptoms
  };

  // Function to handle symptom selection
  const handleSymptomChange = (symptom) => {
    setSelectedSymptoms(prevSelected => {
      if (prevSelected.includes(symptom)) {
        return prevSelected.filter(item => item !== symptom);
      } else {
        return [...prevSelected, symptom];
      }
    });
  };

  // Function to calculate potential illnesses based on selected symptoms
  const calculatePotentialIllnesses = () => {
    let illnesses = [];
    selectedSymptoms.forEach(symptom => {
      illnesses = illnesses.concat(illnessMap[symptom] || []);
    });
    return illnesses;
  };

  // Function to handle the "Check" button click
  const handleCheckButtonClick = () => {
    const illnesses = calculatePotentialIllnesses();
    setPotentialIllnesses(illnesses);
  };



  return (
    <div className="home-container">
      <Helmet>
        <title>SDG 3</title>
        <meta property="og:title" content="Medica template" />
      </Helmet>
      <div data-modal="practices" className="home-modal">
        <div className="home-practices">
          <div className="home-heading">
            <span className="home-header">Our practices</span>
            <svg
              viewBox="0 0 1024 1024"
              data-close="practices"
              className="home-close"
            >
              <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </div>
          <div className="home-grid">
            <div className="home-section">
              <div className="home-heading01">
                <span className="home-header01">Cardiology</span>
                <span className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image"
                />
              </div>
            </div>
            <div className="home-section1">
              <div className="home-heading02">
                <span className="home-header02">Orthopedics</span>
                <span className="home-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text01">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image01"
                />
              </div>
            </div>
            <div className="home-section2">
              <div className="home-heading03">
                <span className="home-header03">Ophtalmology</span>
                <span className="home-caption2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text02">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image02"
                />
              </div>
            </div>
            <div className="home-section3">
              <div className="home-heading04">
                <span className="home-header04">Pediatrics</span>
                <span className="home-caption3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text03">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image03"
                />
              </div>
            </div>
            <div className="home-section4">
              <div className="home-heading05">
                <span className="home-header05">Nutrition</span>
                <span className="home-caption4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text04">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image04"
                />
              </div>
            </div>
            <div className="home-section5">
              <div className="home-heading06">
                <span className="home-header06">General</span>
                <span className="home-caption5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="read-more">
                <span className="home-text05">Read more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image05"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-hero">
        <header data-thq="thq-navbar" className="home-navbar">
          <img
            alt="image"
            src="/Branding/logo-1500h.png"
            className="home-image06"
          />
          <div className="home-container01">
            <div className="home-left">
              <nav className="home-links">
              </nav>
            </div>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-right">
            <button className="home-book button button-main">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image08"
              />
              <Link to="/login">
              <span className="home-text07">Doctor Login</span></Link>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container02">
                <img
                  alt="image"
                  src="/Branding/logo-1500h.png"
                  className="home-image09"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <Link to="/inperson">
                <button className="home-book1 button button-main">
                  <img
                    alt="image"
                    src="/Icons/calendar.svg"
                    className="home-image10"
                  />
                  <span className="home-text12">Book an appointment</span>
                </button></Link>
              </nav>
            </div>
          </div>
        </header>
        <div className="home-main">
          <div className="home-content">
            <div className="home-heading07">
              <h1 className="home-header07">
                Experienced general practitioners who have an eye for your care
              </h1>
            </div>
            <button className="button button-main home-book2">
              <img
                alt="image"
                src="/Icons/calendar.svg"
                className="home-image11"
              />
              <span>Book an appointment</span>
            </button>
          </div>
          <div className="home-image12">
            <img
              alt="image"
              src="/vecteezy_telemedicine-doctor-with-medical-mask-and-report-spread_4420755-removebg-preview-500w.png"
              className="home-image13"
            />
          </div>
        </div>
        <div id="features" className="home-features">
          <div className="home-content1">
            <Features>Doctor Login</Features>
            <Features title="Virtual Appoinments"></Features>
            <Features title="Nearby Pharmacies"></Features>
          </div>
        </div>
        <div className="home-background"></div>
      </section>
      <section className="home-practices1">
        <div className="home-heading08">
          <h2 className="home-text14">Services</h2>
        </div>
        <div className="home-content2">
          <div className="home-grid1">
            <Link to="/inperson">
              <div className="home-practice-wrapper">
                <div className="home-practice">
                  <img
                    alt="image"
                    src="/chart-success.svg"
                    loading="lazy"
                    className="home-image14"
                  />
                  <span className="home-text15">
                    <span>
                      Make an
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>Appointment</span>
                    <br></br>
                  </span>
                  <div className="home-container03">
                    <img
                      alt="image"
                      src="/plus%20circle-200h.png"
                      className="home-image15"
                    />
                    <img
                      alt="image"
                      src="/heart%20circle-200h.png"
                      className="home-image16"
                    />
                  </div>
                </div>
              </div>
            </Link>
            <div className="home-practice1">
              <img
                alt="image"
                src="/online%20pharmacy-200h.png"
                loading="lazy"
                className="home-image17"
              />
              <span className="home-text20">
                <Link to="/map">
                <span>Nearby</span>
                <br></br>
                <span>Pharmacies</span>
                <br></br></Link>
              </span>
              <div className="home-container04">
                <img
                  alt="image"
                  src="/plus%20circle-200h.png"
                  className="home-image18"
                />
                <img
                  alt="image"
                  src="/heart%20circle-200h.png"
                  className="home-image19"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="schedule" className="home-schedule">
        <div className="home-content3">
          <div className="home-header08">
            <h2 className="home-heading09">
              Schedule an in person or virtual appointment today
            </h2>
            <p className="home-caption6">
              This phrase will be updated soon.
            </p>
          </div>
          <div className="home-types">
            <Link to="/inperson">
            <button className="home-book-person button button-main button-white">
              <span>Book in person appointment</span>
            </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="home-search">
        <div className="home-heading10">
          <h2 className="home-text32">Search diseases &amp; conditions</h2>
          <p className="home-text33">
            Select one or more alphabets, to find the name of the diseases you are unaware.
          </p>
        </div>
        <div className="home-content4">
          <div className="home-type-one">
            <div className="home-alphabet">
              <div data-letter="a" className="letter">
                <span className="home-text34">A</span>
              </div>
              <div data-letter="b" className="letter">
                <span className="home-text35">B</span>
              </div>
              <div data-letter="c" className="letter">
                <span className="home-text36">C</span>
              </div>
              <div data-letter="d" className="letter">
                <span className="home-text37">D</span>
              </div>
              <div data-letter="e" className="letter">
                <span className="home-text38">E</span>
              </div>
              <div data-letter="f" className="letter">
                <span className="home-text39">F</span>
              </div>
              <div data-letter="g" className="letter">
                <span className="home-text40">G</span>
              </div>
              <div data-letter="h" className="letter">
                <span className="home-text41">H</span>
              </div>
              <div data-letter="i" className="letter">
                <span className="home-text42">I</span>
              </div>
              <div data-letter="j" className="letter">
                <span className="home-text43">J</span>
              </div>
              <div data-letter="k" className="letter">
                <span className="home-text44">K</span>
              </div>
              <div data-letter="l" className="letter">
                <span className="home-text45">L</span>
              </div>
              <div data-letter="m" className="letter">
                <span className="home-text46">M</span>
              </div>
              <div data-letter="n" className="letter">
                <span className="home-text47">N</span>
              </div>
              <div data-letter="o" className="letter">
                <span className="home-text48">O</span>
              </div>
              <div data-letter="p" className="letter">
                <span className="home-text49">P</span>
              </div>
              <div data-letter="q" className="letter">
                <span className="home-text50">Q</span>
              </div>
              <div data-letter="r" className="letter">
                <span className="home-text51">R</span>
              </div>
              <div data-letter="s" className="letter">
                <span className="home-text52">S</span>
              </div>
              <div data-letter="t" className="letter">
                <span className="home-text53">T</span>
              </div>
              <div data-letter="u" className="letter">
                <span className="home-text54">U</span>
              </div>
              <div data-letter="v" className="letter">
                <span className="home-text55">V</span>
              </div>
              <div data-letter="w" className="letter">
                <span className="home-text56">W</span>
              </div>
              <div data-letter="x" className="letter">
                <span className="home-text57">X</span>
              </div>
              <div data-letter="y" className="letter">
                <span className="home-text58">Y</span>
              </div>
              <div data-letter="z" className="letter">
                <span className="home-text59">Z</span>
              </div>
            </div>
            <p className="home-text60">
              You don’t know it’s name? Check out symptom checker below
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div data-teleport="results" className="home-results">
              <span className="home-heading11">Results:</span>
              <div data-results="letters" className="home-list"></div>
            </div>
          </div>
          <div className="home-type-two">
            <div className="home-heading12">
              <h3 className="home-text61">Symptom checker</h3>
              <p className="home-text62">
                Select one or more symptoms to identify the potential illness you are infected with.
              </p>
            </div>
            <div className="home-symptoms">
  <h2>Select Symptoms:</h2>
  <div className="home-grid2">
    {Object.keys(illnessMap).map((symptom, index) => (
      <div
        key={symptom}
        className={`symptom ${selectedSymptoms.includes(symptom) ? 'selected' : ''}`}
        onClick={() => handleSymptomChange(symptom)}
      >
        <span>{symptom}</span>
      </div>
    ))}
  </div>
  <button onClick={handleCheckButtonClick} className='click12'>Check</button>
  {potentialIllnesses.length > 0 && (
    <div className='illness'>
      <h3>Potential Illnesses:</h3>
      <ul>
        {potentialIllnesses.map((illness, index) => (
          <li key={index}>{illness}</li>
        ))}
      </ul>
    </div>
  )}
</div>

          </div>
        </div>
      </div>

      
      {/* <section id="how-it-works" className="home-why">
        <div className="home-heading13">
          <h2 className="home-header09">How to make an Appointment</h2>
        </div>
        <div className="home-content5">
          <div className="home-video">
            <video src poster="/video-800h.png" className="home-video1"></video>
            <div className="home-play">
              <img alt="image" src="/Icons/play.svg" className="home-image23" />
            </div>
          </div>
          <div className="home-caption7"></div>
        </div>
      </section>
      <div className="home-footer">
        <h1 className="home-text78">TALK TO US!?</h1>
        <div className="home-left1">
          <div className="home-brand">
            <img
              alt="image"
              src="/Branding/logo-2.svg"
              className="home-image24"
            />
            <p className="home-text79">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-socials">
            <div className="social">
              <img
                alt="image"
                src="/Icons/insider.svg"
                className="home-image25"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/instagram.svg"
                className="home-image26"
              />
            </div>
            <div className="social">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image27"
              />
            </div>
          </div>
          <div className="home-legal">
            <span className="home-copyright">
              © 2022 finbest. All Rights Reserved.
            </span>
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
        </div>
        <div className="home-container06">
          <span className="home-header10">Ask Expert →</span>
          <span className="home-header11">Email Support →</span>
          <span className="home-header12">Chat with us →</span>
        </div>
        <div className="home-right1">
          <div className="home-list1">
            <span className="home-header13">Menu</span>
            <div className="home-links1">
              <span className="home-link4">Home</span>
              <span className="home-link5">About</span>
              <span className="home-link6">Services</span>
              <span className="home-link7">Blog</span>
              <span className="home-link8">Support</span>
            </div>
          </div>
        </div>
        <div className="home-legal1">
          <div className="home-row3">
            <span className="legal-link">Privacy Policy</span>
            <span className="legal-link">Terms of Use</span>
          </div>
          <span className="home-copyright5">
            © 2024 HealthZone. All Rights Reserved.
          </span>
        </div>
      </div> */}
      <div>
        <div className="home-container08">
          <Script
            html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container10">
          <Script
            html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container12">
          <Script
            html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
