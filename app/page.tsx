import Alert from "@/components/Alert";
import HorizontalCard from "@/components/HorizontalCard";
import Sidebar from "@/components/Sidebar";
import Table from "@/components/Table";

export default function Home() {
  return (
    <>
      <main className="relative">
        <HorizontalCard />
        <Alert />
        <Sidebar />
      </main>
      <Table />
    </>
  );
}
