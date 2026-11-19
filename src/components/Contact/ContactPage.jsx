import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/*
  Install:  npm install leaflet react-leaflet
  (react-leaflet v4 for React 18, v5 for React 19)

  Styling kept from the previous page:
  - Page background : #1c1c1c
  - Accent orange   : #f05a2d
  - Font            : Manrope
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
*/

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

/* Add / edit offices here. position = [latitude, longitude] */
const offices = [
  {
    id: 1,
    name: "Head Office : Greater Noida",
    address: "Plot no -7, Sector Techzone 4, Patwari, Greater Noida, Uttar Pradesh 201308",
    position: [28.4744, 77.504],
  },
  {
    id: 2,
    name: "International Branch Office: Dubai, UAE",
    address: "T-06 , R-Floor Sheikha building Al Ras , Dubai UAE",
    position: [25.2697, 55.2962],
  },
  {
    id: 3,
    name: "Branch Office 1: Raebareli",
    address: "OPP LIC Building , Canal Rd, Nirala Nagar, Raebareli, Uttar pradesh, 229001",
    position: [26.2309, 81.2337],
  },
  {
    id: 4,
    name: "Branch Office 2: Dehradun",
    address: "Street no. 1, opposite brothers hostel, Suddhowala, Dehradun, Uttarakhand , 248007",
    position: [30.3165, 78.0322],
  },
  {
    id: 5,
    name: "Branch Office 3: Bengaluru",
    address: "The Pavilion, 62/63, Church St, Shanthala Nagar, Ashok Nagar Bengaluru, Karnataka, 560001",
    position: [12.9753, 77.608],
  },
];

/* Moves the map to the office picked in the list, then opens its popup */
function FlyToOffice({ target, markerRefs }) {
  const map = useMap();
  useEffect(() => {
    if (!target) return;
    map.flyTo(target.position, 11, { duration: 1.2 });
    map.once("moveend", () => markerRefs.current[target.id]?.openPopup());
  }, [target, map, markerRefs]);
  return null;
}

const inputClass =
  "w-full rounded-xl border border-white/30 bg-transparent px-4 py-2.5 text-[13px] text-white placeholder:text-white/50 outline-none transition focus:border-[#f05a2d]";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });
  const [sent, setSent] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const markerRefs = useRef({});

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return offices;
    return offices.filter((o) => `${o.name} ${o.address}`.toLowerCase().includes(q));
  }, [query]);

  const handleChange = (e) => {
    setSent(false);
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `form` to your backend / email service here
    console.log(form);
    setSent(true);
    setForm({ name: "", email: "", title: "", message: "" });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#1c1c1c] pb-20 font-['Manrope',sans-serif] text-white lg:pb-28">
      {/* ===================== CONTACT ===================== */}
      <section className="mx-auto grid w-full max-w-[1300px] gap-10 px-5 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:pt-20">
        {/* Left: text */}
        <div>
          <h1 className="text-[clamp(1.9rem,3.2vw,2.9rem)] font-extrabold leading-[1.3] tracking-tight">
            Got A Project Or <br className="hidden sm:block" />
            A Partnership In Mind?
          </h1>

          <p className="mt-8 max-w-[470px] text-[13px] font-medium leading-relaxed text-white/90 sm:text-[14px]">
            Have a question or project in mind? We’d love to hear from you. Reach out to us through your
            preferred channel, and our team will get back to you as soon as possible.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 lg:max-w-[470px]">
            <div>
              <p className="text-[14px] font-bold">Phone:</p>
              <a
                href="tel:+918149845323"
                className="mt-3 block text-[14px] text-white/90 transition hover:text-[#f05a2d]"
              >
                +91 81498 45323
              </a>
            </div>
            <div>
              <p className="text-[14px] font-bold">Email:</p>
              <a
                href="mailto:info@rodezweb.com"
                className="mt-3 block break-all text-[14px] text-white/90 transition hover:text-[#f05a2d]"
              >
                info@rodezweb.com
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className={inputClass}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={7}
            className={`${inputClass} min-h-[170px] resize-y lg:min-h-[180px]`}
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="w-fit rounded-full bg-[#f05a2d] px-12 py-2.5 text-[13px] font-bold text-white transition hover:brightness-110"
            >
              Send
            </button>
            {sent && <span className="text-[13px] text-white/80">Thanks! We’ll get back to you soon.</span>}
          </div>
        </form>
      </section>

      {/* ===================== OFFICES + MAP ===================== */}
      <section className="mx-auto mt-16 w-full max-w-[1300px] px-5 sm:px-6 lg:mt-36">
        <div className="isolate grid overflow-hidden rounded-lg bg-[#f8f8f8] lg:h-[520px] lg:grid-cols-[35%_1fr]">
          {/* Locations list */}
          <div className="flex h-[320px] flex-col bg-[#f8f8f8] text-[#1c1c1c] lg:h-full">
            <div className="p-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search locations..."
                aria-label="Search locations"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-[13px] text-[#1c1c1c] outline-none placeholder:text-gray-400 focus:border-[#f05a2d]"
              />
            </div>

            <ul className="min-h-0 flex-1 overflow-y-auto border-t border-gray-200 [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2.5">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-[13px] text-gray-500">No locations found.</li>
              )}
              {filtered.map((office) => (
                <li key={office.id} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setSelected({ ...office })}
                    className={`block w-full px-4 py-4 text-left transition hover:bg-white ${
                      selected?.id === office.id ? "bg-white" : ""
                    }`}
                  >
                    <p className="text-[14px] font-semibold leading-snug">{office.name}</p>
                    <p className="mt-1 text-[11px] leading-snug text-gray-500">{office.address}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div className="h-[340px] w-full lg:h-full">
            <MapContainer
              center={[23, 78]}
              zoom={5}
              minZoom={2}
              scrollWheelZoom={true}
              doubleClickZoom={true}
              touchZoom={true}
              zoomControl={true}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {offices.map((office) => (
                <Marker
                  key={office.id}
                  position={office.position}
                  icon={defaultIcon}
                  ref={(m) => {
                    markerRefs.current[office.id] = m;
                  }}
                >
                  <Popup>
                    <strong>{office.name}</strong>
                    <br />
                    {office.address}
                  </Popup>
                </Marker>
              ))}
              <FlyToOffice target={selected} markerRefs={markerRefs} />
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
