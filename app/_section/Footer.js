import {
  Container,
  FooterBrandSection,
  ContactInfo,
  FooterLinks,
} from "@/app/_components/Components";
import { footerContent } from "../_content/content";

export default function Footer() {
  const { copyrightText, socialMediaLinks, contactInfo, footerLinks } =
    footerContent;
  return (
    <footer className="border border-solid border-accent-100 py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-3 gap-10 md:grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr]">
          <FooterBrandSection
            copyrightText={copyrightText}
            socialMediaLinks={socialMediaLinks}
          />
          <ContactInfo contactInfo={contactInfo} />
          <FooterLinks footerLinks={footerLinks} />
        </div>
      </Container>
    </footer>
  );
}
