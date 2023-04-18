import React from 'react'

interface Props {
  text: string
  action: () => void
  isDisabled?: boolean
  style?: string
}

const ButtonDark = ({ text, action, isDisabled, style = '' }: Props) => {
  return (
    <button
      className={`${buttonStyles} ${style}`}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={action}
      role="button"
      disabled={isDisabled}
    >
      {text}
    </button>
  )
}

const buttonStyles = `inline-block px-6 py-2.5 text-white font-medium text-lg leading-tight
                      border border-gray-600 bg-gray-600
                      hover:bg-gray-800
                      focus:bg-gray-800
                      active:shadow-lg
                      cursor-pointer disabled:opacity-25 transition duration-150 ease-in-out
                      dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800
                      transition-all duration-100`

export default ButtonDark
