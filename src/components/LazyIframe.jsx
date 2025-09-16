"use client";

import React, { useEffect, useRef, useState } from "react";

export default function LazyIframe({
  src,
  title,
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  allowFullScreen = true,
  className = "",
  wrapperClassName = "",
  rootMargin = "200px",
}) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current || inView) return;

    const el = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [inView, rootMargin]);

  return (
    <div ref={containerRef} className={`aspect-16-9 w-full ${wrapperClassName}`}>
      {inView ? (
        <iframe
          className={`w-full h-full ${className}`}
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow={allow}
          {...(allowFullScreen ? { allowFullScreen: true } : {})}
        />
      ) : (
        <div className={`w-full h-full bg-gray-200 animate-pulse ${className}`} />
      )}
    </div>
  );
}

