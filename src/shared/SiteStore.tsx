type SiteStorePropsType = {
  appStore: string;
  playStore: string;
};

function SiteStore({ appStore, playStore }: SiteStorePropsType) {
  return (
    <>
      <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
        <img
          src={appStore}
          alt="App Store"
          className="w-[160px] h-[50px] object-fill"
        />
        <img
          src={playStore}
          alt="Google Play Store"
          className="w-[160px] h-[50px] object-fill"
        />
      </div>
    </>
  );
}

export default SiteStore;
