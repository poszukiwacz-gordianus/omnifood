import Link from "next/link";

export default function ContactInfo({ contactInfo }) {
  return (
    <div className="order-3 col-span-2 md:order-2 md:col-span-1">
      <p className="mb-6 text-sm font-medium lg:mb-8 lg:text-lg">
        {contactInfo.label}
      </p>
      <address className="text-xs not-italic lg:text-base">
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
