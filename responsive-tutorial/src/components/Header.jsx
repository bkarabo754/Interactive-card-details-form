import React, { useState } from "react";
import AsideCard from "../assets/bg-main-desktop.png";
import Card from "../assets/bgCardFront.png";
import BackCard from "../assets/bgCardBack.png";
import CardLogo from "../assets/CardLogo.png";

const Header = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "cardName":
        setCardName(value);
        break;
      case "cardNumber":
        setCardNumber(value);
        break;
      case "expiryMonth":
        setExpiryMonth(value);
        break;
      case "expiryYear":
        setExpiryYear(value);
        break;
      case "cvc":
        setCvc(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};

    if (!cardName.trim()) {
      errors.cardName = "Cardholder name is required";
    }
    if (!cardNumber.trim() || !/^\d{16}$/.test(cardNumber)) {
      errors.cardNumber = "Wrong format, numbers only.";
    }
    if (!expiryMonth.trim() || !/^\d{2}$/.test(expiryMonth)) {
      errors.expiryMonth = "Can't be blank";
    }
    if (!expiryYear.trim() || !/^\d{2}$/.test(expiryYear)) {
      errors.expiryYear = "Expiry year is invalid";
    }
    if (!cvc.trim() || !/^\d{3}$/.test(cvc)) {
      errors.cvc = "Can't be blank";
    }

    setFormErrors(errors);

    // If there are no errors, you can proceed with form submission
    if (Object.keys(errors).length === 0) {
      // Perform your form submission logic here
      console.log("Form submitted successfully!");
    }
  };

  return (
    <header className="bg-[#F5F6F9] flex h-screen flex-col overflow-hidden items-center justify-center">
      <section className="relative flex w-[1200px]  h-[700px] md:h-[100%] shadow-lg bg-white">
        <aside className="relative z-1">
          <img
            src={AsideCard}
            alt="Side Card"
            className="object-cover w-full h-full md:h-[220px] sm:w-full sm:ml-[420px] md:w-full md:ml-60"
          />
        </aside>

        <article className="absolute top-[38%] md:top-[29%] left-[25%] transform translate-x-[-45%] translate-y-[-50%] w-96 h-52 z-10">
          <img
            src={Card}
            alt="Card Front"
            className="md:w-[250px] md:h-[150px] md:ml-[330px] md:mb-10 mt-[-20px] z-10"
          />
          <img
            src={CardLogo}
            alt="Card Logo"
            className="absolute top-[-26%] md:top-[-70px] left-[-3%] md:left-[-18%] object-contain transform -translate-x-[-50%] -translate-y-[-50%] w-20 md:w-14 md:ml-96 h-20 z-20"
          />

          <div className="mt-[-120px] px-20 z-10 flex flex-col">
            <h2 className="text-white text-3xl md:text-[18px] px-10 ml-[-90px] md:ml-[230px] mb-6 md:mb-1 lg:text-3xl tracking-widest whitespace-nowrap z-10">
              0000 0000 0000 0000
            </h2>

            <ul className="flex items-center justify-between">
              <li className="uppercase text-xs font-medium text-white  md:mb-0 ml-[-45px] md:ml-[269px] lg:ml-[-45px]">
                Jane AppleSeed
              </li>

              <li className="lg:text-2xl md:text-[10px] text-white mr-[-50px] md:mr-[-260px]">
                00/00
              </li>
            </ul>
          </div>
        </article>

        <article className="absolute top-[70%] md:top-[12%] left-[35%] md:left-[51%] transform translate-x-[-45%] translate-y-[-50%] w-96 md:w-[250px] h-52 md:h-[150px] z-1">
          <img src={BackCard} alt="Card Front" className="w-full h-full" />
          <div className="absolute top-0 left-32 w-full h-full flex flex-col items-center justify-center list-none">
            <li className="text-white text-sm md:text-xs tracking-widest whitespace-nowrap md:ml-[-100px]">
              000
            </li>
          </div>
        </article>

        <div className="flex flex-col px-48  md:ml-[-407px] md:mt-[120px] py-52 md:py-48 space-x-32">
          <div className="flex flex-col">
            <h1 className="uppercase text-xs md:text-[11px] font-medium text-black italic ml-32">
              cardholder name
            </h1>
            <div className="flex py-5 ml-32">
              <input
                type="text"
                name="cardName"
                value={cardName}
                className={`border bg-white py-3 md:py-2 px-4 w-[290px] rounded-md ${
                  formErrors.cardName ? "border-red-500" : ""
                }`}
                onChange={handleChange}
                placeholder="e.g. Jane Appleseed"
              />
            </div>
            {formErrors.cardName && (
              <p className="text-red-500 ml-32">{formErrors.cardName}</p>
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="uppercase text-xs md:text-[11px] font-medium text-black italic">
              Card number
            </h1>
            <div className="flex py-3">
              <input
                type="text"
                name="cardNumber"
                value={cardNumber}
                className={`border bg-white py-2 md:py-2 px-4 w-[290px] rounded-md ${
                  formErrors.cardNumber ? "border-red-500" : ""
                }`}
                onChange={handleChange}
                placeholder="e.g. 1234 5678 9123 0000"
              />
            </div>
            {formErrors.cardNumber && (
              <p className="text-red-500">{formErrors.cardNumber}</p>
            )}
          </div>

          <div className="flex flex-col py-3 space-y-3">
            <div className="flex space-x-2">
              <div className="flex flex-col">
                <h1 className="uppercase text-xs md:text-[11px] font-medium text-black italic">
                  exp. date
                </h1>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="expiryMonth"
                    value={expiryMonth}
                    className={`border bg-white py-2 md:py-1 px-3 w-20 rounded-md ${
                      formErrors.expiryMonth ? "border-red-500" : ""
                    }`}
                    onChange={handleChange}
                    placeholder="MM"
                  />
                  {formErrors.expiryMonth && (
                    <p className="text-red-500 ml-2">
                      {formErrors.expiryMonth}
                    </p>
                  )}
                </div>
              </div>
              {/* Repeat the same pattern for other input fields */}
              <div className="flex flex-col">
                <h1 className="uppercase text-xs md:text-[11px]   font-medium text-black italic">
                  MM/YY
                </h1>
                <input
                  type="text"
                  name="expiryYear"
                  value={expiryYear}
                  className={`border bg-white py-2 md:py-1 px-3 w-20 rounded-md ${
                    formErrors.expiryYear ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  placeholder="YY"
                />
                {formErrors.expiryYear && (
                  <p className="text-red-500">{formErrors.expiryYear}</p>
                )}
              </div>
              <div className="flex flex-col">
                <h1 className="uppercase text-xs md:text-[11px] font-medium text-black italic">
                  CVC
                </h1>
                <input
                  type="text"
                  name="cvc"
                  value={cvc}
                  className={`border bg-white py-2 md:py-1 px-3 w-[120px] rounded-md ${
                    formErrors.cvc ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  placeholder="e.g. 123"
                />
                {formErrors.cvc && (
                  <p className="text-red-500">{formErrors.cvc}</p>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-[300px] bg-purple-950 py-3 px-5 rounded-md text-white  mt-5 md:mt-5"
          >
            Confirm
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
