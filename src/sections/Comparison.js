import React from 'react'
import { Section, Heading, Paragraph } from '../components/Components'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import EiffelTower from '../images/eiffeltower.png'
import ISS from '../images/iss.png'
import Rocket from '../images/rocket_white.png'
import mq from '../components/Breakpoints'
import { Check, X } from 'react-feather'

const Container = styled.div`
  display: flex;
  justify-content: center;
  ${mq({
    flexDirection: ['column', 'column', 'row'],
  })}
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  //background: var(--cpr-blue);
  padding: 0 1rem;
  //border-radius: .5rem;

  h2 {
    color: var(--cpr-yellow);
  }

  p {
    margin-top: 0.3rem;

    ::before {
      content: '» ';
      color: var(--cpr-blue);
    }
  }
`

const Image = styled.div`
  height: 10rem;
  width: 30%;
  margin-right: 1rem;
  flex: auto 0 0;

  display: flex;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const Table = styled.table`
  thead {
    font-weight: bold;
      text-align: center;

    td {
      background: #393939;

      &:first-child {
        background: none;
      }

      img {
        height: 6rem;
      }
    }
  }

  thead > tr:first-child {
    td:nth-child(3) {
      border-top: 1px solid var(--cpr-yellow);
      border-left: 1px solid var(--cpr-yellow);
      border-right: 1px solid var(--cpr-yellow);
    }
  }

  tbody {
    background: #262626;

    tr + tr {
      border-top: 1px solid #393939;
    }

    tr:last-child {
      td:nth-child(3) {
        border-bottom: 1px solid var(--cpr-yellow);
      }
    }
  }

  tr {
    td:nth-child(3) {
      border-left: 1px solid var(--cpr-yellow);
      border-right: 1px solid var(--cpr-yellow);
    }
  }

  td {
    padding: .5rem .7rem;
  }
`

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  background: green;
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
`

function Best() {
  return (
    <Circle css={css`background: green;`}>
      <Check size={12} />
    </Circle>
  )
}

function Worst() {
  return (
    <Circle css={css`background: red;`}>
      <X size={13} />
    </Circle>
  )
}


export default function Comparison() {
  return (
    <Section
      expand={true}
      css={css`
        padding: 2rem 0;
      `}
    >
      <Heading>Your Options for Microgravity</Heading>
      <Container>
        <Table>
          <thead>
            <tr>
              <td></td>
              <td><img src={EiffelTower} /></td>
              <td><img src={Rocket}/></td>
              <td><img src={ISS}/></td>
            </tr>
            <tr>
              <td></td>
              <td>Drop Tower</td>
              <td>Hudson Space</td>
              <td>ISS Experiment</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Microgravity</td>
              <td>10 sec <Worst/></td>
              <td>3 min</td>
              <td>∞ <Best/></td>
            </tr>
            <tr>
              <td>Weight Limit</td>
              <td>264 kg <Best/></td>
              <td>80 kg</td>
              <td>4 kg <Worst/></td>
            </tr>
            <tr>
              <td>Iteration</td>
              <td>rapid</td>
              <td>rapid <Best/></td>
              <td>none <Worst/></td>
            </tr>
            <tr>
              <td>Retrieval</td>
              <td>instant</td>
              <td>instant <Best/></td>
              <td>months <Worst/></td>
            </tr>
            <tr>
              <td>Cost</td>
              <td></td>
              <td>$9,500/kg <Best/></td>
              <td>$70,000/kg <Worst/></td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Container>
        <Row>
          <Image>
            <img src={EiffelTower} />
          </Image>
          <div>
            <h2>Drop Tower</h2>
            <Paragraph>10sec μg</Paragraph>
            <Paragraph>264 kg max</Paragraph>
            <Paragraph>retrieve instantly</Paragraph>
          </div>
        </Row>
        <Row>
          <Image>
            <img src={Rocket} />
          </Image>
          <div>
            <h2>Hudson Space</h2>
            <Paragraph>3min μg</Paragraph>
            <Paragraph>80 kg max</Paragraph>
            <Paragraph>$9500/kg</Paragraph>
            <Paragraph>retrieve instantly</Paragraph>
          </div>
        </Row>
        <Row>
          <Image>
            <img src={ISS} />
          </Image>
          <div>
            <h2>ISS Experiment</h2>
            <Paragraph>∞ μg</Paragraph>
            <Paragraph>4 kg max</Paragraph>
            <Paragraph>$70,000/kg</Paragraph>
            <Paragraph>retrieve after months</Paragraph>
          </div>
        </Row>
      </Container>
    </Section>
  )
}
