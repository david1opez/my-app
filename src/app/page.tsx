import Rectangle from "@/components/Rectangle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      {
        Array.from({ length: 5 }).map((_, rIdx) => (
          <div key={rIdx} className={"flex flex-row gap-4"}>
            {
              Array.from({ length: 5 }).map((_, cIdx) => (
                <Rectangle
                  key={cIdx}
                  color={
                    rIdx%2 == 0 ? (cIdx%2 == 0 ? "blue" : "green") : (cIdx%2 == 0 ? "green" : "blue")
                  }
                />
              ))
            }
          </div>
        ))
      }
    </div>
  );
}
