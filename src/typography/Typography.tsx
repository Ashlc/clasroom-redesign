
import React from 'react';

type Props = {}

const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className='text-text text-base'>
      {children}
    </p>
  )
}

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className='text-text text-4xl font-bold'>
      {children}
    </h1>
  )
}

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className='text-text text-2xl font-bold'>
      {children}
    </h1>
  )
}

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className='text-gray-200 text-xl font-bold'>
      {children}
    </h2>
  )
}

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className='text-text text-lg font-bold'>
      {children}
    </h3>
  )
}

export { Heading, Paragraph, Title, SectionHeading, SubHeading };
