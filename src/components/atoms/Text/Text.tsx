import React from 'react'

type TextProps = {
    children: React.ReactNode
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
    color?: 'black' | 'gray-500' | 'gray-300' | 'blue-500' | 'red-500' | 'green-500'
}

const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
}

const weights = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
}

const colors = {
    black: 'text-black',
    'green-500': 'text-green-500',
    'gray-500': 'text-gray-500',
    'gray-300': 'text-gray-300',
    'blue-500': 'text-blue-500',
    'red-500': 'text-red-500',
}

const Text = ({
  children,
  size = 'lg',
  weight = 'normal',
  color = 'green-500',
}: TextProps) => {
  return (
    <div className={`${sizes[size]} ${weights[weight]} ${colors[color]}`}>
      {children}
    </div>
  )
}

export default Text