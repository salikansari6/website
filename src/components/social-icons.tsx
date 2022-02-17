import React, { FC } from 'react'

interface SocialItem {
  url: string
  icon: React.ReactNode
}

interface SocialIconsProps {
  items: SocialItem[]
  className?: string
}

const SocialIcons: FC<SocialIconsProps> = ({ items, className }) => (
  <div className={`${className} flex gap-4 justify-center items-center`}>
    {items.map(({ url, icon }: SocialItem, index: number) => (
      <div className="bg-white w-6 h-6 rounded-full" key={index}>
        <a href={url} aria-label="social profile">
          {icon || 'icon'}
        </a>
      </div>
    ))}
  </div>
)

export default SocialIcons
