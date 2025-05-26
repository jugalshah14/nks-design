'use client';
import React, { useEffect, useState } from 'react'
import FAQHeader from './FAQHeader'
import FAQAccordionList from './FAQAccordionList'
import { useParams } from 'next/navigation'
import faqsData from "@/data/faqs.json";

export default function Faqs() {
    const params = useParams();
    const [data, setData] = useState({ topic: '', questions: [] });

    useEffect(() => {
        setData(faqsData.faqs.find(f => f.topicId === +params.faqId));
    }, [params?.faqId]);

    return (
        <div className='flex overflow-hidden  relative  pb-5 max-md:flex-col max-sm:px-5'>
            <FAQHeader title={data.topic} />
            <FAQAccordionList data={data} />
        </div>
    )
}
