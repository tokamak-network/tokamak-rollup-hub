import { CopyBtn } from '../buttons/copy-button';

export interface CopyInputProps {
  text: string;
}

export function CopyInput({ text }: CopyInputProps) {
  return (
    <div className="flex w-full items-center justify-between gap-2 rounded-xl border-[1px] border-[#192232] bg-[#080A0E] px-[15px] py-[10px] font-normal">
      <input
        type="text"
        value={text}
        className="w-full overflow-x-scroll overflow-ellipsis bg-transparent text-white caret-tokamak-blue outline-none"
        readOnly
      />
      <CopyBtn text={text} />
    </div>
  );
}
