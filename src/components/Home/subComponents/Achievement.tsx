const Achievement = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 py-[5rem] px-[2rem] md:px-[5rem] lg:px-[8rem] text-[white] text-center gap-[2rem]">
      <div>
        <h1 className="font-['Unna'] text-[2.5rem]">12+</h1>
        <p className="font-['Jost']">Years of Experience</p>
      </div>

      <div>
        <h1 className="font-['Unna'] text-[2.5rem]">321 +</h1>
        <p className="font-['Jost']">Portfolio</p>
      </div>

      <div>
        <h1 className="font-['Unna'] text-[2.5rem]">20 +</h1>
        <p className="font-['Jost']">Investment</p>
      </div>

      <div>
        <h1 className="font-['Unna'] text-[2.5rem]">23</h1>
        <p className="font-['Jost']">Expert Team</p>
      </div>
    </div>
  );
};

export default Achievement;
