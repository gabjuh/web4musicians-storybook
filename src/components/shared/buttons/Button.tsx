export interface ButtonProps {
  label: string;
  isUppercase?: boolean;
  isFullRounded?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  isUppercase,
  isFullRounded,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`btn btn-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ${
        isUppercase ? "uppercase" : ""
      } ${isFullRounded ? "rounded-full" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
