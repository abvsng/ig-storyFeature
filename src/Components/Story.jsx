import { useState } from "react";
import { stories } from "./stories";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { modalVisible, setModalData } from "../Store/Slices/modalSlice.jsx";
export default function Story() {
  const isModalOpen = useSelector((state) => state.isModalOpen.isModalOpen);
  const [localStories, setLocalStories] = useState(stories);
  return (
    <>
      <div className=" m-3 bg-slate-700 rounded-3xl p-3">
        <div className=" w-full overflow-x-auto">
          <div className=" flex flex-row gap-2 w-max">
            {localStories.map((story, index) => (
              <StoryBox story={story} key={index} />
            ))}
          </div>
          {isModalOpen && (
            <Modal
              setLocalStories={setLocalStories}
            />
          )}
        </div>
      </div>
    </>
  );
}
function StoryBox({ story }) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`border-4 rounded-full ${
          story.viewed ? "border-gray-400" : "border-cyan-600"
        }`}
      >
        <img
          src={story.userImageUrl}
          alt="user image"
          className="rounded-full  w-15 h-15 cursor-pointer"
          onClick={async () => {
            dispatch(setModalData(story));
            dispatch(modalVisible());
          }}
        />
      </div>
    </>
  );
}
