import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
export default function Footer() {
  return (
    <div className="bg-black md:pl-24 lg:pl-60 p-4 py-10 flex flex-col md:flex-row text-white gap-10 md:gap-20">
      <div className="flex-1">
        <div className="text-6xl font-bold">Let us help you.</div>
        <div className="py-6">Reach out for an exploratory conversation</div>
        <div className="py-2">
          <button className="btn !px-12 !py-4">Contact us</button>
        </div>
      </div>
      <div className="flex-1">
        <div>Phone</div>
        <div className="py-3">(123)456-7890</div>
        <div className="py-3">Email</div>
        <div>hello@reallygreatsite.com</div>
        <div className="flex gap-4 pt-8 pb-4 ">
          <div>
            <Facebook color="#26b9f1" />
          </div>
          <div>
            <Twitter color="#26b9f1" />
          </div>
          <div>
            <Instagram color="#26b9f1" />
          </div>
        </div>
      </div>
    </div>
  );
}
