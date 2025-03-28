import Nav from "../components/Nav";
import UserAvatar from "../components/UserAvatar";

export default function Header({user, api_url}) {
  return (
    <header className="header flex justify-between items-center p-2 px-12 fixed w-full top-0 left-0 z-10 bg-black text-white">
      <div className="flex items-center space-x-4">
        <img src="../public/logo.svg" alt="" srcset="" className="w-12 h-12"/>
        <h1 className="text-center text-white">Bookfolio</h1>  
      </div>
      <Nav user={user} api_url={api_url}/>
      {user && user.id ? <UserAvatar user={user} /> : null}
    </header>
  );
}
