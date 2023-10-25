import { AxisLabel } from '../AxisLabel/AxisLabel';

export function HorizontalAxis({ width }: { width: number }) {
  const axisValues: string[] = [];

  for (let x = 0; x < width; x++) {
    axisValues.push((1000 * x).toString().padStart(6, '0'));
  }

  const largeDigitCount = 3;

  return (
    <div className='flex flex-row w-6'>
      {axisValues.map((x) => (
        <AxisLabel key={x} text={x} horizontal />
      ))}
    </div>
  );
}
