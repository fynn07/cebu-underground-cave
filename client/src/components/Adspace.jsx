import { useFetchUsers } from "../hooks/useFetchUsers";
import UserBar from "./ui/userBar";

const Adspace = () => {
    const { users, loading, error } = useFetchUsers();

    if(loading){
        return(
            <div>

            </div>
        )
    }

    if(error){
        return(
            <div>

            </div>
        )
    }

    return(
        <div className="bg-black rounded-2xl h-full w-full px-4">
            <div className="flex flex-col border-b border-subline pb-4">
                <p className=" text-xl font-inrisans text-center text-gray-100 pb-4 border-subline pt-6">USERS {`(${users.length})`}</p>
                <input placeholder="Search For User" className="text-gray-100 bg-linegrey rounded-lg px-2" type="text" />
            </div>
            <div>
                {users.map(user => <UserBar displayName={user.DisplayName} />)}
            </div>
        </div>
    )
}

export default Adspace;