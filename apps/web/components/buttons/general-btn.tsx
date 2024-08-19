import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

interface GeneralButtonProps {
  text: string;
  style: 'primary' | 'secondary';
  size?: 'default' | 'landingPage';
  arrow?: 'left' | 'right';
}

export default function GeneralBtn({ text, style, size = 'default', arrow }: GeneralButtonProps) {
  const sizeVariants: { [key: string]: string } = {
    default: '',
    landingPage: 'w-[150px] md:w-[180px]',
  };

  const styleVariants: { [key: string]: string } = {
    primary: 'primary-btn',
    secondary: 'secondary-btn',
  };

  return (
    <button className={`${sizeVariants[size]} ${styleVariants[style]}`}>
      {arrow == 'left' ? <ArrowLeftIcon className="size-[14px] stroke-white stroke-1" /> : null}
      {text}
      {arrow == 'right' ? <ArrowRightIcon className="size-[14px] stroke-white stroke-1" /> : null}
    </button>
  );
}
