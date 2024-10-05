import Link from "next/link";

export default function ContactInfo({ contactInfo }) {
  return (
    <div>
      <p className="mb-8 text-lg font-medium">{contactInfo.label}</p>
      <address className="not-italic">
        <p className="mb-6">{contactInfo.address}</p>
        <div>
          <p>
            <Link href={`tel:${contactInfo.phoneNumber}`}>
              {contactInfo.phoneNumber}
            </Link>
          </p>
          <p>
            <Link href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </Link>
          </p>
        </div>
      </address>
    </div>
  );
}
