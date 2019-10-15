import React from 'react';
import social from '../../../../data/social.json';
import {Wrapper} from './styles';

export const Social = () => (
  <Wrapper>
    {social.map(({id, name, link, icon}) => (
      <a
        key={id}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Connect with me on ${name}`}
      >
        <img loading="lazy" width="28" src={icon} alt={`Connect with me on ${name}`} />
      </a>
    ))}
  </Wrapper>
);
