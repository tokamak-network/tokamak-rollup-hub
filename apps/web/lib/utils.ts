import { Dispatch, SetStateAction } from "react"

export const copyToClipboard = async (text: string, dispatch: Dispatch<SetStateAction<boolean>>) => {
  try {
    await navigator.clipboard.writeText(text)
    dispatch(true)
    setTimeout(() => dispatch(false), 2000)
  } catch (err) {
    console.error('Failed to copy to clipboard:', err)
  }
}
