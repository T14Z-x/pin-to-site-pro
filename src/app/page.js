"use client";

import { useEffect, useMemo, useState } from "react";

const CATEGORY_CONTENT = {
  restaurant: {
    label: "Restaurant",
    about:
      "A hospitality-first restaurant brand that focuses on warm service, fresh ingredients, and memorable experiences.",
    ctaPrimary: "Reserve a Table",
    ctaSecondary: "Get Directions",
    highlights: [
      "Chef-led seasonal menu updates",
      "Fast service without cutting quality",
      "Designed for family and group dining"
    ],
    services: [
      { title: "Signature Menu", description: "House specialties, curated tasting sets, and rotating chef picks." },
      { title: "Family Combos", description: "Value-driven meal bundles built for groups and busy evenings." },
      { title: "Catering", description: "Event catering for office lunches, private parties, and celebrations." },
      { title: "Private Events", description: "Dedicated event support for birthdays, anniversaries, and corporate dinners." },
      { title: "Pickup and Delivery", description: "Reliable local delivery and streamlined online pickup workflow." },
      { title: "Weekly Specials", description: "Limited-time dishes and bundle offers to keep repeat visits exciting." }
    ],
    menuItems: [
      { name: "Cedar Grill Chicken Bowl", detail: "Charred vegetables, herbed rice, lemon tahini", price: "$14" },
      { name: "Slow-Cooked Beef Plate", detail: "House gravy, mashed potatoes, roasted garlic", price: "$18" },
      { name: "Coastal Salmon Citrus", detail: "Pan-seared salmon, saffron quinoa, greens", price: "$22" },
      { name: "Woodfire Veggie Flatbread", detail: "Smoked tomato sauce, basil oil, feta", price: "$13" },
      { name: "Signature Pasta Nero", detail: "Black garlic cream, parmesan, herb crumbs", price: "$17" },
      { name: "Seasonal Dessert Duo", detail: "Chef pastry selection", price: "$9" }
    ],
    metrics: [
      { value: "4.8/5", label: "Average customer rating" },
      { value: "12 min", label: "Average table wait" },
      { value: "98%", label: "Order accuracy score" }
    ],
    process: ["Choose your slot online", "Get instant booking confirmation", "Enjoy service with real-time support"],
    testimonials: [
      { quote: "The service feels premium and the team always remembers our preferences.", author: "Sana R.", role: "Regular Guest" },
      { quote: "Our office orders every Friday because delivery is always on time.", author: "M. Carter", role: "Operations Manager" }
    ],
    faqs: [
      { q: "Do you accept same-day reservations?", a: "Yes. Same-day reservations are available based on live table availability." },
      { q: "Do you support dietary requests?", a: "Yes. Vegetarian, gluten-friendly, and allergy-aware options are available." },
      { q: "Can we book for large groups?", a: "Yes. Group and private event arrangements are available with advance notice." }
    ]
  },
  dentist: {
    label: "Dentist",
    about:
      "Modern dental care designed for comfort, transparency, and reliable treatment outcomes for every age group.",
    ctaPrimary: "Book Appointment",
    ctaSecondary: "Find Clinic",
    highlights: [
      "Transparent plans before treatment starts",
      "Comfort-first procedures and modern tools",
      "Emergency appointments for urgent cases"
    ],
    services: [
      { title: "Preventive Checkups", description: "Routine exams and cleanings that prevent long-term dental issues." },
      { title: "Cosmetic Dentistry", description: "Whitening, smile correction, and personalized cosmetic plans." },
      { title: "Restorative Care", description: "Fillings, crowns, and advanced repair designed for longevity." },
      { title: "Root Canal Care", description: "Precise pain-managed root canal treatment by experienced clinicians." },
      { title: "Pediatric Dentistry", description: "Child-friendly dental care and education for healthy habits." },
      { title: "Emergency Visits", description: "Same-day support for severe pain, broken teeth, and urgent problems." }
    ],
    metrics: [
      { value: "4.9/5", label: "Patient satisfaction" },
      { value: "24h", label: "Emergency response window" },
      { value: "92%", label: "Follow-up completion rate" }
    ],
    process: ["Share symptoms and schedule", "Receive exam and treatment plan", "Track recovery with follow-up reminders"],
    testimonials: [
      { quote: "Everything was explained clearly before treatment and the staff was excellent.", author: "A. Freeman", role: "Patient" },
      { quote: "Best dental appointment experience we have had as a family.", author: "Nabila K.", role: "Parent" }
    ],
    faqs: [
      { q: "Do you handle emergency dental pain?", a: "Yes. Emergency slots are prioritized during clinic hours." },
      { q: "Can I book online?", a: "Yes. Online appointment booking is available with instant confirmation." },
      { q: "Do you treat children?", a: "Yes. Pediatric care is available for children with gentle handling." }
    ]
  },
  hospital: {
    label: "Hospital / Clinic",
    about:
      "Community-centered healthcare with dependable diagnostics, compassionate staff, and coordinated long-term care.",
    ctaPrimary: "Schedule Visit",
    ctaSecondary: "View Location",
    highlights: [
      "Integrated diagnostics and treatment workflow",
      "Same-day consultation for priority conditions",
      "Clear patient communication at each step"
    ],
    services: [
      { title: "Primary Care", description: "General consultations, preventive care, and chronic condition monitoring." },
      { title: "Diagnostics", description: "Lab and screening services with structured reporting and guidance." },
      { title: "Urgent Care", description: "Fast support for high-priority non-emergency medical needs." },
      { title: "Vaccination", description: "Routine and seasonal immunization programs for all ages." },
      { title: "Specialist Referrals", description: "Coordinated referrals with complete patient handoff notes." },
      { title: "Telehealth Follow-ups", description: "Virtual follow-up care to reduce in-person travel burdens." }
    ],
    metrics: [
      { value: "7 days", label: "Weekly care availability" },
      { value: "30 min", label: "Priority visit processing" },
      { value: "96%", label: "Patient trust score" }
    ],
    process: ["Book consultation slot", "Complete triage and diagnostics", "Receive ongoing care roadmap"],
    testimonials: [
      { quote: "Their follow-up system kept our family informed at every stage.", author: "R. Jenkins", role: "Patient Family" },
      { quote: "Professional team, quick diagnostics, and clear treatment next steps.", author: "T. Iqbal", role: "Patient" }
    ],
    faqs: [
      { q: "Do you accept walk-ins?", a: "Yes for urgent care; scheduled visits are recommended for faster processing." },
      { q: "Can I access reports online?", a: "Yes. Digital report access is available for registered patients." },
      { q: "Do you provide telehealth?", a: "Yes. Follow-up consultations can be completed remotely." }
    ]
  },
  salon: {
    label: "Salon",
    about:
      "Style-focused salon services blending modern technique, personalized consultation, and premium aftercare support.",
    ctaPrimary: "Book a Session",
    ctaSecondary: "Visit Studio",
    highlights: [
      "Personalized looks based on skin and hair profile",
      "Certified stylists with trend and technique training",
      "Consistent premium-quality products"
    ],
    services: [
      { title: "Signature Haircuts", description: "Face-shape guided cuts for everyday confidence and easy maintenance." },
      { title: "Color and Highlights", description: "Custom shades and color-safe finishing for depth and shine." },
      { title: "Skin Treatments", description: "Targeted facials and skin routines matched to client goals." },
      { title: "Bridal Styling", description: "Full event styling with trial sessions and day-of execution." },
      { title: "Nail and Grooming", description: "Complete nail, grooming, and polish packages for all occasions." },
      { title: "Aftercare Plans", description: "Simple home-care routines recommended after each service." }
    ],
    metrics: [
      { value: "5k+", label: "Sessions completed" },
      { value: "4.9/5", label: "Client rating" },
      { value: "48h", label: "Rebooking turnaround" }
    ],
    process: ["Quick style consultation", "Service tailored to your profile", "Aftercare and rebooking support"],
    testimonials: [
      { quote: "The result looked exactly how I described it and lasted all week.", author: "L. Monroe", role: "Client" },
      { quote: "Professional team, clean space, and the booking process is effortless.", author: "Tania S.", role: "Client" }
    ],
    faqs: [
      { q: "Do you accept same-day appointments?", a: "Yes, depending on stylist availability for the selected service." },
      { q: "Do you offer bridal packages?", a: "Yes. Bridal and event packages include trial and final-day support." },
      { q: "How long are sessions?", a: "Most sessions range from 45 to 120 minutes based on service type." }
    ]
  },
  repair: {
    label: "Repair Service",
    about:
      "Reliable field technicians delivering rapid diagnostics, transparent pricing, and dependable repair execution.",
    ctaPrimary: "Get a Quote",
    ctaSecondary: "Service Area",
    highlights: [
      "Same-day support for urgent repair issues",
      "Clear estimates before work starts",
      "Preventive maintenance to reduce repeat failures"
    ],
    services: [
      { title: "On-site Diagnostics", description: "Fast issue detection using a proven troubleshooting checklist." },
      { title: "Emergency Repairs", description: "Priority dispatch for urgent breakdowns and critical failures." },
      { title: "Scheduled Maintenance", description: "Preventive visits that reduce downtime and major repairs." },
      { title: "Parts Replacement", description: "Quality component replacement with compatibility validation." },
      { title: "Performance Tune-ups", description: "System optimization for better reliability and lifespan." },
      { title: "Business Contracts", description: "Service-level plans for offices, stores, and facilities." }
    ],
    metrics: [
      { value: "90 min", label: "Average response time" },
      { value: "97%", label: "First-visit resolution rate" },
      { value: "2k+", label: "Local jobs completed" }
    ],
    process: ["Share problem details", "Receive quote and timeline", "Track technician arrival and completion"],
    testimonials: [
      { quote: "They solved our issue in one visit and explained everything clearly.", author: "R. Lee", role: "Homeowner" },
      { quote: "Fast dispatch, fair pricing, and excellent communication.", author: "Nadia P.", role: "Store Owner" }
    ],
    faqs: [
      { q: "Do you provide emergency repair?", a: "Yes. Emergency requests are prioritized based on local technician availability." },
      { q: "Is diagnosis charged separately?", a: "A diagnostic fee may apply and is shared before dispatch confirmation." },
      { q: "Do you offer service contracts?", a: "Yes. Monthly and quarterly maintenance plans are available." }
    ]
  },
  other: {
    label: "Local Business",
    about:
      "A customer-first local business focused on responsive service, quality delivery, and long-term trust.",
    ctaPrimary: "Contact Us",
    ctaSecondary: "Get Directions",
    highlights: [
      "Fast response and clear communication",
      "Simple processes with dependable delivery",
      "Built around long-term customer relationships"
    ],
    services: [
      { title: "Core Service Delivery", description: "Reliable day-to-day execution designed around customer needs." },
      { title: "Consultation", description: "Upfront consultation to align on scope, timing, and outcomes." },
      { title: "Custom Solutions", description: "Flexible options for unique requirements and edge cases." },
      { title: "Priority Support", description: "Responsive support for urgent issues and quick follow-ups." },
      { title: "Monthly Plans", description: "Service bundles for recurring support and predictable costs." },
      { title: "Client Success Tracking", description: "Periodic check-ins to keep quality and performance consistent." }
    ],
    metrics: [
      { value: "4.8/5", label: "Client satisfaction" },
      { value: "<24h", label: "Average response" },
      { value: "95%", label: "Repeat customer rate" }
    ],
    process: ["Share your goals", "Get a structured plan", "Track progress and outcomes"],
    testimonials: [
      { quote: "Simple process, clear communication, and great final result.", author: "J. Brown", role: "Client" },
      { quote: "Their team delivered exactly what we needed, on schedule.", author: "M. Ahmed", role: "Business Owner" }
    ],
    faqs: [
      { q: "Can we request custom work?", a: "Yes. Custom scopes are available based on your needs." },
      { q: "How do we start?", a: "Share your requirements and you will receive a tailored plan." },
      { q: "Do you support recurring service?", a: "Yes. Recurring monthly service plans are available." }
    ]
  }
};

const TONE_THEME = {
  premium: {
    name: "Premium",
    accentA: "#1d4ed8",
    accentB: "#172554",
    accentSoft: "#eaf1ff",
    accentPop: "#c7922d",
    text: "#0f172a",
    surface: "rgba(255, 255, 255, 0.82)",
    titleFont: "'Playfair Display', Georgia, serif",
    bodyFont: "'Manrope', 'Segoe UI', sans-serif"
  },
  friendly: {
    name: "Friendly",
    accentA: "#ea580c",
    accentB: "#9a3412",
    accentSoft: "#fff2e8",
    accentPop: "#0f766e",
    text: "#1f2937",
    surface: "rgba(255, 255, 255, 0.86)",
    titleFont: "'Outfit', 'Segoe UI', sans-serif",
    bodyFont: "'Source Sans 3', 'Segoe UI', sans-serif"
  },
  modern: {
    name: "Modern",
    accentA: "#0f766e",
    accentB: "#0f172a",
    accentSoft: "#e9fcf8",
    accentPop: "#0f4cc7",
    text: "#0f172a",
    surface: "rgba(255, 255, 255, 0.84)",
    titleFont: "'Space Grotesk', 'Segoe UI', sans-serif",
    bodyFont: "'IBM Plex Sans', 'Segoe UI', sans-serif"
  }
};

const SAMPLE_LOCATION = "https://www.google.com/maps/search/?api=1&query=Bright+Smile+Dental,+Austin";
const STYLE_VARIANTS = {
  studio: "Studio",
  bold: "Bold",
  minimal: "Minimal"
};
const GRADIENT_PRESETS = {
  aurora: {
    label: "Aurora Blue",
    lightTop: "#f9fbff",
    lightMid: "#eff5ff",
    lightBottom: "#ffffff",
    lightOrbA: "rgba(48, 118, 255, 0.24)",
    lightOrbB: "rgba(26, 178, 158, 0.2)",
    lightOrbC: "rgba(82, 103, 205, 0.18)",
    lightLiveA: "rgba(56, 124, 255, 0.62)",
    lightLiveB: "rgba(42, 193, 167, 0.52)",
    lightLiveC: "rgba(89, 113, 224, 0.45)",
    darkTop: "#030712",
    darkMid: "#0b1325",
    darkBottom: "#111827",
    darkOrbA: "rgba(61, 126, 255, 0.28)",
    darkOrbB: "rgba(77, 142, 255, 0.23)",
    darkOrbC: "rgba(59, 116, 215, 0.2)",
    darkLiveA: "rgba(86, 142, 255, 0.62)",
    darkLiveB: "rgba(111, 172, 255, 0.52)",
    darkLiveC: "rgba(92, 151, 255, 0.44)"
  },
  sunset: {
    label: "Sunset Warm",
    lightTop: "#fff4ea",
    lightMid: "#ffe8d7",
    lightBottom: "#fffaf3",
    lightOrbA: "rgba(255, 126, 67, 0.3)",
    lightOrbB: "rgba(255, 188, 92, 0.24)",
    lightOrbC: "rgba(226, 87, 140, 0.21)",
    lightLiveA: "rgba(255, 132, 74, 0.66)",
    lightLiveB: "rgba(255, 194, 108, 0.56)",
    lightLiveC: "rgba(229, 93, 148, 0.48)",
    darkTop: "#1a1010",
    darkMid: "#271610",
    darkBottom: "#1f1318",
    darkOrbA: "rgba(255, 125, 72, 0.33)",
    darkOrbB: "rgba(255, 175, 74, 0.27)",
    darkOrbC: "rgba(216, 91, 140, 0.24)",
    darkLiveA: "rgba(255, 140, 90, 0.62)",
    darkLiveB: "rgba(255, 184, 92, 0.54)",
    darkLiveC: "rgba(221, 100, 151, 0.46)"
  },
  ocean: {
    label: "Ocean Cyan",
    lightTop: "#ecf9ff",
    lightMid: "#ddf0ff",
    lightBottom: "#f8fcff",
    lightOrbA: "rgba(0, 147, 221, 0.26)",
    lightOrbB: "rgba(41, 189, 221, 0.22)",
    lightOrbC: "rgba(39, 116, 187, 0.2)",
    lightLiveA: "rgba(0, 160, 238, 0.62)",
    lightLiveB: "rgba(61, 205, 232, 0.53)",
    lightLiveC: "rgba(50, 129, 204, 0.45)",
    darkTop: "#03121f",
    darkMid: "#072237",
    darkBottom: "#0a1a2f",
    darkOrbA: "rgba(47, 166, 255, 0.32)",
    darkOrbB: "rgba(0, 189, 220, 0.27)",
    darkOrbC: "rgba(69, 123, 255, 0.22)",
    darkLiveA: "rgba(72, 182, 255, 0.6)",
    darkLiveB: "rgba(44, 214, 243, 0.52)",
    darkLiveC: "rgba(95, 146, 255, 0.44)"
  },
  forest: {
    label: "Emerald Forest",
    lightTop: "#edfcf5",
    lightMid: "#dcf7e9",
    lightBottom: "#f7fffb",
    lightOrbA: "rgba(35, 166, 111, 0.28)",
    lightOrbB: "rgba(112, 205, 139, 0.22)",
    lightOrbC: "rgba(38, 131, 92, 0.19)",
    lightLiveA: "rgba(44, 182, 122, 0.62)",
    lightLiveB: "rgba(126, 220, 154, 0.5)",
    lightLiveC: "rgba(53, 146, 106, 0.45)",
    darkTop: "#07170f",
    darkMid: "#0d2a1d",
    darkBottom: "#0a1f16",
    darkOrbA: "rgba(50, 199, 135, 0.33)",
    darkOrbB: "rgba(120, 235, 150, 0.28)",
    darkOrbC: "rgba(44, 170, 113, 0.23)",
    darkLiveA: "rgba(67, 210, 147, 0.58)",
    darkLiveB: "rgba(145, 243, 171, 0.5)",
    darkLiveC: "rgba(60, 187, 126, 0.43)"
  }
};

function safeText(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function shapePlace(rawValue, mapLink) {
  const parts = rawValue
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  const name = parts[0] || "Local Business";
  const city = parts[1] || "your city";

  return {
    name,
    city,
    full: parts.join(", "),
    mapLink
  };
}

function parsePlace(rawInput) {
  const input = normalizeWhitespace(rawInput || "");
  if (!input) {
    return {
      name: "",
      city: "",
      full: "",
      mapLink: ""
    };
  }

  try {
    const url = new URL(input);
    const query = url.searchParams.get("q") || url.searchParams.get("query");
    const pathMatch = url.pathname.match(/\/place\/([^/@]+)/i);
    const candidate = query || (pathMatch ? pathMatch[1] : "");
    const decoded = decodeURIComponent((candidate || "").replace(/\+/g, " "));
    if (decoded) return shapePlace(decoded, url.toString());
    return shapePlace(url.hostname, url.toString());
  } catch {
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(input)}`;
    return shapePlace(input, mapLink);
  }
}

function headlineByTone(name, label, tone) {
  if (tone === "friendly") return `${name} is your neighborhood ${label.toLowerCase()} with service people remember`;
  if (tone === "modern") return `${name}: smart, streamlined ${label.toLowerCase()} built for busy customers`;
  return `${name}: premium ${label.toLowerCase()} with proven local trust`;
}

function getDemoImageSet(category, place) {
  const seedBase = slugify(`${category}-${place.name}-${place.city}`) || "local-business";

  return {
    hero: `https://picsum.photos/seed/${seedBase}-hero/1600/900`,
    gallery: [
      `https://picsum.photos/seed/${seedBase}-g1/900/700`,
      `https://picsum.photos/seed/${seedBase}-g2/900/700`,
      `https://picsum.photos/seed/${seedBase}-g3/900/700`
    ]
  };
}

function buildCatalog(category, content) {
  if (category === "restaurant") {
    return {
      heading: "Popular Menu",
      subheading: "Restaurant menu highlights",
      items: (content.menuItems || []).map((item) => ({
        name: item.name,
        detail: item.detail,
        price: item.price
      }))
    };
  }

  return {
    heading: "Packages and Pricing",
    subheading: "Most requested service options",
    items: content.services.slice(0, 6).map((service, index) => ({
      name: service.title,
      detail: service.description,
      price: index < 3 ? `From $${89 + index * 40}` : "Custom quote"
    }))
  };
}

function buildGeneratedHtml({ place, category, tone, mode, styleVariant, gradientPreset, colorPalette = 'blue' }) {
  const content = CATEGORY_CONTENT[category] || CATEGORY_CONTENT.other;
  const theme = TONE_THEME[tone] || TONE_THEME.premium;
  const gradient = GRADIENT_PRESETS[gradientPreset] || GRADIENT_PRESETS.aurora;
  const selectedPalette = COLOR_PALETTES[colorPalette] || COLOR_PALETTES.blue;
  const businessName = safeText(place.name || "Local Business");
  const city = safeText(place.city || "your city");
  const placeLine = safeText(place.full || `${place.name}, ${place.city}`);
  const mapLink = safeText(place.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.full || place.name || "")}`);
  const emailHost = safeText(slugify(place.name || "business"));
  const headline = safeText(headlineByTone(place.name || "Local Business", content.label, tone));
  const imageSet = getDemoImageSet(category, place);
  const catalog = buildCatalog(category, content);
  const navCatalogLabel = category === "restaurant" ? "Menu" : "Pricing";
  const dateStamp = safeText(
    new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    })
  );

  const metricsHtml = content.metrics
    .map(
      (metric, index) => `
        <article class="metric reveal" style="--delay:${80 + index * 80}ms">
          <p class="metric-value">${safeText(metric.value)}</p>
          <p class="metric-label">${safeText(metric.label)}</p>
        </article>
      `
    )
    .join("");

  const servicesHtml = content.services
    .map(
      (service, index) => `
        <article class="service-card reveal" style="--delay:${100 + index * 60}ms">
          <h3>${safeText(service.title)}</h3>
          <p>${safeText(service.description)}</p>
        </article>
      `
    )
    .join("");

  const highlightsHtml = content.highlights
    .map(
      (item, index) => `
        <li class="reveal" style="--delay:${120 + index * 80}ms">${safeText(item)}</li>
      `
    )
    .join("");

  const processHtml = content.process
    .map(
      (step, index) => `
        <li class="reveal" style="--delay:${120 + index * 80}ms">
          <span class="step-index">0${index + 1}</span>
          <span>${safeText(step)}</span>
        </li>
      `
    )
    .join("");

  const testimonialHtml = content.testimonials
    .map(
      (item, index) => {
        const rating = 4.8 + Math.random() * 0.2; // randomized 4.8-5.0
        const stars = "★".repeat(5);
        return `
        <article class="testimonial reveal" style="--delay:${120 + index * 90}ms">
          <div class="testimonial-header">
            <div class="stars" title="${rating.toFixed(1)} stars">${stars}</div>
            <span class="rating-num">${rating.toFixed(1)}</span>
          </div>
          <p class="quote">"${safeText(item.quote)}"</p>
          <div class="testimonial-person">
            <p class="person">${safeText(item.author)}</p>
            <p class="role">${safeText(item.role)}</p>
          </div>
        </article>
      `;
      }
    )
    .join("");

  const faqHtml = content.faqs
    .map(
      (item, index) => `
        <details class="faq-item reveal" style="--delay:${110 + index * 70}ms" ${index === 0 ? "open" : ""}>
          <summary>${safeText(item.q)}</summary>
          <p>${safeText(item.a)}</p>
        </details>
      `
    )
    .join("");

  const galleryHtml = imageSet.gallery
    .map(
      (image, index) => `
        <figure class="gallery-card reveal" style="--delay:${90 + index * 70}ms">
          <img src="${safeText(image)}" alt="${businessName} space ${index + 1}" loading="lazy">
        </figure>
      `
    )
    .join("");

  const catalogHtml = catalog.items
    .map(
      (item, index) => `
        <article class="catalog-card reveal" style="--delay:${90 + index * 70}ms">
          <div>
            <h3>${safeText(item.name)}</h3>
            <p>${safeText(item.detail)}</p>
          </div>
          <span>${safeText(item.price)}</span>
        </article>
      `
    )
    .join("");

  const safeMode = mode === "dark" ? "dark" : "light";
  const safeStyle = STYLE_VARIANTS[styleVariant] ? styleVariant : "studio";
  const styleLabel = STYLE_VARIANTS[safeStyle] || "Studio";
  const gradientLabel = gradient.label;

  const bentoHtml = `
    <article class="live-bento-card reveal" style="--delay:60ms">
      <p class="live-bento-kicker">Template</p>
      <h3>${safeText(content.label)}</h3>
      <p class="live-bento-meta">${safeText(theme.name)} tone</p>
    </article>
    <article class="live-bento-card reveal" style="--delay:120ms">
      <p class="live-bento-kicker">Style</p>
      <h3>${safeText(styleLabel)}</h3>
      <p class="live-bento-meta">${safeText(gradientLabel)} • ${safeText(safeMode)}</p>
    </article>
    <article class="live-bento-card reveal" style="--delay:180ms">
      <p class="live-bento-kicker">${safeText(navCatalogLabel)}</p>
      <h3>${category === "restaurant" ? "Menu Ready" : "Pricing Ready"}</h3>
      <p class="live-bento-meta">Optimized for client conversion</p>
    </article>
  `;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${businessName}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&family=Manrope:wght@400;500;700;800&family=Outfit:wght@400;600;700&family=Playfair+Display:wght@600;700&family=Source+Sans+3:wght@400;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --accent-a: ${selectedPalette.accent};
      --accent-b: ${selectedPalette.label};
      --accent-soft: color-mix(in srgb, ${selectedPalette.accent} 12%, #fff);
      --accent-pop: ${selectedPalette.accent};
      --bg-top: ${gradient.lightTop};
      --bg-mid: ${gradient.lightMid};
      --bg-bottom: ${gradient.lightBottom};
      --bg-dark-top: ${gradient.darkTop};
      --bg-dark-mid: ${gradient.darkMid};
      --bg-dark-bottom: ${gradient.darkBottom};
      --orb-a: ${gradient.lightOrbA};
      --orb-b: ${gradient.lightOrbB};
      --orb-c: ${gradient.lightOrbC};
      --orb-a-dark: ${gradient.darkOrbA};
      --orb-b-dark: ${gradient.darkOrbB};
      --orb-c-dark: ${gradient.darkOrbC};
      --live-orb-a: ${gradient.lightLiveA};
      --live-orb-b: ${gradient.lightLiveB};
      --live-orb-c: ${gradient.lightLiveC};
      --live-orb-a-dark: ${gradient.darkLiveA};
      --live-orb-b-dark: ${gradient.darkLiveB};
      --live-orb-c-dark: ${gradient.darkLiveC};
      --text: ${theme.text};
      --muted: #4b5563;
      --line: #dbe3ef;
      --surface: ${theme.surface};
      --title-font: ${theme.titleFont};
      --body-font: ${theme.bodyFont};
    }

    body[data-mode="dark"] {
      --text: #e5ecff;
      --muted: #9db1cb;
      --line: #2b3a54;
      --surface: rgba(8, 15, 30, 0.88);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      color: var(--text);
      font-family: var(--body-font);
      background:
        radial-gradient(circle at 10% -15%, var(--orb-a), transparent 55%),
        radial-gradient(circle at 95% 0%, var(--orb-b), transparent 45%),
        radial-gradient(circle at 72% 108%, var(--orb-c), transparent 50%),
        linear-gradient(180deg, var(--bg-top) 0%, var(--bg-mid) 52%, var(--bg-bottom) 100%);
      min-height: 100vh;
    }

    body[data-mode="dark"] {
      background:
        radial-gradient(circle at 20% 0%, var(--orb-a-dark), transparent 56%),
        radial-gradient(circle at 80% 0%, var(--orb-b-dark), transparent 50%),
        radial-gradient(circle at 74% 108%, var(--orb-c-dark), transparent 54%),
        linear-gradient(180deg, var(--bg-dark-top) 0%, var(--bg-dark-mid) 56%, var(--bg-dark-bottom) 100%);
    }

    .live-aurora {
      position: fixed;
      inset: -18% -12% auto -12%;
      height: 420px;
      pointer-events: none;
      filter: blur(16px);
      z-index: 0;
      opacity: 0.76;
    }

    .live-aurora span {
      position: absolute;
      border-radius: 999px;
      mix-blend-mode: screen;
      animation: liveAurora 14s ease-in-out infinite;
    }

    .live-orb-a {
      width: 420px;
      height: 420px;
      left: 7%;
      top: 10px;
      background: radial-gradient(circle, var(--live-orb-a), transparent 70%);
    }

    .live-orb-b {
      width: 360px;
      height: 360px;
      left: 42%;
      top: -24px;
      animation-delay: -3s;
      background: radial-gradient(circle, var(--live-orb-b), transparent 70%);
    }

    .live-orb-c {
      width: 430px;
      height: 430px;
      right: 3%;
      top: -12px;
      animation-delay: -6s;
      background: radial-gradient(circle, var(--live-orb-c), transparent 70%);
    }

    body[data-mode="dark"] .live-orb-a {
      background: radial-gradient(circle, var(--live-orb-a-dark), transparent 70%);
    }

    body[data-mode="dark"] .live-orb-b {
      background: radial-gradient(circle, var(--live-orb-b-dark), transparent 70%);
    }

    body[data-mode="dark"] .live-orb-c {
      background: radial-gradient(circle, var(--live-orb-c-dark), transparent 70%);
    }

    @keyframes liveAurora {
      0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
      50% { transform: translate3d(0, 16px, 0) scale(1.07); }
    }

    header, main, footer {
      position: relative;
      z-index: 1;
    }

    .container {
      width: min(1120px, 92%);
      margin: 0 auto;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 20;
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.82);
      border-bottom: 1px solid #e7edf7;
    }

    body[data-mode="dark"] .topbar {
      background: rgba(3, 9, 21, 0.8);
      border-bottom-color: #253754;
    }

    .topbar-inner {
      height: 74px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: var(--accent-b);
    }

    .brand-mark {
      width: 34px;
      height: 34px;
      border-radius: 9px;
      background: linear-gradient(140deg, var(--accent-a), var(--accent-b));
      box-shadow: 0 10px 18px rgba(0, 0, 0, 0.15);
    }

    .nav-links {
      display: flex;
      gap: 16px;
      font-size: 0.92rem;
      color: #334155;
    }

    body[data-mode="dark"] .nav-links {
      color: #b8c8df;
    }

    .nav-links a {
      color: inherit;
      text-decoration: none;
    }

    .nav-cta {
      padding: 10px 14px;
      border-radius: 10px;
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      background: linear-gradient(135deg, var(--accent-a), var(--accent-b));
      box-shadow: 0 10px 18px rgba(23, 35, 84, 0.24);
    }

    .hero {
      margin-top: 34px;
      display: grid;
      grid-template-columns: 1.12fr 0.88fr;
      gap: 18px;
      align-items: stretch;
    }

    .hero-copy,
    .hero-panel {
      border: 1px solid #dde6f2;
      background: var(--surface);
      border-radius: 22px;
      padding: 28px;
      box-shadow: 0 22px 40px rgba(18, 35, 63, 0.11);
      position: relative;
      overflow: hidden;
    }

    body[data-mode="dark"] .hero-copy,
    body[data-mode="dark"] .hero-panel {
      border-color: #2b3e5d;
      box-shadow: 0 20px 34px rgba(0, 0, 0, 0.34);
    }

    .hero-copy::after,
    .hero-panel::after {
      content: "";
      position: absolute;
      inset: auto -80px -120px auto;
      width: 220px;
      height: 220px;
      border-radius: 999px;
      background: radial-gradient(circle, color-mix(in srgb, var(--accent-a) 24%, transparent), transparent 68%);
      pointer-events: none;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border-radius: 999px;
      padding: 7px 12px;
      background: var(--accent-soft);
      border: 1px solid #d8e3f2;
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.06em;
      color: color-mix(in srgb, var(--accent-b) 84%, #000 16%);
      margin-bottom: 14px;
    }

    h1 {
      margin: 0;
      font-family: var(--title-font);
      font-size: clamp(2.2rem, 5vw, 3.6rem);
      line-height: 1.02;
      letter-spacing: -0.03em;
      max-width: 16ch;
      background: linear-gradient(135deg, var(--accent-b) 0%, var(--accent-a) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    body[data-mode="dark"] h1 {
      -webkit-text-fill-color: transparent;
      background: linear-gradient(135deg, #e3f2ff 0%, #cde5ff 100%);
      -webkit-background-clip: text;
      background-clip: text;
    }

    .lead {
      margin-top: 16px;
      margin-bottom: 0;
      color: #334155;
      line-height: 1.72;
      max-width: 60ch;
      font-size: 1rem;
    }

    body[data-mode="dark"] .lead {
      color: #c2d1e8;
    }

    .hero-actions {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 13px 20px;
      border-radius: 11px;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.95rem;
      transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s ease;
      border: none;
      cursor: pointer;
    }

    .btn:hover {
      transform: translateY(-2px);
    }

    .btn-primary {
      background: linear-gradient(140deg, var(--accent-a), var(--accent-b));
      color: #fff;
      box-shadow: 0 12px 28px rgba(15, 23, 42, 0.28);
      position: relative;
      overflow: hidden;
    }

    .btn-primary::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.3), transparent 80%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .btn-primary:hover {
      box-shadow: 0 18px 38px rgba(15, 23, 42, 0.34);
    }

    .btn-secondary {
      border: 2px solid #ced9ea;
      background: #fff;
      color: var(--accent-b);
      font-weight: 700;
      transition: all 0.3s ease;
    }

    body[data-mode="dark"] .btn-secondary {
      border-color: #375173;
      background: #0f1a2f;
      color: #cce5ff;
    }

    .btn-secondary:hover {
      border-color: var(--accent-a);
      background: var(--accent-soft);
      color: var(--accent-b);
    }

    body[data-mode="dark"] .btn-secondary:hover {
      border-color: var(--accent-a);
      background: rgba(63, 126, 255, 0.15);
    }

    .hero-meta {
      margin-top: 18px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .meta-chip {
      padding: 7px 11px;
      border-radius: 999px;
      border: 1px solid #d7e2ef;
      background: #fff;
      font-size: 0.82rem;
      color: #334155;
    }

    body[data-mode="dark"] .meta-chip {
      border-color: #385173;
      background: rgba(9, 16, 30, 0.9);
      color: #bed0e7;
    }

    .hero-panel h2 {
      margin: 0;
      font-size: 1.1rem;
      letter-spacing: -0.01em;
    }

    .panel-lines {
      margin-top: 14px;
      display: grid;
      gap: 10px;
    }

    .panel-line {
      border: 1px solid #dce5f3;
      background: #fff;
      border-radius: 12px;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
    }

    body[data-mode="dark"] .panel-line {
      border-color: #304969;
      background: #0f1c33;
    }

    .panel-line strong {
      color: #0f172a;
      font-size: 0.95rem;
    }

    body[data-mode="dark"] .panel-line strong {
      color: #e1eafe;
    }

    .panel-line span {
      color: #475569;
      font-size: 0.82rem;
    }

    body[data-mode="dark"] .panel-line span {
      color: #9fb0cb;
    }

    .metrics {
      margin-top: 16px;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .live-bento-grid {
      margin-top: 14px;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .live-bento-card {
      border: 1px solid #d7e4f2;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.92);
      box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
      padding: 14px;
    }

    .live-bento-kicker {
      margin: 0;
      font-size: 0.75rem;
      color: #61728d;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
    }

    .live-bento-card h3 {
      margin: 7px 0 0;
      font-size: 1.02rem;
      letter-spacing: -0.01em;
      color: #0f172a;
    }

    .live-bento-meta {
      margin: 6px 0 0;
      font-size: 0.86rem;
      color: #53617b;
    }

    body[data-mode="dark"] .live-bento-card {
      border-color: #30496b;
      background: rgba(10, 18, 34, 0.88);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }

    body[data-mode="dark"] .live-bento-kicker {
      color: #97adcc;
    }

    body[data-mode="dark"] .live-bento-card h3 {
      color: #eaf0fb;
    }

    body[data-mode="dark"] .live-bento-meta {
      color: #a9bdd7;
    }

    .metric {
      border-radius: 14px;
      border: 1.5px solid #dde6f2;
      background: linear-gradient(135deg, #ffffff, #f8fafc);
      padding: 16px;
      box-shadow: 0 12px 22px rgba(18, 35, 63, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    body[data-mode="dark"] .metric {
      border-color: #304a6c;
      background: linear-gradient(135deg, #101d34, #0a1225);
      box-shadow: 0 12px 22px rgba(0, 0, 0, 0.3);
    }

    .metric:hover {
      transform: translateY(-3px);
      box-shadow: 0 16px 32px rgba(18, 35, 63, 0.14);
    }

    .metric-value {
      margin: 0;
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--accent-a);
      letter-spacing: -0.02em;
    }

    .metric-label {
      margin: 8px 0 0;
      color: #4b5563;
      font-size: 0.84rem;
      line-height: 1.38;
      font-weight: 500;
    }

    body[data-mode="dark"] .metric-label {
      color: #a8bad2;
    }

    .section {
      margin-top: 50px;
    }

    .section-head {
      margin-bottom: 16px;
    }

    .section-kicker {
      margin: 0;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #53617a;
      font-weight: 700;
    }

    body[data-mode="dark"] .section-kicker {
      color: #9ab0d0;
    }

    .section-title {
      margin: 7px 0 0;
      font-size: clamp(1.65rem, 3.2vw, 2.35rem);
      letter-spacing: -0.025em;
      font-family: var(--title-font);
      color: #111827;
      line-height: 1.15;
    }

    body[data-mode="dark"] .section-title {
      color: #e8effd;
    }

    .hero-visual {
      border: 2px solid #d7e3f3;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 24px 48px rgba(15, 23, 42, 0.18);
      background: #fff;
      min-height: 320px;
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
    }

    .hero-visual:hover {
      border-color: var(--accent-a);
      box-shadow: 0 28px 56px rgba(15, 23, 42, 0.24);
    }

    .hero-visual img {
      display: block;
      width: 100%;
      height: min(42vw, 420px);
      min-height: 280px;
      object-fit: cover;
      transform: scale(1);
      transition: transform 0.3s ease;
    }

    .hero-visual:hover img {
      transform: scale(1.04);
    }

    body[data-mode="dark"] .hero-visual {
      border-color: #2c4669;
      background: #0e1b30;
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
    }

    body[data-mode="dark"] .hero-visual:hover {
      border-color: var(--accent-a);
    }

    .gallery-grid {
      margin-top: 12px;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .gallery-card {
      margin: 0;
      overflow: hidden;
      border-radius: 14px;
      border: 1.5px solid #dbe6f3;
      box-shadow: 0 12px 24px rgba(15, 23, 42, 0.1);
      background: #fff;
      min-height: 170px;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }

    .gallery-card:hover {
      transform: translateY(-4px) scale(1.02);
      border-color: var(--accent-a);
      box-shadow: 0 16px 32px rgba(15, 23, 42, 0.16);
    }

    .gallery-card img {
      width: 100%;
      height: 100%;
      min-height: 170px;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }

    .gallery-card:hover img {
      transform: scale(1.08);
    }

    body[data-mode="dark"] .gallery-card {
      border-color: #2f4b70;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.32);
      background: #0f1c32;
    }

    body[data-mode="dark"] .gallery-card:hover {
      border-color: var(--accent-a);
      box-shadow: 0 16px 32px rgba(63, 126, 255, 0.18);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
    }

    .service-card {
      border: 1.5px solid #dde6f2;
      border-radius: 15px;
      padding: 20px;
      background: #fff;
      box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
      transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .service-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--accent-a), var(--accent-b));
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    body[data-mode="dark"] .service-card {
      border-color: #2f4767;
      background: #101e34;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.28);
    }

    .service-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 40px rgba(15, 23, 42, 0.16);
      border-color: var(--accent-a);
      background: linear-gradient(135deg, rgba(248, 250, 255, 0.8), #ffffff);
    }

    body[data-mode="dark"] .service-card:hover {
      border-color: var(--accent-a);
      background: linear-gradient(135deg, rgba(16, 30, 52, 0.9), #101e34);
      box-shadow: 0 24px 40px rgba(63, 126, 255, 0.15);
    }

    .service-card:hover::before {
      opacity: 1;
    }

    .service-card h3 {
      margin: 0;
      font-size: 1.05rem;
      letter-spacing: -0.01em;
      color: #111827;
      font-weight: 700;
    }

    body[data-mode="dark"] .service-card h3 {
      color: #edf3ff;
    }

    .service-card p {
      margin: 11px 0 0;
      color: #475569;
      line-height: 1.62;
      font-size: 0.92rem;
    }

    body[data-mode="dark"] .service-card p {
      color: #aec0da;
    }

    .catalog-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }

    .catalog-card {
      border: 1.5px solid #d7e3f2;
      border-radius: 14px;
      padding: 18px 20px;
      background: #fff;
      box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }

    .catalog-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent-a);
      box-shadow: 0 18px 36px rgba(15, 23, 42, 0.14);
    }

    .catalog-card h3 {
      margin: 0;
      font-size: 1.02rem;
      letter-spacing: -0.01em;
      color: #0f172a;
      font-weight: 700;
    }

    .catalog-card p {
      margin: 6px 0 0;
      color: #52637c;
      font-size: 0.88rem;
      line-height: 1.52;
    }

    .catalog-card span {
      font-weight: 800;
      color: #fff;
      white-space: nowrap;
      font-size: 0.95rem;
      border-radius: 999px;
      padding: 8px 14px;
      background: linear-gradient(135deg, var(--accent-a), var(--accent-b));
      box-shadow: 0 8px 16px rgba(15, 23, 42, 0.18);
    }

    body[data-mode="dark"] .catalog-card {
      border-color: #30496b;
      background: #101d33;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }

    body[data-mode="dark"] .catalog-card:hover {
      border-color: var(--accent-a);
      box-shadow: 0 18px 36px rgba(63, 126, 255, 0.18);
    }

    body[data-mode="dark"] .catalog-card h3 {
      color: #e8effd;
    }

    body[data-mode="dark"] .catalog-card p {
      color: #a9bdd8;
    }

    body[data-style="bold"] .hero-copy,
    body[data-style="bold"] .hero-panel,
    body[data-style="bold"] .service-card,
    body[data-style="bold"] .catalog-card,
    body[data-style="bold"] .story-card,
    body[data-style="bold"] .list-card,
    body[data-style="bold"] .testimonial {
      border-radius: 22px;
      border-width: 1.4px;
    }

    body[data-style="bold"] .section-title {
      text-transform: uppercase;
      letter-spacing: -0.01em;
      font-size: clamp(1.4rem, 2.7vw, 1.95rem);
    }

    body[data-style="minimal"] .hero-copy,
    body[data-style="minimal"] .hero-panel,
    body[data-style="minimal"] .service-card,
    body[data-style="minimal"] .catalog-card,
    body[data-style="minimal"] .story-card,
    body[data-style="minimal"] .list-card,
    body[data-style="minimal"] .testimonial,
    body[data-style="minimal"] .metric {
      box-shadow: none;
      border-radius: 11px;
    }

    body[data-style="minimal"] .hero {
      gap: 12px;
    }

    .story-grid {
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 14px;
    }

    .story-card,
    .list-card {
      border: 1px solid #dde6f2;
      border-radius: 16px;
      background: #fff;
      padding: 18px;
      box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
    }

    body[data-mode="dark"] .story-card,
    body[data-mode="dark"] .list-card {
      border-color: #2d4768;
      background: #101d35;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
    }

    .story-card p {
      margin: 0;
      color: #475569;
      line-height: 1.7;
    }

    body[data-mode="dark"] .story-card p {
      color: #b1c3dd;
    }

    .highlights {
      margin: 12px 0 0;
      padding-left: 18px;
      color: #1f2937;
      line-height: 1.65;
    }

    body[data-mode="dark"] .highlights {
      color: #d3e0f5;
    }

    .highlights li + li {
      margin-top: 8px;
    }

    .steps {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      gap: 10px;
    }

    .steps li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 11px;
      border-radius: 12px;
      border: 1px solid #deebf6;
      background: #fdfefe;
      color: #1f2937;
      line-height: 1.5;
    }

    body[data-mode="dark"] .steps li {
      border-color: #2e496b;
      background: #0e1a2f;
      color: #dce7f8;
    }

    .step-index {
      width: 30px;
      height: 30px;
      border-radius: 9px;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--accent-soft);
      border: 1px solid #cfe0f2;
      font-weight: 800;
      color: var(--accent-b);
      font-size: 0.82rem;
    }

    body[data-mode="dark"] .step-index {
      border-color: #355173;
      background: #14243f;
      color: #cdddf8;
    }

    .testimonial-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }

    .testimonial {
      border: 1px solid #dde6f2;
      border-radius: 15px;
      background: #fff;
      padding: 20px;
      box-shadow: 0 12px 22px rgba(15, 23, 42, 0.07);
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }

    body[data-mode="dark"] .testimonial {
      border-color: #2f4768;
      background: #101d35;
      box-shadow: 0 12px 22px rgba(0, 0, 0, 0.29);
    }

    .testimonial:hover {
      transform: translateY(-4px);
      border-color: var(--accent-a);
      box-shadow: 0 18px 34px rgba(15, 23, 42, 0.14);
    }

    body[data-mode="dark"] .testimonial:hover {
      border-color: var(--accent-a);
      box-shadow: 0 18px 34px rgba(63, 126, 255, 0.2);
    }

    .testimonial-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 14px;
    }

    .stars {
      font-size: 1.1rem;
      color: #fbbf24;
      letter-spacing: 0.05em;
    }

    .rating-num {
      font-weight: 800;
      color: var(--accent-b);
      font-size: 0.9rem;
    }

    .quote {
      margin: 0;
      color: #1f2937;
      line-height: 1.75;
      font-size: 1rem;
      font-style: italic;
    }

    body[data-mode="dark"] .quote {
      color: #d8e3f5;
    }

    .testimonial-person {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid #e5eef7;
    }

    body[data-mode="dark"] .testimonial-person {
      border-top-color: #2f4969;
    }

    .person {
      margin: 0;
      font-weight: 800;
      font-size: 0.95rem;
      color: #111827;
    }

    body[data-mode="dark"] .person {
      color: #edf2fd;
    }

    .role {
      margin: 3px 0 0;
      color: #64748b;
      font-size: 0.85rem;
    }

    body[data-mode="dark"] .role {
      color: #9fb2ce;
    }

    .faq-item {
      border: 1.5px solid #dbe4f1;
      border-radius: 12px;
      background: #fff;
      padding: 1px;
      transition: all 0.3s ease;
    }

    body[data-mode="dark"] .faq-item {
      border-color: #30496c;
      background: #101d34;
    }

    .faq-item[open] {
      border-color: var(--accent-a);
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
    }

    .faq-item summary {
      cursor: pointer;
      padding: 15px 16px;
      font-weight: 700;
      color: #0f172a;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: color 0.2s ease;
    }

    body[data-mode="dark"] .faq-item summary {
      color: #eaf0fb;
    }

    .faq-item:hover summary {
      color: var(--accent-a);
    }

    .faq-item summary::-webkit-details-marker {
      display: none;
    }

    .faq-item summary::after {
      content: "→";
      font-weight: 800;
      transition: transform 0.3s ease;
      display: inline-block;
    }

    .faq-item[open] summary::after {
      transform: rotate(90deg);
    }

    .faq-item p {
      margin: 0;
      padding: 0 16px 15px;
      color: #475569;
      line-height: 1.64;
      font-size: 0.92rem;
      animation: reveal 0.3s ease;
    }

    body[data-mode="dark"] .faq-item p {
      color: #aec0da;
    }

    .contact-block {
      margin-top: 12px;
      border: 1px solid #d7e4f3;
      border-radius: 18px;
      background: linear-gradient(145deg, var(--accent-soft), #ffffff 58%);
      padding: 22px;
      box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }

    body[data-mode="dark"] .contact-block {
      border-color: #30486a;
      background: linear-gradient(145deg, #0f1b33, #121d30 58%);
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3);
    }

    .contact-card {
      border: 1px solid #d7e4f2;
      border-radius: 13px;
      background: rgba(255, 255, 255, 0.88);
      padding: 14px;
    }

    body[data-mode="dark"] .contact-card {
      border-color: #315074;
      background: rgba(9, 17, 32, 0.86);
    }

    .contact-card h4 {
      margin: 0;
      font-size: 1rem;
      letter-spacing: -0.01em;
    }

    .contact-list {
      margin: 10px 0 0;
      display: grid;
      gap: 7px;
      font-size: 0.9rem;
      color: #334155;
      line-height: 1.55;
    }

    body[data-mode="dark"] .contact-list {
      color: #b9cbe2;
    }

    .contact-actions {
      margin-top: 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tiny {
      margin: 10px 0 0;
      color: #64748b;
      font-size: 0.8rem;
    }

    body[data-mode="dark"] .tiny {
      color: #9fb2cd;
    }

    footer {
      margin-top: 28px;
      padding-bottom: 30px;
      text-align: center;
      color: #6b7280;
      font-size: 0.82rem;
    }

    body[data-mode="dark"] footer {
      color: #96aac7;
    }

    .reveal {
      opacity: 0;
      transform: translateY(10px);
      animation: reveal 0.7s ease forwards;
      animation-delay: var(--delay, 0ms);
    }

    @keyframes reveal {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 970px) {
      .hero {
        grid-template-columns: 1fr;
      }

      .metrics {
        grid-template-columns: 1fr;
      }

      .live-bento-grid {
        grid-template-columns: 1fr;
      }

      .services-grid {
        grid-template-columns: 1fr 1fr;
      }

      .gallery-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .catalog-grid {
        grid-template-columns: 1fr;
      }

      .story-grid {
        grid-template-columns: 1fr;
      }

      .contact-block {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 680px) {
      .topbar-inner {
        height: auto;
        padding: 12px 0;
        flex-wrap: wrap;
      }

      .nav-links {
        width: 100%;
        order: 3;
        padding-top: 4px;
      }

      .hero-copy,
      .hero-panel {
        padding: 22px 18px;
      }

      .services-grid,
      .testimonial-grid {
        grid-template-columns: 1fr;
      }

      .gallery-grid {
        grid-template-columns: 1fr;
      }

      h1 {
        font-size: clamp(1.8rem, 10vw, 2.5rem);
      }
    }
  </style>
</head>
<body data-mode="${safeMode}" data-style="${safeStyle}">
  <div class="live-aurora" aria-hidden="true">
    <span class="live-orb-a"></span>
    <span class="live-orb-b"></span>
    <span class="live-orb-c"></span>
  </div>

  <header class="topbar">
    <div class="container topbar-inner">
      <div class="brand">
        <span class="brand-mark"></span>
        <span>${businessName}</span>
      </div>
      <nav class="nav-links">
        <a href="#services">Services</a>
        <a href="#menu">${safeText(navCatalogLabel)}</a>
        <a href="#about">Why Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a class="nav-cta" href="#contact">${safeText(content.ctaPrimary)}</a>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <article class="hero-copy reveal" style="--delay:40ms">
        <span class="badge">${safeText(content.label)} • ${safeText(theme.name)} Concept</span>
        <h1>${headline}</h1>
        <p class="lead">${safeText(content.about)} Serving ${city} and surrounding neighborhoods with consistent quality and fast response.</p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="#contact">${safeText(content.ctaPrimary)}</a>
          <a class="btn btn-secondary" href="${mapLink}" target="_blank" rel="noreferrer">${safeText(content.ctaSecondary)}</a>
        </div>

        <div class="hero-meta">
          <span class="meta-chip">Address: ${placeLine}</span>
          <span class="meta-chip">Open Mon-Sat, 9:00 AM - 7:00 PM</span>
          <span class="meta-chip">Updated concept: ${dateStamp}</span>
        </div>
      </article>

      <aside class="hero-panel reveal" style="--delay:120ms">
        <h2>What this website helps you do</h2>
        <div class="panel-lines">
          <div class="panel-line"><strong>Capture Leads</strong><span>Fast action buttons and quote forms</span></div>
          <div class="panel-line"><strong>Build Trust</strong><span>Proof sections, testimonials, and FAQs</span></div>
          <div class="panel-line"><strong>Drive Visits</strong><span>Clear location details and direction links</span></div>
        </div>

        <div class="metrics">
          ${metricsHtml}
        </div>
      </aside>
    </section>

    <section class="live-bento-grid">
      ${bentoHtml}
    </section>

    <section class="section">
      <div class="hero-visual reveal" style="--delay:70ms">
        <img src="${safeText(imageSet.hero)}" alt="${businessName} hero" loading="lazy">
      </div>
      <div class="gallery-grid">
        ${galleryHtml}
      </div>
    </section>

    <section class="section" id="services">
      <div class="section-head">
        <p class="section-kicker">Core Offerings</p>
        <h2 class="section-title">Services designed to convert first-time visitors into paying customers</h2>
      </div>
      <div class="services-grid">
        ${servicesHtml}
      </div>
    </section>

    <section class="section" id="menu">
      <div class="section-head">
        <p class="section-kicker">${safeText(catalog.subheading)}</p>
        <h2 class="section-title">${safeText(catalog.heading)} that customers can decide on quickly</h2>
      </div>
      <div class="catalog-grid">
        ${catalogHtml}
      </div>
    </section>

    <section class="section" id="about">
      <div class="section-head">
        <p class="section-kicker">Trust and Positioning</p>
        <h2 class="section-title">Clear differentiation that makes this business easy to choose</h2>
      </div>
      <div class="story-grid">
        <article class="story-card">
          <p>${safeText(content.about)}</p>
          <ul class="highlights">
            ${highlightsHtml}
          </ul>
        </article>
        <article class="list-card">
          <h3>How customers get results</h3>
          <ul class="steps">
            ${processHtml}
          </ul>
        </article>
      </div>
    </section>

    <section class="section" id="reviews">
      <div class="section-head">
        <p class="section-kicker">Social Proof</p>
        <h2 class="section-title">Client testimonials that remove buying hesitation</h2>
      </div>
      <div class="testimonial-grid">
        ${testimonialHtml}
      </div>
    </section>

    <section class="section" id="faq">
      <div class="section-head">
        <p class="section-kicker">Questions Answered</p>
        <h2 class="section-title">FAQ section for trust, clarity, and conversion support</h2>
      </div>
      <div class="faq-grid">
        ${faqHtml}
      </div>
    </section>

    <section class="section" id="contact">
      <div class="section-head">
        <p class="section-kicker">Contact and Conversion</p>
        <h2 class="section-title">Ready to turn visitors into booked customers</h2>
      </div>
      <div class="contact-block reveal" style="--delay:100ms">
        <div class="contact-card">
          <h4>Visit or Contact</h4>
          <div class="contact-list">
            <span><strong>Address:</strong> ${placeLine}</span>
            <span><strong>Phone:</strong> (555) 013-4491</span>
            <span><strong>Email:</strong> hello@${emailHost}.com</span>
            <span><strong>Hours:</strong> Mon-Sat, 9:00 AM - 7:00 PM</span>
          </div>
          <div class="contact-actions">
            <a class="btn btn-primary" href="${mapLink}" target="_blank" rel="noreferrer">Open in Maps</a>
            <a class="btn btn-secondary" href="tel:+15550134491">Call Now</a>
          </div>
        </div>
        <div class="contact-card">
          <h4>Lead Capture Prompt</h4>
          <p class="lead" style="margin-top:8px">This section can be replaced with a live booking form, WhatsApp CTA, or Stripe payment link in the paid version.</p>
          <div class="contact-actions">
            <a class="btn btn-primary" href="#">Request Callback</a>
            <a class="btn btn-secondary" href="#">Get Quote</a>
          </div>
          <p class="tiny">Demo notice: replace placeholder contact data with verified business details before publishing.</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    Website concept generated by Pin-to-Site • Designed to help close local business clients
  </footer>
</body>
</html>`;
}

// PHASE 1: Color Palette System
const COLOR_PALETTES = {
  blue: { name: "Professional Blue", accent: "#2563eb", label: "#1e40af" },
  green: { name: "Fresh Green", accent: "#059669", label: "#047857" },
  purple: { name: "Elegant Purple", accent: "#7c3aed", label: "#6d28d9" },
  orange: { name: "Energetic Orange", accent: "#ea580c", label: "#c2410c" },
  red: { name: "Bold Red", accent: "#dc2626", label: "#991b1b" },
  teal: { name: "Modern Teal", accent: "#0891b2", label: "#0e7490" }
};

export default function Home() {
  const [rawPlace, setRawPlace] = useState(SAMPLE_LOCATION);
  const [category, setCategory] = useState("dentist");
  const [tone, setTone] = useState("premium");
  const [mode, setMode] = useState("light");
  const [styleVariant, setStyleVariant] = useState("studio");
  const [gradientPreset, setGradientPreset] = useState("ocean");
  const [error, setError] = useState("");
  
  // PHASE 1: State for new features
  const [devicePreview, setDevicePreview] = useState("desktop"); // desktop, tablet, mobile
  const [colorPalette, setColorPalette] = useState("blue");
  const [heroImage, setHeroImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    document.body.dataset.mode = mode;
    return () => {
      delete document.body.dataset.mode;
    };
  }, [mode]);

  const parsedPlace = useMemo(() => parsePlace(rawPlace), [rawPlace]);

  const generatedHtml = useMemo(() => {
    if (!parsedPlace.name) return "";
    return buildGeneratedHtml({
      place: parsedPlace,
      category,
      tone,
      mode,
      styleVariant,
      gradientPreset,
      colorPalette
    });
  }, [parsedPlace, category, tone, mode, styleVariant, gradientPreset, colorPalette]);

  const previewSrc = useMemo(() => {
    if (!generatedHtml) return "";
    return `data:text/html;charset=utf-8,${encodeURIComponent(generatedHtml)}`;
  }, [generatedHtml]);

  const statusText = parsedPlace.name ? `Generated for ${parsedPlace.name}` : "Waiting for input";

  function validateInput() {
    if (!rawPlace.trim()) {
      setError("Enter a Google Maps URL or place text first.");
      return false;
    }

    if (!parsedPlace.name) {
      setError("Could not parse place details. Try plain text like 'Bluebird Dental, Dallas'.");
      return false;
    }

    setError("");
    return true;
  }

  async function handleCopyHtml() {
    if (!validateInput()) return;

    try {
      await navigator.clipboard.writeText(generatedHtml);
      setError("Copied generated HTML.");
    } catch {
      setError("Clipboard blocked by browser. Use Download HTML instead.");
    }
  }

  function handleDownloadHtml() {
    if (!validateInput()) return;

    const blob = new Blob([generatedHtml], { type: "text/html;charset=utf-8" });
    const anchor = document.createElement("a");
    const fileBase = slugify(parsedPlace.name) || "demo-site";
    anchor.href = URL.createObjectURL(blob);
    anchor.download = `${fileBase}-demo.html`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(anchor.href);
  }

  function handleSample() {
    setRawPlace(SAMPLE_LOCATION);
    setCategory("dentist");
    setTone("premium");
    setMode("light");
    setStyleVariant("studio");
    setGradientPreset("ocean");
    setError("");
  }

  return (
    <div className="shell">
      <section className="panel controls">
        <div>
          <h1>Pin-to-Site</h1>
          <p className="sub">
            Generate stunning one-page business websites in seconds. Perfect for sales demos and quick client mockups.
          </p>
        </div>

        {/* BUSINESS INPUT SECTION */}
        <label htmlFor="placeInput">📍 Business Location</label>
        <textarea
          id="placeInput"
          rows={3}
          value={rawPlace}
          onChange={(event) => setRawPlace(event.target.value)}
          placeholder="Paste Google Maps URL or type: &quot;Cafe Milano, New York&quot;"
        />
        <p className="hint">Works with Maps links or plain text like <code>Dental Clinic, Austin</code></p>

        {/* DESIGN SETTINGS SECTION */}
        <div className="section-divider"></div>
        <label style={{ marginTop: "20px" }}>🎨 Design Preset</label>
        
        <div className="row">
          <div>
            <label htmlFor="category" style={{ marginTop: "0" }}>Business Type</label>
            <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="restaurant">🍽️ Restaurant</option>
              <option value="dentist">🦷 Dentist</option>
              <option value="hospital">🏥 Hospital / Clinic</option>
              <option value="salon">💅 Salon</option>
              <option value="repair">🔧 Repair Service</option>
              <option value="other">⭐ Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="tone" style={{ marginTop: "0" }}>Tone</label>
            <select id="tone" value={tone} onChange={(event) => setTone(event.target.value)}>
              <option value="premium">💎 Premium</option>
              <option value="friendly">😊 Friendly</option>
              <option value="modern">⚡ Modern</option>
            </select>
          </div>
        </div>

        {/* DEVICE PREVIEW SWITCHER - PHASE 1 */}
        <div className="section-divider"></div>
        <label style={{ marginTop: "20px" }}>📱 Preview Mode</label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginTop: "8px", marginBottom: "18px" }}>
          <button
            type="button"
            onClick={() => setDevicePreview("mobile")}
            style={{
              padding: "10px 12px",
              borderRadius: "8px",
              border: devicePreview === "mobile" ? "2px solid var(--brand)" : "1px solid var(--line)",
              background: devicePreview === "mobile" ? "var(--brand-light)" : "var(--secondary-bg)",
              color: devicePreview === "mobile" ? "var(--brand-dark)" : "var(--ink)",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            📱 Mobile
          </button>
          <button
            type="button"
            onClick={() => setDevicePreview("tablet")}
            style={{
              padding: "10px 12px",
              borderRadius: "8px",
              border: devicePreview === "tablet" ? "2px solid var(--brand)" : "1px solid var(--line)",
              background: devicePreview === "tablet" ? "var(--brand-light)" : "var(--secondary-bg)",
              color: devicePreview === "tablet" ? "var(--brand-dark)" : "var(--ink)",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            📲 Tablet
          </button>
          <button
            type="button"
            onClick={() => setDevicePreview("desktop")}
            style={{
              padding: "10px 12px",
              borderRadius: "8px",
              border: devicePreview === "desktop" ? "2px solid var(--brand)" : "1px solid var(--line)",
              background: devicePreview === "desktop" ? "var(--brand-light)" : "var(--secondary-bg)",
              color: devicePreview === "desktop" ? "var(--brand-dark)" : "var(--ink)",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            🖥️ Desktop
          </button>
        </div>

        {/* COLOR PALETTE PICKER - PHASE 1 */}
        <label style={{ marginTop: "14px" }}>🎨 Accent Color</label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginTop: "8px", marginBottom: "18px" }}>
          {Object.entries(COLOR_PALETTES).map(([key, palette]) => (
            <button
              key={key}
              type="button"
              onClick={() => setColorPalette(key)}
              title={palette.name}
              style={{
                width: "100%",
                height: "44px",
                borderRadius: "8px",
                border: colorPalette === key ? "3px solid var(--ink)" : "2px solid var(--line-light)",
                background: palette.accent,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: colorPalette === key ? "0 4px 12px rgba(0,0,0,0.2)" : "none",
                position: "relative"
              }}
            >
              {colorPalette === key && (
                <span style={{ color: "#fff", fontSize: "1.2rem", position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>

        {/* IMAGE UPLOADS - PHASE 1 */}
        <label style={{ marginTop: "14px" }}>🖼️ Hero Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (event) => setHeroImage(event.target?.result);
              reader.readAsDataURL(file);
            }
          }}
          style={{ marginTop: "8px" }}
        />
        {heroImage && <p className="hint">✅ Hero image uploaded</p>}

        <label style={{ marginTop: "14px" }}>📸 Gallery Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            const promises = files.slice(0, 3).map(
              (file) =>
                new Promise((resolve) => {
                  const reader = new FileReader();
                  reader.onload = (event) => resolve(event.target?.result);
                  reader.readAsDataURL(file);
                })
            );
            Promise.all(promises).then((images) => setGalleryImages(images));
          }}
          style={{ marginTop: "8px" }}
        />
        {galleryImages.length > 0 && <p className="hint">✅ {galleryImages.length} images uploaded (max 3)</p>}

        <label htmlFor="mode" style={{ marginTop: "14px" }}>Theme</label>
        <select id="mode" value={mode} onChange={(event) => setMode(event.target.value)}>
          <option value="light">☀️ Light</option>
          <option value="dark">🌙 Dark</option>
        </select>

        {/* ACTION BUTTONS */}
        <div className="btn-row">
          <button className="primary" type="button" onClick={validateInput}>
            ✨ Generate
          </button>
          <button className="secondary" type="button" onClick={handleSample}>
            Demo
          </button>
        </div>

        {/* EXPORT SECTION */}
        <div className="section-divider"></div>
        <label style={{ marginTop: "20px" }}>📥 Export</label>
        <div className="actions">
          <button className="small-btn" type="button" onClick={handleCopyHtml}>
            📋 Copy HTML
          </button>
          <button className="small-btn" type="button" onClick={handleDownloadHtml}>
            ⬇️ Download File
          </button>
        </div>

        {/* STATUS MESSAGE */}
        <p className={`error${error === "Copied generated HTML." ? " success" : ""}`}>{error}</p>

        {/* FOOTER */}
        <div className="footer-mini">
          <strong>Pro tip:</strong> Replace all placeholder contact info with real business details before sending to clients.
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section className="panel preview">
        <div className="preview-head">
          <strong>Live Preview</strong>
          <span className="status">
            <span className="status-dot" />
            <span>{statusText}</span>
          </span>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          padding: "12px",
          background: "var(--secondary-bg)",
          borderRadius: "var(--radius)",
          overflow: "auto"
        }}>
          <div style={{
            width: devicePreview === "mobile" ? "375px" : devicePreview === "tablet" ? "768px" : "100%",
            maxWidth: "100%",
            border: devicePreview !== "desktop" ? "1px solid var(--line)" : "none",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#fff"
          }}>
            <iframe title="Generated Website Preview" src={previewSrc} style={{ height: "900px", borderRadius: devicePreview !== "desktop" ? "8px" : "0" }} />
          </div>
        </div>
        <p className="note">💡 Responsive preview. Switch between mobile, tablet, and desktop views. No API key needed—all generation happens in your browser.</p>
      </section>
    </div>
  );
}
