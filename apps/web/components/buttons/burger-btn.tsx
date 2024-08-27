import Image from 'next/image';
import BurgerIcon from '../../public/icon-burger.svg';

export function BurgerBtn() {
  return (
    <div className="rounded-md ring-1 ring-[#535353]">
      <Image src={BurgerIcon} alt="burger" className="size-[35px]" />
    </div>
  );
}
