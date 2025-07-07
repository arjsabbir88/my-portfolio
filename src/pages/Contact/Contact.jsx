"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "./label";
import { Input } from "./input";
import { ContactCard } from "./ContactCard/ContactCard";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { toast } from "sonner";

export function Contact() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;
    const firstName = e.target.firstname.value;
    const lastName = e.target.lastname.value;
    console.log(email,message)

    if (!email || !message || firstName || lastName) {
      // alert("All fields are required!");
      toast("All fields are required!", {
          action: {
            label: "Undo",
            // onClick: () => console.log("Undo"),
          }
          
        })
      return;
    }

    emailjs
      .sendForm("service_w8jrqqc", "template_oclnz8r", form.current, {
        publicKey: "Jyjm670B0GU9Xs0iC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title:
              "Yeah!! We got your email. We will contact with you as soon as possible",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Opps!! We lost your email. Please Try again letter",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };
  return (
    <div className="max-w-11/12 mx-auto py-10 overflow-hidden">
      <div>
        <h1 className="text-4xl text-center">Contact Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3 }}
        >
          <div>
            <ContactCard></ContactCard>
          </div>
        </motion.div>

        <div className="shadow-input w-full lg:max-w-2/3 rounded-none bg-transparent p-4 md:rounded-2xl md:p-8 dark:bg-black">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
          >
            <form className="my-8" onSubmit={handleSubmit} ref={form}>
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label name="firstname" htmlFor="firstname">
                    First name
                  </Label>
                  <Input
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    type="text"
                    
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label name="firstname" htmlFor="lastname">
                    Last name
                  </Label>
                  <Input
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    type="text"
                  
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label name="email" htmlFor="email">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label name="message" htmlFor="message">
                  text-area
                </Label>
                <Input
                  name="message"
                  id="message"
                  type="text-area"
                  placeholder="Write your massage"
                  
                />
              </LabelInputContainer>

              <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
              <button
                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-[#edb24e] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="submit"
              >
                Send Your Message &rarr;
                <BottomGradient />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
