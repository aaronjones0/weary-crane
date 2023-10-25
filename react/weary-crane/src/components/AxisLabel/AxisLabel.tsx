export function AxisLabel({
  text,
  horizontal,
}: {
  text: string;
  horizontal?: boolean;
}) {
  const largeDigitCount = 3;
  return (
    <p
      className={[
        'group',
        'cursor-default text-right text-stone-600 hover:text-stone-500 flex flex-row items-start justify-end h-6',
        'transition-colors',
        horizontal ? '-rotate-45 w-6 pr-2' : '',
      ].join(' ')}
    >
      <span className='text-lg'>{text.substring(0, largeDigitCount)}</span>
      <span className='mt-0.5 text-stone-700 group-hover:text-stone-600'>{text.substring(largeDigitCount)}</span>
    </p>
  );
}
