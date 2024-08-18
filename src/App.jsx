import logo from "./assets/192x192.jpg"
import icon from "./assets/userIcon.svg"

const Header = () => {
  let string = "";
  let timer;

  const alertFunction = (obj) => {
    string += obj.key;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      alert(string);
      string = "";
    }, 500);
  };

  let bg = (
      <div className="header bg-neutral-600">
        <img className="header-logo" src={logo} alt="LOGO" />
        <form className="header-form" action="#" method="get">
          <input type="text" onChange={alertFunction} name="header-search" id="header-search" placeholder="Enter something" />
        </form>
        <img className="header-icon" src={icon} alt="" width={60}/>
      </div>
    );

  return bg;
}

const App = () => {
  return (
    <>
      <Header/>
    </>
  );
}

export default App;