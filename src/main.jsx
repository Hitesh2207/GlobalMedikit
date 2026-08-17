import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Search,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  ShoppingBag,
  MessageCircle,
  Mic,
  Send,
  Download,
  ShieldCheck,
  Factory,
  Globe2,
  FileText,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  SlidersHorizontal,
  Plus,
  Minus,
  ExternalLink,
  HeartPulse,
  Wind,
  Droplets,
  Syringe,
  Activity,
  Stethoscope,
  Boxes,
  Users,
  CalendarDays,
} from "lucide-react";
import "./styles.css";
<<<<<<< HEAD
import {
  InternationalProvider,
  MarketLanguageSwitcher,
  useInternational,
} from "./i18n/International";
=======
>>>>>>> 9f049f3f2fc698f1e80361bbe0ed54921074b25a

const categories = [
  {
    id: "infusion",
    name: "Infusion Therapy",
    desc: "IV access, infusion and fluid-delivery products",
    icon: Droplets,
  },
  {
    id: "critical",
    name: "Critical Care",
    desc: "Airway, ICU and critical-care disposables",
    icon: HeartPulse,
  },
  {
    id: "anaesthesia",
    name: "Regional Anaesthesia",
    desc: "Spinal and regional anaesthesia products",
    icon: Syringe,
  },
  {
    id: "respiratory",
    name: "Respiratory Care",
    desc: "Oxygen, suction and respiratory products",
    icon: Wind,
  },
  {
    id: "blood",
    name: "Blood Banking",
    desc: "Blood collection and administration solutions",
    icon: Droplets,
  },
  {
    id: "urology",
    name: "Urology",
    desc: "Catheters and urological procedure products",
    icon: Activity,
  },
  {
    id: "surgery",
    name: "Surgery",
    desc: "Surgical, drainage and procedure products",
    icon: Stethoscope,
  },
  {
    id: "gastro",
    name: "Gastroenterology",
    desc: "Products for gastroenterology procedures",
    icon: Activity,
  },
  {
    id: "misc",
    name: "Miscellaneous",
    desc: "Additional hospital and medical disposables",
    icon: Boxes,
  },
];

const products = [
  {
    id: "glosuc",
    name: "Glosuc",
    title: "Suction Catheter",
    cat: "respiratory",
    desc: "Suction catheter for removal of secretion from mouth, trachea and bronchial tubes.",
    tags: ["Medical-grade PVC", "Colour coded", "Sterile", "Multiple sizes"],
    kind: "suction",
  },
  {
    id: "glomask",
    name: "Glomask",
    title: "Oxygen Face Mask",
    cat: "respiratory",
    desc: "Transparent oxygen mask designed for administration of oxygen to patients.",
    tags: ["Adult & child", "Nasal clip", "Elastic band", "Tubing"],
    kind: "mask",
  },
  {
    id: "glospine",
    name: "Glospine",
    title: "Spinal Needle",
    cat: "anaesthesia",
    desc: "Spinal needle portfolio with Quincke Bevel and Pencil Point variants.",
    tags: ["Quincke", "Pencil Point", "Sterile", "Multiple gauges"],
    kind: "needle",
  },
  {
    id: "glociser",
    name: "Glociser",
    title: "Respiratory Exerciser",
    cat: "respiratory",
    desc: "Respiratory exerciser designed to help develop, improve and maintain respiratory fitness.",
    tags: [
      "3-ball model",
      "Air filter",
      "Calibrated chambers",
      "Visual feedback",
    ],
    kind: "exerciser",
  },
  {
    id: "glofab",
    name: "GloFab",
    title: "Airway Solution",
    cat: "critical",
    desc: "Airway product family for clinical procedures and critical-care applications.",
    tags: ["Airway", "Single use options", "Clinical design", "Sterile"],
    kind: "airway",
  },
  {
    id: "glocent",
    name: "Glocent",
    title: "Central Venous Catheter",
    cat: "critical",
    desc: "Central venous catheter portfolio for long-term venous access.",
    tags: ["Single lumen", "Radiopaque", "Flexible", "Sterile"],
    kind: "catheter",
  },
  {
    id: "glodrain",
    name: "Glodrain",
    title: "Drainage Product",
    cat: "surgery",
    desc: "Drainage solutions for controlled postoperative and procedural drainage.",
    tags: ["Surgical use", "Sterile", "Clinical handling", "Multiple formats"],
    kind: "drain",
  },
  {
    id: "glofon",
    name: "Glofon",
    title: "IV Access Product",
    cat: "infusion",
    desc: "IV access products designed for dependable hospital fluid and medication delivery.",
    tags: ["IV access", "Colour coded", "Sterile", "Hospital use"],
    kind: "iv",
  },
  {
    id: "blood-set",
    name: "Blood Administration Set",
    title: "Blood Administration Set",
    cat: "blood",
    desc: "Transfusion set specially designed to transfuse blood.",
    tags: ["Filter mesh", "Regulator clamp", "Kink resistant", "Sterile"],
    kind: "blood",
  },
  {
    id: "iv-catheter",
    name: "IV Catheter",
    title: "I.V. Catheter",
    cat: "infusion",
    desc: "I.V. catheter family with designs focused on orientation, insertion and needlestick protection.",
    tags: ["Colour coded", "Needle cover", "Sterile", "Multiple gauges"],
    kind: "iv",
  },
];

const events = [
  {
    name: "Medical Fair Asia",
    date: "9–11 Sep 2026",
    place: "Marina Bay Sands, Singapore",
    booth: "2D28",
  },
  {
    name: "World Health Expo – Johannesburg",
    date: "6–8 Oct 2026",
    place: "Gallagher Convention Centre",
    booth: "H3.A20",
  },
  {
    name: "MEDICA",
    date: "16–19 Nov 2026",
    place: "Düsseldorf, Germany",
    booth: "Hall 7A • E 07-1",
  },
  {
    name: "WHX Dubai",
    date: "25–28 Jan 2027",
    place: "Dubai Exhibition Centre",
    booth: "Hall 7 • D4",
  },
];

function ProductVisual({ kind = "device", small = false }) {
  return (
    <div className={"product-visual " + kind + (small ? " small" : "")}>
      <div className="visual-grid" />
      {kind === "mask" && (
        <>
          <div className="mask-shape" />
          <div className="mask-tube" />
        </>
      )}
      {kind === "suction" && (
        <>
          <div className="suction-tube" />
          <div className="suction-connector" />
        </>
      )}
      {kind === "needle" && (
        <>
          <div className="needle-body" />
          <div className="needle-tip" />
        </>
      )}
      {kind === "exerciser" && (
        <>
          <div className="exercise-body">
            <i />
            <i />
            <i />
          </div>
          <div className="exercise-tube" />
        </>
      )}
      {kind === "airway" && (
        <>
          <div className="airway-loop" />
          <div className="airway-balloon" />
        </>
      )}
      {kind === "catheter" && (
        <>
          <div className="catheter-main" />
          <div className="catheter-hub" />
        </>
      )}
      {kind === "drain" && (
        <>
          <div className="drain-bag" />
          <div className="drain-tube" />
        </>
      )}
      {kind === "iv" && (
        <>
          <div className="iv-chamber" />
          <div className="iv-line" />
        </>
      )}
      {kind === "blood" && (
        <>
          <div className="blood-chamber" />
          <div className="blood-line" />
          <div className="blood-spike" />
        </>
      )}
<<<<<<< HEAD
=======
      {kind === "ivcatheter" && (
        <>
          <div className="iv-chamber" />
          <div className="iv-line" />
          <div className="catheter-main" />
          <div className="catheter-hub" />
        </>
      )}
>>>>>>> 9f049f3f2fc698f1e80361bbe0ed54921074b25a
      {kind === "device" && <div className="generic-device" />}
      <span className="visual-mark">GLOBAL MEDIKIT</span>
    </div>
  );
}

function Logo() {
  return (
    <img
      className="brand-logo"
<<<<<<< HEAD
      src={`${import.meta.env.BASE_URL}assets/Medikit-logo-Final.svg`}
      // src="/assets/Medikit-logo-Final.svg"
=======
      // src="/assets/Medikit-logo-Final.svg"
      src={`${import.meta.env.BASE_URL}assets/Medikit-logo-Final.svg`}
>>>>>>> 9f049f3f2fc698f1e80361bbe0ed54921074b25a
      // onError={(e) => {
      //   e.currentTarget.src = "/assets/Medikit-logo-Final.svg";
      // }}
      alt="Global Medikit"
    />
  );
}

function App() {
<<<<<<< HEAD
  const { t, currentMarket } = useInternational();
=======
>>>>>>> 9f049f3f2fc698f1e80361bbe0ed54921074b25a
  const [page, setPage] = useState("home");
  const [menu, setMenu] = useState(false);
  const [productMenu, setProductMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [basket, setBasket] = useState([]);
  const [selected, setSelected] = useState(null);
  const [enquiry, setEnquiry] = useState(false);
  const [ai, setAi] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    {
      role: "ai",
      text: "Hello. I’m Medikit AI. I can help you find products, compare product information, request a catalogue, or connect you with sales.",
    },
  ]);
  const [aiInput, setAiInput] = useState("");

  const go = (p) => {
    setPage(p);
    setMenu(false);
    setProductMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "all" || p.cat === category) &&
          (p.name + " " + p.title + " " + p.desc)
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, category],
  );
  const add = (p) =>
    setBasket((b) => (b.some((x) => x.id === p.id) ? b : b.concat(p)));
  const sendAI = () => {
    if (!aiInput.trim()) return;
    const text = aiInput.trim();
    setAiMessages((m) => m.concat({ role: "user", text }));
    let found = products.filter((p) =>
      (p.name + " " + p.title + " " + p.desc).toLowerCase().includes(
        text
          .toLowerCase()
          .replace(/i need|looking for|find|a |an /g, "")
          .trim(),
      ),
    );
    let reply;
    if (/oxygen|mask/i.test(text))
      found = products.filter((p) => p.id === "glomask");
    else if (/suction/i.test(text))
      found = products.filter((p) => p.id === "glosuc");
    else if (/spinal|anaesthesia|anesthesia/i.test(text))
      found = products.filter((p) => p.id === "glospine");
    else if (/respiratory/i.test(text))
      found = products.filter((p) => p.cat === "respiratory");
    reply = found.length
      ? `I found ${Math.min(found.length, 3)} relevant product${found.length > 1 ? "s" : ""} in the approved product catalogue.`
      : "I can help search the approved catalogue. Try a product name, category or application such as “oxygen mask”, “suction catheter” or “respiratory care”.";
    setTimeout(
      () =>
        setAiMessages((m) =>
          m.concat({ role: "ai", text: reply, products: found.slice(0, 3) }),
        ),
      250,
    );
    setAiInput("");
  };

  return (
    <div className="app">
      <div className="utility">
        <div className="container utility-in">
          <span>GLOBAL MEDIKIT LIMITED</span>
          <span>Medical Devices • Hospital Products • International B2B</span>
          <div>
            <span>65+ Countries</span>
<<<<<<< HEAD
            <span>
              {currentMarket.flag} {currentMarket.name}
            </span>
=======
>>>>>>> 9f049f3f2fc698f1e80361bbe0ed54921074b25a
            <span>ISO 13485</span>
            <span>EU MDR</span>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header-in">
          <button className="logo-button" onClick={() => go("home")}>
            <Logo />
          </button>
          <nav className={menu ? "nav mobile-open" : "nav"}>
            <button onClick={() => go("home")}>Home</button>
            <button onClick={() => go("company")}>Company</button>
            <button
              className="products-nav"
              onClick={() => setProductMenu(!productMenu)}
            >
              Products <ChevronDown size={14} />
            </button>
            <button onClick={() => go("quality")}>Quality</button>
            <button onClick={() => go("manufacturing")}>Manufacturing</button>
            <button onClick={() => go("global")}>Global Presence</button>
            <button onClick={() => go("resources")}>Resources</button>
            <button onClick={() => go("contact")}>Contact</button>
          </nav>
          <div className="head-actions">
<<<<<<< HEAD
            <MarketLanguageSwitcher />
=======
>>>>>>> 9f049f3f2fc698f1e80361bbe0ed54921074b25a
            <button className="find-button" onClick={() => go("products")}>
              <Search size={16} />
              <span>Find product</span>
            </button>
            <button className="enquire-button" onClick={() => setEnquiry(true)}>
              Enquire <ArrowUpRight size={15} />
            </button>
            <button className="basket-button" onClick={() => setEnquiry(true)}>
              <ShoppingBag size={18} />
              {basket.length > 0 && <b>{basket.length}</b>}
            </button>
            <button className="menu-button" onClick={() => setMenu(!menu)}>
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {productMenu && (
          <div className="product-mega">
            <div className="container mega-inner">
              <div className="mega-title">
                <span>PRODUCT PORTFOLIO</span>
                <h3>
                  Medical devices for
                  <br />
                  the whole hospital.
                </h3>
                <p>
                  Browse by clinical category and move directly into the product
                  catalogue.
                </p>
                <button onClick={() => go("products")}>
                  View all products <ArrowRight size={15} />
                </button>
              </div>
              <div className="mega-cats">
                {categories.map((c) => {
                  const I = c.icon;
                  return (
                    <button
                      key={c.id}
                      onClick={() => {
                        setCategory(c.id);
                        go("products");
                      }}
                    >
                      <I />
                      <div>
                        <b>{c.name}</b>
                        <small>{c.desc}</small>
                      </div>
                      <ChevronRight />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {page === "home" && (
        <Home
          go={go}
          add={add}
          setSelected={setSelected}
          setEnquiry={setEnquiry}
        />
      )}
      {page === "products" && (
        <Products
          products={filtered}
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          add={add}
          setSelected={setSelected}
        />
      )}
      {page === "company" && <Company go={go} />}
      {page === "quality" && <Quality />}
      {page === "manufacturing" && <Manufacturing />}
      {page === "global" && <Global go={go} />}
      {page === "resources" && <Resources setEnquiry={setEnquiry} />}
      {page === "contact" && <Contact setEnquiry={setEnquiry} />}

      <Footer go={go} />

      <button className="ai-launch" onClick={() => setAi(!ai)}>
        <MessageCircle size={19} />
        <span>Medikit AI</span>
      </button>
      {ai && (
        <div className="ai-panel">
          <div className="ai-head">
            <div>
              <b>MEDIKIT AI</b>
              <small>Product & sales assistant</small>
            </div>
            <button onClick={() => setAi(false)}>
              <X />
            </button>
          </div>
          <div className="ai-body">
            {aiMessages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "msg user" : "msg"}>
                <p>{m.text}</p>
                {m.products && (
                  <div className="ai-products">
                    {m.products.map((p) => (
                      <button key={p.id} onClick={() => setSelected(p)}>
                        <span>{p.name}</span>
                        <small>{p.title}</small>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="ai-quick">
            <button onClick={() => setAiInput("I need an oxygen mask")}>
              Find oxygen mask
            </button>
            <button onClick={() => setAiInput("I need a suction catheter")}>
              Find suction catheter
            </button>
            <button onClick={() => setAiInput("Compare products")}>
              Compare
            </button>
          </div>
          <div className="ai-input">
            <input
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendAI()}
              placeholder="Ask about a product..."
            />
            <button onClick={sendAI}>
              <Send size={16} />
            </button>
          </div>
          <div className="ai-channels">
            <button
              onClick={() =>
                alert(
                  "Connect this button to the official WhatsApp Business Cloud API.",
                )
              }
            >
              <MessageCircle /> WhatsApp AI
            </button>
            <button
              onClick={() =>
                alert("Connect this button to your selected Voice AI provider.")
              }
            >
              <Mic /> Voice AI
            </button>
          </div>
        </div>
      )}

      {selected && (
        <ProductModal
          product={selected}
          add={add}
          close={() => setSelected(null)}
          enquire={() => {
            setSelected(null);
            setEnquiry(true);
          }}
        />
      )}
      {enquiry && (
        <EnquiryModal basket={basket} close={() => setEnquiry(false)} />
      )}
    </div>
  );
}

function Home({ go, add, setSelected, setEnquiry }) {
  return (
    <main>
      <section className="product-hero">
        <div className="container hero-in">
          <div className="hero-copy">
            <span className="eyebrow">
              MEDICAL DEVICES • INDIA • GLOBAL MARKETS
            </span>
            <h1>
              Medical devices.
              <br />
              <strong>Made for better care.</strong>
            </h1>
            <p>
              Explore Global Medikit's medical disposables and hospital products
              — organized around the clinical needs of hospitals, professionals
              and healthcare partners.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("products")}>
                Explore products <ArrowRight size={17} />
              </button>
              <button className="secondary" onClick={() => setEnquiry(true)}>
                Send an enquiry
              </button>
            </div>
            <div className="hero-stats">
              <div>
                <b>25+</b>
                <span>Years experience</span>
              </div>
              <div>
                <b>65+</b>
                <span>Countries</span>
              </div>
              <div>
                <b>9</b>
                <span>Product categories</span>
              </div>
            </div>
          </div>
          <div className="hero-products">
            <div className="hero-caption">
              <span>FEATURED PRODUCT</span>
              <b>IV CATHETER</b>
              <small>I.V. Catheter</small>
            </div>
            <ProductVisual kind="iv" />
            <div className="hero-product-info">
              <span>Infusion Therapy</span>
              <h3>IV Catheter</h3>
              <p>I.V. Catheter</p>
              <button onClick={() => setSelected(products[9])}>
                View product <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="search-strip">
        <div className="container search-in">
          <div>
            <span>PRODUCT FINDER</span>
            <h2>Find the right product.</h2>
          </div>
          <button onClick={() => go("products")}>
            <Search size={18} />
            <span>Search product, category, application...</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="section product-categories">
        <div className="container">
          <div className="section-top">
            <div>
              <span className="eyebrow">01 / PRODUCT PORTFOLIO</span>
              <h2>
                Products across
                <br />
                <strong>clinical categories.</strong>
              </h2>
            </div>
            <button className="text-link" onClick={() => go("products")}>
              View complete catalogue <ArrowRight size={16} />
            </button>
          </div>
          <div className="category-grid">
            {categories.map((c, i) => {
              const I = c.icon;
              return (
                <button
                  key={c.id}
                  className="category-tile"
                  onClick={() => {
                    go("products");
                  }}
                >
                  <span className="cat-no">0{i + 1}</span>
                  <I />
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <ArrowUpRight className="tile-arrow" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section featured-products">
        <div className="container">
          <div className="section-top">
            <div>
              <span className="eyebrow">02 / FEATURED PRODUCTS</span>
              <h2>
                Explore the <strong>range.</strong>
              </h2>
            </div>
            <button className="text-link" onClick={() => go("products")}>
              All products <ArrowRight size={16} />
            </button>
          </div>
          <div className="featured-grid">
            {products.slice(0, 6).map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                add={add}
                setSelected={setSelected}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section credibility">
        <div className="container credibility-grid">
          <div>
            <span className="eyebrow">03 / GLOBAL MEDIKIT AT A GLANCE</span>
            <h2>
              A long-term healthcare partner, <strong>built in India.</strong>
            </h2>
            <p>
              Global Medikit describes more than 25 years of manufacturing and
              marketing critical-care products across 65+ countries, with a
              broad medical-disposable portfolio and international distribution
              network.
            </p>
            <button className="text-link" onClick={() => go("company")}>
              About the company <ArrowRight size={16} />
            </button>
          </div>
          <div className="number-board">
            <div>
              <b>25+</b>
              <span>Years</span>
            </div>
            <div>
              <b>65+</b>
              <span>Countries</span>
            </div>
            <div>
              <b>9</b>
              <span>Categories</span>
            </div>
            <div>
              <b>1</b>
              <span>Global product portfolio</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section quality-home">
        <div className="container quality-grid">
          <div className="quality-panel">
            <ShieldCheck size={42} />
            <span>QUALITY ASSURANCE</span>
            <b>EN ISO 13485:2016</b>
            <small>Medical devices quality management</small>
            <hr />
            <b>EU MDR 2017/745</b>
            <small>Medical device regulatory framework</small>
          </div>
          <div>
            <span className="eyebrow">04 / QUALITY & MANUFACTURING</span>
            <h2>
              Quality is part of the <strong>product.</strong>
            </h2>
            <p>
              Global Medikit describes a quality-control system involving
              microbiological, chemical, physical and visual testing across the
              production process, supported by controlled manufacturing
              environments.
            </p>
            <div className="mini-points">
              <span>
                <CheckCircle2 />
                Testing at stages
              </span>
              <span>
                <CheckCircle2 />
                Controlled environment
              </span>
              <span>
                <CheckCircle2 />
                Process controls
              </span>
              <span>
                <CheckCircle2 />
                R&D capability
              </span>
            </div>
            <button className="text-link" onClick={() => go("quality")}>
              Explore quality <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <section className="section global-home">
        <div className="container global-grid">
          <div className="world-visual">
            <div className="world-map">
              <span className="india-dot">INDIA</span>
              {Array.from({ length: 38 }).map((_, i) => (
                <i
                  key={i}
                  style={{
                    left: `${8 + ((i * 23) % 87)}%`,
                    top: `${12 + ((i * 31) % 74)}%`,
                  }}
                />
              ))}
              <div className="world-core">
                <Globe2 />
                <b>65+</b>
                <span>COUNTRIES</span>
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">05 / GLOBAL PRESENCE</span>
            <h2>
              From India to <strong>65+ countries.</strong>
            </h2>
            <p>
              Global Medikit's public distribution information lists networks
              across the Americas, Europe, Africa, the Middle East, South East
              Asia and Russia.
            </p>
            <div className="region-tags">
              <span>Americas</span>
              <span>Europe</span>
              <span>Africa</span>
              <span>Middle East</span>
              <span>South East Asia</span>
              <span>Russia</span>
            </div>
            <button className="primary" onClick={() => go("global")}>
              Explore global presence <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      <section className="section events">
        <div className="container">
          <div className="section-top">
            <div>
              <span className="eyebrow">06 / EVENTS</span>
              <h2>
                Meet Global Medikit <strong>worldwide.</strong>
              </h2>
            </div>
            <button className="text-link" onClick={() => go("resources")}>
              All events <ArrowRight size={16} />
            </button>
          </div>
          <div className="events-grid">
            {events.map((e) => (
              <div className="event-card" key={e.name}>
                <span>{e.date}</span>
                <h3>{e.name}</h3>
                <p>{e.place}</p>
                <b>{e.booth}</b>
                <button onClick={() => setEnquiry(true)}>
                  Request a meeting <ArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="enquiry-band">
        <div className="container enquiry-band-in">
          <div>
            <span>FOR HOSPITALS • DISTRIBUTORS • PROCUREMENT TEAMS</span>
            <h2>Looking for a product?</h2>
            <p>Tell us what you need and our sales team can take it forward.</p>
          </div>
          <button className="light-button" onClick={() => setEnquiry(true)}>
            Start product enquiry <ArrowRight size={17} />
          </button>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ product, add, setSelected }) {
  const cat = categories.find((c) => c.id === product.cat)?.name;
  return (
    <article className="product-card">
      <button className="card-image" onClick={() => setSelected(product)}>
        <ProductVisual kind={product.kind} small />
        <span className="card-cat">{cat}</span>
      </button>
      <div className="card-body">
        <span className="card-code">{cat}</span>
        <h3>{product.name}</h3>
        <b>{product.title}</b>
        <p>{product.desc}</p>
        <div className="tag-row">
          {product.tags.slice(0, 2).map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="card-actions">
          <button onClick={() => setSelected(product)}>
            View details <ArrowUpRight size={14} />
          </button>
          <button className="add" onClick={() => add(product)}>
            <Plus size={14} /> Add to enquiry
          </button>
        </div>
      </div>
    </article>
  );
}

function Products({
  products,
  query,
  setQuery,
  category,
  setCategory,
  add,
  setSelected,
}) {
  return (
    <main className="inner">
      <PageHero
        eyebrow="PRODUCT CATALOGUE"
        title={
          <>
            Medical products,
            <br />
            <strong>organized for discovery.</strong>
          </>
        }
        text="Search Global Medikit products by name, category or clinical application. Product specifications should be confirmed against approved product documentation before procurement."
      />
      <section className="catalogue section">
        <div className="container">
          <div className="catalogue-toolbar">
            <div className="big-search">
              <Search />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search product, category, application..."
              />
            </div>
            <span>{products.length} products shown</span>
          </div>
          <div className="catalogue-layout">
            <aside className="filters">
              <b>FILTER PRODUCTS</b>
              <button
                className={category === "all" ? "active" : ""}
                onClick={() => setCategory("all")}
              >
                All products <span>{products.length}</span>
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  className={category === c.id ? "active" : ""}
                  onClick={() => setCategory(c.id)}
                >
                  {c.name}
                  <ChevronRight size={13} />
                </button>
              ))}
              <div className="catalogue-download">
                <Download />
                <b>Need the catalogue?</b>
                <p>Request the latest GloBrand or MediBrand catalogue.</p>
                <button>Request catalogue</button>
              </div>
            </aside>
            <div className="catalogue-products">
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  add={add}
                  setSelected={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

function Company({ go }) {
  return (
    <main className="inner">
      <PageHero
        eyebrow="COMPANY"
        title={
          <>
            Practical healthcare solutions,
            <br />
            <strong>patient-first.</strong>
          </>
        }
        text="Global Medikit describes more than 25 years of manufacturing and marketing critical-care products across 65 countries, with a focus on practical medical-disposable solutions."
      />
      <section className="section">
        <div className="container editorial">
          <span className="eyebrow">01 / ABOUT MEDIKIT</span>
          <div>
            <h2>
              Designed around the <strong>patient experience.</strong>
            </h2>
            <p>
              Global Medikit says it identifies need gaps and creates new
              service touch points by developing innovative medical disposables.
              Its stated USP is a painless patient experience, with
              patient-friendly devices intended to support medical professionals
              in diagnosis and treatment.
            </p>
            <p>
              The company also emphasizes long-term customer relationships,
              satisfaction and a customer-centric approach to deliverables.
            </p>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="container four-values">
          <Value
            icon={HeartPulse}
            title="Patient-first"
            text="Patient-friendly device thinking."
          />
          <Value
            icon={Factory}
            title="Manufacturing"
            text="High-tech manufacturing and process controls."
          />
          <Value
            icon={Globe2}
            title="Global"
            text="Distribution across 65+ countries."
          />
          <Value
            icon={Users}
            title="Relationships"
            text="Long-term customer partnerships."
          />
        </div>
      </section>
      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">02 / MISSION & VISION</span>
            <h2>
              Better healthcare through <strong>practical innovation.</strong>
            </h2>
          </div>
          <div>
            <p>
              <b>Vision:</b> provide high-quality, cost-effective healthcare
              leveraging technology toward more efficient treatment.
            </p>
            <p>
              <b>Mission:</b> provide advanced, pain-free healthcare solutions
              and a progressive environment for disease control and treatment by
              pioneering new-age medical disposable products.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Value({ icon: Icon, title, text }) {
  return (
    <div className="value">
      <Icon />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Quality() {
  return (
    <main className="inner">
      <PageHero
        eyebrow="QUALITY & R&D"
        title={
          <>
            Quality you can <strong>document.</strong>
          </>
        }
        text="Global Medikit's public quality information references EN ISO 13485:2016 / DIN EN ISO 13485:2016 and Regulation (EU) 2017/745, with testing and controlled production processes."
      />
      <section className="section">
        <div className="container quality-detail">
          <div className="certificate">
            <ShieldCheck size={56} />
            <span>QUALITY MANAGEMENT</span>
            <b>ISO 13485:2016</b>
            <small>Medical devices quality management system</small>
            <div className="cert-line" />
          </div>
          <div>
            <span className="eyebrow">01 / QUALITY CONTROL</span>
            <h2>
              Testing across the <strong>production process.</strong>
            </h2>
            <p>
              Global Medikit's quality page describes microbiological, chemical,
              physical and visual tests at stages of production, from
              raw-material procurement through manufacturing and assembly and
              final qualitative testing.
            </p>
            <div className="checks">
              <Check text="Microbiological testing" />
              <Check text="Chemical testing" />
              <Check text="Physical testing" />
              <Check text="Visual testing" />
              <Check text="Raw-material controls" />
              <Check text="Final qualitative testing" />
            </div>
          </div>
        </div>
      </section>
      <section className="section light-section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">02 / REGULATORY</span>
            <h2>
              EU MDR <strong>2017/745.</strong>
            </h2>
          </div>
          <div>
            <p>
              Global Medikit publicly announces certification according to the
              EU MDR 2017/745 framework. Use only current approved certificates
              and regulatory documents in the production website.
            </p>
            <button className="text-link">
              Request certificates <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
      {/* <section className="section paper">
        <div className="wrap cert-grid">
          <div className="cert-panel">
            <span>EU MDR</span>
            <b>2017/745</b>
            <small>Medical device regulatory framework</small>
            <button>
              View documentation <ExternalLink size={14} />
            </button>
          </div>
          <div className="cert-panel">
            <span>QUALITY</span>
            <b>ISO 13485:2016</b>
            <small>Medical devices quality management system</small>
            <button>
              View certificate <ExternalLink size={14} />
            </button>
          </div>
          <div className="cert-panel">
            <span>FACILITY</span>
            <b>Controlled manufacturing</b>
            <small>HVAC, HEPA and environmental controls</small>
            <button>
              Manufacturing details <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section> */}
>>>>>>> 9f049f3f2fc698f1e80361bbe0ed54921074b25a
    </main>
  );
}

function Check({ text }) {
  return (
    <div>
      <CheckCircle2 />
      {text}
    </div>
  );
}

function Manufacturing() {
  return (
    <main className="inner">
      <PageHero
        eyebrow="MANUFACTURING"
        title={
          <>
            High-tech manufacturing,
            <br />
            <strong>controlled processes.</strong>
          </>
        }
        text="Global Medikit describes its manufacturing plant at Selaqui, Dehradun as combining HVAC, HEPA filtration, positive pressure, controlled temperature and regulated humidity with process controls."
      />
      <section className="section">
        <div className="container factory-layout">
          <div className="factory-box">
            <Factory size={82} />
            <span>SELAQUI, DEHRADUN</span>
            <small>MANUFACTURING FACILITY</small>
          </div>
          <div>
            <span className="eyebrow">01 / FACILITY</span>
            <h2>
              Engineering, environment and <strong>quality.</strong>
            </h2>
            <p>
              The published manufacturing description references cutting-edge
              tools, robotics and statistical process controls, together with
              controlled environments for medical-device production.
            </p>
            <div className="manufacturing-list">
              <span>
                <CheckCircle2 />
                HVAC systems
              </span>
              <span>
                <CheckCircle2 />
                HEPA filtration
              </span>
              <span>
                <CheckCircle2 />
                Positive pressure
              </span>
              <span>
                <CheckCircle2 />
                Controlled temperature
              </span>
              <span>
                <CheckCircle2 />
                Regulated humidity
              </span>
              <span>
                <CheckCircle2 />
                Statistical process controls
              </span>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======
      {/* <section className="section">
        <div className="wrap">
          <span className="section-number">02 / PRODUCT DEVELOPMENT</span>
          <div className="rd-grid">
            <div>
              <Microscope />
              <h3>Materials & engineering</h3>
              <p>
                In-house development capability supports medical-device design,
                manufacturing techniques and practical production answers.
              </p>
            </div>
            <div>
              <FlaskConical />
              <h3>Testing & verification</h3>
              <p>
                Product quality is supported by testing disciplines spanning
                physical, chemical, microbiological and visual checks.
              </p>
            </div>
            <div>
              <ShieldCheck />
              <h3>Patient-friendly design</h3>
              <p>
                The company positions patient comfort and safer use as key
                considerations in product development.
              </p>
            </div>
          </div>
        </div>
      </section> */}
>>>>>>> 9f049f3f2fc698f1e80361bbe0ed54921074b25a
    </main>
  );
}

function Global({ go }) {
  return (
    <main className="inner">
      <PageHero
        eyebrow="GLOBAL PRESENCE"
        title={
          <>
            India to the world.
            <br />
            <strong>65+ countries.</strong>
          </>
        }
        text="Global Medikit's public distribution information lists customers across the Americas, Europe, Africa, the Middle East, South East Asia and Russia."
      />
      <section className="section">
        <div className="container global-detail">
          <div className="global-number">
            <Globe2 />
            <b>65+</b>
            <span>COUNTRIES</span>
          </div>
          <div>
            <span className="eyebrow">01 / DISTRIBUTION NETWORK</span>
            <h2>
              Wherever you are, <strong>we're never away.</strong>
            </h2>
            <p>
              Global Medikit describes an extensive distributor network serving
              international markets. Use the website to make product discovery
              and distributor enquiries easier for overseas customers.
            </p>
            <div className="region-tags large">
              <span>Americas</span>
              <span>Europe</span>
              <span>Africa</span>
              <span>Middle East</span>
              <span>South East Asia</span>
              <span>Russia</span>
            </div>
            <button className="primary" onClick={() => go("contact")}>
              International enquiry <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>
      <section className="section dark-map">
        <div className="container">
          <div className="map-grid">
            {Array.from({ length: 60 }).map((_, i) => (
              <i
                key={i}
                style={{
                  left: `${4 + ((i * 19) % 92)}%`,
                  top: `${8 + ((i * 37) % 84)}%`,
                }}
              />
            ))}
            <div className="map-label">
              <Globe2 />
              <b>GLOBAL MEDIKIT</b>
              <span>INDIA → WORLD</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Resources({ setEnquiry }) {
  return (
    <main className="inner">
      <PageHero
        eyebrow="RESOURCES"
        title={
          <>
            Documents for <strong>better decisions.</strong>
          </>
        }
        text="Product catalogues, datasheets, certificates and events can become a central resource hub for hospitals, distributors and procurement teams."
      />
      <section className="section">
        <div className="container resource-grid">
          <Resource
            icon={FileText}
            title="GloBrand Catalogue"
            text="Request the latest product catalogue."
            action={setEnquiry}
          />
          <Resource
            icon={FileText}
            title="MediBrand Catalogue"
            text="Request the latest MediBrand catalogue."
            action={setEnquiry}
          />
          <Resource
            icon={ShieldCheck}
            title="Quality Certificates"
            text="Request current approved quality and regulatory documents."
            action={setEnquiry}
          />
          <Resource
            icon={CalendarDays}
            title="Events"
            text="Meet Global Medikit at international healthcare events."
            action={setEnquiry}
          />
        </div>
      </section>
      <section className="section light-section">
        <div className="container">
          <span className="eyebrow">01 / UPCOMING EVENTS</span>
          <div className="event-list">
            {events.map((e) => (
              <div className="event-row" key={e.name}>
                <span>{e.date}</span>
                <b>{e.name}</b>
                <small>{e.place}</small>
                <em>{e.booth}</em>
                <button onClick={() => setEnquiry(true)}>
                  Meeting request <ArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Resource({ icon: Icon, title, text, action }) {
  return (
    <div className="resource">
      <Icon />
      <span>RESOURCE</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <button onClick={() => action(true)}>
        Request / download <ArrowRight size={15} />
      </button>
    </div>
  );
}

function Contact({ setEnquiry }) {
  return (
    <main className="inner">
      <PageHero
        eyebrow="CONTACT"
        title={
          <>
            Let's discuss your <strong>product requirement.</strong>
          </>
        }
        text="Connect with Global Medikit for product information, distribution, catalogues, certificates or business enquiries."
      />
      <section className="section">
        <div className="container contact-layout">
          <div>
            <span className="eyebrow">01 / CONTACT GLOBAL MEDIKIT</span>
            <h2>
              Connect with the <strong>right team.</strong>
            </h2>
            <div className="contact-cards">
              <div>
                <MapPin />
                <b>Registered Office</b>
                <p>
                  3, Dr. G.C. Narang Marg,
                  <br />
                  New Delhi – 110 007, India
                </p>
              </div>
              <div>
                <Factory />
                <b>Works</b>
                <p>
                  K. No. 323 (MI), Camp Road, Selaqui,
                  <br />
                  Dehradun – 248197, India
                </p>
              </div>
              <div>
                <Phone />
                <b>International Sales</b>
                <p>+91 11 27667888</p>
              </div>
              <div>
                <Phone />
                <b>Domestic Sales</b>
                <p>+91 11 27662188/89</p>
              </div>
              <div>
                <Mail />
                <b>Email</b>
                <p>info@globalmedikit.in</p>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <span>PRODUCT ENQUIRY</span>
            <h3>Tell us what you need.</h3>
            <input placeholder="Name" />
            <input placeholder="Company" />
            <input placeholder="Business email" />
            <input placeholder="Country" />
            <textarea
              rows="6"
              placeholder="Product / quantity / requirement"
            ></textarea>
            <button className="primary full" onClick={() => setEnquiry(true)}>
              Open enquiry form <Send size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductModal({ product, add, close, enquire }) {
  return (
    <div className="modal-back" onClick={close}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close}>
          <X />
        </button>
        <ProductVisual kind={product.kind} />
        <div className="modal-info">
          <span className="eyebrow">
            {categories.find((c) => c.id === product.cat)?.name}
          </span>
          <h2>{product.name}</h2>
          <h4>{product.title}</h4>
          <p>{product.desc}</p>
          <h5>Product highlights</h5>
          <ul>
            {product.tags.map((t) => (
              <li key={t}>
                <CheckCircle2 />
                {t}
              </li>
            ))}
          </ul>
          <div className="modal-actions">
            <button
              className="primary"
              onClick={() => {
                add(product);
                enquire();
              }}
            >
              Request information <ArrowRight size={16} />
            </button>
            <button className="secondary" onClick={() => add(product)}>
              <Plus size={16} /> Add to enquiry
            </button>
          </div>
          <div className="notice">
            Specifications, regulatory status and availability should be
            confirmed against approved product documentation.
          </div>
        </div>
      </div>
    </div>
  );
}

function EnquiryModal({ basket, close }) {
  const [sent, setSent] = useState(false);
  return (
    <div className="modal-back" onClick={close}>
      <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close}>
          <X />
        </button>
        {sent ? (
          <div className="success">
            <CheckCircle2 size={48} />
            <h2>Enquiry captured.</h2>
            <p>
              This demo is ready to connect to the Spring Boot enquiry API and
              sales workflow.
            </p>
            <button className="primary" onClick={close}>
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="eyebrow">B2B PRODUCT ENQUIRY</span>
            <h2>Request product information.</h2>
            <p>
              Build an enquiry basket instead of checking out like a consumer
              store.
            </p>
            {basket.length > 0 ? (
              <div className="basket">
                {basket.map((p) => (
                  <div key={p.id}>
                    <b>{p.name}</b>
                    <span>{p.title}</span>
                    <input placeholder="Qty" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty">
                No products added yet. You can still submit a general
                requirement.
              </div>
            )}
            <div className="two-input">
              <input placeholder="Name" />
              <input placeholder="Company" />
            </div>
            <div className="two-input">
              <input placeholder="Business email" />
              <input placeholder="Country" />
            </div>
            <textarea
              rows="4"
              placeholder="Requirement / quantity / application"
            ></textarea>
            <button className="primary full" onClick={() => setSent(true)}>
              Submit enquiry <Send size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function Footer({ go }) {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            Medical disposables and hospital products for healthcare partners
            worldwide.
          </p>
        </div>
        <div>
          <b>Products</b>
          {categories.slice(0, 5).map((c) => (
            <button key={c.id} onClick={() => go("products")}>
              {c.name}
            </button>
          ))}
        </div>
        <div>
          <b>Company</b>
          <button onClick={() => go("company")}>Company</button>
          <button onClick={() => go("quality")}>Quality & R&D</button>
          <button onClick={() => go("manufacturing")}>Manufacturing</button>
          <button onClick={() => go("global")}>Global Presence</button>
        </div>
        <div>
          <b>Contact</b>
          <span>3, Dr. G.C. Narang Marg, New Delhi – 110 007, India</span>
          <span>+91 11 27662182</span>
          <span>info@globalmedikit.in</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Global Medikit Limited</span>
        <span>Product catalogue • Quality • Global B2B</span>
      </div>
    </footer>
  );
}

<<<<<<< HEAD
createRoot(document.getElementById("root")).render(
  <InternationalProvider>
    <App />
  </InternationalProvider>,
);
=======
createRoot(document.getElementById("root")).render(<App />);
>>>>>>> 9f049f3f2fc698f1e80361bbe0ed54921074b25a
