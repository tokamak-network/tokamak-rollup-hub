import JSONPretty from 'react-json-pretty';

export interface JsonViewProps {
  contents: string | null;
}

export default function JsonView({ contents }: JsonViewProps) {
  return (
    <JSONPretty
      style={{ fontSize: '0.8rem' }}
      data={contents}
      theme={{
        key: 'color:#92E391',
        string: 'color:#ABD6FC',
        value: 'color:#82C0FA',
        boolean: 'color:#82C0FA',
      }}
    />
  );
}
