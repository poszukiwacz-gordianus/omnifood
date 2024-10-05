import FooterLinks from "../_components/FooterLinks";
import ContactInfo from "../_components/ContactInfo";
import FooterBrandSection from "../_components/FooterBrandSection";
import { footerContent } from "../_content/content";

export default function Footer() {
  const { copyrightText, socialMediaLinks, contactInfo, footerLinks } =
    footerContent;
  return (
    <footer className="border border-solid border-accent-100 py-32">
      <div className="mx-auto grid max-w-screen-lg grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] gap-10 px-2">
        <FooterBrandSection
          copyrightText={copyrightText}
          socialMediaLinks={socialMediaLinks}
        />
        <ContactInfo contactInfo={contactInfo} />
        <FooterLinks footerLinks={footerLinks} />
      </div>
    </footer>
  );
}
