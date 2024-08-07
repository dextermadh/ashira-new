import GradualSpacing from "./ui/gradual-spacing";

export async function GradualSpacingDemo() {
  return (
    <div className="">
          <GradualSpacing
      className="font-display text-center text-5xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem] fontHero"
      text="Ashira Fernando "
    />  <GradualSpacing
      className="font-display text-center text-5xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem] fontHero"
      text="Fashion Designer"
    />
    </div>
  );
}
