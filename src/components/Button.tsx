import { ReactNode } from "react";

interface ButtonProps {
  extraBtnClasses?: string;
  textColor?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  disable?: boolean;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  icon?: ReactNode;
}

function Button({
  extraBtnClasses,
  textColor,
  handleClick,
  title,
  disable,
  type = "button",
  children,
  icon,
}: ButtonProps) {
  const handleClickProp = type === "submit" ? undefined : handleClick;

  return (
    <button
      type={type}
      title={title ?? ""}
      onClick={handleClickProp}
      disabled={disable}
      className={`flex gap-2 items-center text-iconColor ${extraBtnClasses} ${
        textColor ?? ""
      } rounded-md px-2 py-1 hover:scale-105 transition duration-300 ease-in-out`}
    >
      {icon && <span className="text-main">{icon}</span>} {children}
    </button>
  );
}

export default Button;
