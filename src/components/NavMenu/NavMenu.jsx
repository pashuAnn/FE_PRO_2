import { choiseButtons } from "../../utils";

export default function NavMenu({ data, choiseMenu, setMenu }) {
  return (
    <div className="menuWrap">
      <button className="closebutton" onClick={() => setMenu(1)}>x</button>
      <h1>Welcome!</h1>
      <div className="messageWrap">
        <p>user</p>
        <h3>{data[0].name}</h3>
      </div>
      <div className="choiseWrap">
        {choiseButtons.map((el, ind) => (
          <ChoiseButton
            key={`${el}-${ind}`}
            text={el}
            onClick={() => choiseMenu(ind + 3)}
          />
        ))}
      </div>
    </div>
  );
}

function ChoiseButton({ text, onClick }) {
  return (
    <button className="choiseButton" onClick={onClick}>
      {text}
    </button>
  );
}

