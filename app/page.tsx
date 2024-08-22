import Image from "next/image";
import { VideoExplenation } from "./components/video-explanation";
import { Metadata } from "next";

export const metadata: Metadata = {
  authors: [
    { name: "Rio Chandra", url: "https://x.com/rio_chndr/" },
    { name: "Muhammad Fauzan", url: "https://www.facebook.com/fzn0x" },
  ],
  keywords: ["Indonesia", "darurat", "kawalkeputusanMK", "demokrasi dihabisi"],
  title: "Darurat Indonesia | #KawalKeputusanMK",
};

export default function Home() {
  return (
    <main className="relative text-white font-mono min-h-screen">
      <Image
        src="/peringatan-darurat-indonesia.png"
        alt="Peringatan darurat indonesia"
        className="fixed inset-0 object-cover z-0 w-full h-screen"
        width={1024}
        height={1024}
      >
      </Image>
      <section className="hero relative z-10 container pt-20 w-full min-h-screen flex items-center">
        <div className="w-full">
          <div className="flex justify-between w-full ">
            <div className="flex flex-col gap-3 ">
              <h1 className="text-4xl">Darurat indonesia</h1>

              <p>
                tldr; MK membuat keputusan baru mengenai syarat pelaksanaan
                pilkada, kemudian DPR dengan buru-buru mengubah peraturan!.
              </p>
              <p>
                Dapatkan pemahaman mengenai latar biru dan garuda yang
                dijelaskan dengan lengkap oleh Mata Najwa
              </p>
              <div>
                <div className="underline">#kawalkeputusanMK</div>
                <div className="underline">#DemokrasiDihabisi</div>
              </div>
            </div>
            <VideoExplenation />
          </div>
          <div>
            <p>
              Bantu Sebarkan!
            </p>
            <div className="flex items-center gap-3 *:underline">
              <a href="https://x.com">X (Twitter)</a>
              <a href="https://facebook.com">Facebook</a>
              <a href="https://instagram.com">Instagram</a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 container pt-20 flex flex-col gap-3 w-full">
        <h2 className="text-3xl">
          Gerakan &quot;Peringatan Darurat&quot; Sosial Media
        </h2>
        <p>
          Social media ramai di penuhi dengan gambar &quot;Peringatan
          Darurat&quot;, di x.com, instagram hingga tiktok. Semua kalangan
          masyrakat ikut merasakan gerakan ini.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          <Image
            src="/screenshot-x.png"
            alt="Screenshot x"
            height={800}
            width={800}
            className="object-cover border-2 border-white"
          >
          </Image>
          <a
            href="https://x.com/TrendAsia_Org/status/1826241657169436841"
            target="_blank"
          >
            <Image
              src="/screenshot-social-media.jpg"
              alt="Screenshot social media"
              height={800}
              width={800}
              className="object-cover border-2 border-white"
            >
            </Image>
          </a>
        </div>
      </section>
      <section className="relative z-10 container pt-20 flex flex-col gap-3 w-full">
        <h2 className="text-3xl">
          Aksi
        </h2>
        <div className="flex flex-col gap-3">
          <p>
            Aksi diluncurkan di berbagai daerah indoensia
          </p>

          <p>
            Oleh ismailfahmi, ia menggunakan <i>factminer</i>{" "}
            untuk mencari di mana saja terjadinya demo aksi ini, mengejutkan ini
            terjadi hampir seluruh daerah indonesia
          </p>

          <a href="https://x.com/ismailfahmi/status/1314016757242163200/photo/1">
            <figure>
              <Image
                src="/sebaran-aksi-ind.jpg"
                alt="Sebaran aksi dari @ismailfahmi"
                width={800}
                height={800}
                objectFit="cover"
                className="border-2 border-white"
              >
              </Image>
              <figcaption className="text-center">
                Sebaran aksi yang dikumpulkan oleh x.com/ismailfahmi
              </figcaption>
            </figure>
          </a>

          <p>
            Partai buruh membuat postingan di x.com untuk mengundang masyarakat
            melakukan aksi unjuk rasa.
          </p>

          <div className="grid grid-cols-2 gap-3">
            <a href="https://twitter.com/EXCOPARTAIBURUH/status/1826151875403722795?ref_src=twsrc%5Etfw">
              <Image
                src="/screenshot-x-aksiburu.png"
                alt="aksi buruh screenshot social media x"
                width={800}
                height={800}
                objectFit="cover"
              >
              </Image>
            </a>

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DOOrIxw5xOw?si=nXqLdy7_lmWUPXX-&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="border-2 border-white"
            >
            </iframe>
          </div>
        </div>
      </section>
      <section>
      </section>
      <section className="diliput-oleh relative z-10 container pt-20 flex flex-col gap-3 w-full">
        <h2 className="text-3xl">
          Diliput Oleh
        </h2>
        <ul>
          {[
            { label: "Mata Najwa(X)", url: "https://x.com/MataNajwa/" },
            { label: "Kompas", url: "https://kompas.com" },
            { label: "Dan lainnya", url: "#" },
          ].map((v, i) => (
            <li className="pl-3 border-l border-l-white" key={i}>
              <a href={v.url}>{v.label}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="update-terbaru relative z-10 container pt-20 flex flex-col gap-3 w-full">
        <h2 className="text-3xl">
          Update Terbaru
        </h2>
        <div className="flex flex-col gap-2">
          <NewsItem
            link="https://www.inews.id/news/nasional/breaking-news-dpr-batal-sahkan-ruu-pilkada-hari-ini"
            label="Breaking News: DPR Batal Sahkan RUU Pilkada Hari Ini"
            description="DPR batalkan pengesahan RUU Pilkada hari ini. Anggota yang hadir tidak quorum."
            publishDate="2024-08-22T10:12:00+07:00"
          />
          <NewsItem
            link="https://nasional.kompas.com/read/2024/08/22/16221881/kpu-tegaskan-ikut-putusan-mk-soal-uu-pilkada"
            label="KPU Tegaskan Ikut putusan MK soal UU pilkada"
            description="DPR batalkan pengesahan RUU Pilkada hari ini. Anggota yang hadir tidak quorum."
            publishDate="2024-08-22T09:22:18+00:00"
          />
        </div>
        <hr />
        <p className="italic">
          Akan di update secara berkala
        </p>
      </section>

      <section className="diliput-oleh relative z-10 container pt-20 flex flex-col gap-3 w-full">
        <h2 className="text-3xl">
          Sumber
        </h2>
        <p>
          Seluruh gambar dan teks pada website ini sudah dilengkapi link untuk
          diklik langsung
        </p>
      </section>

      <footer className="relative z-10 pt-20 p-12 flex flex-col gap-3 w-full min-h-32">
        <hr />
        <div>
          Peringatan darurat Indonesia
          <div>
            <div className="underline">#kawalkeputusanMK</div>
            <div className="underline">#Demokrasi Dihabisi</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function NewsItem(props: {
  link: string;
  label: string;
  publishDate?: string;
  description?: string;
  children?: string;
}) {
  return (
    <div className="border-l border-l-white pl-3 group">
      <a
        className="font-bold text-xl group-hover:underline"
        href={props.link}
        aria-label={props.label}
      >
        {props.label}
      </a>
      {props.description && <p>{props.description}</p>}
      <time
        dateTime={props.publishDate}
        className="text-sm italic"
      >
        {new Date(props.publishDate ?? "").toLocaleString()}
      </time>
    </div>
  );
}
