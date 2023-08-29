import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
}

const Input: React.FC<InputProps> = ({ id, label, register, ...props }) => {
  return (
    <div className="relative">
      <input
        className="
          block rounded-md px-6 pt-6 pb-1 w-full text-md 
          text-white bg-neutral-700 appearance-none
          focus:outline-none focus:ring-0 peer
        "
        placeholder=" "
        {...props}
        {...register}
      />
      <label
        className="
          absolute text-md text-zinc-300 duration-150 
          transform -translate-y-3 scale-75 top-4 
          z-10 origin-[0] left-6 
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3 
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
