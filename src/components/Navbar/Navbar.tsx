import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { selectCollege } from "../../redux/feature/colleges/collegeSlice";
import { setInfoPanelVisible } from "../../redux/feature/infoPanel/infoPanelSlice";

// selectCollege
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  const [navActive, setNavActive] = useState<string>("");

  // implement mock-up here
  const dispatch: Dispatch<any> = useDispatch();

  const colleges = useSelector(
    // @ts-ignore
    (state) => state.colleges
  );

  const infoPanel = useSelector(
    // @ts-ignore
    (state) => state.infoPanel
  );

  const toggleActive = (name: string) => {
    setNavActive(name);
    dispatch(selectCollege(name));
    dispatch(setInfoPanelVisible(true));
  };

  console.log("infoPanel navbar: ", infoPanel?.infoPanelVisible);

  useEffect(() => {
    console.log(colleges?.colleges);

    if (navActive === "" && colleges?.colleges?.length > 0) {
      dispatch(selectCollege(colleges?.colleges[0]?.name));
    }
  }, [colleges, navActive]);

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow-md">
        {({ open }) => (
          <>
            <div className="max-w-screen px-6 md:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-center">
                <div className="flex flex-1 items-center justify-center">
                  {/* <div className="flex flex-shrink-0">
                    <Link href="/" className="px-0">
                      <h1 className="m-0 text-uppercase font-bold text-primary">
                        College Ranker
                      </h1>
                    </Link>
                  </div> */}
                  <div className="hidden md:flex flex-grow justify-center">
                    <div className="flex space-x-4">
                      {colleges?.colleges?.map((item: any, i: number) => (
                        <>
                          <Link
                            key={`college-${item.name}`}
                            to={"#"}
                            className={classNames(
                              navActive === item.name
                                ? "text-blue-800"
                                : navActive === "" && i === 0
                                ? "text-blue-800"
                                : "text-blackhover:text-slate-600",
                              "px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={navActive ? "page" : undefined}
                            onClick={() => toggleActive(item.name)}
                          >
                            {item.name}
                          </Link>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <FaTimes className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <FaBars className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="block lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {colleges?.colleges?.map((item: any) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-blue-800"
                        : "text-black hover:text-blue-600",
                      "iiss-button block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="text-black hover:text-blue-600 iiss-button block rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page"
                >
                  Join Us
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
