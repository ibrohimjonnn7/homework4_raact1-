import "./home.css";
import img2 from "@/app/assets/img/img2.png";
import img3 from "@/app/assets/img/img3.png";
import img4 from "@/app/assets/img/img4.png";
import img5 from "@/app/assets/img/img5.png";
import img6 from "@/app/assets/img/img6.png";
import img7 from "@/app/assets/img/img7.png";
import img8 from "@/app/assets/img/img8.png";
import img18 from "@/app/assets/img/img18.png";
import img19 from "@/app/assets/img/img19.png";
import img20 from "@/app/assets/img/img20.png";
import img21 from "@/app/assets/img/img21.png";
import img22 from "@/app/assets/img/img22.png";
import img23 from "@/app/assets/img/img23.png";
import img24 from "@/app/assets/img/img24.png";
import img25 from "@/app/assets/img/img25.png";
import img26 from "@/app/assets/img/img26.png";
export default function HomePage() {
  return (
    <div className="all">
      <Profile />
    </div>
  );
}

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav1">
          <p className="p1">Pompeo</p>
        </div>
        <div className="nav2">
          <p className="p2">Home</p>
          <p className="p2">About</p>
          <p className="p2">Shop</p>
          <p className="p2">Contact</p>
          <p className="p2">Cart</p>
        </div>
      </div>
    </>
  );
}

function Container1() {
  return (
    <>
      <div className="container1">
        <div className="content1">
          <p className="p3">Pompeo POttery</p>
          <h1 className="h1_1">
            Unique Porcelainbr <br /> Stone Collection
          </h1>
          <p className="p4">
            Unique & modern pottery made by our master in porcelain & stones
          </p>
          <button className="button1">Shop Collection</button>
        </div>
        <div className="content2">
          <img src={img2} alt="" />
        </div>
      </div>
    </>
  );
}

function Container2() {
  return (
    <div className="container2">
      <p className="p5">Product Categories</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="container3">
      <p className="p6">Porcelain</p>
      <img src={img3} alt="" />
      <p className="p6">Pottery</p>
    </div>
  );
}

function Container4() {
  return (
    <>
      <div className="container4">
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
    </>
  );
}

function Container5() {
  return (
    <>
      <div className="container5">
        <div className="content3">
          <p className="p7">
            Hand Grafted <br /> Pottery since 1990
          </p>
          <p className="p8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius <br /> enim in eros elementum. Duis cursus, mi quis viverra
            ornare, eros dolor <br /> interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et <br /> justo cursus id rutrum
            lorem imperdiet. Nunc ut sem vitae risus posuere.
          </p>
        </div>
        <div className="content4">
          <p className="p7">
            We Provide Premium <br /> Pottery Produts
          </p>
          <p className="p8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius <br /> enim in eros elementum. Duis cursus, mi quis viverra
            ornare, eros dolor <br /> interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et <br /> justo cursus id rutrum
            lorem imperdiet. Nunc ut sem vitae risus posuere.
          </p>
        </div>
      </div>
    </>
  );
}

function Container6() {
  return (
    <>
      <div className="container6">
        <div className="content5">
          <img src={img7} alt="" />
        </div>
        <div className="content6">
          <p className="p7">
            We Provide Premium <br /> Pottery Produts
          </p>
          <p className="p8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius <br /> enim in eros elementum. Duis cursus, mi quis viverra
            ornare, eros dolor <br /> interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et <br /> justo cursus id rutrum
            lorem imperdiet. Nunc ut sem vitae risus posuere.
          </p>
          <p className="p9">View Details</p>
        </div>
      </div>
    </>
  );
}

function Container7() {
  return (
    <>
      <div className="container6">
        <div className="content6">
          <p className="p7">
            We Provide Premium <br /> Pottery Produts
          </p>
          <p className="p8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius <br /> enim in eros elementum. Duis cursus, mi quis viverra
            ornare, eros dolor <br /> interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et <br /> justo cursus id rutrum
            lorem imperdiet. Nunc ut sem vitae risus posuere.
          </p>
          <p className="p9">View Details</p>
        </div>
        <div className="content5">
          <img src={img8} alt="" />
        </div>
      </div>
    </>
  );
}
function Container8() {
  return (
    <>
      <div className="container8">
        <p className="p10">Our online store</p>
        <p className="p11">Pottery Collection</p>
      </div>
    </>
  );
}

function Container9() {
  return (
    <>
      <div className="container9">
        <div className="boxx1">
          <img src={img21} alt="" />
          <h6>Decor Plate</h6>
          <h6>$ 65.00 USD</h6>
        </div>
        <div className="boxx1">
          <img src={img22} alt="" />
          <h6>Decor Plate</h6>
          <h6>$ 65.00 USD</h6>
        </div>
        <div className="boxx1">
          <img src={img23} alt="" />
          <h6>Decor Plate</h6>
          <h6>$ 65.00 USD</h6>
        </div>
      </div>
    </>
  );
}

function Container10() {
  return (
    <>
      <div className="container10">
        <div className="boxx2">
          <img src={img24} alt="" />
          <h6>Decor Plate</h6>
          <h6>$ 65.00 USD</h6>
        </div>
        <div className="boxx2">
          <img src={img25} alt="" />
          <h6>Decor Plate</h6>
          <h6>$ 65.00 USD</h6>
        </div>
        <div className="boxx2">
          <img src={img26} alt="" />
          <h6>Decor Plate</h6>
          <h6>$ 65.00 USD</h6>
        </div>
      </div>
    </>
  );
}

function Container11() {
  return (
    <>
      <button className="button2">View All Products</button>
    </>
  );
}

function Container12() {
  return (
    <>
      <div className="container12">
        <div className="content7">
          <p className="p3">Pompeo POttery</p>
          <h1 className="h1_1">
            Unique Porcelainbr <br /> Stone Collection
          </h1>
          <p className="p4">
            Unique & modern pottery made by our master in porcelain & stones
          </p>
          <button className="button1">Shop Collection</button>
        </div>
      </div>
    </>
  );
}

function Container13() {
  return (
    <>
      <p className="p2">Latest news</p>
      <div className="container13">
        <p className="p6">Porcelain</p>
        <img src={img3} alt="" />
        <p className="p6">Pottery</p>
      </div>
      <div className="box">
        <input type="text" className="search..." />
        <button className="button4">SUBSCRIBE</button>
      </div>
    </>
  );
}

function Container14() {
  return (
    <>
      <div className="container14">
        <p className="p12">Pompeo</p>
        <br />
        <p className="p13">
          I have always striven to fix beauty in wood, stone, <br />
          glass or pottery, that has been my creed.
        </p>
      </div>
    </>
  );
}

function Footer({ imgSrc, text1, text2, classname }) {
  return (
    <div className={classname}>
      <img src={imgSrc} alt="" />
      <h4>{text1}</h4>
      <h5>{text2}</h5>
    </div>
  );
}
function Container15() {
  return (
    <div className="Container15">
      <Footer
        imgSrc={img18}
        tex1="EMAIL"
        text2="pompeopotery@gmail.com"
        classname="a"
      />
      <Footer
        imgSrc={img19}
        tex1="EMAIL"
        text2="pompeopotery@gmail.com"
        classname="a"
      />
      <Footer
        imgSrc={img20}
        tex1="EMAIL"
        text2="pompeopotery@gmail.com"
        classname="a"
      />
    </div>
  );
}
function Profile() {
  return (
    <div className="profile">
      <Navbar />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}
