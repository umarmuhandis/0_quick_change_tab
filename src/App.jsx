import classNames from "classnames";
import { useState } from "react";

const TabButton = ({ children, onClick, isActive }) => {
  return (
    <button
      className={classNames("font-bold uppercase text-neutral-300", {
        "!text-black": isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const TabContent = ({ currentTabIndex, setCurrentTabIndex }) => {
  return (
    <>
      <div className="my-3 space-x-3">
        {TAB_TEXTS.map((text, index) => (
          <TabButton
            onClick={() => setCurrentTabIndex(index)}
            key={index}
            isActive={index === currentTabIndex}
          >
            {text}
          </TabButton>
        ))}
      </div>

      <div>{TAB_CONTENTS[currentTabIndex]} content</div>
    </>
  );
};

const TAB_TEXTS = ["Positive", "Negative", "Neutral"];
const TAB_CONTENTS = [...TAB_TEXTS];

function App() {
  const [curTabIndex, setCurrentTabIndex] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.tabIndex;
    if (+input.value < 0 || +input.value > 3) {
      alert("Invalid input");
      return;
    }

    setCurrentTabIndex(+input.value);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-400">
      <div className="min-w-[400px] bg-white px-4 py-6">
        <form onSubmit={handleFormSubmit}>
          <input
            className="w-2/3 border-0 border-b  border-gray-300 px-2 py-1 focus:outline-none focus:ring-0"
            id="tabIndex"
            name="tabIndex"
            type="number"
            placeholder="Enter tab index"
          />
          <button
            className="ml-3 inline-block bg-neutral-300 p-2 font-light text-black hover:bg-neutral-500"
            type="submit"
          >
            Change tab
          </button>
        </form>
        <TabContent
          setCurrentTabIndex={setCurrentTabIndex}
          currentTabIndex={curTabIndex}
        />
      </div>
    </div>
  );
}

export default App;
