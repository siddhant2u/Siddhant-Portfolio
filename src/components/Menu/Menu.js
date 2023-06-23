import "./menu.css";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul className='menuList'>
        <li className='listItems' onClick={()=>setMenuOpen(false)}>
          <a className='listLink' href="#home">Home</a>
        </li>
        <li className='listItems' onClick={()=>setMenuOpen(false)}>
          <a className='listLink' href="#about">About Me</a>
        </li>
        <li className='listItems' onClick={()=>setMenuOpen(false)}>
          <a className='listLink' href="#skill">Skills</a>
        </li>
        <li className='listItems' onClick={()=>setMenuOpen(false)}>
          <a className='listLink' href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}