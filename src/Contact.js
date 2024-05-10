import Form from "./Form.js"

function Contact() {

  return (
    <>
      <div className="mx-auto font-serif">
        <div className="h-[235px] w-full bg-[url('./Images/contactImage.png')] bg-center bg-cover border-b-[6px] border-burgundy">
          <div className="mx-auto flex justify-center border-8 border-burgundy rounded-[16px] w-[980px] h-[146px] translate-y-[160px] bg-white">
            <div className="flex-col">
            <h1 className="text-[24px] py-2 font-bold">Catering</h1>
            <p className="px-[48px] text-[18px] leading-5">
              Looking to serve a large group? We can cater large orders of your
              favorite dishes, complete with delicious sides. Our typical
              requests are for tamales, tacos, or enchiladas, but if there's
              something else you're interested in, we're happy to accommodate!{" "}
            </p>
            </div>
          </div>
        </div>
        <div className="py-[10%] mx-auto w-[1100px]">
          < Form/>
        </div>
      </div>
    </>
  );
}

export default Contact;