import { Dispatch, SetStateAction } from 'react';

export const copyToClipboard = async (
  text: string,
  dispatch: Dispatch<SetStateAction<boolean>>,
) => {
  try {
    await navigator.clipboard.writeText(text);
    dispatch(true);
    setTimeout(() => dispatch(false), 2000);
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
  }
};

export const downloadJson = (data: any, filename: string) => {
  const blob = new Blob([data], { type: 'application/json' });
  const href = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = href;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
