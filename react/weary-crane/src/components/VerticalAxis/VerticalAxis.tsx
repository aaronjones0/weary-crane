import { AxisLabel } from "../AxisLabel/AxisLabel";

export function VerticalAxis({ height }: { height: number }) {
  const axisValues: string[] = [];

  for (let y = 0; y < height; y++) {
    axisValues.push((1000 * y).toString().padStart(6, '0'));
  }

  return (
    <div className='flex flex-col-reverse w-full'>
      <p className='h-6'>&nbsp;</p> {/** This row contains the X Axis Labels. We don't start the Y Axis Labels until the second row. */}
      {axisValues.map((y) => (
        <AxisLabel key={y} text={y} />
      ))}
    </div>
  );
}

