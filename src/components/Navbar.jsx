import MenuBar from './MenuBar';

const Navbar = () => {
  return (
    <div className="bg-buccaneer-200 duration-200 relative z-40">
      <div className="w-full shadow-md z-50">
        <div className="py-4">
          <div className="container flex justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-buccaneer-800 bg-buccaneer-200 font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              >
                IMEN BENMOHAMAED
              </a>
              <MenuBar variant="horizontal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
