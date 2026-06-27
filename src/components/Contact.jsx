import portfolio from "../data/portfolio";
import ContactCard from "./ContactCard";
import AvailabilityBadge from "./AvailabilityBadge";
import Reveal from "./Reveal";

import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0B1120] text-white py-20 px-6"
    >
      <Reveal direction="up">
        <div className="max-w-6xl mx-auto">

          {/* Availability Badge */}
          <div className="flex justify-center">
            <AvailabilityBadge />
          </div>

          {/* Heading */}
          <h2 className="text-5xl font-bold text-center mb-5">
            Let's Build Something Great Together
          </h2>

          <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto leading-8 mb-8">
            Whether you're looking for an RTL Design Engineer,
            FPGA Developer, or VLSI Engineer, I'd love to discuss
            new opportunities, innovative projects, and exciting
            semiconductor technologies.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-5">

            <ContactCard
              icon={<FaEnvelope />}
              title="Email"
              value={portfolio.contact.email}
              link={`mailto:${portfolio.contact.email}`}
            />

            <ContactCard
              icon={<FaPhone />}
              title="Phone"
              value={portfolio.contact.phone}
              link={`tel:${portfolio.contact.phone}`}
            />

            <ContactCard
              icon={<FaLinkedin />}
              title="LinkedIn"
              value="Connect with me"
              link={portfolio.contact.linkedin}
            />

            <ContactCard
              icon={<FaGithub />}
              title="GitHub"
              value="View my repositories"
              link={portfolio.contact.github}
            />

          </div>

          {/* Location */}
          <div className="flex justify-center items-center gap-3 mt-10 text-gray-400 text-lg">
            <FaMapMarkerAlt className="text-blue-400" />
            Chennai, Tamil Nadu, India
          </div>
        </div>
      </Reveal>
    </section>
  );
}