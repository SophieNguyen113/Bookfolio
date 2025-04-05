import Categories from "../components/Categories";
import GoogleBooks from "../components/GoogleBooks";
import Searchbar from "../components/Searchbar";

export default function Search({api_url}) {
  return (
    <div className="pt-5 font-bold">
      <Searchbar>Searching title...</Searchbar>
      <Categories />
      <div className="flex font-semibold">
        <GoogleBooks api_url={api_url}/>
      </div>
    </div>
  );
}
