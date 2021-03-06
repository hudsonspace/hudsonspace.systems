import { Loop32 } from '@carbon/icons-react'
import React, { useState } from 'react'
import styled from 'styled-components'

const ContactContainer = styled.form`
  max-width: ${({ theme }) => theme.size.maxWidth};
  background-color: ${({ theme }) => theme.color.yellow};
  margin: 0 auto 4rem auto;
  padding: 2rem;
  color: ${({ theme }) => theme.color.bg};
  border-radius: 1.5rem;
  position: relative;

  .title {
    font-size: 2rem;
    font-family: ${({ theme }) => theme.font.family.heading};
  }

  .subtitle {
    line-height: 1.5rem;
  }

  .controls {
    margin-top: 2rem;
    display: flex;
    max-width: 36rem;
  }

  svg {
    position: absolute;
    width: 4.5rem;
    height: 4.5rem;
    top: 1rem;
    right: 1rem;
  }

  input {
    height: 3rem;
    padding: 0.5rem 1rem;
    border: none;
    color: ${({ theme }) => theme.color.light};
    background-color: ${({ theme }) => theme.color.bg2};
    box-sizing: border-box;
    flex: 1;
  }

  button {
    margin-left: 0.25rem;
    height: 3rem;
    padding: 0.5rem 2rem;
    color: ${({ theme }) => theme.color.light};
    background-color: ${({ theme }) => theme.color.bg};
    border: none;
    cursor: pointer;
    flex: 1;
    max-width: 8rem;

    &:hover {
      filter: brightness(1.2);
    }
  }

  @media (max-width: 575px) {
    svg {
      position: static;
    }
  }
`

const Contact = () => {
  const [email, setEmail] = useState('')
  const [emailToSubmit, setEmailToSubmit] = useState('')

  const handleChange = (e) => {
    const {
      target: { value },
    } = e
    setEmail(value)
  }

  const handleSubmit = (e) => {
    setEmailToSubmit(email)
    setEmail('')
  }

  return (
    <ContactContainer id="contact" onSubmit={handleSubmit} target="_blank" method="POST" action="https://lb.benchmarkemail.com//code/lbform">
      <Loop32 />
      <div className="title">Stay in the loop.</div>
      <div className="subtitle">
        Join our mailing list to hear all our latest achievements.
      </div>

      <div className="controls">
        <input
          type="email"
          placeholder="you@email.com"
          spellCheck={false}
          required
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Join</button>
      </div>

      <input type="hidden" readOnly name="fldemail" value={emailToSubmit} />
      <input type="hidden" readOnly name="token" value="mFcQnoBFKMTCFYbAJg5l2MxpSu0%2BSv5KbU8eT15MPTOftxdKVEIMKw%3D%3D" />
      <input type="hidden" readOnly name="successurl" value="https://lb.benchmarkemail.com/Code/Welcome" />
      <input type="hidden" readOnly name="errorurl" value="https://lb.benchmarkemail.com//Code/Error" />
    </ContactContainer>
  )
}

export default Contact
