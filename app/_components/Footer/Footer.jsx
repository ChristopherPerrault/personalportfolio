import BackToTopButton from "./BackToTopButton";
import { TbCopyrightFilled } from "react-icons/tb";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <BackToTopButton />
      <footer className="flex justify-center align-bottom select-none">
        <div className="relative">
          <h1 className="flex flex-row text-2xl tracking-tight text-black">
            <TbCopyrightFilled className="mr-2 text-3xl text-yellow-500 " />
            Christopher Perrault&nbsp;
            {currentYear}
          </h1>
        </div>
      </footer>
    </>
  );
}
