import React from 'react'

import * as icons from './source'

export default function Icon({ icon, size, color, fill, stroke }) {
  const resolveIcon = (iconName, iconColor) => {
    return icons[iconName](iconColor)
  }

  return (
    <svg 
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      dangerouslySetInnerHTML={{ __html: resolveIcon(icon, color) }}
    ></svg>
  )
}
