"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ScheduleVisitModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bhk: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null); 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false); 
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Auto-close after 5 seconds on successful submission
  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false); 
        onClose();
      }, 8000); 
    }
    return () => clearTimeout(timer);
  }, [isSubmitted, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    let newErrors = {};
    const { name, email, phone, bhk, budget } = formData;

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d+$/.test(phone)) { 
      newErrors.phone = 'Phone number must contain only digits';
    } else if (phone.length < 10 || phone.length > 15) { 
      newErrors.phone = 'Phone number must be between 10 and 15 digits';
    }
    if (!bhk) {
      newErrors.bhk = 'Please select a choice';
    }
    if (!budget) {
      newErrors.budget = 'Please select a budget';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Assuming form submission logic here (e.g., API call)
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } else {
      console.log('Validation failed:', errors);
    }
  };

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) { 
      onClose();
    }
  };


  return (
    <div
      className="fixed inset-0 z-999999 flex items-center justify-center bg-black/10"
      onClick={handleBackdropClick}
    >
      <div ref={modalRef} className="bg-white rounded-lg p-8 w-full max-w-2xl mx-4 relative shadow-xl transform transition-all duration-300 ease-out scale-100 opacity-100">
        {!isSubmitted ? (
          <>
          <button
              onClick={onClose}
              className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 cursor-pointer bg-[#144D78] p-2 rounded-tr-lg hover:bg-[#002F52]"
            >
              <Image
                src="/assets/x.svg"
                alt="Close"
                width={24}
                height={24}
                className=""
              />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-[#22252E]">Write to us</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-[#144D78] focus:border-transparent outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Name*"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-[#144D78] focus:border-transparent outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Email*"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <input
                  type="tel" 
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]*" 
                  className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-[#144D78] focus:border-transparent outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Phone*"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    id="bhk"
                    name="bhk"
                    required
                    value={formData.bhk}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md appearance-none focus:ring-1 focus:ring-[#144D78] focus:border-transparent outline-none pr-10 ${errors.bhk ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="" disabled hidden>My Choice*</option>
                    <option value="2BHK">2 BHK (EMI starts from 26.3k*)</option>
                    <option value="3BHK">3 BHK (EMI starts from 30.5k*)</option>
                    <option value="4BHK">4 BHK (EMI starts from 55.8k*)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.59 4.59z"/></svg>
                  </div>
                  {errors.bhk && <p className="text-red-500 text-sm mt-1">{errors.bhk}</p>}
                </div>

                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md appearance-none focus:ring-1 focus:ring-[#144D78] focus:border-transparent outline-none pr-10 ${errors.budget ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="" disabled hidden>My Budget*</option>
                    <option value="40-50">40-50 Lac</option>
                    <option value="50-60">50-60 Lac</option>
                    <option value="60-70">60-70 Lac</option>
                    <option value="70-100">70-1 Cr</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9l4.59 4.59z"/></svg>
                  </div>
                  {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#144D78] focus:border-transparent outline-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full bg-[#144D78] text-white py-3 md:py-4 px-6 md:px-9 rounded-md hover:bg-[#002F52] transition-colors duration-300 font-medium flex items-center justify-center"
              >
                <span className="text-left flex-grow text-[18] md:text-[20px] font-[600]">Book A Site Visit</span>
                <Image
                  src="/assets/form-arrow.svg"
                  alt="Arrow Right"
                  width={20}
                  height={20}
                />
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 animate-fade-in">
            <Image
              src="/assets/tick.png" 
              alt="Success"
              width={80}
              height={80}
              className="mb-4"
            />
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-[#22252E]">Thank you!</h2>
            <p className="text-center text-gray-700 text-lg md:text-xl max-w-[400px]">
              We have received your request, our team will contact you within 1-2 business days.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleVisitModal; 