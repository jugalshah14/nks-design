export default async function sitemap() {
  const baseUrl = 'https://newkolkata.in';
  const currentDate = new Date().toISOString();

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/amenities`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/life-@-alcove`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/location`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/master-plan`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/triveni`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/why-alcove`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic routes - Typology pages
  const typologyRoutes = [
    {
      url: `${baseUrl}/typology/2-bhk-flats-in-serampore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/typology/3-bhk-flats-in-serampore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/typology/4-bhk-flats-in-serampore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/typology/4-bhk-flats-in-new-kolkata`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/typology/flats-in-serampore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/typology/3-bhk-flats-in-new-kolkata`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/typology/2-bhk-flats-in-new-kolkata`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/typology/1-bhk-flats-in-new-kolkata`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/typology/apartments-in-new-kolkata`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/typology/house-for-sale-in-new-kolkata`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/typology/flats-in-new-kolkata`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic routes - Blog posts from CMS
  let blogRoutes = [];
  
  try {
    const blogResponse = await fetch(
      'https://admin.newkolkata.in/api/blog-posts?populate[0]=*&pagination[limit]=-1&sort[0]=Date:desc',
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    
    if (blogResponse.ok) {
      const blogData = await blogResponse.json();
      
      if (blogData.data && Array.isArray(blogData.data)) {
        blogRoutes = blogData.data.map((blog) => ({
          url: `${baseUrl}/blogs-detail/${blog.attributes.slug}`,
          lastModified: blog.attributes.updatedAt || blog.attributes.createdAt || currentDate,
          changeFrequency: 'weekly',
          priority: 0.6,
        }));
      }
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
    // Continue without blog routes if there's an error
  }

  // Combine all routes
  const allRoutes = [...staticRoutes, ...typologyRoutes, ...blogRoutes];

  return allRoutes;
}
