import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";

export default function Text(props) {
  return (
    <>
      {props.caption ? (
        <SplitText
          className={`text caption ${props.size} ${
            props.className ? props.className : ""
          }`}
          LineWrapper={({ children }) => (
            <span className="line-wrap">
              <motion.span
                className="text-line"
                initial={{ skewY: 25, y: "90%" }}
                whileInView={{
                  skewY: 0,
                  y: 0,
                  transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1.2,
                  },
                }}
                viewport={{ once: false }}
              >
                {children}
              </motion.span>
            </span>
          )}
        >
          {props.children}
        </SplitText>
      ) : (
        <SplitText
          className="text paragrapth"
          LineWrapper={({ children }) => (
            <p className="line-wrap">
              <motion.span
                className="text-line"
                initial={{ opacity: 0, y: "90%" }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1.2,
                  },
                }}
                viewport={{ once: false }}
              >
                {children}
              </motion.span>
            </p>
          )}
        >
          {props.children}
        </SplitText>
      )}
    </>
  );
}
