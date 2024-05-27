import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { toggleCart } from "../../redux/slices/cartSlice";
import HamburgerMenu from "../hamburger/HamburgerMenu";
import "../hamburger/Hamburger.scss";
import Logo from "../logo/Logo";
import "../navbar/navbarTop.scss";
import "../navbar/Overlay.scss";

const NavBarTop: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleSidebarGender, setToggleSidebarGender] = useState(false);

  const toggleCartValue = useAppSelector((state) => state.cart.toggleCart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => state.cart.totalQuantity);

  const [gender, setGender] = useState("");
  function GenderMen() {
    setGender("men");
  }
  function GenderWoman() {
    setGender("woman");
  }

  const [showMenSubItems, setShowMenSubItems] = useState(false);

  const toggleMenSubItems = () => {
    setShowMenSubItems(!showMenSubItems);
  };
  const [showWomenSubItems, setShowWomenSubItems] = useState(false);

  const toggleWomenSubItems = () => {
    setShowWomenSubItems(!showWomenSubItems);
  };

  function linkShirts() {
    navigate("/plp", { state: { category: "shirt", gender: gender } });
  }
  function linkPants() {
    navigate("/plp", { state: { category: "pants", gender: gender } });
  }
  function linkShoes() {
    navigate("/plp", { state: { category: "shoes", gender: gender } });
  }

  function linkAll() {
    navigate("/plp", { state: { gender: gender } });
  }

  return (
    <>
      <nav className="navbar_top">
        <div
          onClick={() => {
            setToggleSidebarGender(!toggleSidebarGender);
          }}
        >
          <HamburgerMenu />
        </div>
        <div className="navbar_logo">
          <Logo />
        </div>
        <div className="navbar_center">
          <div
            className="navbar_categories"
            onClick={() => {
              setToggle(!toggle), GenderMen();
            }}
          >
            <FormattedMessage id="navbarTop.men" defaultMessage="Men" />
          </div>
          <div
            className="navbar_categories"
            onClick={() => {
              setToggle(!toggle), GenderWoman();
            }}
          >
            <FormattedMessage id="navbarTop.women" defaultMessage="Women" />
          </div>
          <div className="navbar_categories">
            {/* <Link to="/aboutUs" style={mode == "dark" ? { textDecoration: "none", color: "white" } : { textDecoration: "none", color: "dark" }}> */}
            <FormattedMessage
              id="navbarTop.aboutUs"
              defaultMessage="About Us"
            />
            {/* </Link> */}
          </div>
        </div>
        <div className="navbar_right">
          {/* icona Cart */}
          <div
            onClick={() => {
              dispatch(toggleCart());
            }}
            className="navbar_button_item"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 12L8 8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8L16 12"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M3.69435 12.6678C3.83942 10.9269 3.91196 10.0565 4.48605 9.52824C5.06013 9 5.9336 9 7.68053 9H16.3195C18.0664 9 18.9399 9 19.514 9.52824C20.088 10.0565 20.1606 10.9269 20.3057 12.6678L20.8195 18.8339C20.904 19.8474 20.9462 20.3542 20.6491 20.6771C20.352 21 19.8435 21 18.8264 21H5.1736C4.15655 21 3.64802 21 3.35092 20.6771C3.05382 20.3542 3.09605 19.8474 3.18051 18.8339L3.69435 12.6678Z"
                stroke="black"
                stroke-width="2"
              />
            </svg>
            <div
              className="quantity-number"
              style={quantity <= 0 ? { display: "none" } : { display: "flex" }}
            >
              {quantity}
            </div>
          </div>
        </div>
        <div className="navbar_hidden">
          {/*  Al click della sezione centrale navbar si aprirà la sezione categoria(maglietta,scarpe,pantaloni,tutto) della navbar */}
          {toggle && (
            <div className="categories_hidden">
              <div className="category_border"></div>
              <div
                className="single_category"
                onClick={() => {
                  linkAll(), setToggle(!toggle);
                }}
              >
                All
              </div>
              <div className="category_border"></div>
              <div
                className="single_category"
                onClick={() => {
                  linkShirts(), setToggle(!toggle);
                }}
              >
                Shirt
              </div>
              <div className="category_border"></div>
              <div
                className="single_category"
                onClick={() => {
                  linkPants(), setToggle(!toggle);
                }}
              >
                Pants
              </div>
              <div className="category_border"></div>
              <div
                className="single_category"
                onClick={() => {
                  linkShoes(), setToggle(!toggle);
                }}
              >
                Shoes
              </div>
              <div className="category_border"></div>
            </div>
          )}
        </div>
      </nav>
      {
        <div
          className="sidebar_hidden2"
          style={toggleSidebarGender ? { left: "0" } : { left: "-30%" }}
        >
          <div className="category_border"></div>

          {/* Categoria Uomo*/}
          <div
            className="navbar_categories"
            onClick={() => {
              toggleMenSubItems(),
                GenderMen(),
                setShowWomenSubItems(showWomenSubItems);
            }}
          >
            Men
          </div>
          {showMenSubItems && (
            <>
              <div
                className="single_category"
                onClick={() => {
                  linkAll(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowMenSubItems(!showMenSubItems);
                }}
              >
                All
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkShirts(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowMenSubItems(!showMenSubItems);
                }}
              >
                Shirt
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkPants(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowMenSubItems(!showMenSubItems);
                }}
              >
                Pants
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkShoes(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowMenSubItems(!showMenSubItems);
                }}
              >
                Shoes
              </div>
            </>
          )}

          {/* Categoria Donna*/}
          <div className="category_border"></div>
          <div
            className="navbar_categories"
            onClick={() => {
              toggleWomenSubItems(),
                GenderWoman(),
                setShowMenSubItems(showMenSubItems);
            }}
          >
            Women
          </div>
          {showWomenSubItems && (
            <>
              <div
                className="single_category"
                onClick={() => {
                  linkAll(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowWomenSubItems(!showWomenSubItems);
                }}
              >
                All
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkShirts(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowWomenSubItems(!showWomenSubItems);
                }}
              >
                Shirt
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkPants(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowWomenSubItems(!showWomenSubItems);
                }}
              >
                Pants
              </div>
              <div
                className="single_category"
                onClick={() => {
                  linkShoes(),
                    setToggleSidebarGender(!toggleSidebarGender),
                    setShowWomenSubItems(!showWomenSubItems);
                }}
              >
                Shoes
              </div>
            </>
          )}
          <div className="category_border"></div>
        </div>
      }
    </>
  );
};

export default NavBarTop;
