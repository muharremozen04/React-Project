import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import IPhone11Beyaz from "./images/IPhone11Beyaz.jpg";
import IPhone11Mor from "./images/IPhone11Mor.jpg";
import IPhone13 from "./images/IPhone13.jpg";
import IPhone13ProMax from "./images/IPhone13ProMax.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-small is-primary">
        <div className="hero-body">
          <p className="title">Telefonlar</p>
          <p className="subtitle">Iphone</p>
        </div>
      </section>
      <div className="container">
        <div className="columns">
          <div className="column">
            <Course
              image={IPhone11Beyaz}
              title="Phone11Beyaz"
              description="Ekran Boyutu: 6.1 İnç
              Dahili Depolama: 64 GB.
              Bellek (RAM): 4 GB.
              Batarya Kapasitesi (Tipik): 3110 mAh.
              Hat Sayısı: Çift Hat.
              Hızlı Şarj:
              5G:
              4.5G Desteği:"
            />
          </div>

          <div className="column">
            <Course
              image={IPhone11Mor}
              title="IPhone11Mor"
              description="Ekran Boyutu: 6.1 İnç
              Dahili Depolama: 64 GB.
              Bellek (RAM): 4 GB.
              Batarya Kapasitesi (Tipik): 3110 mAh.
              Hat Sayısı: Çift Hat.
              Hızlı Şarj:
              5G:
              4.5G Desteği:"
            />
          </div>
          <div className="column">
            <Course
              image={IPhone13}
              title="IPhone13"
              description="4x4 MIMO özellikli 5G (sub-6 GHz)4
              4x4 MIMO ve LAA özelliklerine sahip Gigabit LTE4
              2x2 MIMO özellikli Wi‑Fi 6 (802.11ax)
              Bluetooth 5.0.
            ."
            />
          </div>
          <div className="column">
            <Course
              image={IPhone13ProMax}
              title="IPhone13ProMax"
              description="ProMotion teknolojisine sahip Super Retina XDR.
              6.1 inç (diyagonal) tam ekran OLED.
              460 ppi yoğunlukta 2532 x 1170 piksel çözünürlük.
             ."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
