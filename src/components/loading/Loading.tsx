import { useDarkMode } from "../darkmode/DarkmodeContext";
import "./loading2.scss";

const Loading = () => {
  const { mode } = useDarkMode();

  return (
    <>
      <div className={`loading-spinner ${mode}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="100px"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2.99988V5.99988M12 20.9999V17.9999M4.20577 16.4999L6.80385 14.9999M21 11.9999H18M16.5 19.7941L15 17.196M3 11.9999H6M7.5 4.20565L9 6.80373M7.5 19.7941L9 17.196M19.7942 16.4999L17.1962 14.9999M4.20577 7.49988L6.80385 8.99988"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default Loading;
