import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import members from './members'
import CartoonPhoto from './CartoonPhoto'
import CurrentMember from './CurrentMember'

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 60rem;
  margin: 0 auto;

  /* hack for scrollIntoView & consistency with section title spacing */
  padding-top: 2rem;
  margin-top: -2rem;
`

const Team = () => {
  const [active, setActive] = useState(0)
  const memberRef = useRef(null)

  const handleClick = (i) => () => {
    setActive(i)
    if (memberRef.current) {
      memberRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'start',
        inline: 'center',
      })
    }
  }

  return (
    <TeamContainer ref={memberRef}>
      <CurrentMember {...members[active]} />
      {members.map((m, i) => (
        <CartoonPhoto
          {...m}
          key={m.last}
          isActive={i === active}
          onClick={handleClick(i)}
        />
      ))}
    </TeamContainer>
  )
}

export default Team
