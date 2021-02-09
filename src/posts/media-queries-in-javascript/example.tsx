import React, { useEffect } from 'react';
import { SText } from '../../elements/Typography';

export function StaticExample () {

  useEffect(() => {
    const exampleElement = document.getElementById('example-static');
    if (
      exampleElement && 
      window.matchMedia('(max-width: 560px)').matches
    ) {
      exampleElement.style.border = '2px solid orange';
    }
  }, []);

  return (
    <SText id="example-static" style={{ border: '2px solid var(--color-text)', padding: '0.5rem'}}>
      The code below will change this paragraph border color depending on the width of your browser viewport. The default border is the same as the text (black/white), but if you're reading this on a device with a viewport 
      smaller than 960px, then you'll see it in 
      {' '}
      <span style={{color: 'orange'}}>orange</span>
      .
    </SText>
  )
}

export function DynamicExample () {

  useEffect(() => {
    const exampleElement = document.getElementById('example-dynamic');

    function changeBorderColor() {
      if (exampleElement) {
        if (exampleElement.style.border === '2px solid var(--color-text)') {
          exampleElement.style.border = '2px solid orange';
        } else {
          exampleElement.style.border = '2px solid var(--color-text)';
        }
      }
    }

    const mediaQueryListObject = window.matchMedia('(max-width: 960px)');

    // attach listener
    // https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener
    try {
      mediaQueryListObject.addEventListener('change', changeBorderColor);
    } catch (e) {
      try {
        mediaQueryListObject.addListener(changeBorderColor);
      } catch {
        alert('You\'re using an incompatible browser :(')
      }
    }

    // first page load
    if (
      exampleElement && 
      window.matchMedia('(max-width: 560px)').matches
    ) {
      exampleElement.style.border = '2px solid orange';
    }

    return () => mediaQueryListObject.removeEventListener('change', () => changeBorderColor);
  }, []);

  return (
    <SText id="example-dynamic" style={{ border: '2px solid var(--color-text)', padding: '0.5rem'}}>
      The code below does the same as the previous one, but thanks to the listener it's responsive to dynamic changes of the viewport.
      {' '}
      If you are in the browser and change the viewport size manually, you'll see that the color is toggled at viewport width 960px.
    </SText>
  )
}
