import Button from "../ui/button";
import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("xyyaazpa");

  if (state.succeeded) {
    return <h4 className="text-xl text-center">Thank you for contacting us, we will get back to you as soon as possible.</h4>;
  }

  return (
    <>
      <div className="w-full mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
        <h6 className="mb-4 tracking-wider font-semibold text-3xl">
          Get In Touch
        </h6>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <label className="block"> 
              <input
                id="name"
                type="text"
                name="name"
                className="
                    mt-1
                    px-5
                    py-3
                    block
                    w-full 
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                placeholder="Full Name"
              />
            </label>
            <label className="block"> 
              <input
                id="email"
                type="email"
                name="email"
                className="
                    mt-1
                    px-5
                    py-3
                    block
                    w-full 
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                placeholder="Email Address"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6">
            <label className="block"> 
              <textarea
                id="message"
                name="message"
                className="
                    mt-1
                    px-5
                    py-3
                    block
                    w-full 
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                    resize-none
                  "
                rows="5"
                placeholder="Your message"
              ></textarea>
            </label>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
}
