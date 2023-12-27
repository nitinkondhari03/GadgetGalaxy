import "./Navbar.css";
import Logo from "./Gadget.png";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Tooltip,
  VStack,
  Button,
  Badge,
  Toast,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  useDisclosure,
  DrawerHeader,
  DrawerFooter,
} from "@chakra-ui/react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/userauth/action";
import { getCartData } from "../../redux/usercart/action";
import { useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const items = useSelector((store) => store.cartReducer.totalItems);
  console.log(items);

  useEffect(() => {
    dispatch(getCartData);
  }, [items]);

  const isUserLogin = useSelector((store) => store.userAuthReducer.isAuth);
  console.log(isUserLogin);

  const handleLogo = () => {
    navigate("/");
  };
  const handleLogout = () => {
    dispatch(userLogout());
    localStorage.removeItem("token");
    Toast({
      title: "Logout Successful",
      description: "",
      status: "success",
      duration: 2500,
      isClosable: true,
      position: "top",
    });
  };

  const productcategory = (category) => {
    navigate(`/products/${category}`);
  };
  return (
    <div className="nav_root">
      <img onClick={handleLogo} src={Logo} alt="" className="nav_logo" />
      <div className="main_navbar" top={0}>
        <div className="nav_link">
          <Link to="">NEW ARRIVALS</Link>
          <div className="nav_child">
            <h3>NEW ARRIVALS</h3>
            <ul>
              <li onClick={() => productcategory("Desks")}>Desks</li>
              <li onClick={() => productcategory("Charging Solutions")}>
                Charging Solutions
              </li>
              <li onClick={() => productcategory("Pedal Backpack")}>
                Pedal Backpack
              </li>
              <li onClick={() => productcategory("Macbook Sleeve")}>
                Macbook Sleeves
              </li>
              <li onClick={() => productcategory("Messanger Bags")}>
                Messenger Bags
              </li>
              <li onClick={() => productcategory("Eyewear")}>Eyewear Cases</li>
              <li onClick={() => productcategory("Watchbands")}>Watchbands</li>
            </ul>
          </div>
        </div>
        <div className="nav_link">
          <Link to="">CASES & SLEEVES</Link>
          <div className="nav_child">
            <h3>CASES</h3>
            <ul>
              <li onClick={() => productcategory("Desks")}>Apple</li>
              <li onClick={() => productcategory("Desks")}>Samsung</li>
              <li onClick={() => productcategory("Desks")}>Google</li>
              <li onClick={() => productcategory("Desks")}>Sony</li>
              <li onClick={() => productcategory("Desks")}>Xiaomi</li>
              <li onClick={() => productcategory("Desks")}>Oneplus</li>
              <li onClick={() => productcategory("Desks")}>Realme</li>
            </ul>
          </div>
        </div>
        <div className="nav_link">
          <Link to="">ACCESSORIES</Link>
          <div className="nav_child">
            <h3>ACCESSORIES</h3>
            <ul>
              <li onClick={() => productcategory("Desks")}>
                Watch Accessories
              </li>
              <li onClick={() => productcategory("Desks")}>Screen Guard</li>
              <li onClick={() => productcategory("Desks")}>Stands</li>
              <li onClick={() => productcategory("Desks")}>Sony</li>
              <li onClick={() => productcategory("Desks")}>
                Charging Solutions
              </li>
              <li onClick={() => productcategory("Desks")}>Wallets</li>
              <li onClick={() => productcategory("Desks")}>Keychains</li>
              <li onClick={() => productcategory("Desks")}>Masks</li>
            </ul>
          </div>
        </div>
        <div className="nav_link">
          <Link to="">BAGS & WALLETS</Link>
          <div className="nav_child">
            <h3>BAGS & WALLETS</h3>
            <ul>
              <li onClick={() => productcategory("Desks")}>Wallets</li>
              <li onClick={() => productcategory("Desks")}>Crossbody Bags</li>
              <li onClick={() => productcategory("Desks")}>Tote Bags</li>
              <li onClick={() => productcategory("Desks")}>Messanger Bags</li>
              <li onClick={() => productcategory("Desks")}>Backpacks</li>
              <li onClick={() => productcategory("Desks")}>Duffle Bags</li>
              <li onClick={() => productcategory("Desks")}>Pouches</li>
            </ul>
          </div>
        </div>
        <div className="nav_link">
          <Link to="">HOME OFFICE</Link>
          <div className="nav_child">
            <h3>HOME OFFICE</h3>
            <ul>
              <li onClick={() => productcategory("Desks")}>Stands</li>
              <li onClick={() => productcategory("Desks")}>Organisers</li>
              <li onClick={() => productcategory("Desks")}>Desks</li>
              <li onClick={() => productcategory("Desks")}>Stationery</li>
              <li onClick={() => productcategory("Desks")}>Drinkware</li>
              <li onClick={() => productcategory("Desks")}>
                Charging Solutions
              </li>
            </ul>
          </div>
        </div>
        <div className="nav_link">
          <Link to="">COLLECTIONS</Link>
          <div className="nav_child">
            <h3>COLLECTIONS</h3>
            <ul>
              <li onClick={() => productcategory("Desks")}>Collection</li>
              <li onClick={() => productcategory("Desks")}>Studio</li>
              <li onClick={() => productcategory("Desks")}>Collaborations</li>
            </ul>
          </div>
        </div>
        <div className="nav_link">
          <Link to="">GIFTING</Link>
          <div className="nav_child">
            <h3>GIFTING</h3>
            <ul>
              <li onClick={() => productcategory("Desks")}>
                Corporate Gifting
              </li>
              <li onClick={() => productcategory("Desks")}>
                Holiday Gifting Bundles
              </li>
              <li onClick={() => productcategory("Desks")}>E-Gift Cards</li>
              <li onClick={() => productcategory("Desks")}>Gifts By Budget</li>
              <li onClick={() => productcategory("Desks")}>
                Gifts By Personas
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav_icon">
        <VStack>
          <Tooltip hasArrow label="Search" bg="gray.300" color="black">
            <Button
              h={{ base: "1rem", lg: "1.7rem" }}
              bg={"white"}
              onClick={() => {
                navigate("/search");
              }}
              _hover={{
                bg: "#ffffff",
              }}
            >
              <CiSearch style={{ fontSize: "25px" }} />
            </Button>
          </Tooltip>
        </VStack>

        <div className="dropdown-menu">
          <button className="hover-account">
            <Tooltip hasArrow label="Account" bg="gray.300" color="black">
              <CiUser style={{ fontSize: "25px" }} />
            </Tooltip>
          </button>
          <ul className="all-log">
            {isUserLogin === false ? (
              <>
                <Button
                  style={{
                    width: "100%",
                    borderTopRightRadius: "20px",
                    borderTopLeftRadius: "20px",
                    borderBottomRightRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    transition: "all .5s ease-in-out",
                    textAlign: "left",
                  }}
                  bg={"white"}
                  onClick={() => {
                    navigate("/login");
                  }}
                  _hover={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Login
                </Button>
                <Button
                  style={{
                    width: "100%",
                    borderTopRightRadius: "0px",
                    borderTopLeftRadius: "0px",
                    borderBottomRightRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    transition: "all .5s ease-in-out",
                    textAlign: "left",
                  }}
                  bg={"white"}
                  onClick={() => {
                    navigate("/signup");
                  }}
                  _hover={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Signup
                </Button>
              </>
            ) : (
              <Button
                style={{
                  width: "100%",
                  borderTopRightRadius: "20px",
                  borderTopLeftRadius: "20px",
                  borderBottomRightRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  transition: "all .5s ease-in-out",
                  textAlign: "left",
                }}
                onClick={handleLogout}
                bg={"white"}
                _hover={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Logout
              </Button>
            )}
          </ul>
        </div>
        <div className="navCart">
          <Tooltip hasArrow label="Cart" bg="gray.300" color="black">
            <Button
              h={{ base: "1rem", lg: "1.7rem" }}
              bg={"white"}
              onClick={() => {
                navigate("/cart");
              }}
              _hover={{
                bg: "#ffffff",
              }}
            >
              <CiShoppingCart style={{ fontSize: "25px" }} />
              <Badge borderRadius={"8px"} variant="subtle" colorScheme="green">
                {items.length > 0 ? items : ""}
              </Badge>
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="responce">
        <RxHamburgerMenu onClick={onOpen} style={{ margin: "auto" }} />
        <Drawer
          style={{ borderRadius: "8px" }}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay style={{ borderRadius: "8px" }} />
          <DrawerContent style={{ borderRadius: "8px" }}>
            <DrawerCloseButton />
            <DrawerHeader>GadgetGalaxy</DrawerHeader>
            <DrawerBody marginTop={"30px"}>
              <div className="drawerbody">
                <div className="nav_link">
                  <Link to="">NEW ARRIVALS</Link>
                </div>
                <div className="nav_link">
                  <Link to="">CASES & SLEEVES</Link>
                </div>
                <div className="nav_link">
                  <Link to="">ACCESSORIES</Link>
                </div>
                <div className="nav_link">
                  <Link to="">BAGS & WALLETS</Link>
                </div>
                <div className="nav_link">
                  <Link to="">HOME OFFICE</Link>
                </div>
                <div className="nav_link">
                  <Link to="">COLLECTIONS</Link>
                </div>
                <div className="nav_link">
                  <Link to="">GIFTING</Link>
                </div>

                <div className="nav_icons">
                  <VStack>
                    <Tooltip
                      hasArrow
                      placement="top"
                      label="Search"
                      bg="gray.300"
                      color="black"
                    >
                      <Button
                        h={{
                          base: "1rem",
                          lg: "1.7rem",
                        }}
                        bg={"white"}
                        onClick={() => {
                          navigate("/search");
                        }}
                        _hover={{
                          bg: "#ffffff",
                        }}
                      >
                        <CiSearch style={{ fontSize: "25px" }} />
                      </Button>
                    </Tooltip>
                  </VStack>

                  <div className="dropdown-menus">
                    <button className="hover-account">
                      <Tooltip
                        hasArrow
                        label="Account"
                        bg="gray.300"
                        color="black"
                      >
                        <CiUser style={{ fontSize: "25px" }} />
                      </Tooltip>
                    </button>
                    <ul className="all-logs">
                      {isUserLogin === false ? (
                        <>
                          <Button
                            style={{
                              width: "100%",
                              borderTopRightRadius: "20px",
                              borderTopLeftRadius: "20px",
                              borderBottomRightRadius: "0px",
                              borderBottomLeftRadius: "0px",
                              transition: "all .5s ease-in-out",
                              textAlign: "left",
                            }}
                            bg={"white"}
                            onClick={() => {
                              navigate("/login");
                            }}
                            _hover={{
                              backgroundColor: "black",
                              color: "white",
                            }}
                          >
                            Login
                          </Button>
                          <Button
                            style={{
                              width: "100%",
                              borderTopRightRadius: "0px",
                              borderTopLeftRadius: "0px",
                              borderBottomRightRadius: "20px",
                              borderBottomLeftRadius: "20px",
                              transition: "all .5s ease-in-out",
                              textAlign: "left",
                            }}
                            bg={"white"}
                            onClick={() => {
                              navigate("/signup");
                            }}
                            _hover={{
                              backgroundColor: "black",
                              color: "white",
                            }}
                          >
                            Signup
                          </Button>
                        </>
                      ) : (
                        <Button
                          style={{
                            width: "100%",
                            borderTopRightRadius: "20px",
                            borderTopLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            borderBottomLeftRadius: "20px",
                            transition: "all .5s ease-in-out",
                            textAlign: "left",
                          }}
                          onClick={handleLogout}
                          bg={"white"}
                          _hover={{
                            backgroundColor: "black",
                            color: "white",
                          }}
                        >
                          Logout
                        </Button>
                      )}
                    </ul>
                  </div>
                  <div className="navCart">
                    <Tooltip
                      hasArrow
                      placement="top"
                      label="Cart"
                      bg="gray.300"
                      color="black"
                    >
                      <Button
                        h={{
                          base: "1rem",
                          lg: "1.7rem",
                        }}
                        bg={"white"}
                        onClick={() => {
                          navigate("/cart");
                        }}
                        _hover={{
                          bg: "#ffffff",
                        }}
                      >
                        <CiShoppingCart style={{ fontSize: "25px" }} />
                        <Badge
                          borderRadius={"8px"}
                          variant="subtle"
                          colorScheme="green"
                        >
                          {items.length > 0 ? items : ""}
                        </Badge>
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </DrawerBody>
            <DrawerFooter borderTopWidth="1px" style={{ borderRadius: "8px" }}>
              <p>© 2012 - 2023 Firki Wholesale Pvt. Ltd.</p>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};
export default Navbar;
