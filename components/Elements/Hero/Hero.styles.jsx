import { createUseStyles } from "react-jss";

export const heroStyles = createUseStyles({
  heroContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 74px)",
    paddingBottom: 100,
    scrollMarginTop: "108px",

    "-webkit-mask-image":
      "linear-gradient(to top, black 0%, black 100%), linear-gradient(to bottom, transparent 0%, black 100%)",
    "-webkit-mask-position": "center, bottom",
    "-webkit-mask-size": "100% 100%, 100% 100px",
    "-webkit-mask-repeat": "no-repeat",
    "-webkit-mask-composite": "source-out, source-over",

    maskImage:
      "linear-gradient(to top, black 0%, black 100%), linear-gradient(to bottom, transparent 0%, black 100%)",
    maskPosition: "center, bottom",
    maskSize: "100% 100%, 100% 100px",
    maskRepeat: "no-repeat",
    maskComposite: "subtract, add",
  },

  bgImageContainer: {
    overflow: "clip",
    position: "absolute !important",
    minWidth: "100%",
    height: "calc(100vh + 250px)",
  },

  bgImage: {
    position: "absolute !important",
    top: "-100px !important",
    left: "-100px !important",
    maxWidth: "calc(100% + 250px)",
    maxHeight: "calc(100% + 250px)",
    minHeight: "calc(100% + 250px)",
    minWidth: "calc(100% + 250px)",
    objectFit: "cover",
  },

  "@media (max-width: 768px)": {
    heroContainer: {
      height: "min-content",
    },
  },
});
