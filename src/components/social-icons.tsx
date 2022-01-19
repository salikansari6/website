import React, { FC } from 'react'

interface SocialItem {
  url: string
  icon: React.ReactNode
  tooltip: string
}

interface SocialIconsProps {
  items: SocialItem[]
}

const SocialIcons: FC<SocialIconsProps> = ({ items }) => (
  <div className="flex gap-4 justify-center items-center mt-10">
    {items.map(({ url, icon, tooltip }: SocialItem, index: number) => (
      <div className="bg-white w-6 h-6 rounded-full" key={index}>
        <a href={url} aria-label="social profile">
          {icon || 'icon'}
        </a>
        <div className="has-tooltip">
          <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8">
            {tooltip}
          </span>
        </div>
      </div>
    ))}
  </div>
)

export default SocialIcons
