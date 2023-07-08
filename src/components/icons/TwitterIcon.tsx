interface Colors {
  whiteOff: string
  lightblue: string
  white: string
}

type Color = keyof Colors

export default function TwitterIcon ({ color }: { color: Color }) {

  const COLORS: Colors = {
    whiteOff: 'fill-zinc-500 hover:fill-zinc-50',
    lightblue: 'fill-[#1D9BF0]',
    white: 'fill-zinc-100'
  }
  return (
    <svg className={`${COLORS[color]} transition ease-in delay-25`} enableBackground='new 0 0 32 32' id='Layer_1' version='1.0' viewBox='0 0 32 32' xmlSpace='preserve' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'><path d='M31.993,6.077C30.816,6.6,29.552,6.953,28.223,7.11c1.355-0.812,2.396-2.098,2.887-3.63  c-1.269,0.751-2.673,1.299-4.168,1.592C25.744,3.797,24.038,3,22.149,3c-3.625,0-6.562,2.938-6.562,6.563  c0,0.514,0.057,1.016,0.169,1.496C10.301,10.785,5.465,8.172,2.227,4.201c-0.564,0.97-0.888,2.097-0.888,3.3  c0,2.278,1.159,4.286,2.919,5.464c-1.075-0.035-2.087-0.329-2.972-0.821c-0.001,0.027-0.001,0.056-0.001,0.082  c0,3.181,2.262,5.834,5.265,6.437c-0.55,0.149-1.13,0.23-1.729,0.23c-0.424,0-0.834-0.041-1.234-0.117  c0.834,2.606,3.259,4.504,6.13,4.558c-2.245,1.76-5.075,2.811-8.15,2.811c-0.53,0-1.053-0.031-1.566-0.092  C2.905,27.913,6.355,29,10.062,29c12.072,0,18.675-10.001,18.675-18.675c0-0.284-0.008-0.568-0.02-0.85  C30,8.55,31.112,7.395,31.993,6.077z' /><g /><g /><g /><g /><g /><g /></svg>
  )
}