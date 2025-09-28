import { useDispatch, useSelector } from "react-redux";
import { modalInVisible, setModalData } from "../Store/Slices/modalSlice.jsx";
import { useEffect } from "react";
import { stories } from "./stories.js";
export default function Modal() {
  const modalData = useSelector((state) => state.isModalOpen.modalData);
  const dispatch = useDispatch();
  const prevStory = () => {
    if (modalData.sno - 1 < 0) {
      return;
    }
    dispatch(setModalData(stories[modalData.sno - 1]));
  };
  const nextStory = () => {
    if (modalData.sno + 1 >= stories.length) {
      return;
    }
    dispatch(setModalData(stories[modalData.sno + 1]));
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(modalInVisible());
    }, 10000);
    return () => clearTimeout(timer);
  }, [dispatch, modalData]);
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50">
        <div
          className=" fixed top-6 right-4 cursor-pointer z-10"
          onClick={() => {
            dispatch(modalInVisible());
          }}
        >
          X
        </div>
        <div className="fixed top-0 w-fit bg-black opacity-65 mt-4 ml-2  px-2 py-1 text-xl text-white  rounded-xl">
          {modalData.userName}
        </div>
        <div>
          <img
            src={modalData.userImageUrl}
            alt="user image"
            className="w-full h-screen"
          />
        </div>
        <div
          className="fixed top-1/2 right-4 text-2xl -transform-translate-x-1/2 cursor-pointer z-10 p-5"
          onClick={nextStory}
        >
          +
        </div>
        <div
          className="fixed top-1/2 left-4 text-2xl -transform-translate-x-1/2 cursor-pointer z-10 p-5"
          onClick={prevStory}
        >
          -
        </div>
        <div className=" fixed bottom-5 w-4/5 left-1/2 transform -translate-x-1/2">
          <input
            type="text"
            className="w-full  m-10 overflow-x-hidden bg-slate-900 opacity-70 p-10"
            placeholder="Reply"
          />
        </div>
      </div>
    </>
  );
}
