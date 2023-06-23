import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      colors={["#86219f", "#a65ccb", "#bb83ec", "#d2a5f9", "#ddbef8"]}
    />
  );
};
