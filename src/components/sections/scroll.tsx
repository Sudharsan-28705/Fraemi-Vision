"use client";

const CLOUDINARY_BASE = "https://res.cloudinary.com/dhrsh9c2v";

export default function ScrollingLogoMarquee() {
    return (
    <>
      <div className="marquee">
        <div className="marquee-track">
          <ul className="marquee-content">
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120452/IAOI_LOGO_cg9axy.png`} alt="IAOI Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120469/SPECTRUM_LOGO_walwzc.png`} alt="Spectrum Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120454/MM_KITCHEN_LOGO_mu88ow.png`} alt="MM Kitchen Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120454/IMPLANTREE_LOGO_iehm0c.png`} alt="Implantree Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120453/MAHALASHMI_LOGO_yyqlpp.png`} alt="Mahalashmi Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120458/SIP_LOGO_yecbqw.png`} alt="SIP Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120454/KUKU_LOGO_jzz20f.png`} alt="Kuku Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120454/GOAT_LOGO_k3nngx.png`} alt="GOAT Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120470/VALHALLA_LOGO_w1cmok.png`} alt="VALHALLA Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120469/THE_BARBEQUE_LOUNGE_LOGO_bkusgb.png`} alt="THE_BARBEQUE_LOUNGE Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120454/MOHAN_S_KITCHEN_LOGO_jldrni.png`} alt="MOHAN'S_KITCHEN_LOGO Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120451/FIND_BHK_LOGO_mnhv04.png`} alt="FIND_BHK Logo" className="image" />
            </li>

            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120452/IAOI_LOGO_cg9axy.png`} alt="IAOI Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120469/SPECTRUM_LOGO_walwzc.png`} alt="Spectrum Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120454/MM_KITCHEN_LOGO_mu88ow.png`} alt="MM Kitchen Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120454/IMPLANTREE_LOGO_iehm0c.png`} alt="Implantree Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120453/MAHALASHMI_LOGO_yyqlpp.png`} alt="Mahalashmi Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120458/SIP_LOGO_yecbqw.png`} alt="SIP Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120454/KUKU_LOGO_jzz20f.png`} alt="Kuku Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120454/GOAT_LOGO_k3nngx.png`} alt="GOAT Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120470/VALHALLA_LOGO_w1cmok.png`} alt="VALHALLA Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120469/THE_BARBEQUE_LOUNGE_LOGO_bkusgb.png`} alt="THE_BARBEQUE_LOUNGE Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120454/MOHAN_S_KITCHEN_LOGO_jldrni.png`} alt="MOHAN'S_KITCHEN_LOGO Logo" className="image" />
            </li>
            <li>
              <img src={`${CLOUDINARY_BASE}/image/upload/v1771120451/FIND_BHK_LOGO_mnhv04.png`} alt="FIND_BHK Logo" className="image" />
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        /* Body and general resets */
        :global(body) {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #070707;
          
        }

        div {
          gap: 50px;
        }

        li {
          gap: 10px;
        }

        .marquee {
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
          box-sizing: border-box;
          // background-color: #f4f4f9;
          margin-top: 30px;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          justify-content: center;
          width: max-content;
          animation: scroll-left 15s linear infinite;
        }

        .marquee-content {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .marquee-content li {
          padding: 0 20px;
          font-size: 1.2rem;
          color: #333;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Images styling */
        .image {
          height: 100px;
          width: 250px;
          object-fit: contain;
        }

        /* Custom Cursor Styling */
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          transition: transform 0.15s ease;
          
        }

        .rec-circle {
          width: 100%;
          height: 100%;
          border: 2px solid white;
          border-radius: 6px;
          transition: background-color 0.3s ease, transform 0.15s ease;
        }

        /* Click effect on cursor */
        .rec-circle.clicked {
          background-color: rgba(255, 255, 255, 0.3);
          transform: scale(0.85);
        }
      `}
      </style>
    </>
  );
}
