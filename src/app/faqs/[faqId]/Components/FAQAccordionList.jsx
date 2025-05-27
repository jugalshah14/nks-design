"use client";
import React, { useState } from 'react';
import FAQAccordionItem from './FAQAccordionItem';

const FAQAccordionList = ({ data }) => {
    const [expandedId, setExpandedId] = useState(1);

    const handleToggle = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const handleKeyNavigation = (event, currentIndex) => {
        const items = faqData.length;

        switch (event.key) {
            case 'ArrowUp':
                event.preventDefault();
                setExpandedId(((currentIndex - 1 + items) % items) + 1);
                break;
            case 'ArrowDown':
                event.preventDefault();
                setExpandedId((currentIndex % items) + 1);
                break;
            case 'Home':
                event.preventDefault();
                setExpandedId(1);
                break;
            case 'End':
                event.preventDefault();
                setExpandedId(items);
                break;
            default:
                break;
        }
    };

    return (
        <section
            className="z-10 self-end mt-0 max-w-full max-md:mt-0 flex-1"
            role="region"
            aria-label="Frequently Asked Questions"
        >
            {data?.questions?.map((item) => (
                <FAQAccordionItem
                    key={item.id}
                    id={item.id}
                    title={item.question}
                    content={item.answer}
                    isExpanded={expandedId === item.id}
                    onToggle={() => handleToggle(item.id)}
                    onKeyDown={(e) => handleKeyNavigation(e, item.id)}
                />
            ))}
        </section>
    );
};

export default FAQAccordionList;
