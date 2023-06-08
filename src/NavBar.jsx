import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div className="flex bg-purple-400 w-full justify-between py-2 px-5 font-bold text-xl tracking-widest text-white">
      <section>
        <FontAwesomeIcon icon={faBars} />
      </section>
      <section>To Do</section>
      <div></div>
    </div>
  );
};

export default NavBar;
