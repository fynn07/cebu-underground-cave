import { useEffect, useState } from "react";

export const useSearchUser = () => {
    const [search, setSearch] = useState("");

    return {search, setSearch}
}