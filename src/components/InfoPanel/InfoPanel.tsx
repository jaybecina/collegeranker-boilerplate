import React, { useState } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Transition } from "@headlessui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoInformationCircle } from "react-icons/io5";
import { setInfoPanelVisible } from "../../redux/feature/infoPanel/infoPanelSlice";

const InfoPanel: React.FC = () => {
  const [showInfo, setShowInfo] = useState(true);

  const dispatch: Dispatch<any> = useDispatch();

  const infoPanel = useSelector(
    // @ts-ignore
    (state) => state.infoPanel
  );

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const togglePanel = () => {
    dispatch(setInfoPanelVisible());
  };

  console.log("infoPanel: " + infoPanel);

  return (
    <div className="w-full min-w-screen">
      <Transition
        show={infoPanel?.infoPanelVisible}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-white rounded-md shadow-md flex flex-col justify-between px-5 py-4 h-full">
          <div className="flex justify-between">
            <button
              onClick={toggleInfo}
              className="focus:outline-none transition-opacity duration-300 hover:opacity-70"
            >
              <IoInformationCircle className="h-5 w-5 mr-2 text-blue-500" />
            </button>
            <button
              onClick={togglePanel}
              className="focus:outline-none transition-opacity duration-300 hover:opacity-70"
            >
              <AiFillCloseCircle className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          {showInfo && (
            <p className="text-sm text-center p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              facilisis nulla fermentum nulla gravida fringilla. Curabitur urna
              lectus, porttitor eu dignissim non, pharetra a magna. Integer in
              iaculis lorem, non accumsan elit. Vivamus vitae tempus enim. Sed
              ac ipsum sem. Pellentesque ac metus orci. Phasellus accumsan,
              ligula nec convallis bibendum, mauris magna sagittis est, vel
              elementum mi ligula at magna. Nullam quis metus eu nibh blandit
              ultrices ac eu lacus. In nec lacus finibus, euismod velit a,
              rhoncus enim. Phasellus et urna sit amet est viverra imperdiet.
              Curabitur libero purus, mattis quis neque vel, vehicula
              sollicitudin massa. Proin enim urna, porttitor in turpis nec,
              luctus accumsan orci. Nullam ac leo lacus. Cras id nibh eleifend,
              luctus neque eu, semper urna. Sed hendrerit eros mi, at lacinia
              nunc scelerisque id. Sed euismod enim quis felis bibendum
              sagittis. Curabitur posuere ut neque vel dignissim. Maecenas id
              semper nulla. Cras vehicula lacinia arcu, et venenatis tellus
              feugiat ac. Sed viverra faucibus ipsum ac imperdiet. In hac
              habitasse platea dictumst. Quisque sagittis quam sapien, id congue
              justo porta vel. Proin metus massa, viverra at ante ut, vehicula
              hendrerit erat. Sed faucibus viverra ex vitae eleifend. Sed
              ultrices pretium quam eget mattis. Etiam bibendum ligula at nisl
              accumsan dictum. Mauris quis ante vel ex vestibulum auctor.
              Phasellus non quam id augue hendrerit dapibus. Cras egestas
              sollicitudin nibh. Proin volutpat ligula sed augue consectetur
              pulvinar. Fusce malesuada ullamcorper orci et aliquam. Fusce ac
              dapibus magna, et vulputate lorem. Mauris tellus dolor,
              pellentesque eu risus id, consectetur faucibus diam. Fusce id elit
              non elit vestibulum varius vel lacinia nibh. Vivamus aliquam
              porttitor ex, ac condimentum eros eleifend quis. Nunc auctor
              vehicula nisi, et pellentesque arcu. In volutpat vehicula
              pulvinar. Ut mattis nibh ac augue scelerisque, et sodales sem
              malesuada. Cras dapibus scelerisque felis, nec tempor elit. Fusce
              vestibulum gravida tristique. Sed tristique luctus ligula eget
              porta.
            </p>
          )}
        </div>
      </Transition>
    </div>
  );
};

export default InfoPanel;
