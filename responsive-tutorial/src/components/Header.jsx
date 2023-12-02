import React, { useState } from "react";
import AsideCard from "../assets/bg-main-desktop.png";
import Card from "../assets/bgCardFront.png";
import BackCard from "../assets/bgCardBack.png";
import CardLogo from "../assets/CardLogo.png";
import Confirm from "./Confirm";
import { format } from "date-fns";

const Header = () => {
  const [confirmed, setConfirmed] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState(0);
  const [cvc, setCvc] = useState("");

  return (
    <header className="bg-[#F5F6F9] flex h-screen lg:h-screen flex-col overflow-hidden items-center justify-center">
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

          <div className="absolute top-28 md:top-32 left-44 md:left-[450px] flex-col transform -translate-x-1/2 -translate-y-1/2">
            <div className="mb-10 md:mb-5">
              <h2 className="text-white whitespace-nowrap md:text-lg text-2xl lg:text-3xl tracking-widest">
                {cardNumber}
              </h2>
            </div>

            <ul className="flex items-center justify-between">
              <li className="text-white text-xs md:text-xs whitespace-nowrap md:mb-24 uppercase lg:text-xl tracking-widest">
                {cardName}
              </li>
              <li className="text-white text-xs absolute ml-72 md:ml-48 md:text-xs md:mb-24 lg:text-xl tracking-widest ">
                {format(new Date(date), "MM/yy")}
              </li>
            </ul>
          </div>
        </article>

        <article className="absolute top-[70%] md:top-[13%] left-[35%] md:left-[51%] transform translate-x-[-45%] translate-y-[-50%] w-96 md:w-[250px] h-52 md:h-[150px] z-1">
          <img src={BackCard} alt="Card Front" className="w-full h-full" />
          <div className="absolute top-0 left-32 w-full h-full flex flex-col items-center justify-center list-none">
            <li className="text-white text-sm md:text-xs tracking-widest whitespace-nowrap md:ml-[-100px]">
              {cvc}
            </li>
          </div>
        </article>

        <div className="pt-8 px-1 pb-20">
          <form className="flex flex-col px-48 md:ml-[-400px] ml-20 md:mt-[100px] py-40 md:py-48 space-x-32">
            <div className="flex flex-col">
              <h1 className="uppercase text-xs md:text-[11px] font-medium text-black italic ml-32">
                cardholder name
              </h1>
              <div className="flex py-2 ml-32">
                <input
                  type="text"
                  name="cardholder_name"
                  id="cardholder_name"
                  placeholder="e.g. Jane Appleseed"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  className="border bg-white py-3 md:py-2 px-4 w-[290px] md:w-[280px] rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col py-0">
              <h1 className="uppercase text-xs md:text-[11px] font-medium text-black italic">
                Card number
              </h1>
              <div className="flex py-2">
                <input
                  type="text"
                  name="card_number"
                  id="card_number"
                  value={cardNumber
                    .replace(/\s/g, "")
                    .replace(/(\d{4})/g, "$1 ")
                    .trim()}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength={19}
                  className="border bg-white py-2 md:py-2 px-4 w-[290px] md:w-[280px] rounded-md"
                  placeholder="e.g. 1234 5678 9123 0000"
                />
              </div>
            </div>

            <article className="flex flex-col py-2  space-y-3">
              <div className="flex space-x-2">
                <div className="flex flex-1 flex-col">
                  <h1 className="uppercase text-xs md:text-[11px] mb-2 font-medium text-black italic">
                    exp. date (MM/YY)
                  </h1>
                  <div className="flex space-x-2">
                    <input
                      type="month"
                      name="expiry_date"
                      id="expiry_date"
                      value={date}
                      min={1}
                      max={12}
                      onChange={(e) => setDate(e.target.value)}
                      className="border bg-white py-2 md:py-1 px-3 w-48 md:w-44 rounded-md"
                      placeholder="MM YY"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <h1 className="uppercase text-xs md:text-[11px] mb-2 font-medium text-black italic">
                    CVC
                  </h1>
                  <input
                    type="text"
                    name="cvc"
                    value={cvc}
                    id="cvc"
                    onChange={(e) => setCvc(e.target.value)}
                    maxLength={3}
                    className="border bg-white py-2 md:py-1 px-3 w-[90px] md:w-[90px] rounded-md"
                    placeholder="e.g. 123"
                  />
                </div>
              </div>
            </article>

            <button
              onClick={() => setConfirmed(true)}
              className="w-[300px] md:w-[280px] bg-purple-950 py-3 px-5 rounded-md text-white  mt-3 md:mt-5"
            >
              Confirm
            </button>
          </form>
        </div>
      </section>
    </header>
  );
};

export default Header;
