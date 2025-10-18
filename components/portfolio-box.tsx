import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    Urlpdf: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, Urlpdf } = data;

  return (
    <div
      key={id}
      className="p-4 rounded-xl shadow-md bg-transparent text-white overflow-hidden transition duration-300 hover:shadow-lg border-[3px] border-transparent"
      style={{
        borderImage: "linear-gradient(to right, #7FDBFF, #0074D9) 1",
      }}
    >
      <h3 className="mb-4 text-lg font-semibold tracking-wide">{title}</h3>

      <Image
        src={image}
        alt="Image"
        width={200}
        height={200}
        className="w-full h-auto rounded-xl object-cover"
      />

      <div className="flex justify-center mt-5">
        {Urlpdf && (
          <Link
            href={Urlpdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-slate-500 text-white font-medium rounded-lg hover:bg-slate-600 transition"
          >
            Ver Tarea
          </Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioBox;