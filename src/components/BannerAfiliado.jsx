import bannerSitePessoal from '../assets/bannersitepessoal.webp';

const BannerAfiliado = () => {
  return (
    <div className="w-full">
      <a
        href="https://www.numerologiadocasal.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:opacity-95"
      >
        <img
          src={bannerSitePessoal}
          alt="Um site só de vocês dois - Presente Único"
          className="w-full h-auto block"
        />
      </a>
    </div>
  );
};

export default BannerAfiliado;
