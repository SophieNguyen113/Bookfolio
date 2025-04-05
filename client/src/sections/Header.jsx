import Nav from "../components/Nav";
import UserAvatar from "../components/UserAvatar";

export default function Header({user, api_url}) {
  return (
    <header className="header flex justify-between items-center p-2 px-12 fixed w-full top-0 left-0 z-10 bg-black text-white">
      <div className="flex items-center space-x-4">
        <img src="./logo.svg" alt="Bookfolio Logo" className="w-12 h-12" />
        <h1 className="text-white text-xl">Bookfolio</h1>
      </div>
      <Nav user={user} api_url={api_url}/>
      {user && user.id ? <UserAvatar user={user} /> : null}
    </header>
  );
}

