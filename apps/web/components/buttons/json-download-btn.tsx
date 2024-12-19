import { downloadJson } from '@/lib/utils';
import { GeneralBtn } from './general-btn';

export interface JsonDownloadBtnProps {
  json: string;
  outputFileName: string;
  text?: string;
  size?: 'default' | 'md' | 'lg' | '2xl' | 'landingPage';
}

export function JsonDownloadBtn({
  json,
  outputFileName,
  text = 'Download File',
  size = 'md',
}: JsonDownloadBtnProps) {
  return (
    <GeneralBtn
      text={text}
      isDisabled={false}
      styleType="primary"
      size={size}
      onClick={() => downloadJson(json, outputFileName + '.json')}
    />
  );
}
