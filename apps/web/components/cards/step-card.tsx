import clsx from 'clsx';
import { CopyInput, CopyInputProps } from '../inputs/copy-input';
import { JsonDownloadBtn, JsonDownloadBtnProps } from '../buttons/json-download-btn';

type FontStyle = 'normal' | 'medium';
type FontColor = 'default' | 'tokamak-blue';

type Description = {
  text: string;
  fontStyle: FontStyle;
  fontColor?: FontColor;
  margin?: boolean;
};

export interface StepCardProps {
  step: number;
  descriptions: Description[];
  copyInputProps?: CopyInputProps;
  jsonDownloadBtnProps?: JsonDownloadBtnProps;
}

function TextDescription({
  text,
  fontStyle,
  fontColor,
  margin,
}: {
  text: string;
  fontStyle: FontStyle;
  fontColor: FontColor;
  margin: boolean;
}) {
  return (
    <p
      className={clsx({
        'font-medium': fontStyle === 'medium',
        'font-normal': fontStyle === 'normal',
        'text-tokamak-blue': fontColor === 'tokamak-blue',
        'mb-5': margin,
      })}
    >
      {text}
    </p>
  );
}

export function StepCard({
  step,
  descriptions,
  copyInputProps,
  jsonDownloadBtnProps,
}: StepCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 text-[#7D899A] md:text-[18px]">
        <span>{step}.</span>
        <div>
          {descriptions.map((description, index) => (
            <TextDescription
              key={index}
              text={description.text}
              fontStyle={description.fontStyle}
              fontColor={description.fontColor ? description.fontColor : 'default'}
              margin={description.margin ? true : false}
            />
          ))}
        </div>
      </div>
      {copyInputProps && <CopyInput {...copyInputProps} />}
      {jsonDownloadBtnProps && <JsonDownloadBtn {...jsonDownloadBtnProps} />}
    </div>
  );
}
