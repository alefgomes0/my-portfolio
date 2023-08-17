import { IconesProps } from "../../types/IconesProps";

export const ArrowUp = (props: IconesProps) => {
  return (
    <svg
      className="opacity-90 hover:translate-y-[-25%] transition-transform"
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.width}`}
      height={`${props.height}`}
      viewBox="0 0 1024 1024"
    >
      <path
        fill="#cddad0"
        d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
      />
    </svg>
  );
};
