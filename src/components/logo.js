/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import React, { lazy } from 'react';

export default function Logo({ src, ...rest }) {
  return (
    <Link 
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt="X Takip Sistemleri" />
    </Link>
  );
}
