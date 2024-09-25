import { CopyBtn } from '../buttons/copy-button';

export interface CopyInputProps {
  text: string;
}

export function CopyInput({ text }: CopyInputProps) {
  return (
    <div className="flex w-full items-center justify-between gap-2 rounded-xl border-[1px] border-[#E8EDF2] px-[15px] py-[10px] font-normal dark:border-[#192232] dark:bg-[#080A0E]">
      <input
        type="text"
        value={text}
        className="w-full overflow-x-scroll overflow-ellipsis bg-transparent text-[#07070C] caret-tokamak-blue outline-none dark:text-white"
        readOnly
      />
      <CopyBtn text={text} />
    </div>
  );
}
