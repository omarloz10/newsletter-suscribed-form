interface Props {
  handleChange: (event: any) => void;
  isValid: boolean;
}
export default function EmailInput({ handleChange, isValid }: Props) {
  return (
    <>
      <div className="label flex justify-between">
        <label htmlFor="emailInput" className="font-bold text-[12px] ">
          Email address:
        </label>
        {isValid && (
          <span className="text-xs font-bold text-TW-Tomato">
            Valid email required
          </span>
        )}
      </div>
      <input
        className={`${
          isValid && "border-TW-Tomato text-TW-Tomato bg-TW-Tomato bg-opacity-25"
        } border border-TW-Grey w-full h-12 rounded-lg  mt-2 focus:outline-none focus:border-Dark-Slate-Grey  focus:placeholder:ps-0 ps-5`}
        type="text"
        name="email"
        placeholder="email@company.com"
        onChange={handleChange}
        autoComplete="off"
      />
    </>
  );
}
