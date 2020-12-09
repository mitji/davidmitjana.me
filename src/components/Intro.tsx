import React, { useEffect, useRef, useState, RefObject } from 'react';
import styled from 'styled-components';
import { SH1, InnerLink } from '../elements';
import { media } from '../utils';
import { useMousePosition, useWindowDimensions } from '../hooks';


const IntroWrapper = styled.div`
  .title {
    display: flex;
    flex-wrap: wrap;
    max-height: 125px;
    h1 {
      font-size: 3rem;
      z-index: 1;
      margin-bottom: 0;
    }
    ${media.lessThan(445)} {
      max-height: 180px;
    }
  }
`

const Circle = styled.div`
  border-radius: 100%;
  background-color: #009BF9;
  transition: all 0.5s;
  width: 160px;
  height: 160px;
  transform: translate3d(-45%,-20%,0);
  ${media.lessThan(618)} {
    transform: translate3d(0,0,0);
    position: absolute;
    right: 35%;
    z-index: -1;
  }
`

const SIntroInfo = styled.div`
  color: #7e7e7e;
  p {
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 1px;
  }
  a {
    display: inline-block;
    margin-top: 0.5rem;
  }
`

export function Intro() {
  const { x, y } = useMousePosition();
  const { width } = useWindowDimensions();
  const [circlePos, setCirclePos] = useState<{x: number, y: number} | null>(null);
  const [circleDim, setCircleDim] = useState<number | null>(null);
  const [perc1, setPerc1] = useState<number>(100);
  const [perc2, setPerc2] = useState<number>(10);

  const circleRef = useRef<RefObject<any>>(null);

  const [circleClicked, setCircleClicked] = useState(false);
  const [fixedPerc, setFixedPerc] = useState<{perc1: number, perc2: number} | null>(null);

  // eslint-disable-next-line consistent-return
  function getElementProperties(elementRef: any) {
    if (elementRef) {
      const elementProperties = elementRef.getBoundingClientRect();
      return elementProperties
    }
  }

  // The animated circle, on click remove event listener and save 
  // position in local storage, then in another click, add event listener again
  function handleCircleClick() {
    setCircleClicked(!circleClicked);
    if (circleClicked) {
      setFixedPerc(null);
    } else {
      setFixedPerc({perc1, perc2});
    }
  }

  // molta lògica d'aquesta se soluciona si afegeixo el mouseover eventlistener només en el cercle
  // listen to mouse position
  useEffect(() => {
    if (
      circlePos &&
      circleDim &&
      x > circlePos.x && x < circlePos.x + circleDim &&
      y > circlePos.y && y < circlePos.y + circleDim
    ) {
      setPerc1((x-circlePos.x)/(circleDim)*100);
      setPerc2((y-circlePos.y)/(circleDim)*100);
    }
  }, [x,y]);

  useEffect(() => {
    // get position
    if (circleRef.current) {
      const elementProperties = getElementProperties(circleRef.current);
      setCirclePos({x: elementProperties.x, y: elementProperties.y});
    }
  }, [circleRef]);

  // listen to change of width, which will affect to the circle position and in mobile to circle dimensions
  useEffect(() => {
    if (circleRef.current) {
      const elementProperties = getElementProperties(circleRef.current);
      setCirclePos({x: elementProperties.x, y: elementProperties.y});
      setCircleDim(elementProperties.width);
    }
  }, [width]);

  return (
    <IntroWrapper>
      <div className="title">
        <SH1>
          Hi!
          <br />
          I'm David Mitjana
        </SH1>
        <Circle
          ref={circleRef}
          onClick={handleCircleClick}
          /* reference: https://codepen.io/bramus/pen/eBZgPB */ 
          // for recurrent style updates, use inline styles instead of styled components
          // gradient inspiration: https://cssgradient.io/
          style={
            fixedPerc ? 
              {background: `transparent radial-gradient(at ${fixedPerc.perc1}% ${fixedPerc.perc2}% , #009BF9 0%, #d4a9f2 100%) no-repeat 0 0`}
              : {background: `transparent radial-gradient(at ${perc1}% ${perc2}% , #009BF9 0%, #d4a9f2 100%) no-repeat 0 0`}
          }
        />
      </div>
      <SIntroInfo>
        <p>Web Developer</p>
        <p>A/V Systems Engineer</p>
        <InnerLink to="about">
          More about me
        </InnerLink>
      </SIntroInfo>
    </IntroWrapper>
  )
}
