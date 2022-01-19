import React, { FC, useRef, useEffect, useState } from 'react'

interface ScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const Scroller: FC<ScrollerProps> = ({ children, className, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [onMouseOver, setOnMouseOver] = useState(false)

  const handleMouseOver = () => {
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
  }

  useEffect(() => {
    if (onMouseOver) {
      handleMouseOver()
    }
  }, [onMouseOver])

  return (
    <div
      ref={ref}
      className={className}
      {...props}
      onMouseOver={() => setOnMouseOver(true)}
      onMouseOut={() => setOnMouseOver(false)}
    >
      {children}
    </div>
  )
}

export default Scroller
