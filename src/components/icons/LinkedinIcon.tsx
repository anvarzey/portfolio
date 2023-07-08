interface FillOptions {
  inner: string
  outer: string
}

interface Colors {
  whiteOff: FillOptions
  blue: FillOptions
}

type Color = keyof Colors

export default function LinkedinIcon ({ color }: { color: Color }) {
  const COLORS: Colors = {
    whiteOff: {
      outer: 'fill-zinc-500 hover:fill-zinc-50',
      inner: 'fill-zinc-900'
    },
    blue: {
      outer: 'fill-white',
      inner: 'fill-[#007FB5]'
    }
  }
  return (
    // <svg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>
    //   <defs></defs>
    //   <title />
    //   <g data-name='14-linkedin' id='_14-linkedin'>
    //     <rect className='fill-slate-500 transition ease-in delay-75 group-hover:fill-slate-100' height='64' rx='11.2' ry='11.2' width='64' />
    //     <rect className='fill-[#231F20]' height='32.72' width='9.03' x='8.99' y='23.54' />
    //     <path className='fill-[#231F20]' d='M48.2,23.54C41.54,21,36.72,25.3,34.66,27.7V23.54h-9V56.26h9V39a8.45,8.45,0,0,1,2.23-5.92,4.75,4.75,0,0,1,3.41-1.67A5.42,5.42,0,0,1,44.24,33a6.13,6.13,0,0,1,1.7,4.35V56.26H56.1V36S57.23,26.92,48.2,23.54Z' />
    //     <circle className='fill-[#231F20]' cx='13.5' cy='13.38' r='5.64' />
    //   </g>
    // </svg>
    <svg viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg' className={`${COLORS[color].outer} transition ease-in delay-25`}>
      <defs></defs>
      <title />
      <g data-name='14-linkedin' id='_14-linkedin'>
        <rect className='' height='64' rx='11.2' ry='11.2' width='64' />
        <rect
          // className='fill-[#007FB5]'
          className={`${COLORS[color].inner}`}
          height='32.72' width='9.03' x='8.99' y='23.54' />
        <path
          // className='fill-[#007FB5]'
          className={`${COLORS[color].inner}`}
          d='M48.2,23.54C41.54,21,36.72,25.3,34.66,27.7V23.54h-9V56.26h9V39a8.45,8.45,0,0,1,2.23-5.92,4.75,4.75,0,0,1,3.41-1.67A5.42,5.42,0,0,1,44.24,33a6.13,6.13,0,0,1,1.7,4.35V56.26H56.1V36S57.23,26.92,48.2,23.54Z' />
        <circle
          // className='fill-[#007FB5]'
          className={`${COLORS[color].inner}`}
          cx='13.5' cy='13.38' r='5.64' />
      </g>
    </svg>
  )
}