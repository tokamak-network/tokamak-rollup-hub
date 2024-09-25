'use client';
import JSONPretty from 'react-json-pretty';

export interface JsonViewProps {
  contents: string | null;
  theme: string | undefined;
}

export default function JsonView({ contents, theme }: JsonViewProps) {
  return (
    <JSONPretty
      style={{ fontSize: '0.8rem' }}
      data={contents}
      theme={{
        key: theme === 'dark' ? 'color:#92E391' : 'color:#0047A1',
        string: theme === 'dark' ? 'color:#ABD6FC' : 'color:#002B5C',
        value: theme === 'dark' ? 'color:#82C0FA' : 'color:#0047A1',
        boolean: theme === 'dark' ? 'color:#82C0FA' : 'color:#0047A1',
      }}
    />
  );
}
