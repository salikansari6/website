import React from 'react'
import { IntrinsicProps } from '../shared/classes'

interface Person {
  name: string
  url: string
  title: string
  role: string
}

const Member = ({
  name,
  url,
  title,
  role,
  className
}: Person & IntrinsicProps) => (
  <div className={className}>
    <p className="text-base md:text-lg text-gray-800 font-semibold">
      <a href={url}>👱🏻‍♂️ {name}</a>
    </p>
    <p>💼 {title}</p>
    <p>🛠️ {role}</p>
  </div>
)

interface KeyMembersProps {
  keyMembers: Person[]
}

const KeyMembers = ({
  className,
  keyMembers
}: KeyMembersProps & IntrinsicProps) => (
  <div className={className}>
    {keyMembers.map(({ name, url, title, role }: Person) => (
      <Member
        name={name}
        url={url}
        title={title}
        role={role}
        className="w-full md:w-1/2 mb-10 md:mb-0"
      />
    ))}
  </div>
)

export default KeyMembers
