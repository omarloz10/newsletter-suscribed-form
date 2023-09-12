import { useNavigate } from "react-router-dom";
interface Props {
  text: string;
  email?: string;
  direct?: string;
}
export default function SuscribeButton({ text, direct = "/success" }: Props) {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(direct);
  };
  return (
    <button
      className="sm:p-5 bg-Charcoal-Grey w-full mt-5 mb-10 p-3 font-bold text-[15px] text-TW-White rounded-lg  hover:bg-TW-Tomato transition duration-250"
      onClick={redirect}
    >
      {text}
    </button>
  );
}
