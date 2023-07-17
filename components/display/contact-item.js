import { Icon } from "@iconify/react";

export default function ContactItem({ contact }) {
  return (
    <>
      <li className="bg-slate-50 w-3/4 md:w-full mx-auto rounded-lg shadow-lg p-6">
        <Icon icon={contact.icon} className="mb-3 w-12 h-12 mx-auto text-fgsecondary"/>
        <a href={contact.href}>
          {contact.text.map((item, index) => (
            <p key={index} className={`${contact.class}`}>
              {item} <br/>
            </p>
          ))}
        </a>
      </li>
    </>
  );
}
