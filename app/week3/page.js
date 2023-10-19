import Item from "./item";
import ItemList from "./item-list";

const Week3 = () => {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
            <h1 className={`mb-3 text-2xl font-semibold`}>Shopping List</h1>
            </div>
            <div>
            <ItemList/>
            </div>
      </main>
    );
  };

  export default Week3;