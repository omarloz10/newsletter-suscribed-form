import { useParams } from "react-router-dom";
import IconSuccess from "../assets/images/icon-success.svg";
import SuscribeButton from "./SuscribeButton";

export default function SuccessMensage() {
  const { email } = useParams();
  return (
    <div className="sm:max-w-[450px] sm:max-h-[600px] sm:rounded-3xl bg-TW-White">
      <div className="card-form sm:m-5 ms-4">
        <img
          src={IconSuccess}
          alt="Image Mobile"
          className="sm:mt-7 mt-[150px] "
        />

        <div className="m-4 order-1">
          <div className="tittle sm:mt-7">
            <h1 className="font-bold text-4xl">Thanks for subscribing!</h1>
          </div>
          <div className="body mt-7">
            <p>
              A confirmation email has been sent to <b>{email}</b>. Please open
              it and click the button inside to confirm your subscription.
            </p>
          </div>
          <div className="footer sm:mt-5 w-full mt-[250px] flex justify-center">
            <SuscribeButton text="Dismiss message" direct="/"></SuscribeButton>
          </div>
        </div>
      </div>
    </div>
  );
}
