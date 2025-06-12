"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  interestedIn: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  comment: z.string().optional(),
});

const ContactUsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    const requestData = {
       Leads: [
        {
          FName: data.name,
          LName: "K. Thakur",
          Phone: data.phoneNumber,
          City: "Kolkata",
          project: "NEW KOLKATA - SANGAM",
          Email: data.email,
          Campaign: "G_Generic_WB_08-Feb-2023",
          Source: "google",
          Medium: "s",
          Content: "647759937277",
          Term: data.requirements || "",
        },
      ],
    };
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "https://alcoverealty.my.salesforce-sites.com/websitehook/services/apexrest/hookinlandingPage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus && (
        <div
          className={`mb-6 p-4 rounded ${
            submitStatus.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="grid grid-cols-2 gap-7">
          <div className="max-sm:col-span-2">
            <label htmlFor="name" className="form-label px-4 py-2">
              <input
                className={`form-input mt-2 ${
                  errors.name ? "border-red-500" : ""
                }`}
                type="text"
                id="name"
                placeholder="Name"
                {...register("name")}
              />
              <span>Name</span>
            </label>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="max-sm:col-span-2">
            <label htmlFor="interested" className="form-label px-4 py-2">
              <input
                className={`form-input mt-2 ${
                  errors.interestedIn ? "border-red-500" : ""
                }`}
                type="text"
                id="interested"
                placeholder="Interested In*"
                {...register("interestedIn")}
              />
              <span>Interested In*</span>
            </label>
            {errors.interestedIn && (
              <p className="text-red-500 text-xs mt-1">
                {errors.interestedIn.message}
              </p>
            )}
          </div>
          <div className="max-md:col-span-2">
            <label htmlFor="email" className="form-label px-4 py-2">
              <input
                className={`form-input mt-2 ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="text"
                id="email"
                placeholder="Your Email Address"
                {...register("email")}
              />
              <span>Your Email Address</span>
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="max-md:col-span-2">
            <label htmlFor="phoneNumber" className="form-label px-4 py-2">
              <input
                className={`form-input mt-2 ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />
              <span>Phone Number</span>
            </label>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className="col-span-2">
            <label htmlFor="comments" className="form-label !h-auto px-4 py-2">
              <textarea
                rows={3}
                className={`form-input mt-2 ${
                  errors.comments ? "border-red-500" : ""
                }`}
                id="comments"
                placeholder="Additional Comments"
                {...register("comments")}
              />
              <span>Additional Comments</span>
            </label>
            {errors.comments && (
              <p className="text-red-500 text-xs mt-1">
                {errors.comments.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`min-h-[4rem] h-full max-lg:mx-auto w-[50%] mt-10 relative bg-[#144D78] button-primary transition-all duration-300 rounded-sm text-white font-medium inline-flex items-center gap-2 overflow-hidden ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          <div className="px-6 py-3 mr-20">
            {isSubmitting ? "Submitting..." : "Submit"}
          </div>
          <span className="px-6 flex items-center justify-center min-h-[4rem] h-full ml-auto text-orange-500 bg-[#002F52] text-lg">
            ↗
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
