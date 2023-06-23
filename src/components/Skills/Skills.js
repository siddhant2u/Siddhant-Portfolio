import "./skills.scss";

export default function Skills() {
  const data = [
    {
      id: 1,
      title: "Blockchain/Web Development",
      img: "https://icons.veryicon.com/png/o/miscellaneous/color-work-icon/blockchain-2.png",
      desc: "I am a Blockchain Developer and a frontend developer. I have worked on several Decentralized apps.",
    },
    {
      id: 2,
      title: "Programming Skills",
      img: "https://play-lh.googleusercontent.com/o4GltADRUhPguEuuqx-KtK_PTuckc97OGdYNfR2YUZK17zFbkhEkkUk_xn6dpqHTF4c",
      desc: "I have knowledge about programming languages such as C, C++, Python, JavaScript and Solidity and have good knowledge about Data Structures and Algorithm",
      featured: true,
    },
    {
      id: 3,
      title: "Photography",
      img: "https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Dslr-Camera-icon.png",
      desc: "Photogarphy is my passion. I love to capture beautry of nature with my Virtual eye (i.e. camera).",
    },
  ];
  return (
    <div className="skill" id="skill">
      <h1>My Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
            </div>
            <div className="bottom">
              <h4>{d.title}</h4>
            </div>
            <div className="center">{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
