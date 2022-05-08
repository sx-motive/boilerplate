export default function Text(props) {
  return (
    <>
      {props.h ? (
        <span
          className={`caption ${props.size} ${
            props.className ? props.className : ""
          }`}
        >
          {props.children}
        </span>
      ) : (
        ""
      )}
      {props.p ? (
        <p
          className={`paragrapth ${props.size} ${
            props.className ? props.className : ""
          }`}
        >
          {props.children}
        </p>
      ) : (
        ""
      )}
    </>
  );
}
