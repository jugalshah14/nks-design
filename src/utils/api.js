/**
 * Utility functions for API calls
 */

/**
 * Submit form data to the contact API
 * @param {string} formType - Type of form ('contact' or 'schedule-visit')
 * @param {object} formData - Form data to submit
 * @returns {Promise<object>} API response
 */
export const submitForm = async (formType, formData) => {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType,
        formData,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Network response was not ok");
    }

    return result;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

/**
 * Submit contact form data
 * @param {object} data - Contact form data
 * @returns {Promise<object>} API response
 */
export const submitContactForm = async (data) => {
  return submitForm("contact", data);
};

/**
 * Submit schedule visit form data
 * @param {object} data - Schedule visit form data
 * @returns {Promise<object>} API response
 */
export const submitScheduleVisitForm = async (data) => {
  return submitForm("schedule-visit", data);
};
