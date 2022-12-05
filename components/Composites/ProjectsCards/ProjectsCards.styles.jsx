import { createUseStyles } from "react-jss";

export const projectCardsStyles = createUseStyles({
  projectContainer: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 40,
    overflowX: "scroll",

    "&::-webkit-scrollbar": {
      height: 20,
      background: "light-grey",
    },
    "&::-webkit-scrollbar-track": {},

    "-webkit-mask-image":
      "linear-gradient(to top, black 0%, black 100%), linear-gradient(to left, transparent 0%, black 100%), linear-gradient(to right, transparent 0%, black 100%)",
    "-webkit-mask-position": "center, left, right",
    "-webkit-mask-size": "100% 100%, 60px 100%, 60px 100%",
    "-webkit-mask-repeat": "no-repeat",
    "-webkit-mask-composite": "source-out, source-over, source-over",

    maskImage:
      "linear-gradient(to top, black 0%, black 100%), linear-gradient(to left, transparent 0%, black 100%), linear-gradient(to right, transparent 0%, black 100%)",
    maskPosition: "center, left, right",
    maskSize: "100% 100%, 60px 100%, 60px 100%",
    maskRepeat: "no-repeat",
    maskComposite: "subtract, add, add",

    "@media (max-width: 992px)": {
      "-webkit-mask-size": "100% 100%, 30px 100%, 30px 100%",
      maskSize: "100% 100%, 30px 100%, 30px 100%",
    },
  },
});
