import { useFetchUsers } from "../hooks/useFetchUsers";
import { useSearchUser } from "../hooks/useSearchUser";
import UserBar from "./ui/userBar";

const Adspace = () => {
    const { users, loading, error } = useFetchUsers();
    const { search, setSearch } = useSearchUser();

    if (loading) {
        return (
            <div>

            </div>
        );
    }

    if (error) {
        return (
            <div>

            </div>
        );
    }

    const filteredUsers = users.filter(user => 
        user.DisplayName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-black rounded-2xl h-full w-full px-4">
            <div className="flex flex-col border-b border-subline pb-4">
                <p className="text-xl font-inrisans text-center text-gray-100 pb-4 border-subline pt-6">
                    USERS {`(${filteredUsers.length})`}
                </p>
                <input 
                    onChange={(e) => setSearch(e.target.value)} 
                    placeholder="Search For User" 
                    className="text-gray-100 bg-linegrey rounded-lg px-2" 
                    type="text" 
                    value={search}
                />
            </div>
            <div>
                {filteredUsers.map(user => <UserBar key={user.UserID} profilePicture={user.ProfilePictureLink} displayName={user.DisplayName} rep={user.Rep} />)}
            </div>
        </div>
    );
}

export default Adspace;
