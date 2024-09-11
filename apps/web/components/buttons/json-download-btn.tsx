import { downloadJson } from '@/lib/utils';
import { GeneralBtn } from './general-btn';

export interface JsonDownloadBtnProps {
  json: string;
  outputFileName: string;
}

export function JsonDownloadBtn({ json, outputFileName }: JsonDownloadBtnProps) {
  return (
    <GeneralBtn
      text="Download File"
      isDisabled={false}
      styleType="primary"
      size="md"
      onClick={() => downloadJson(json, outputFileName + '.json')}
    />
  );
}
