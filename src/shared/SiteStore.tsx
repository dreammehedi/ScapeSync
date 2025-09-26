type SiteStorePropsType = {
  appStore: string;
  playStore: string;
  isHero?: boolean;
};

function SiteStore({
  appStore,
  playStore,
  isHero = false,
}: SiteStorePropsType) {
  return (
    <>
      <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
        <img
          data-aos="slide-left"
          data-aos-duration="800"
          data-aos-delay={isHero ? 600 : 100}
          data-aos-once="true"
          src={appStore}
          alt="App Store"
          className="w-[160px] h-[50px] object-fill"
        />
        <img
          data-aos="slide-left"
          data-aos-duration="800"
          data-aos-delay={isHero ? 800 : 300}
          data-aos-once="true"
          src={playStore}
          alt="Google Play Store"
          className="w-[160px] h-[50px] object-fill"
        />
      </div>
    </>
  );
}

export default SiteStore;
