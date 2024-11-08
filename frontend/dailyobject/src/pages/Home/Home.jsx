import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Spacer,
  Text,
  VStack,
  keyframes,
} from "@chakra-ui/react";
import Carousel from "better-react-carousel";
import "./home.css";
import NavigatetoTop from "../../components/NavigateTop/NavigateTop";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }`;

  return (
    <div className="home_main">
      <div id="navbar">
        <Navbar />
      </div>
      <div className="main_box">
        <div className="top_image_box">
          <div>
            <Image src="https://images.dailyobjects.com/marche/assets/images/other/homepage-offerbanner-by20-desktop.gif?tr=cm-pad_resize,v-2,dpr-1" />
          </div>

          <div>
            <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/pangea_collection_homepage_desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          </div>

          <div>
            <Image src="https://images.dailyobjects.com/marche/assets/images/other/watchband-homepage-sdesktop.jpg?tr=cm-pad_crop,v-2,dpr-1" />
          </div>
        </div>
        <div className="carousel_text_button_box">
          <div className="collec_card">
            <div className="crous_head">
              <Text textAlign={"center"} w={"100%"} fontSize={"3xl"}>
                NEW ARRIVALS
              </Text>
              <Text textAlign={"center"} w={"100%"}>
                Check out our newest Launches!
              </Text>
              <div className="crous_head_btn">
                <Button
                  color="white"
                  bg="gray.500"
                  borderRadius={"15px"}
                  boxShadow={
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
                  }
                  transition={"all .5s ease-in-out"}
                  _hover={{ bg: "gray.700" }}
                >
                  Shop New Arrivals
                </Button>
              </div>
            </div>
            {/* <Spacer /> */}
            <div className="carousel_box">
              <Carousel
                cols={4}
                rows={1}
                gap={5}
                showDots={true}
                autoplay={1000}
                mobileBreakpoint={767}
                scrollSnap={true}
              >
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/halo-magsafe-case-with-stand-new-arrival-homepage-image.png?tr=cm-pad_resize,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/convoy-leather-adapter-case-new-arrival-homepage-image.png?tr=cm-pad_resize,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/condo-watch-charging-stand-new-arrival-imge.png?tr=cm-pad_resize,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/group-6681.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/group-6679.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/group-6680.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/group-6678.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/group-6677.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="ads_mid">
          <Image src="https://images.dailyobjects.com/marche/assets/images/homepage/desktop/Desktop-banner_backpacks-updated.jpg?tr=cm-pad_crop,v-2,dpr-1" />
        </div>

        <div className="ads_mid">
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/deals-of-the-day-desktop.jpg?tr=cm-pad_crop,v-2,dpr-1" />
        </div>

        <div className="carousel_text_button_box">
          <div className="collec_card">
            <div className="crous_head">
              <Text textAlign={"center"} w={"100%"} fontSize={"3xl"}>
                SHOP CATEGORIES
              </Text>
              <Container textAlign={"center"}>
                Now browse our selection of carefully curated products in sorted
                categories
              </Container>
            </div>
            {/* <Spacer /> */}
            <div className="carousel_box">
              <Carousel
                cols={4}
                rows={1}
                showDots={true}
                autoplay={1000}
                gap={5}
                mobileBreakpoint={767}
                scrollSnap={true}
              >
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/cases-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/laptop-sleeve-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/charging-solution-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/tote-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/crossbody-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/backpack-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/deskmat-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    height={"300px"}
                    objectFit="cover"
                    src="https://images.dailyobjects.com/marche/assets/images/other/watchbands-ups.jpg?tr=cm-pad_crop,v-2,dpr-1"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        <div>
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/messenger-bags-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1" />
        </div>
        <div className="collec_ads">
          <Flex justifyContent={"space-between"} px={"3rem"} py={"2rem"}>
            <Text as={"b"} fontSize={"2xl"} letterSpacing={"2px"}>
              COLLECTIONS
            </Text>
            <Button color={"black"} variant={"link"}>
              View All
            </Button>
          </Flex>
          <div className="collec_card_wrap">
            <div>
              <img
                boxSize="480px"
                objectFit={"cover"}
                src="https://images.dailyobjects.com/marche/assets/images/other/collection-08-01.jpg?tr=cm-pad_crop,v-2,dpr-1"
                alt=""
              />
              <div style={{ padding: "0px 10px" }}>
                <Text textAlign={"left"} w={"100%"} fontSize={"2xl"}>
                  08:01 COLLECTION
                </Text>
                <Text>
                  A collection featured to preserve all brief encounters on your
                  everyday journey
                </Text>
                <Button
                  color={"black"}
                  variant={"link"}
                  mt={"10px"}
                  fontSize={"sm"}
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <div>
              <img
                boxSize="480px"
                objectFit={"cover"}
                src="https://images.dailyobjects.com/marche/assets/images/other/collection-tarp.jpg?tr=cm-pad_crop,v-2,dpr-1"
                alt=""
              />
              <div style={{ padding: "0px 10px" }}>
                <Text textAlign={"left"} w={"100%"} fontSize={"2xl"}>
                  TRAP COLLECTION
                </Text>
                <Text>
                  Urban-Inspired carriers, made for free-spirited and powerful
                  wearers.
                </Text>
                <Button
                  color={"black"}
                  variant={"link"}
                  mt={"10px"}
                  fontSize={"sm"}
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <div>
              <img
                boxSize="480px"
                objectFit={"cover"}
                src="https://images.dailyobjects.com/marche/assets/images/homepage/slider/collections-Platform-collection-banner-image-homepgae.png?tr=cm-pad_resize,v-2,dpr-1"
                alt=""
              />
              <div style={{ padding: "0px 10px" }}>
                <Text textAlign={"left"} w={"100%"} fontSize={"2xl"}>
                  PLATFORM COLLECTION
                </Text>
                <Text>
                  Designed with minimal geometric innovtions to add comfort to
                  your workspace.
                </Text>
                <Button
                  color={"black"}
                  variant={"link"}
                  mt={"10px"}
                  fontSize={"sm"}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="ads_mid">
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/phone-cases-desktop-up.jpg?tr=cm-pad_crop,v-2,dpr-1" />
        </div>

        <Flex width={"95%"} margin={"auto"} gap={2}>
          <VStack className="ads_mid">
            <Image src="https://images.dailyobjects.com/marche/assets/images/other/charging-ssolution.jpg?tr=cm-pad_crop,v-2,w-704,dpr-1" />
            <div style={{ padding: "0px 10px", width: "100%" }}>
              <Text textAlign={"left"} w={"100%"} fontSize={"2xl"}>
                CHARGING SOLUTIONS
              </Text>
              <Button color={"black"} variant={"link"} fontSize={"sm"}>
                Shop Now
              </Button>
            </div>
          </VStack>
          <Spacer />
          <VStack className="ads_mid">
            <Image src="https://images.dailyobjects.com/marche/assets/images/other/work-eessentials.jpg?tr=cm-pad_crop,v-2,w-704,dpr-1" />
            <div style={{ padding: "0px 10px", width: "100%" }}>
              <Text textAlign={"left"} w={"100%"} fontSize={"2xl"}>
                WORK ESSENTIALS
              </Text>
              <Button color={"black"} variant={"link"} fontSize={"sm"}>
                Shop Now
              </Button>
            </div>
          </VStack>
        </Flex>

        <Box>
          <Flex
            justifyContent={"space-between"}
            px={"3rem"}
            paddingBottom={"2rem"}
          >
            <Text as={"b"} fontSize={"2xl"} letterSpacing={"2px"}>
              STUDIO COLLECTIONS
            </Text>
          </Flex>
          <div className="collec_card_wrap">
            <div>
              <img
                className="ads_funk"
                boxSize="480px"
                objectFit={"cover"}
                src="https://images.dailyobjects.com/marche/assets/images/other/homepage-dreamscape-collection-banner.jpg?tr=cm-pad_crop,v-2,dpr-1"
                alt=""
              />
              <div style={{ padding: "0px 10px" }}>
                <Text textAlign={"left"} w={"100%"} fontSize={"2xl"}>
                  DREAMSCAPE
                </Text>
                <Text>
                  A vivid dream journal that lets you carry your daydreaming
                  stance into real life.
                </Text>
                <Button
                  color={"black"}
                  variant={"link"}
                  mb={"15px"}
                  mt={"15px"}
                  fontSize={"sm"}
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <div>
              <img
                className="ads_funk"
                boxSize="480px"
                objectFit={"cover"}
                src="https://images.dailyobjects.com/marche/assets/images/other/zodiac-collections.jpg?tr=cm-pad_crop,v-2,dpr-1"
                alt=""
              />
              <div style={{ padding: "0px 10px" }}>
                <Text textAlign={"left"} w={"100%"} fontSize={"2xl"}>
                  ZODIAC
                </Text>
                <Text>
                  Zodiac Collection reflects the unique personality of every
                  individual out there!
                </Text>
                <Button
                  color={"black"}
                  variant={"link"}
                  mb={"15px"}
                  mt={"15px"}
                  fontSize={"sm"}
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <div>
              <img
                className="ads_funk"
                boxSize="480px"
                objectFit={"cover"}
                src="https://images.dailyobjects.com/marche/assets/images/other/homepage-arcade-collection-banner.jpg?tr=cm-pad_crop,v-2,dpr-1"
                alt=""
              />
              <div style={{ padding: "0px 10px" }}>
                <Text textAlign={"left"} w={"100%"} fontSize={"2xl"}>
                  PIXEL
                </Text>
                <Text>
                  A reflection of modern pop-culture with a vintage appeal that
                  evokes nostalgia.
                </Text>
                <Button
                  color={"black"}
                  variant={"link"}
                  mb={"15px"}
                  mt={"15px"}
                  fontSize={"sm"}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </Box>

        <div className="ads_mid">
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/organisers-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1" />
        </div>

        <div className="ads_mid">
          <Image src="https://images.dailyobjects.com/marche/assets/images/other/corporate-gifting-desktops.jpg?tr=cm-pad_crop,v-2,dpr-1" />
        </div>

        <Box className="text_button_box" p={"2rem"}>
          <div width={"95%"} margin={"auto"} justifyContent={"space-between"}>
            <div style={{ padding: "0px 10px" }}>
              <Text textAlign={"center"} w={"100%"} fontSize={"3xl"}>
                OUR STORY
              </Text>
              <Text textAlign={"justify"} w={"100%"}>
                Founded in 2012, DailyObjects is a design-obsessed lifestyle
                accessories brand committed to making your everyday carry
                #lessordinary.
              </Text>
              <Text textAlign={"justify"} w={"100%"}>
                You can look forward to a carefully-crafted range of products,
                made from long-lasting materials, with designs that stand out
                and make your life easy. With DailyObjects, let your lifestyle
                reflect your sensibilities as you go on to make your every day
                #lessordinary.
              </Text>
              <Button color={"black"} mt={"15px"} variant={"link"}>
                Read more
              </Button>
            </div>

            <div className="ads_mid">
              <Image
                m={"auto"}
                w={"100%"}
                src="https://images.dailyobjects.com/marche/assets/images/other/Our-Story-updated01.jpg?tr=cm-pad_crop,v-2,dpr-1"
              />
            </div>
          </div>
        </Box>
        <Box
          className="marquee_box"
          width={"90%"}
          margin={"auto"}
          overflow={"hidden"}
        >
          <Box whiteSpace="nowrap" animation={`${marquee} 20s linear infinite`}>
            <Image
              src="https://images.dailyobjects.com/marche/assets/images/other/artboard-8.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
              style={{
                display: "inline-block",
                marginRight: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <Image
              src="https://images.dailyobjects.com/marche/assets/images/social/002.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
              style={{
                display: "inline-block",
                marginRight: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <Image
              src="https://images.dailyobjects.com/marche/assets/images/social/001.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
              style={{
                display: "inline-block",
                marginRight: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <Image
              src="https://images.dailyobjects.com/marche/assets/images/social/003.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
              style={{
                display: "inline-block",
                marginRight: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <Image
              src="https://images.dailyobjects.com/marche/assets/images/social/004.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
              style={{
                display: "inline-block",
                marginRight: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <Image
              src="https://images.dailyobjects.com/marche/assets/images/social/005.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
              style={{
                display: "inline-block",
                marginRight: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <Image
              src="https://images.dailyobjects.com/marche/assets/images/other/artboard-7.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
              style={{
                display: "inline-block",
                marginRight: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <Image
              src="https://images.dailyobjects.com/marche/assets/images/social/006.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
              style={{
                display: "inline-block",
                marginRight: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <Image
              src="https://images.dailyobjects.com/marche/assets/images/other/artboard-11.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
              style={{
                display: "inline-block",
                marginRight: "20px",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
            <Image
              src="https://images.dailyobjects.com/marche/assets/images/social/03.jpg?tr=cm-pad_crop,v-2,w-353,dpr-1"
              style={{
                display: "inline-block",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </Box>
        </Box>
      </div>
      <NavigatetoTop />
      <Box>
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
