interface Props {
  className?: string
}

export default function ChevronIcon({ className = '' }: Props) {
  return (
    <svg width="auto" height="100%" viewBox="0 -5 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={className}>
      <defs>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="white" fillRule="evenodd">
        <g id="Icon-Set" transform="translate(-572.000000, -1200.000000)" fill="inherit">
          <path d="M595.688,1200.28 C595.295,1199.89 594.659,1199.89 594.268,1200.28 L583.984,1211.57 L573.702,1200.28 C573.31,1199.89 572.674,1199.89 572.282,1200.28 C571.89,1200.68 571.89,1201.32 572.282,1201.71 L583.225,1213.72 C583.434,1213.93 583.711,1214.02 583.984,1214 C584.258,1214.02 584.535,1213.93 584.745,1213.72 L595.688,1201.71 C596.079,1201.32 596.079,1200.68 595.688,1200.28" id="chevron-down">
          </path>
        </g>
      </g>
    </svg>
  )
}
