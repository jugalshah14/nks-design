import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { formType, formData } = body;

    // Validate required fields
    if (!formType || !formData) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare the request data based on form type
    let requestData;
    
    if (formType === 'contact') {
      // Contact form from Footer.jsx
      requestData = {
        Leads: [
          {
            FName: formData.name,
            LName: formData.name,
            Phone: formData.phoneNumber,
            City: "Kolkata",
            project: "NEW KOLKATA - SANGAM",
            Email: formData.email,
            Campaign: "G_Generic_WB_08-Feb-2023",
            Source: "google",
            Medium: "s",
            Content: "",
            Term: formData.requirements || "",
          },
        ],
      };
    } else if (formType === 'schedule-visit') {
      // Schedule visit form from ScheduleVisitModal.jsx
      requestData = {
        Leads: [
          {
            FName: formData.name,
            LName: formData.name,
            Phone: formData.phone,
            City: "Kolkata",
            project: "NEW KOLKATA - SANGAM",
            Email: formData.email,
            Campaign: "G_Generic_WB_08-Feb-2023",
            Source: "google",
            Medium: "s",
            Content: "",
            Choice__c: formData.bhk,
            gcBudget__c: formData.budget,
            Term: `BHK: ${formData.bhk}, Budget: ${formData.budget}${formData.message ? `, Message: ${formData.message}` : ''}`,
          },
        ],
      };
    } else {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      );
    }

    // Make the API call to Salesforce
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
      throw new Error(`Salesforce API responded with status: ${response.status}`);
    }

    const result = await response.json();

    return NextResponse.json(
      { 
        success: true, 
        message: formType === 'contact' 
          ? "Thank you! Your message has been sent successfully."
          : "Thank you! Your site visit request has been submitted successfully.",
        data: result 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Something went wrong. Please try again later.",
        error: error.message 
      },
      { status: 500 }
    );
  }
}
