import { useNavigate } from "react-router-dom";
import ImageMobile from "../assets/images/illustration-sign-up-mobile.svg";
import ImageDestokp from "../assets/images/illustration-sign-up-desktop.svg";
import ListItem from "./ListItem";
import EmailInput from "./EmailInput";
import useForm from "../hooks/useForm";

export default function SuscribeForm() {
  const navigate = useNavigate();

  const initialData = {
    email: "",
  };

  const onValidate = () => {
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!form.email || !validEmail.test(form.email)) {
      return true;
    }

    navigate(`/success/${form.email}`);
  };

  const { form, isValid, handleChange, handleSubmit } = useForm(
    initialData,
    onValidate
  );

  return (
    <div className="bg-TW-White sm:min-h-max sm:rounded-lg">
      <div className="card-form sm:m-5 sm:flex">
        <picture className="order-2 sm:ms-8">
          <source media="(max-width: 375px )" srcSet={ImageMobile} />
          <source media="(min-width: 641px )" srcSet={ImageDestokp} />
          <img
            src={ImageMobile}
            alt="Image Mobile"
            className="w-full mx-h-[254px]"
          />
        </picture>
        <div className="m-4 order-1">
          <div className="tittle mt-7">
            <h1 className="text-4xl font-bold">Stay Update!</h1>
          </div>
          <div className="body mt-7">
            Join 60,000+ product managers receiving monthly updates on:
            <ListItem text="Product discovery and building what matters"></ListItem>
            <ListItem
              text="Measuring to ensure updates are a
        success"
            ></ListItem>
            <ListItem text="And much more!"></ListItem>
          </div>
          <div className="footer ">
            <form onSubmit={handleSubmit}>
              <EmailInput
                handleChange={handleChange}
                isValid={isValid}
              ></EmailInput>
              <button className="sm:p-5 bg-Charcoal-Grey w-full mt-5 mb-10 p-3 font-bold text-[15px] text-TW-White rounded-lg  hover:bg-TW-Tomato transition duration-250 ">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
