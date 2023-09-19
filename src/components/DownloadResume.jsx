import { file } from "../assets/index";
import { Tooltip } from "react-tooltip";

const DownloadResume = () => {
  const handleDownload = () => {
    const resumeUrl = "/NitinPrajapati.pdf";

    const a = document.createElement("a");
    a.href = resumeUrl;
    a.download = "NitinPrajapati.pdf";

    a.click();
  };
  return (
    <div>
      <button
        className="fixed bottom-0 right-0 m-4 p-2 bg-blue-600 rounded-full shadow-xl hover:shadow-blue-900"
        onClick={handleDownload}
        data-tooltip-id="my-tooltip-inline"
        data-tooltip-content="Get Resume"
      >
        <img src={file} alt="img" width={35} />
      </button>
      <Tooltip
        id="my-tooltip-inline"
        style={{
          backgroundColor: "rgb(51, 116, 245)",
          color: "white",
        }}
      />
    </div>
  );
};

export default DownloadResume;
