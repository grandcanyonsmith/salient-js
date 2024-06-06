"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-call-to-action.jpg'
import { fetchTextContent } from './fetchTextContent' // Adjust the path as needed

export function CallToAction() {
  const [textContent, setTextContent] = useState({})

  useEffect(() => {
    async function getTextContent() {
      const data = await fetchTextContent()
      setTextContent(data)
    }

    getTextContent()
  }, [])

  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-red-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {textContent.cta_headline || 'Loading...'}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {textContent.cta_subheadline || 'Loading...'}
          </p>
          <Button href="/register" color="white" className="mt-10">
            {textContent.cta_call_to_action || 'Loading...'}
          </Button>
        </div>
      </Container>
    </section>
  )
}