import ContactItem from "./contact-item";
import ContactDets from "@data/contact.json";

export default function ContactInfo() {
  return (
    <>
      <div className="w-full text-center">
        <ul className="mx-auto grid md:grid-cols-3 gap-6 mt-8">
          {ContactDets.map((contact, index) => (
            <ContactItem key={index} contact={contact} />
          ))}
        </ul>
      </div>
    </>
  );
}
