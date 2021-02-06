import React from 'react'

interface ReloadButtonProps {
  id: string
  handleReload: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ReloadButton = (props: ReloadButtonProps): JSX.Element|null => {
  return (
    <button
      id={props.id}
      onClick={props.handleReload}
    >
      Reload data
    </button>
  )
}
