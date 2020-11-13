import React from 'react'
import styled from '@emotion/styled'
import { Section, Paragraph } from '../components/Components'

const CenterVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Video = styled.iframe`
  --width: calc(100vw - 4rem);
  @media (min-width: 972px) {
    --width: calc(100vw * 0.6);
  }

  width: var(--width);
  height: calc(var(--width) / 1.7777777);
  display: block;
  margin-bottom: 2rem;
`

const ParagraphTitle = styled.h2`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: var(--cpr-yellow);
`

export default function About() {
  return (
    <Section>
      <CenterVideo>
        <Video
          src="https://www.youtube.com/embed/ni1DfT1ew8Y"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Video>
      </CenterVideo>

      <ParagraphTitle>What if science could move faster?</ParagraphTitle>
      <Paragraph>
        We're designing that future today. Made in Hoboken, NJ, we’re Hudson
        Space Systems. Our goal is to make access to space research affordable
        and accessible for all.
      </Paragraph>

      <ParagraphTitle>What is microgravity?</ParagraphTitle>
      <Paragraph>
        Every object we put in orbit is actually just in free fall around the
        planet. We call this floating effect microgravity, because these
        perpetually falling objects appear to be weightless.
      </Paragraph>

      <ParagraphTitle>So?</ParagraphTitle>
      <Paragraph>
        These conditions offer incredible opportunities to learn about and
        research phenomena not easily observed on Earth. From corporate
        researchers investigating petrochemicals, pharmaceuticals, and
        semiconductors to academic researchers investigating microbiology and
        stem cells, many are already experimenting in space. Microgravity is
        already accelerating and widening R&D for companies today.
      </Paragraph>

      <ParagraphTitle>Great! Sign me up today!</ParagraphTitle>
      <Paragraph>
        Well...that’s the problem. The launch providers currently servicing this
        market are already operating at capacity, with extremely long lead times
        and sky high prices, which also means there are few chances for
        iterative experimentation. Because of this, opportunities to research in
        microgravity are limited.
      </Paragraph>

      <ParagraphTitle>And that’s where you come in?</ParagraphTitle>
      <Paragraph>
        Exactly. Bringing together a team of quirky rocket scientists, we’ve
        developed and built an innovative, fully-reusable launch platform. We
        can increase launch frequencies, lower costs, and remove the traditional
        barriers to sending experiments in space. We’re using our affordable and
        streamlined suborbital rocket technology to offer rides to space (and
        back) for research payloads, on a dependable schedule and at attainable
        rates.
      </Paragraph>
    </Section>
  )
}
