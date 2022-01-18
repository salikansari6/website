import React, { FC, useRef, useEffect } from 'react'

interface ScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className: string
}

const Scroller: FC<ScrollerProps> = ({ children, className, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return
        e.preventDefault()
        ref.current?.scrollTo({
          left: ref.current?.scrollLeft + e.deltaY,
          behavior: 'smooth'
        })
      }
      ref.current.addEventListener('wheel', onWheel)
      return () => ref.current?.removeEventListener('wheel', onWheel)
    }
  })

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}

export default Scroller
