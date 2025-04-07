import { LangToggler } from "@/components/lang-toggler";

const Home = () => {
  return (
    <main className="flex-1 w-full max-w-5xl mx-auto py-8 px-6">
      <div className="absolute top-5 right-5">
        <LangToggler />
      </div>
    </main>
  );
};
export default Home;
