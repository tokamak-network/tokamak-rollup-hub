import { CopyBtn } from '../buttons/copy-button';

export interface CopyInputProps {
  text: string;
}

export function CopyInput({ text }: CopyInputProps) {
  return (
    <div className="flex w-full items-center justify-between gap-2 rounded-xl border-[1px] border-[#E8EDF2] bg-white px-[15px] py-[10px] font-normal dark:border-[#192232] dark:bg-[#080A0E]">
      <textarea
        value={text}
        className="w-full resize-none overflow-y-auto bg-transparent text-[#07070C] caret-tokamak-blue outline-none dark:text-white"
        readOnly
        rows={Math.min(text.split('\n').length, 10)}
      />
      <CopyBtn text={text} />
    </div>
  );
}
