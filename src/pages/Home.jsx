import React from "react";
import "./home.scss";

export default function Home() {
  return (
    <div className="main">
      <img
        src="https://drive.google.com/uc?export=view&id=1yA8iIzflFXqUePiosxyYYByuJ7NBKx3l"
        alt="logo"
      />
      <div className="home">
        <div className="left">
          <h3>Apa itu Daya?</h3>
          <div className="picture">
            <img
              src="https://drive.google.com/uc?export=view&id=1fXAqsqz41MVw-aIptH7TUD-yH2-GiXDA"
              alt=""
            />
          </div>
          <p>
            Fokus Daya sebagai tanggung jawab sosial perusahaan adalah mendukung
            usaha Bank dalam memperkuat literasi dan inklusi keuangan melalui
            kegiatan pelatihan dan pemberdayaan dalam bidang kesehatan,
            pengetahuan, keterampilan usaha dan pembangunan infrastruktur.
          </p>
        </div>
        <div className="right">
          <h3>Aktifitas Daya</h3>
          <div className="logo">
            <img
              src="https://drive.google.com/uc?export=view&id=1u6lmdSFtlaQUcF-u_8pVkxSBZ_irIsZg"
              alt=""
            />
          </div>
          <p>
            Daya mengelompokkan aktivitasnya menjadi Daya Program Reguler dan
            Daya Program Komunitas. Model kegiatan pemberdayaan dalam Daya
            Program Reguler meliputi pelatihan dan lokakarya seputar kesehatan
            dan kewirausahaan. Sedangkan aktivitas Daya Program Komunitas
            memiliki kedalaman materi dan lebih spesifik sesuai dengan kebutuhan
            peningkatan kapasitas komunitas.
          </p>
        </div>
      </div>
    </div>
  );
}
