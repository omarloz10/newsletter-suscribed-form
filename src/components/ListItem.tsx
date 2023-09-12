import IconList from "../assets/images/icon-list.svg";
interface Props {
  text: string;
}

export default function ListItem({ text }: Props) {
  return (
    <p className="flex items-stretch first:mt-9 mb-5 me-7">
      <span className="me-4"><img src={IconList} alt="List Icon"/></span>
      {text}
    </p>
  );
}
