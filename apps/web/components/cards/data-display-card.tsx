import clsx from 'clsx';

interface DataDisplyCardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  description: string;
  isDisabled: boolean;
}

export const DataDisplayCard: React.FC<DataDisplyCardProps> = ({
  title,
  description,
  isDisabled,
  ...props
}) => {
  return (
    <button
      disabled={isDisabled}
      className={clsx(
        {
          'hover:ring-tokamak-blue': !isDisabled,
          'cursor-not-allowed opacity-60': isDisabled,
        },
        'mb-[25px] flex flex-col items-center rounded-2xl bg-gradient-card p-[20px] text-center ring-2 ring-transparent last:mb-0 md:mb-0 md:w-1/3',
      )}
      {...props}
    >
      <div className="mb-[15px]">
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-medium text-trh-gray">{description}</p>
        {isDisabled ? (
          <p className="font-medium text-trh-gray">
            <br />
            Coming Soon
          </p>
        ) : null}
      </div>
    </button>
  );
};
